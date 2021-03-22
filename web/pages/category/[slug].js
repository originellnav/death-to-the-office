import CategoriesNav from "../../components/categories";
import Intro from "../../components/intro";
import Layout from "../../components/layout";
import MoreListings from "../../components/more-listings";

import Head from "next/head";
import { useRouter } from "next/router";

import {
  getAllCategories,
  getAllListingsWithCategory,
  getAllListingsWithCategorySlug,
} from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";

export default function Categories({
  allListingsWithCategory,
  allCategories,
  preview,
}) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const currentSlug = router.query.slug;

  const formattedSlug = currentSlug
    .split("-")
    .join(" ")
    .replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });

  const currentSlugName =
    allCategories && allCategories.find((c) => c.slug === currentSlug);

  const filteredItems =
    allListingsWithCategory &&
    allListingsWithCategory.filter(
      (i) => i.categories && i.categories.includes(currentSlugName.name)
    );

  return (
    <Layout preview={preview}>
      <Head>
        <title>
          {formattedSlug} - {CMS_NAME}
        </title>
      </Head>
      <Intro
        subheading={`Showing ${filteredItems.length} locations tagged`}
        category={formattedSlug}
        center={true}
      />
      <CategoriesNav categories={allCategories} />
      {filteredItems.length > 0 && <MoreListings listings={filteredItems} />}
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const allListingsWithCategory = await getAllListingsWithCategory(preview);
  const allCategories = await getAllCategories(preview);
  return {
    props: { allListingsWithCategory, allCategories, preview },
  };
}

export async function getStaticPaths() {
  const allCategories = await getAllListingsWithCategorySlug();
  return {
    paths:
      allCategories?.map((category) => ({
        params: {
          slug: category.slug,
        },
      })) || [],
    fallback: true,
  };
}
