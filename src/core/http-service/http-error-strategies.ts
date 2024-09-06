import { ApiError, BadRequestError, NetworkError, NotFoundError, UnauthorizedError, UnhandledException, ValidationError } from "@/types/http-errors.interface";

export type ApiErrorHandler = (errorData: ApiError) => void;

export const badRequestErrorStrategy:ApiErrorHandler = errorData =>{
    
    throw{
        ...errorData
    }as BadRequestError;
}

export const validationErrorStrategy: ApiErrorHandler = (errorData)=>{
    throw{...errorData} as ValidationError;
}

export const notFoundStrategy:ApiErrorHandler = (errorData)=>{
    throw{...errorData , detail: "سرویس مورد نظر یافت نشد"} as NotFoundError
}

export const unauthorizedErrorStrategy:ApiErrorHandler = (errorData)=>{
    throw{...errorData, detail: "شما مجاز به دسترسی به این سرویس ندارید"} as UnauthorizedError
}

export const unhandledExceptionStrategy:ApiErrorHandler = (errorData)=>{
    throw {...errorData, detail: "خطای غیر منتظره رخ داده است"} as UnhandledException;
}
export const networkErrorStrategy = ()=>{
    throw{detail:"خطای شبکه رخ داده است"} as NetworkError
    ;
}

export const errorHandler: Record<number,ApiErrorHandler> ={
    400:(errorData) => (errorData.errors?validationErrorStrategy:badRequestErrorStrategy )(errorData),
    403: unauthorizedErrorStrategy,
    404: notFoundStrategy,
    500: unhandledExceptionStrategy
}