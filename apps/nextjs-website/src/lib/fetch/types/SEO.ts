import * as t from 'io-ts';

export const PageSEOCodec = t.strict({
  metaTitle: t.string,
  metaDescription: t.string,
  keywords: t.union([t.string, t.null]),
  canonicalURL: t.union([t.string, t.null]),
  ogTitle: t.union([t.string, t.null]),
  ogDescription: t.union([t.string, t.null]),
  structuredData: t.union([t.UnknownRecord, t.null]), // Currently implementing structuredData as any object to avoid being too restrictive before feedback or real-world use
  hideFromSearchEngines: t.union([t.boolean, t.null]),
});

export type PageSEO = t.TypeOf<typeof PageSEOCodec>;
