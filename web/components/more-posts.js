import PostPreview from "./post-preview";

export default function MorePosts({ posts }) {
  return (
    <section>
      <div id="posts" className="flex flex-wrap -mx-8 mb-16">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
