import Container from "../../components/container";
import Layout from "../../components/layout";
import ListingBody from "../../components/listing-body";
import ListingHeader from "../../components/listing-header";
import ListingTitle from "../../components/listing-title";

import Head from "next/head";
import ErrorPage from "next/error";
import { useRouter } from "next/router";

import {
  getAllListingsWithSlug,
  getListingAndMorelistings,
} from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";

export default function Listing({ listing, preview }) {
  const router = useRouter();
  if (!router.isFallback && !listing?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout
      preview={preview}
      metaKeywords={listing.metaKeywords}
      metaTitle={
        listing && listing.metaTitle ? listing.metaTitle : listing.title
      }
      metaDescription={listing.metaDescription}
      openImage={
        listing && listing.openImage ? listing.openImage : listing.coverImage
      }
      openTitle={
        listing && listing.openTitle ? listing.openTitle : listing.title
      }
      openGraphDescription={listing.openGraphDescription}
      twitterTitle={
        listing && listing.twitterTitle ? listing.twitterTitle : listing.title
      }
      twitterImage={
        listing && listing.twitterImage
          ? listing.twitterImage
          : listing.coverImage
      }
      twitterDescription={listing.twitterDescription}
    >
      <Container>
        {router.isFallback ? (
          <ListingTitle>Loading…</ListingTitle>
        ) : (
          <>
            <article className="mb-24 md:mb-32">
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
