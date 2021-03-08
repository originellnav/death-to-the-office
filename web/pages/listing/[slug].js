import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import ListingBody from "../../components/listing-body";
import ListingHeader from "../../components/listing-header";
import Layout from "../../components/layout";
import {
  getAllListingsWithSlug,
  getListingAndMorelistings,
} from "../../lib/api";
import ListingTitle from "../../components/listing-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";

export default function Listing({ listing, preview }) {
  const router = useRouter();
  if (!router.isFallback && !listing?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <ListingTitle>Loading…</ListingTitle>
        ) : (
          <>
            <article className="mb-24 md:mb-32">
              <Head>
                <title>
                  {listing.title} | Escape the city. Work from anywhere.
                  {CMS_NAME}
                </title>
                {/* <meta property="og:image" content={listing.ogImage.url} /> */}
              </Head>
              <ListingHeader
                title={listing.title}
                coverImage={listing.coverImage}
                excerpt={listing.excerpt}
                categories={listing.categories}
              />
              <ListingBody content={listing.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getListingAndMorelistings(params.slug, preview);
  return {
    props: {
      preview,
      listing: data?.listing || null,
      moreListings: data?.moreListings || null,
    },
  };
}

export async function getStaticPaths() {
  const allListings = await getAllListingsWithSlug();
  return {
    paths:
      allListings?.map((listing) => ({
        params: {
          slug: listing.slug,
        },
      })) || [],
    fallback: true,
  };
}
