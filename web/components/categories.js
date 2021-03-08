import Container from "../components/container";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Categories({ categories }) {
  const router = useRouter();

  const currentSlug = router.query.slug;

  return (
    <section>
      <Container>
        <div className="flex flex-wrap justify-center">
          <Link href="/">
            <a
              style={{ margin: "2px" }}
              className={`transition duration-200 ease text-sm inline-flex hover:bg-primary hover:text-white rounded-full font-medium px-4 py-1 ${
                currentSlug === undefined
                  ? "bg-primary text-white "
                  : "bg-black bg-opacity-5 text-black text-opacity-50 "
              }`}
            >
              All
            </a>
          </Link>
          {categories.map((category, index) => (
            <Link
              key={index}
              as={`/category/${category.slug}`}
              href="/category/[category.slug]"
            >
              <a
                style={{ margin: "2px" }}
                className={`transition duration-200 ease text-sm inline-flex hover:bg-primary hover:text-white rounded-full font-medium px-4 py-1 ${
                  currentSlug === category.slug
                    ? "bg-primary text-white "
                    : "bg-black bg-opacity-5 text-black text-opacity-50 "
                }`}
              >
                {category.name}
              </a>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
