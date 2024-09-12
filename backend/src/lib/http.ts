import axios from 'axios'
import _ from 'lodash'

export namespace Http {
    export const downloadFile = (url: string, encoding: BufferEncoding = 'binary'): Promise<Buffer> => {
        return new Promise<Buffer>((resolve, reject) => {
            return axios.get(url, { responseType: 'arraybuffer' })
            .then(response => {
                if (!response) {
                    console.warn(`Can't download file: ${url}.`)
                    return resolve(null)
                }
                console.info(`Download file completed: ${url}`)
                resolve(Buffer.from(response.data, encoding))
            })
            .catch(err => reject(err))
        })
    }
}