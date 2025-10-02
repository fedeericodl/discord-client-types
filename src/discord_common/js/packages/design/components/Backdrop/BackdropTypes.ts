type Styles = "DARK" | "LIGHTBOX" | "IMMERSIVE" | "SUBTLE" | "BLUR" | "TOP_RADIAL";

export type BackdropStyles = {
  [K in Styles as Uppercase<K>]: K;
};
