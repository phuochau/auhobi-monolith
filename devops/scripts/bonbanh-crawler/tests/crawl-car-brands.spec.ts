import { test, expect } from '@playwright/test';
import { Timer } from '../lib/timer';
import fs from 'fs';

test('get car brands', async ({ page }) => {
  await page.goto('https://bonbanh.com/oto?q=');
  await Timer.wait(1)

  // Expect a title "to contain" a substring.
  await expect(page.getByText('Hãng xe:', { exact: true })).toBeVisible();

  const brandElements = await page.$$('.f-maker .menuparent')
  
  const brands: any = {}

  for (const brandElement of brandElements) {
    let brand = await brandElement.$('a').then(child => child?.textContent())
    if (brand && !brand.startsWith('Hãng khác') && !brand.startsWith('Tất cả')) {
      brand = brand.trim()
      brands[brand] = []

      const modelElements = await brandElement.$$('ul > li')
      if (modelElements.length > 0) {
        const models = await Promise.all(modelElements.map(
          async item => {
            let modelName = await item.$('span').then(child => child?.textContent())

            if (!modelName) {
              modelName = await item.$('a').then(child => child?.textContent())
            }

            return modelName
          }
        ))

        brands[brand] = models.filter(model => model && !model?.startsWith('Khác'))
      }
    }
  }

  fs.writeFileSync('output/brands.json', JSON.stringify(brands))
  console.log('DONE')
});
