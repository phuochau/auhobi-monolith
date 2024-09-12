import axios, { AxiosInstance } from 'axios'

const DEFAULT_HEADERS = {
    "content-type": "application/json",
}

export interface GetOption {
    uri: string
    query?: { [key: string]: any},
    headers?: any
}
    
export interface PostOption {
    uri: string
    query?: { [key: string]: any},
    data: any,
    headers?: any
}
    
export interface PutOption {
    uri: string
    query?: { [key: string]: any},
    data: string,
    headers?: any
}
    
export interface DeleteOption {
    uri: string
    query?: { [key: string]: any},
    headers?: any
}

export class HttpService {
    private url = ''
    private headers = DEFAULT_HEADERS
    private query = {}
    private instance: AxiosInstance;

    constructor(url: string, headers = {}, query = {}) {
        this.url = url
        this.headers = {
            ...this.headers,
            ...headers
        }
        this.query = {
            ...this.query,
            ...(query || {})
        }

        this.instance = axios.create({
            baseURL: url,
            timeout: 60 * 1000
        });
    }

    private buildQuery(query: any = {}): any {
        return {
            ...this.query,
            ...(query || {})
        }
    }

    private buildHeaders = (headers: any = {}): any => {
        return {
            ...this.headers,
            ...(headers || {})
        }
    }

    appendHeaders = (headers: any = {}) => {
        this.headers = {
            ...this.headers,
            ...headers
        }
    }

    async get<T>(option: GetOption): Promise<T> {
        return this.instance.get(option.uri, {
            params: this.buildQuery(option.query),
            headers: this.buildHeaders(option.headers)
        }).then(res => res.data)
    }

    async post<T>(option: PostOption): Promise<T> {
        return this.instance.post<T>(option.uri, option.data, {
            params: this.buildQuery(option.query),
            headers: this.buildHeaders(option.headers)
        }).then(res => res.data)
    }

    async put<T>(option: PutOption): Promise<T> {
        return this.instance.put(option.uri, option.data, {
            params: this.buildQuery(option.query),
            headers: this.buildHeaders(option.headers)
        }).then(res => res.data)
    }
    
    async delete<T>(option: DeleteOption): Promise<T> {
        return this.instance.delete<T>(option.uri, {
            params: this.buildQuery(option.query),
            headers: this.buildHeaders(option.headers)
        }).then(res => res.data)
    }

    static async get<T>(option: GetOption): Promise<T> {
        return axios.get<T>(option.uri, {
            headers: {
                ...DEFAULT_HEADERS,
                ...(option.headers || {})
            }
        }).then(res => res.data)
    }

    static async post<T>(option: PostOption): Promise<T> {
        return axios.post<T>(option.uri, option.data, {
            headers: {
                ...DEFAULT_HEADERS,
                ...(option.headers || {})
            }
        }).then(res => res.data)
    }

    static async put<T>(option: PutOption): Promise<T> {
        return axios.put<T>(option.uri, option.data, {
            method: 'PUT',
            headers: {
                ...DEFAULT_HEADERS,
                ...(option.headers || {})
            }
        }).then(res => res.data)
    }

    static async delete<T>(option: DeleteOption): Promise<T> {
        return axios.delete<T>(option.uri, {
            headers: {
                ...DEFAULT_HEADERS,
                ...(option.headers || {})
            }
        }).then(res => res.data)
    }
}