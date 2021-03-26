import Categories from "../components/categories";
import Intro from "../components/intro";
import MoreListings from "../components/more-listings";
import Layout from "../components/layout";
import {
  getAboutContent,
  getAllCategories,
  getAllListingsForHome,
} from "../lib/api";

export default function Index({
  allListings,
  allAbout,
  allCategories,
  preview,
}) {
  return (
    <>
      <Layout preview={preview}>
        <Intro
          heading={allAbout[0].homepageHeader}
          text={allAbout[0].homepageSubheader}
        />
        <Categories categories={allCategories} />
        {allListings.length > 0 && <MoreListings listings={allListings} />}
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allListings = await getAllListingsForHome(preview);
  const allAbout = await getAboutContent(preview);
  const allCategories = await getAllCategories(preview);

  return {
    props: { allAbout, allListings, allCategories, preview },
  };
}
