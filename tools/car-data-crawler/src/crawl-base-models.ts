import { CarsDataCrawler } from "../lib/cars-data.crawler";
import { CrawlerController } from "../lib/crawler-controller";

CrawlerController.getChromium().launch({ headless: true }).then(async (browser) => {
    await CarsDataCrawler.baseModelCrawlAll(browser)
    browser.close()
});