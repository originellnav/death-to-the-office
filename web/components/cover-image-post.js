import { imageBuilder } from "../lib/sanity";

import Link from "next/link";

export default function CoverImagePost({ title, url, slug }) {
  const image = (
    <img
      width={1280}
      height={640}
      alt={`Cover Image for ${title}`}
      src={imageBuilder.image(url).height(640).width(1280).url()}
    />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
