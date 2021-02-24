import ListingPreview from "./listing-preview";

export default function MoreListings({ listings }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Listings
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-32">
        {listings.map((listing) => (
          <div>
            <ListingPreview
              key={listing.slug}
              title={listing.title}
              coverImage={listing.coverImage}
              slug={listing.slug}
              excerpt={listing.excerpt}
              categories={listing.categories}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
