export enum PermissionOverwriteType {
  ROLE,
  MEMBER,
}

export enum AgeVerificationStatusUkAndAusOnly {
  UNVERIFIED = 1,
  VERIFIED_TEEN,
  VERIFIED_ADULT,
  CLIENT_ONLY_PENDING = 99999,
}

export enum EmbeddedActivitySupportedPlatforms {
  IOS = "ios",
  ANDROID = "android",
  WEB = "web",
}

export enum EmbeddedActivityLabelTypes {
  NONE,
  NEW,
  UPDATED,
}

export enum EmbeddedActivitySurfaces {
  VOICE_LAUNCHER = "voice_launcher",
  TEXT_LAUNCHER = "text_launcher",
}

export enum GameLinkTypes {
  LINKED = 1,
}

export enum ApplicationDirectoryEntryCarouselItemType {
  MEDIA_PROXY = 1,
  YOUTUBE,
}

export enum InteractionContextType {
  GUILD,
  BOT_DM,
  PRIVATE_CHANNEL,
}

export enum ApplicationCommandHandler {
  APP_HANDLER = 1,
  DISCORD_LAUNCH_ACTIVITY,
}

export enum ApplicationCommandOptionType {
  SUB_COMMAND = 1,
  SUB_COMMAND_GROUP,
  STRING,
  INTEGER,
  BOOLEAN,
  USER,
  CHANNEL,
  ROLE,
  MENTIONABLE,
  NUMBER,
  ATTACHMENT,
}

export enum ApplicationCommandType {
  CHAT = 1,
  USER,
  MESSAGE,
  PRIMARY_ENTRY_POINT,
}

export enum InteractionTypes {
  APPLICATION_COMMAND = 2,
  MESSAGE_COMPONENT,
  APPLICATION_COMMAND_AUTOCOMPLETE,
  MODAL_SUBMIT,
}

export enum UnfurledMediaLoadingState {
  UNKNOWN = 0,
  LOADING,
  LOADED_SUCCESS,
  LOADED_NOT_FOUND,
}

export enum ComponentType {
  ACTION_ROW = 1,
  BUTTON,
  STRING_SELECT,
  TEXT_INPUT,
  USER_SELECT,
  ROLE_SELECT,
  MENTIONABLE_SELECT,
  CHANNEL_SELECT,
  SECTION,
  TEXT_DISPLAY,
  THUMBNAIL,
  MEDIA_GALLERY,
  FILE,
  SEPARATOR,
  CONTENT_INVENTORY_ENTRY = 16,
  CONTAINER,
  LABEL,
}

export enum ButtonStyle {
  PRIMARY = 1,
  SECONDARY,
  SUCCESS,
  DESTRUCTIVE,
  LINK,
  PREMIUM,
}

export enum TextInputComponentStyle {
  SMALL = 1,
  PARAGRAPH,
}

export enum SeparatorSpacingSize {
  SMALL = 1,
  LARGE,
}

export enum InvoiceDiscountTypes {
  SUBSCRIPTION_PLAN = 1,
  ENTITLEMENT,
  PREMIUM_LEGACY_UPGRADE_PROMOTION,
  PREMIUM_TRIAL,
  DEFAULT,
}

export enum PurchaseNotificationType {
  GUILD_PRODUCT,
}

export enum AuthenticatorType {
  WEBAUTHN = 1,
  TOTP,
  SMS,
}
