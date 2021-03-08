import Container from "../components/container";

export default function Intro({ heading, text, category, center }) {
  return (
    <section className="py-6 mb-6 bg-grey">
      <Container>
        {heading && (
          <h2 className={`text-lg ${center && "text-center"}`}>
            <span className="font-bold">{heading}</span>

            <span
              className="font-serif text-xl pl-2 uppercase"
              style={{ paddingTop: "4px" }}
            >
              {category}
            </span>
          </h2>
        )}
        {text && (
          <p
            className={`font-medium text-black text-opacity-50 mt-2 leading-snug ${
              center && "text-center"
            }`}
          >
            {text}
          </p>
        )}
      </Container>
    </section>
  );
}
