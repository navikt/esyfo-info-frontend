import axios, { AxiosError, ResponseType } from "axios"

import { logApiError } from "./logUtils"
import { loginUser } from "./urlUtils"

interface AxiosOptions {
    accessToken?: string
    responseType?: ResponseType
    personIdent?: string
}

export const AUTHORIZATION_HEADER = "Authorization"
export const NAV_PERSONIDENT_HEADER = "nav-personident"

const defaultRequestHeaders = (
    options?: AxiosOptions
): Record<string, string> => {
    const headers: Record<string, string> = {
        "Content-Type": "application/json",
    }

    if (options?.accessToken) {
        headers[AUTHORIZATION_HEADER] = `Bearer ${options.accessToken}`
    }

    if (options?.personIdent) {
        headers[NAV_PERSONIDENT_HEADER] = options?.personIdent
    }

    return headers
}

function handleError(error: AxiosError, url: string, httpMethod: string) {
    logApiError(error, url, httpMethod)

    if (error.response && error.response.status === 401) {
        loginUser()
    }
    throw error
}

export const get = <ResponseData>(
    url: string,
    options?: AxiosOptions
): Promise<ResponseData> => {
    return axios
        .get(url, {
            headers: defaultRequestHeaders(options),
            responseType: options?.responseType,
            withCredentials: true,
        })
        .then((response) => response.data)
        .catch(function (error) {
            handleError(error, url, "GET")
        })
}

export const post = <ResponseData>(
    url: string,
    // eslint-disable-next-line
    data?: any,
    options?: AxiosOptions
): Promise<ResponseData> => {
    return axios
        .post(url, data, {
            headers: defaultRequestHeaders(options),
            responseType: options?.responseType,
            withCredentials: true,
        })
        .then((response) => response.data)
        .catch(function (error) {
            handleError(error, url, "POST")
        })
}
