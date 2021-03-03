import Container from "../components/container";
import MoreListings from "../components/more-listings";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Categories from "../components/categories";
import { getAllCategories, getAllListingsForHome } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";

export default function Index({ allListings, allCategories, preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Intro />
        <Categories categories={allCategories} />
        {allListings.length > 0 && <MoreListings listings={allListings} />}
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allListings = await getAllListingsForHome(preview);
  const allCategories = await getAllCategories(preview);

  return {
    props: { allListings, allCategories, preview },
  };
}
