const { chromium } = require('playwright');

;(async () => {
    const browser = await chromium.launch({ headless: false }) // Launch browser in non-headless mode
    const page = await browser.newPage()
    await page.goto('https://www.bcv.org.ve/')
    await page.screenshot({ path: 'bcvTest.png' })
    await browser.close()
    })()
