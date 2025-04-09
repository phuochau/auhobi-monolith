import mime from 'mime'

export namespace FileUtils {
  export const getFileName = (filePath: string): string => {
    return filePath.substring(filePath.lastIndexOf('/') + 1, filePath.length)
  }

  export const getMimeType = (filePath: string): string => {
    return mime.getType(filePath) || 'application/octet-stream'
  }
}