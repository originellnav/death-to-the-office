import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import ListingBody from "../../components/listing-body";
import MoreListings from "../../components/more-listings";
import Header from "../../components/header";
import ListingHeader from "../../components/listing-header";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import {
  getAllListingsWithSlug,
  getListingAndMorelistings,
} from "../../lib/api";
import ListingTitle from "../../components/listing-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";

export default function Listing({ listing, moreListings, preview }) {
  const router = useRouter();
  if (!router.isFallback && !listing?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        {/* <Header /> */}
        {router.isFallback ? (
          <ListingTitle>Loading…</ListingTitle>
        ) : (
          <>
            <article className="mb-48">
              <Head>
                <title>
                  {listing.title} | Escape the city. Work from anywhere.{" "}
                  {CMS_NAME}
                </title>
                {/* <meta property="og:image" content={listing.ogImage.url} /> */}
              </Head>
              <ListingHeader
                title={listing.title}
                coverImage={listing.coverImage}
                date={listing.date}
                author={listing.author}
                excerpt={listing.excerpt}
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
