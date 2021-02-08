import ListingPreview from "./listing-preview";

export default function MoreListings({ listings }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Listings
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {listings.map((listing) => (
          <ListingPreview
            key={listing.slug}
            title={listing.title}
            coverImage={listing.coverImage}
            slug={listing.slug}
            excerpt={listing.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
