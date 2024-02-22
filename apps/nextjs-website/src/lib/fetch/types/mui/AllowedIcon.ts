import * as t from 'io-ts';
import { MUIButtonIconCodec } from './ButtonIcon';

const AllowedMUIIconCodec = MUIButtonIconCodec;
export type AllowedMUIIcon = t.TypeOf<typeof AllowedMUIIconCodec>;
