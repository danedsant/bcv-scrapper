const { chromium } = require('playwright');

// Esta función recibe una url y devuelve el valor del dólar en bolívares
async function chiguirearPrecioDolar(url) {
    const browser = await chromium.launch({ headless: false }); // inicia el navegador
    const page = await browser.newPage();                       // abre una nueva página
    await page.goto(url);                                       // navega a la url proporcionada

    // Usa un selector XPath para encontrar el elemento que contiene el valor del dólar
    const el = await page.locator('xpath=//*[@id="dolar"]/div/div/div[2]/strong').first();
    await el.waitFor(); // espera a que el elemento esté disponible
    const srcTxt = await el.textContent(); // obtiene el texto del elemento

    console.log("Precio del Dolar: ",srcTxt,"Bs.");    // mostrar el valor de los dolitas en consola
    await browser.close();  // cierra el navegador
    return srcTxt;          // devuelve el valor del dólar actulizao
}
//Ejecuta la funcion con la URL del BCV pa obtener el valor del dolar 
chiguirearPrecioDolar('https://www.bcv.org.ve/');

module.exports = chiguirearPrecioDolar; // exporta la función para usarla en otro componente