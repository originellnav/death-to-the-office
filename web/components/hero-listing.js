import CoverImageListing from "./cover-image-listing";

import Link from "next/link";

export default function HeroListing({ title, coverImage, excerpt, slug }) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImageListing slug={slug} title={title} url={coverImage} />
      </div>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/listing/${slug}`} href="/listing/[slug]">
              <a aria-label={title} className="hover:underline">
                {title}
              </a>
            </Link>
          </h3>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </section>
  );
}
