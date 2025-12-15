import * as t from 'io-ts';

const PageRelationCodec = t.strict({
  slug: t.string,
});

export default PageRelationCodec;
