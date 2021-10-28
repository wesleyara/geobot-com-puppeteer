const puppeteer = require('puppeteer');
var readlineSync = require('readline-sync');
const replaceAll = require('string.prototype.replaceall');
replaceAll.shim();

console.log("")

var cidade = readlineSync.question(`Diga qual cidade deseja pesquisar: `);
var estado = readlineSync.question(`Diga qual estado ${cidade} pertence: `);

cidade.toLowerCase();
estado.toLowerCase();

var cidadeReplace = cidade.replaceAll(" ", "-")

async function geobot() {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto(`https://cidades.ibge.gov.br/brasil/${estado}/${cidadeReplace}`);

  await browser.close();
};

geobot();