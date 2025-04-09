export namespace UrlUtils {
    export const isOnlineUrl = (url: string) => {
        try {
            // Create a URL object to validate the URL
            const parsedUrl = new URL(url);
            // Check if the protocol is either http or https
            return parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:";
        } catch (e) {
            // If the URL constructor throws, the string is not a valid URL
            return false;
        }
    }

    export const getBaseDomain = (url: string) => {
        try {
            // Create a URL object to validate the URL
            const parsedUrl = new URL(url);
            // Check if the protocol is either http or https
            return parsedUrl.hostname
        } catch (e) {
            // If the URL constructor throws, the string is not a valid URL
            return url;
        }
    }
}