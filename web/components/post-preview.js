import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImagePost from "./cover-image-post";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <div
      id="post"
      className="w-full md:w-1/3 mb-12 transform transition duration-200 ease-in-out hover:-translate-y-2"
    >
      {coverImage && (
        <div className="mb-4">
          <CoverImagePost slug={slug} title={title} url={coverImage} />
        </div>
      )}
      {title && (
        <h2 className="text-lg md:text-xl mb-1 font-heading font-bold uppercase leading-tight">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a aria-label={title}>{title}</a>
          </Link>
        </h2>
      )}
      {excerpt && (
        <p className="m-0 text-lg font-serif italic leading-tight mb-3">
          {excerpt}
        </p>
      )}
      {date && (
        <div>
          <Date dateString={date} />
        </div>
      )}
    </div>
  );
}
