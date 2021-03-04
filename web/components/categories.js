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
                className="transition duration-200 ease text-sm inline-flex bg-black bg-opacity-5 hover:bg-primary hover:text-white rounded-full text-black text-opacity-50 font-medium px-4 py-1"
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
