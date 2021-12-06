const puppeter = require('puppeteer');

class SearchInstagram{

  async connect(user) {
   try {
    const browser = await puppeter.launch();
    const page = await browser.newPage();
    await page.goto(`https://www.instagram.com/${user}/`);
    let array = await page.$$eval('.k9GMp li span', links => links.map(link => link.innerText))
    browser.close();
    return this.createJson(array)
   } catch (error) {
     console.log(error)
   }
  }
  createJson(params){
    const json = new Map();
    params.forEach((element, index) =>{
      switch (index) {
        case 0:
          json.set('Postagems', element);
          break;
        case 1:
          json.set('Seguidores', element);
          break;

        case 2:
          json.set('Seguindo', element);
          break;
      }
    });
    return json;
  }
}

module.exports = new SearchInstagram();