import Container from "../components/container";

export default function Intro({ heading, text, center }) {
  return (
    <section className="py-6 mb-6 bg-grey">
      <Container>
        {heading && (
          <h2 className={`text-lg font-bold ${center && "text-center"}`}>
            {heading}
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
