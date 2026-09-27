import type * as React from 'react';

/** The ddcnorth logo, drawn inline from the outlined master so it takes CSS `color`. */
export interface LogoProps extends Omit<React.SVGProps<SVGSVGElement>, 'children'> {
  /** Lockup. Default 'horizontal' (the primary). */
  variant?: 'horizontal' | 'stacked' | 'wordmark' | 'symbol';
  /** Ink. Default follows `logo-ink` (black, or white in the midnight theme). */
  tone?: 'midnight' | 'white';
  /** Rendered width in px; height follows. Keep the full lockup ≥160px, the symbol ≥24px. */
  width?: number | string;
  /** Accessible name. Default 'ddcnorth'. */
  title?: string;
}
export declare function Logo(props: LogoProps): React.ReactElement;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 'primary' = midnight fill (once per view); 'secondary' = hairline outline. Default 'secondary'. */
  variant?: 'primary' | 'secondary';
  /** Renders an <a> instead of a <button>. */
  href?: string;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): React.ReactElement;

/** Space Mono uppercase eyebrow / metadata label. */
export interface LabelProps extends React.HTMLAttributes<HTMLElement> { as?: keyof JSX.IntrinsicElements; children?: React.ReactNode }
export declare function Label(props: LabelProps): React.ReactElement;

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** A logo, image or template preview shown in a 130px stage. */
  media?: React.ReactNode;
  /** One short line under the media, e.g. "01 / Primary horizontal". */
  caption?: React.ReactNode;
  /** 'reversed' = midnight panel with white content. */
  tone?: 'default' | 'reversed';
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): React.ReactElement;

/** An ice callout for caveats and short notes. */
export interface NoteProps extends React.HTMLAttributes<HTMLParagraphElement> { children?: React.ReactNode }
export declare function Note(props: NoteProps): React.ReactElement;

export type IconName = 'clarity' | 'cycle' | 'direction' | 'network' | 'signal';
export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'name'> {
  name: IconName;
  /** px, default 32. Designed on a 64 grid with 2px strokes. */
  size?: number;
  /** Accessible name; omit for decorative icons (aria-hidden). */
  label?: string;
}
export declare function Icon(props: IconProps): React.ReactElement;

declare global { interface Window { DdcNorth: { Logo: typeof Logo; Button: typeof Button; Label: typeof Label; Card: typeof Card; Note: typeof Note; Icon: typeof Icon } } }
