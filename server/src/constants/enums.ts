export enum HTTP {
  OK = 200,
  FORBIDDEN = 403,
  BAD_REQUEST = 400,
  UNPROCESSABLE_ENTITY = 422,
  SERVER_ERROR = 500,
  UNAUTHORIZED = 401,
}

export enum RESPONSE {
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum APP_CONTEXT {
  DEVELOPMENT = 'development',
}
