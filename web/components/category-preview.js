import Link from "next/link";

export default function CategoryPreview({ title, slug }) {
  const slugLink = slug.toLowerCase().replace(/\s/g, "-");

  return (
    <div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/category/${slugLink}`} href="/category/[slugLink]">
          <a aria-label={title} className="hover:underline">
            {title}
          </a>
        </Link>
      </h3>
    </div>
  );
}
