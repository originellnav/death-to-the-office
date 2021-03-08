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
    <div className="col-span-3 md:col-span-1">
      <div className="mb-4">
        <CoverImagePost slug={slug} title={title} url={coverImage} />
      </div>
      {title && (
        <h2 className="text-lg md:text-xl mb-1 font-heading font-bold uppercase leading-tight">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a>{title}</a>
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
