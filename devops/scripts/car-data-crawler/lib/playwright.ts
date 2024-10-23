import { Page } from "playwright-core";

export const goto = (page: Page, url: string) => {
    return page.goto(url, { timeout: 120 * 1000})
}