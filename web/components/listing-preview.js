import CoverImageListing from "./cover-image-listing";
import Link from "next/link";

export default function ListingPreview({ title, coverImage, slug }) {
  return (
    <div>
      <div className="mb-5">
        <CoverImageListing slug={slug} title={title} url={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/listings/${slug}`} href="/listings/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
    </div>
  );
}
