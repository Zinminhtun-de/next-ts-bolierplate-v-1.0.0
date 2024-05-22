export type Params = {
  [key: string]: string | string[] | undefined;
};

export type SearchParams = {
  t: string;
  lang: string;
  terms: string;
};

export type PageParams = {
  params: Params;
  searchParams: SearchParams;
};
