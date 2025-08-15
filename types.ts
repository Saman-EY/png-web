export interface tableT {
  isIcon: boolean;

  header: {
    title1: string;
    title2: string;
    title3: string;
    title4: string;
  };

  data: {
    content1: string;
    content2: string;
    content3: string;
    content4: string;
  }[];
}

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
