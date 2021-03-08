import CoverImageListing from "./cover-image-listing";
import ListingTitle from "./listing-title";
import ListingExcerpt from "./listing-excerpt";
import Link from "next/link";

export default function ListingHeader({
  title,
  categories,
  excerpt,
  coverImage,
}) {
  return (
    <>
      <div className="mb-8 md:mb-16 mx-0 relative">
        <CoverImageListing title={title} url={coverImage} />
        {console.log(categories)}
        <div className="absolute left-0 bottom-0">
          <div className="bg-white m-3 md:m-4 p-4 md:p-5 rounded">
            {title && <ListingTitle>{title}</ListingTitle>}
            {excerpt && <ListingExcerpt>{excerpt}</ListingExcerpt>}
            <ul className="flex flex-wrap mt-2 md:mt-4 text-xs md:text-sm font-medium text-black text-opacity-50">
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
