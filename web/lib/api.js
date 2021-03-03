import client, { previewClient } from "./sanity";

// Get all Posts

const getUniquePosts = (posts) => {
  const slugs = new Set();
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false;
    } else {
      slugs.add(post.slug);
      return true;
    }
  });
};

const postFields = `
  name,
  title,
  date,
  excerpt,
  'slug': slug.current,
  'coverImage': coverImage.asset->url,
  'author': author->{name, 'picture': picture.asset->url},
`;

const getClientPosts = (preview) => (preview ? previewClient : client);

export async function getPreviewPostBySlug(slug) {
  const data = await getClientPosts(true).fetch(
    `*[_type == "post" && slug.current == $slug] | order(date desc){
      ${postFields}
      content
    }`,
    { slug }
  );
  return data[0];
}

export async function getAllPostsForHome(preview) {
  const results = await getClientPosts(preview)
    .fetch(`*[_type == "post"] | order(date desc, _updatedAt desc){
      ${postFields}
    }`);
  return getUniquePosts(results);
}

export async function getAllPostsWithSlug() {
  const data = await client.fetch(`*[_type == "post"]{ 'slug': slug.current }`);
  return data;
}

export async function getPostAndMorePosts(slug, preview) {
  const curClient = getClientPosts(preview);
  const [post, morePosts] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        content,
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc){
        ${postFields}
        content,
      }[0...2]`,
      { slug }
    ),
  ]);
  return { post, morePosts: getUniquePosts(morePosts) };
}

// Get all Listings

const getUniqueListings = (listings) => {
  const slugs = new Set();
  return listings.filter((listing) => {
    if (slugs.has(listing.slug)) {
      return false;
    } else {
      slugs.add(listing.slug);
      return true;
    }
  });
};

const listingFields = `
  name,
  title,
  excerpt,
  "categories": categories[].category->name,
  'slug': slug.current,
  'coverImage': coverImage.asset->url,
`;

const getClientListings = (preview) => (preview ? previewClient : client);

export async function getPreviewlistingBySlug(slug) {
  const data = await getClientListings(true).fetch(
    `*[_type == "listing" && slug.current == $slug] | order(title asc){
      ${listingFields}
      content
    }`,
    { slug }
  );
  return data[0];
}

export async function getAllListingsForHome(preview) {
  const results = await getClientListings(preview)
    .fetch(`*[_type == "listing"] | order(title asc){
      ${listingFields}
    }`);
  return getUniqueListings(results);
}

export async function getAllListingsWithSlug() {
  const data = await client.fetch(
    `*[_type == "listing"]{ 'slug': slug.current }`
  );
  return data;
}

export async function getAllListingsWithCategorySlug() {
  const data = await client.fetch(
    `*[_type == "category"]{ 'slug': slug.current }`
  );
  return data;
}

export async function getAllListingsWithCategory(preview) {
  const results = await getClientListings(preview)
    .fetch(`*[_type == "listing"] | order(title asc){
      ${listingFields}
    }`);
  return getUniqueListings(results);
}

export async function getAllCategories() {
  const data = await client.fetch(
    `*[_type == "category"]{ 'name': name, 'slug' : slug.current }`
  );
  return data;
}

export async function getListingAndMorelistings(slug, preview) {
  const curClient = getClientListings(preview);
  const [listing, morelistings] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "listing" && slug.current == $slug] | order(title asc) {
        ${listingFields}
        content,
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "listing" && slug.current != $slug] | order(title asc){
        ${listingFields}
        content,
      }[0...2]`,
      { slug }
    ),
  ]);
  return { listing, morelistings: getUniqueListings(morelistings) };
}
