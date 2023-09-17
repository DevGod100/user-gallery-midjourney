const puppeteer  = require("puppeteer"); 

//   Run script: npm run pup
   
(async () => {
  console.log("Launching Puppeteer browser...");

  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: false,
  });
  const page = await browser.newPage();


 // Navigate to the desired page
 await page.goto("https://quotes.toscrape.com/"); // App Authorization to log into Discord ...

})();
