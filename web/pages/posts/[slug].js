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
      metaKeywords={post.metaKeywords}
      metaTitle={post && post.metaTitle ? post.metaTitle : post.title}
      metaDescription={post.metaDescription}
      openImage={post && post.openImage ? post.openImage : post.coverImage}
      openTitle={post && post.openTitle ? post.openTitle : post.title}
      openGraphDescription={post.openGraphDescription}
      twitterTitle={post && post.twitterTitle ? post.twitterTitle : post.title}
      twitterImage={
        post && post.twitterImage ? post.twitterImage : post.coverImage
      }
      twitterDescription={post.twitterDescription}
    >
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-24 md:mb-32">
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                excerpt={post.excerpt}
                date={post.date}
              />
              <PostBody content={post.content} author={post.author} />
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
