export namespace MimeUtil {
    let mime;

    const loadMimeLib = async () => {
        if (!mime) {
            mime = (await import('mime')).default
        }

        return mime
    }

    export const getMimeType = async (ext: string): Promise<string> => {
        const mimeLib = await loadMimeLib() 
        return mimeLib.getType(ext)
    }
}