import { HTTP, RESPONSE } from '../constants/enums';

export interface ErrorObject {
  status?: string;
  message: string;
  data: object | null | unknown;
}

/**
 * Creates an error payload
 */
export default function createError(status: number | null, errors: ErrorObject) {
  return {
    statusCode: status,
    ...errors,
  };
}

createError.InternalServerError = (data: object | null | unknown) =>
  createError(HTTP.SERVER_ERROR, {
    status: RESPONSE.ERROR,
    message: 'Internal Server Error',
    data,
  });
