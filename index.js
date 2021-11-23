const puppeteer = require('puppeteer');
var readlineSync = require('readline-sync');
const replaceAll = require('string.prototype.replaceall');
replaceAll.shim();

var cidade = readlineSync.question(`Diga qual cidade deseja pesquisar: `);
var estado = readlineSync.question(`Diga qual estado ${cidade} pertence: `);

cidade.toLowerCase();
estado.toLowerCase();

var cidadeReplace = cidade.replaceAll(" ", "-")

async function geobot() {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto(`https://www.ibge.gov.br/cidades-e-estados/${estado}/${cidadeReplace}`);

  const densidade = await page.evaluate(() => {
    return document.querySelectorAll('.ind-value')[4].textContent
  })

  console.log(`A cidade tem ${densidade} de densidade demográfica.`)

  await browser.close();
};

geobot();