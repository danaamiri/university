export interface ErrorResponse {
  success: boolean;
  error: HttpError;
  errors?: FieldError[];
}

export enum HttpError {
  BAD_REQUEST = 400
}

export class FieldError {
  field: string;
  code: string;
  message: string;
}

export class ResponseWrapperTemp<T> {
  success: boolean;
  data?: T;
}
