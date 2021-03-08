export default function Avatar({ name, picture }) {
  return (
    <div className="mt-16 flex items-center justify-center">
      {picture && (
        <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
      )}
      {name && <div className="text-md md:text-lg font-bold">{name}</div>}
    </div>
  );
}
