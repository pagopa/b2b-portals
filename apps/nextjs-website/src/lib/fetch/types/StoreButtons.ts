import * as t from 'io-ts';

export const StoreButtonsCodec = t.strict({
  hrefGoogle: t.union([t.string, t.null]),
  hrefApple: t.union([t.string, t.null]),
});
