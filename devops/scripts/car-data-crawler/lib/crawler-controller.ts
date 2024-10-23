import { Browser, Page } from "playwright-core"
import UserAgent from 'user-agents';

export namespace CrawlerController {
    export const getNewPage = async (browser: Browser): Promise<Page> => {
        const userAgent = new UserAgent();
        return browser.newPage({ userAgent: userAgent.toString()})
    }
}