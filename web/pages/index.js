import Container from "../components/container";
import MoreListings from "../components/more-listings";
import HeroListing from "../components/hero-listing";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllListingsForHome } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import CategoryPreview from "../components/category-preview";

export default function Index({ allListings, preview }) {
  const heroListing = allListings[0];
  // const moreListings = allListings.slice(1);
  const moreListings = allListings;

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          {/* <Intro /> */}
          {moreListings.length > 0 && <MoreListings listings={moreListings} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allListings = await getAllListingsForHome(preview);
  return {
    props: { allListings, preview },
  };
}
