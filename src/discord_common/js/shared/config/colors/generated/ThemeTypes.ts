// TODO: Auto generate this file

export type Theme = "dark" | "light" | "midnight" | "darker";

export type ThemeTypes = Readonly<{
  [K in Theme as Uppercase<K>]: K;
}>;

export type ThemeExtends = Map<"darker" | "midnight", "dark">;
