import Link from "next/link";

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 text-center">
      <Link href="/">
        <a className="mx-6 hover:underline">Listings</a>
      </Link>
      <Link href="/blog">
        <a className="mx-6 hover:underline">Blog</a>
      </Link>
      <Link href="/about">
        <a className="mx-6 hover:underline">About</a>
      </Link>
    </h2>
  );
}
