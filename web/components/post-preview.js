import Date from "../components/date";
import Link from "next/link";

import { imageBuilder } from "../lib/sanity";

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
          <img
            width={320}
            height={190}
            alt={`Cover Image for ${title}`}
            src={imageBuilder.image(coverImage).height(190).width(320).url()}
          />
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
