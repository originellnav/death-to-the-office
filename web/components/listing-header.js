import CoverImageListing from "./cover-image-listing";
import ListingTitle from "./listing-title";

export default function ListingHeader({ title, coverImage }) {
  return (
    <>
      <ListingTitle>{title}</ListingTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImageListing title={title} url={coverImage} />
      </div>
    </>
  );
}
