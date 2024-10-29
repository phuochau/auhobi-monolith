import axios from "axios"
import fs from 'fs'

export namespace Http {
    export const downloadImage = async (url: string, filepath: string): Promise<boolean> => {
        const response = await axios({
            url,
            method: 'GET',
            responseType: 'stream',
        })

        return new Promise((resolve) => {
            response.data
                .pipe(fs.createWriteStream(filepath, { flags: 'w' }))
                .on('error', (err: any) => {
                    console.error(err)
                    resolve(false)
                })
                .once('close', () => resolve(true))
        })
    }
}