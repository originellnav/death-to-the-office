import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time
      dateTime={dateString}
      className="text-sm text-black text-opacity-50 font-medium uppercase"
    >
      {format(date, "LLLL	d, yyyy")}
    </time>
  );
}
