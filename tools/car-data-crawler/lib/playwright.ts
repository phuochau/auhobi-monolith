import { Page } from "playwright-core";
import { Timer } from "./timer";

const DELAY_BROWSER_FETCH_SECONDS = 2

export const goto = async (page: Page, url: string) => {
    await Timer.wait(DELAY_BROWSER_FETCH_SECONDS)
    return page.goto(url, { timeout: 120 * 1000})
}