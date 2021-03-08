import { imageBuilder } from "../lib/sanity";

export default function CoverImageListing({ title, url, slug }) {
  const image = (
    <img
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      src={imageBuilder.image(url).height(1000).width(2000).url()}
    />
  );

  return <div className="sm:mx-0">{slug ? { image } : image}</div>;
}
