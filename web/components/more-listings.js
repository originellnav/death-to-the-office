import ListingPreview from "./listing-preview";

export default function MoreListings({ listings }) {
  return (
    <section className="overflow-hidden">
      <div
        id="listings"
        className="flex flex-wrap sm:py-16 md:py-32 overflow-hidden -mx-8"
      >
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
    </section>
  );
}
