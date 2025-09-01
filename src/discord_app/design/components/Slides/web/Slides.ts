import type { ImpressionNames } from "@discordapp/analytics-utils/AnalyticsSchema";
import type { SpringConfig } from "@react-spring/web";
import type * as React from "react";

export interface SlideProps {
  /**
   * Unique identifier for this slide.
   */
  id: string;

  /**
   * The content to render within this slide.
   */
  children: React.ReactNode;

  /**
   * Name identifier for the impression event.
   * @see {@link ImpressionNames}
   */
  impressionName?: ImpressionNames;

  /**
   * Additional properties to include with the impression.
   */
  impressionProperties?: Record<string, unknown>;
}

/**
 * Individual slide component that represents a single page in a slide presentation.
 * Used as children of the {@link Slides} component to define slide content and metadata.
 */
export type Slide = React.FC<SlideProps>;

export interface SlidesProps {
  /**
   * The display style property for slide content.
   */
  contentDisplay?: React.CSSProperties["display"];

  /**
   * Whether to use fade in/out animation in addition to slide animation.
   * @default false
   */
  fadeInOut?: boolean;

  /**
   * Slide components that define the available slides.
   */
  children: React.ReactElement<SlideProps>[];

  /**
   * The ID of the currently active slide to display.
   */
  activeSlide: string;

  /**
   * Override the automatic direction detection for slide animations.
   */
  directionOverride?: "forwards" | "backwards";

  /**
   * Custom spring animation configuration. Merged with default spring settings.
   */
  springConfig?: SpringConfig;

  /**
   * Callback function called when a slide animation completes.
   */
  onSlideReady?: (slideId: string) => void;

  /**
   * The width for the slides container. If not provided, uses measured width.
   */
  width?: number;

  /**
   * Whether slides should be horizontally centered.
   */
  centered?: boolean;

  /**
   * Whether to use media queries to set container height.
   */
  shouldUseMediaQueryToSetHeight?: boolean;

  /**
   * The overflow style property for the slides container.
   */
  overflow?: React.CSSProperties["overflow"];
}

/**
 * Animated slide presentation component for creating smooth transitions between content pages.
 * @example
 * ```tsx
 * const [currentSlide, setCurrentSlide] = React.useState("welcome");
 *
 * <Slides activeSlide={currentSlide}>
 *   <Slide id="welcome">
 *     {...}
 *   </Slide>
 *   <Slide id="profile">
 *     {...}
 *   </Slide>
 *   <Slide id="complete">
 *     {...}
 *   </Slide>
 * </Slides>
 * ```
 */
export type Slides = React.FC<SlidesProps>;
