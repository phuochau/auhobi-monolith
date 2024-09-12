export interface GraphQLResponseError {
    message: string,
    [key: string]: any
}

export interface GraphQLResponse<T> {
    errors?: GraphQLResponseError[],
    data?: T
} 