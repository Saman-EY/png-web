export function getSlug(href: string): string {
  return (
    href
      .split(/[?#]/)[0] // remove query/hash
      .replace(/\/$/, "") // remove trailing slash
      .split("/")
      .filter(Boolean)
      .pop() || ""
  );
}
