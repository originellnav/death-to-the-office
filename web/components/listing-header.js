import CoverImageListing from "./cover-image-listing";
import ListingExcerpt from "./listing-excerpt";
import ListingTitle from "./listing-title";

export default function ListingHeader({
  title,
  categories,
  excerpt,
  coverImage,
}) {
  return (
    <>
      <div className="mb-8 md:mb-16 mx-0 relative">
        {coverImage && <CoverImageListing title={title} url={coverImage} />}
        <div className="absolute left-0 bottom-0">
          <div className="bg-white m-3 md:m-4 p-4 md:p-5 rounded">
            {title && <ListingTitle>{title}</ListingTitle>}
            {excerpt && <ListingExcerpt>{excerpt}</ListingExcerpt>}
            <ul className="flex flex-wrap text-xs md:text-sm font-body font-medium text-black text-opacity-50 uppercase">
              {categories.map((category, index) => (
                <li key={index}>
                  {category}
                  {index != categories.length - 1 ? ", " : ""}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
