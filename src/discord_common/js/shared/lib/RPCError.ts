interface RPCErrorInfoErrorCode {
  /**
   * The RPC-specific error code indicating the type of error encountered.
   */
  errorCode: number;
}

interface RPCErrorInfoCloseCode {
  /**
   * The WebSocket close code indicating the reason for the connection closure.
   */
  closeCode: number;
}

/**
 * Custom error class for RPC communication failures.
 */
export declare class RPCError extends Error {
  /**
   * @param error Object containing either `errorCode` or `closeCode`.
   * @param message Human-readable error message describing the failure.
   */
  public constructor(error: RPCErrorInfoErrorCode | RPCErrorInfoCloseCode, message: string);

  /**
   * The RPC-specific error code when the error originated from an RPC operation.
   */
  public errorCode: number | undefined;

  /**
   * The WebSocket close code when the error originated from a connection closure.
   */
  public closeCode: number | undefined;

  /**
   * The numeric error code representing the failure.
   */
  public code: number;

  /**
   * Human-readable error message describing what went wrong.
   */
  public message: string;

  /**
   * The name of the error class, always set to "RPCError".
   */
  public name: string;
}
