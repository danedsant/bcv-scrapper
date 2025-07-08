const { chromium } = require('playwright');

// Esta función prueba si hay acceso a la página del BCV y toma una captura de pantalla
// para verificar que se puede acceder correctamente.
;(async () => {
    const browser = await chromium.launch({ headless: false }) //
    const page = await browser.newPage()
    await page.goto('https://www.bcv.org.ve/')
    await page.screenshot({ path: 'bcvTest.png' })
    await browser.close()
    })()
