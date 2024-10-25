/**
 * A React context to manage the state of blocking interactions.
 */
export type BlockInteractionsContext = React.Context<boolean>;

/**
 * Provides the {@link BlockInteractionsContext} to its children.
 *
 * Wraps its children with the {@link BlockInteractionsContext}'s Provider,
 * setting the context value to true, indicating that interactions are blocked.
 */
export type BlockInteractions = React.FC<React.PropsWithChildren>;
