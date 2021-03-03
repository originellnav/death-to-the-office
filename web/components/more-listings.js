import Container from "./container";
import ListingPreview from "./listing-preview";

export default function MoreListings({ listings }) {
  return (
    <section className="overflow-x-hidden py-16">
      <Container>
        <div id="listings" className="flex flex-wrap -mx-8">
          {listings.map((listing) => (
            <ListingPreview
              key={listing.slug}
              title={listing.title}
              coverImage={listing.coverImage}
              slug={listing.slug}
              excerpt={listing.excerpt}
              categories={listing.categories}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
