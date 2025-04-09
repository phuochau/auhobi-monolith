import { Href, Router } from "expo-router";

export namespace Navigation {
    export const reset = (router: Router, href: Href) => {
        router.dismissAll()
        router.replace(href)
    }

    export const resetToIndex = (router: Router) => {
        reset(router, { pathname: '/' })
    }

    export const resetToDashboard = (router: Router) => {
        reset(router, { pathname: '/dashboard' })
    }

    export const resetToAuth = (router: Router) => {
        reset(router, { pathname: '/auth' })
    }
}