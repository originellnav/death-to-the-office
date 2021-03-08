import cn from "classnames";
import Link from "next/link";
import { imageBuilder } from "../lib/sanity";

export default function CoverImageListing({ title, url, slug }) {
  const image = (
    <img
      width={720}
      height={438}
      alt={`Cover Image for ${title}`}
      src={imageBuilder.image(url).height(438).width(720).url()}
    />
  );

  return <div className="sm:mx-0">{slug ? { image } : image}</div>;
}
