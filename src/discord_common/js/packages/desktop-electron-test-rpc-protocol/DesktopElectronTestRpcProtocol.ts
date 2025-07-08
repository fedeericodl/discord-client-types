export enum RpcCallType {
  executeScript = 0,
  log = 1,
  settings = 2,
  quit = 3,
  domReady = 4,
  execute = 5,
}

export enum RpcResponseType {
  control = 0,
  error = 1,
  success = 2,
}
