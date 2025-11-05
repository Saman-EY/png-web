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

export interface ITagData {
  id: number;
  name: string;
}

export interface ProductTagPivot {
  product_id: string;
  tag_id: string;
}

export interface ProductTag {
  id: number;
  name: string;
  pivot: ProductTagPivot;
}

export interface IImageData {
  id: number;
  title: string;
  description: string;
  original_file_name: string;
  height: string;
  width: string;
  file_size: string;
  resolution: string;
  display_url: string;
  download_url: string;
  views_count: string;
  downloads_count: string;
  tags: ProductTag[];
}

export interface IMostDownloadStat {
  id: number;
  title: string;
  display_url: string;
  views_count: string;
  downloads_count: string;
  created_at: string; // ISO timestamp (e.g., "2025-11-04T15:22:06.000000Z")
}

interface ProductsPageProps {
  searchParams: {
    search?: string;
    tag?: string;
    per_page?: string;
    locale?: string;
    page?: string;
  };
}

export type IMeta = {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  search_query: string | null;
  tag_filter: string | null;
  locale: string;
  sort_by: string;
  sort_order: "asc" | "desc";
};
