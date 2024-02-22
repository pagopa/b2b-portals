import * as t from 'io-ts';
import { MUIButtonIconCodec } from './ButtonIcon';
import { FeatureItemMUIIconCodec } from './FeatureItemIcon';
import { HowToStepMUIIconCodec } from './HowToStepIcon';
import { MUISocialIconCodec } from './SocialIcon';

const AllowedMUIIconCodec = t.union([
  MUIButtonIconCodec,
  FeatureItemMUIIconCodec,
  HowToStepMUIIconCodec,
  MUISocialIconCodec,
]);
export type AllowedMUIIcon = t.TypeOf<typeof AllowedMUIIconCodec>;
