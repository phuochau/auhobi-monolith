import { Browser, Page } from "playwright-core"
import UserAgent from 'user-agents';
import { chromium } from "playwright-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

chromium.use(StealthPlugin());

export namespace CrawlerController {
    export const getChromium = () => {
        return chromium
    }

    export const getNewPage = async (browser: Browser): Promise<Page> => {
        const userAgent = new UserAgent();
        return browser.newPage({ userAgent: userAgent.toString()})
    }
}