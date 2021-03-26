import Container from "../../components/container";
import Layout from "../../components/layout";
import Meta from "../../components/meta";
import PostBody from "../../components/post-body";
import PostHeader from "../../components/post-header";
import PostTitle from "../../components/post-title";

import ErrorPage from "next/error";
import { useRouter } from "next/router";

import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";

export default function Post({ post, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout
      preview={preview}
      metaKeywords={post ? post.metaKeywords : ""}
      metaTitle={post ? post.metaTitle || post.title : ""}
      metaDescription={post ? post.metaDescription || post.excerpt : ""}
      openImage={post ? post.openImage || post.coverImage : ""}
      openTitle={post ? post.openTitle || post.title : ""}
      openGraphDescription={
        post ? post.openGraphDescription || post.excerpt : ""
      }
      twitterTitle={post ? post.twitterTitle || post.title : ""}
      twitterImage={post ? post.twitterImage || post.coverImage : ""}
      twitterDescription={post ? post.twitterDescription || post.excerpt : ""}
    >
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-24 md:mb-32">
              <PostHeader
                title={post && post.title}
                coverImage={post && post.coverImage}
                excerpt={post && post.excerpt}
                date={post && post.date}
              />
              <PostBody
                content={post && post.content}
                author={post && post.author}
              />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
}
