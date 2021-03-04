import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import ListingBody from "../../components/listing-body";
import MoreListings from "../../components/more-listings";
import Header from "../../components/header";
import Intro from "../../components/intro";
import CategoriesNav from "../../components/categories";
import ListingHeader from "../../components/listing-header";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import {
  getAllCategories,
  getAllListingsWithCategory,
  getAllListingsWithCategorySlug,
} from "../../lib/api";
import Head from "next/head";
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

  const currentSlugName = allCategories.find((c) => c.slug === currentSlug);

  const filteredItems = allListingsWithCategory.filter(
    (i) => i.categories && i.categories.includes(currentSlugName.name)
  );

  return (
    <Layout preview={preview}>
      <Head>
        <title>{CMS_NAME} - Escape the city. Work from anywhere.</title>
      </Head>
      <Intro
        heading={`Showing ${filteredItems.length} locations tagged ${formattedSlug}`}
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
