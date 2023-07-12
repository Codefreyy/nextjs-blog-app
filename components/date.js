import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  // parseISO parses a date string in ISO format(e.g. "2022-01-01") and returns a JS Date Object
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
