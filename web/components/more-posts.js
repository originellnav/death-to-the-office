import PostPreview from "./post-preview";

export default function MorePosts({ posts }) {
  return (
    <section>
      <div className="grid grid-cols-3 gap-12 mb-32">
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
