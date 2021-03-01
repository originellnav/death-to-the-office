import cn from "classnames";
import CoverImageListing from "./cover-image-listing";
import Link from "next/link";

export default function ListingPreview({
  title,
  coverImage,
  slug,
  excerpt,
  categories,
}) {
  return (
    <div
      id="listing"
      className="w-full sm:w-2/4 md:w-1/4 mb-12 transform transition duration-300 ease hover:-translate-y-3"
    >
      <Link as={`/listings/${slug}`} href="/listings/[slug]" className="mb-5">
        <CoverImageListing slug={slug} title={title} url={coverImage} />
      </Link>
      <h3 className="text-lg md:text-xl mt-3 mb-1 font-heading font-bold uppercase leading-tight">
        <Link as={`/listings/${slug}`} href="/listings/[slug]">
          <a>{title}</a>
        </Link>
      </h3>
      <p className="m-0 text-lg font-serif italic leading-tight">
        <Link as={`/listings/${slug}`} href="/listings/[slug]">
          {excerpt}
        </Link>
      </p>
      {/* {categories.map((category, index) => (
        <span key={index}>{category}</span>
      ))} */}
    </div>
  );
}
