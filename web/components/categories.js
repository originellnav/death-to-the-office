import Container from "../components/container";
import Link from "next/link";

export default function Categories({ categories }) {
  return (
    <section>
      <Container>
        <div className="flex flex-wrap justify-center">
          {categories.map((category, index) => (
            <Link
              key={index}
              as={`/category/${category.slug}`}
              href="/category/[category.slug]"
            >
              <a
                style={{ margin: "2px" }}
                className="text-sm inline-flex bg-black rounded-full text-white px-4 py-1"
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
