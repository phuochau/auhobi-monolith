import _ from "lodash"
import path from 'path'
import fs from 'fs'
import tesseract from "node-tesseract-ocr"
import { Http } from "src/lib/http"

export namespace ParserUtils {
    export const readTextFromImage = (filepath: string, config: tesseract.Config) => {
      return tesseract.recognize(filepath, config)
    }

    export const readTextFromImageUrl = async (url: string, config: tesseract.Config) => {
        const buffer = await Http.downloadFile(url)
        return tesseract.recognize(buffer, config)
    }

    const readTextFromMultipleFiles = async (filepaths: string[], readFunc: any, config = { lang: 'vie'}): Promise<string> => {
        let parts = []
        for (let i = 0; i < filepaths.length; i++) {
            try {
              const filename = filepaths[i]
              const fileContent = await readFunc(filename, config)
              parts.push(fileContent)
            } catch (err) {
              console.warn(err)
            }
        }

        return parts.join('\n')
    }

    export const readTextFromImages = async (filepaths: string[], config = { lang: 'vie'}): Promise<string> => {
        return readTextFromMultipleFiles(filepaths, readTextFromImage, config)
    }

    export const readTextFromImageUrls = async (filepaths: string[], config = { lang: 'vie'}): Promise<string> => {
        return readTextFromMultipleFiles(filepaths, readTextFromImageUrl, config)
    }

    export const readJsonFromUrl = async (url: string) => {
        const buffer = await Http.downloadFile(url, 'utf-8')
        return JSON.parse(buffer.toString('utf-8'))
    }

    export const listFilesFromDir = (dir: string): Promise<string[]> => {
        return new Promise((resolve) => {
            fs.readdir(dir, async (err, files) => {
                if (err) {
                  resolve([])
                  return
                }

                files = files.sort()
                resolve(files)
            })
        })
    }

    export const getFileExt = (filename: string) => {
        return path.extname(filename)
    }

    export const wait = (second: number) => {
        return new Promise<void>(resolve => {
            setTimeout(() => {
                resolve()
            }, second * 1000)
        })
    }

    export const getInteger = (number: string): number | null => {
        number = number.replace(/o/g, '0')
        number = number.replace(/[^0-9]/g, '')
        if (!number) {
            return null
        }

        return parseInt(number)
    }

    export const getFloat = (number: string): number | null => {
        number = number.replace(/o/g, '0')
        number = number.replace(/[^0-9\.]/g, '')
        if (!number) {
            return null
        }

        return parseFloat(number)
    }

    export const getMoney = (number: string, isFloat = false): number | null => {
        const matches = number.match(/([0-9]{1,3}\.?)?([0-9]{1,3}\.?)?([0-9]{1,3})?\.([0-9]{3})/g)
        if (matches?.length) {
            return isFloat ? getFloat(matches[0]) : getInteger(matches[0])
        }

        return parseInt(number)
    }

    export const getPhoneNumber = (phone: string): string | null => {
        if (_.isNil(phone)) {
            return null
        }
        phone = phone.replace(/[^\+0-9]/g, '')
        phone = phone.replace('+84', '0')
        return phone
    }
}