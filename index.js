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
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.goto(`https://www.ibge.gov.br/cidades-e-estados/${estado}/${cidadeReplace}`);

  const nomeCidade = await page.evaluate(() => {
    return document.querySelectorAll("h1")[1].textContent
  })
  
  const area = await page.evaluate(() => {
    return document.querySelectorAll('.ind-value')[2].textContent
  })
  
  const populacao = await page.evaluate(() => {
    return document.querySelectorAll('.ind-value')[3].textContent
  })

  const densidade = await page.evaluate(() => {
    return document.querySelectorAll('.ind-value')[4].textContent
  })

  const escolarizacao = await page.evaluate(() => {
    return document.querySelectorAll('.ind-value')[5].textContent
  })

  const idhm = await page.evaluate(() => {
    return document.querySelectorAll('.ind-value')[6].textContent
  })

  const mortalizadeInfantil = await page.evaluate(() => {
    return document.querySelectorAll('.ind-value')[7].textContent
  })

  const pib = await page.evaluate(() => {
    return document.querySelectorAll('.ind-value')[10].textContent
  })

  console.log(`A cidade de ${nomeCidade} tem ${area} de área territorial;`)
  console.log(`População total de ${populacao};`)
  console.log(`${densidade} de densidade demográfica;`)
  console.log(`O indíce de escolarização de 6 a 14 anos é de ${escolarizacao};`)
  console.log(`O IDHM é de ${idhm};`)
  console.log(`Tem uma taxa de mortalidade infantil de ${mortalizadeInfantil};`)
  console.log(`E um PIB per capita de ${pib}.`)

  await browser.close();
};

geobot();

/* AVISO: Não coloque acentuação nem capslock nas pesquisas dentro do terminal */