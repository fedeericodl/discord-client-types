import type * as TokenManager from "./TokenManager";

// TODO: Replace `unknown` with types from packages/discord-native-types

/**
 * Initializes security defenses against self-XSS attacks and token theft.
 * Sets up DevTools detection to hide sensitive tokens when developer tools are opened.
 * Displays warning messages to users about potential security risks in the console.
 * Automatically restores token visibility when DevTools are closed or page is unloaded.
 * @param tokenManager The {@link TokenManager} instance for hiding/showing tokens.
 * @param DiscordNative The {@link DiscordNative} API object.
 */
export type UserDefenses = (tokenManager: typeof TokenManager, DiscordNative?: unknown) => void;
