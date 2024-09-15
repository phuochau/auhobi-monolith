import { Href, Router } from "expo-router";

export namespace Navigation {
    export const reset = (router: Router, href: Href) => {
        router.dismissAll()
        router.replace(href)
    }
}