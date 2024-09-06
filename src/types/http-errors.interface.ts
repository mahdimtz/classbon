interface Problem {
  title: string;
  status: number;
  detail?: string;
  errors?: Record<string, string[]>;
}

interface BadRequestError extends Problem {} //400
interface UnauthorizedError extends Problem {} //403
interface ValidationError extends Problem {}
interface NotFoundError extends Problem {} //404
interface UnhandledException extends Problem {} //500
interface NetworkError extends Problem {}
type ApiError = BadRequestError | UnauthorizedError | ValidationError | NotFoundError | UnhandledException | NetworkError;

export type {
  Problem,
  BadRequestError,
  UnauthorizedError,
  ValidationError,
  NotFoundError,
  UnhandledException,
  NetworkError,
  ApiError
};
