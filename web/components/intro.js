import Container from "../components/container";

export default function Intro({ heading, subheading, text, category, center }) {
  return (
    <section className="py-6 mb-6 text-center bg-grey">
      <Container>
        {heading && (
          <h2
            className={`font-body text-4xl md:text-5xl leading-10 mb-2 ${
              center && "text-center"
            }`}
          >
            <span className="font-bold">{heading}</span>
          </h2>
        )}
        {subheading && (
          <h2 className={`font-body text-lg ${center && "text-center"}`}>
            <span className="font-bold">{subheading}</span>

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
            className={`font-body font-medium text-black text-opacity-50 mt-2 leading-snug ${
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
