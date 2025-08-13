export interface PngItemT {
  href: string;
  title: string;
  height: string;
  width: string;
  "data-original": string;
}

export interface PngItemDetailT {
  href: string;
  title: string;
  Description: string;
  Contributor: string;
  Resolution: string; // e.g. "1916*3512"
  Size: string; // e.g. "1.80 MB"
  tag: string; // comma-separated tags
}
