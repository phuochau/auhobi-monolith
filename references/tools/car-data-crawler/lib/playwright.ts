import { Page } from "playwright-core";
import { Timer } from "./timer";

export const goto = async (page: Page, url: string, delay = 1) => {
    await Timer.wait(delay)
    return page.goto(url, { timeout: 120 * 1000})
}