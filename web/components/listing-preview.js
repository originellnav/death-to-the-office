import { imageBuilder } from "../lib/sanity";

import Link from "next/link";

export default function ListingPreview({ title, coverImage, slug, excerpt }) {
  return (
    <div
      id="listing"
      className="w-full sm:w-2/4 md:w-1/4 mb-12 transform transition duration-200 ease-in-out hover:-translate-y-2"
    >
      <Link as={`/listing/${slug}`} href="/listing/[slug]" className="mb-5">
        <a aria-label={title}>
          {coverImage && (
            <img
              width={720}
              height={400}
              alt={`Cover Image for ${title}`}
              src={imageBuilder.image(coverImage).height(400).width(720).url()}
            />
          )}
          {title && (
            <h3 className="text-lg md:text-xl mt-3 mb-1 font-heading font-bold uppercase leading-tight">
              {title}
            </h3>
          )}
          {excerpt && (
            <p className="m-0 text-lg font-serif italic leading-tight">
              {excerpt}
            </p>
          )}
        </a>
      </Link>
    </div>
  );
}
