# GeoBot: um bot para scraping de informaçõs geográficas sobre cidades brasileiras.

### Contatos e redes sociais:
<div style="display: inline_block">
  <a href="mailto:wesleyara.contato@gmail.com"><img alt="Wesley-GMAIL" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>
  <a href="https://www.linkedin.com/in/wesley-gomes-de-araújo-534a66221/"><img alt="Wesley-LINKE" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
  <a href="https://www.instagram.com/wesleyaraujo_w/"><img alt="Wesley-INSTA" src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"></a> 
</div>

### Linguagens:
<div style="display: inline_block;">
  <img align="center" alt="Wesley-JS" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
  <img align="center" alt="Wesley-PUPPE" src="https://img.shields.io/badge/Puppeteer-40B5A4?style=for-the-badge&logo=Puppeteer&logoColor=white">
  <img align="center" alt="Wesley-NODE" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
</div>
<br>

## Motivação:
Afim de acelerar o processo de coleta de informações geográficas acerca de cidades brasileiras, utilizei a biblioteca Puppeteer (Github: https://github.com/puppeteer/puppeteer) para fazer scraping no site do IBGE e coletar essas informações que eu desejava.

## O que ele faz?
O GeoBot coleta informações a partir do código HTML do site do IBGE, retornando no próprio console essas informações coletadas, usando o Node.js como back end para fazer essa ponte e possibilitar o scraping.

## Instalação:

Ao copiar o repositório, tem que ir no terminal do VS Code com a pasta aberta e digitar os seguintes comandos para realizar a instalação:

`npm install puppeteer`

`npm install readline-sync`

`npm install string.prototype.replaceall`

Dê fork nesse repositório e o coloque em sua máquina, assim poderá usa-lo.

## Como usar?
No terminal digite (node index.js), ele vai executar o primeiro console.log e depois vai lhe perguntar sobre qual cidade você quer verificar as informações, basta dizer a cidade sem utilização de acentuação nas palavras, e a forma abreviada do estado, por exemplo: São Paulo = SP.