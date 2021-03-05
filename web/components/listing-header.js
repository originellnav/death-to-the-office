import CoverImageListing from "./cover-image-listing";
import ListingTitle from "./listing-title";
import ListingExcerpt from "./listing-excerpt";

export default function ListingHeader({ title, date, excerpt, coverImage }) {
  return (
    <>
      <div className="mb-8 md:mb-16 mx-0 relative">
        <CoverImageListing title={title} url={coverImage} />
        <div className="absolute left-0 bottom-0">
          <div className="bg-white sm:m-4 p-5 sm:rounded">
            {title && <ListingTitle>{title}</ListingTitle>}
            {date}
            {excerpt && <ListingExcerpt>{excerpt}</ListingExcerpt>}
          </div>
        </div>
      </div>
    </>
  );
}
