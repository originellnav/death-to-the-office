import Categories from "../components/categories";
import Intro from "../components/intro";
import MoreListings from "../components/more-listings";
import Layout from "../components/layout";

import { getAllCategories, getAllListingsForHome } from "../lib/api";
import { CMS_NAME } from "../lib/constants";

import Head from "next/head";

export default function Index({ allListings, allCategories, preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Locations - {CMS_NAME}</title>
        </Head>
        <Intro
          heading="Escape the city. Work from anywhere."
          text="Select your top values to find rural and coastal communities to live
          and invest in."
        />
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
