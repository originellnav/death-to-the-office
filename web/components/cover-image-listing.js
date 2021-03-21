import { imageBuilder } from "../lib/sanity";

export default function CoverImageListing({ title, url, slug }) {
  const image = (
    <img
      width={1280}
      height={640}
      alt={`Cover Image for ${title}`}
      src={imageBuilder.image(url).height(640).width(1280).url()}
    />
  );

  return <div className="sm:mx-0">{slug ? { image } : image}</div>;
}
