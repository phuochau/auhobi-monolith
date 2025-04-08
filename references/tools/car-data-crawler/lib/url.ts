export namespace Url {
    export const join = (baseUrl: string, subpath: string): string => {
        const url = `${baseUrl}/${subpath}`
        const urlWithoutHttps = url.replace('https://', '').replace('//', '/')

        return `https://${urlWithoutHttps}`
    }
}