import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImagePost from "../components/cover-image-post";
import Link from "next/link";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section className="grid grid-cols-2 mb-8 md:mb-12">
      <div className="col-span-2 md:col-span-1">
        <CoverImagePost slug={slug} title={title} url={coverImage} />
      </div>
      <div className="col-span-2 md:col-span-1 flex flex-col justify-center md:px-12">
        <h3 className="text-lg md:text-3xl mt-4 md:mt-0 mb-1 font-heading font-bold uppercase leading-tight">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a>{title}</a>
          </Link>
        </h3>
        {excerpt && (
          <p className="m-0 text-lg font-serif italic leading-tight mb-3">
            {excerpt}
          </p>
        )}
        <div className="mb-4 md:mb-0 text-xl">
          <Date dateString={date} />
        </div>
      </div>
    </section>
  );
}
