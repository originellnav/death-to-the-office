import Container from "../components/container";
import Layout from "../components/layout";
import HeroPost from "../components/hero-post";
import MorePosts from "../components/more-posts";

import { getAllPostsForHome } from "../lib/api";
import { CMS_NAME } from "../lib/constants";

import Head from "next/head";

export default function Index({ allPosts, preview }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      <Layout
        preview={preview}
        metaTitle="Stories"
        twitterTitle="Stories"
        openTitle="Stories"
      >
        <Container>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MorePosts posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
  };
}
