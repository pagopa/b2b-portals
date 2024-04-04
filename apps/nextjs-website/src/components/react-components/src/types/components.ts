export type Theme = Readonly<'dark' | 'light'>;

/** this Generic type is meant to be used
 * fot those components that will accept any JSX to
 * be rendered
 */
export type Generic = JSX.Element;

export interface CommonProps {
  readonly theme: Theme;
}
