import fs from 'fs'
import _ from 'lodash'

export namespace FileUtils {
    export const safeReadFile = (filepath: string, defaultValue: any): Promise<string> => {
        return new Promise((resolve, reject) => {
            fs.readFile(filepath, { encoding: 'utf-8' }, (err, data) => {
                if (err) {
                    return resolve(defaultValue)
                }

                resolve(data)
            })
        })
    }

    export const overwrite = (filepath: string, content: string) => {
        fs.writeFileSync(filepath, content, { encoding: 'utf8', flag: 'w' })
    }

    export const getFileName = (url: string) => {
        return _.last(url.split('/'))
    }
}