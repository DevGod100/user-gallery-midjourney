const puppeteer  = require("puppeteer"); 

//   Run script:
//   node ./lib/actions/puppeteer-discord.js
   
(async () => {
  console.log("Launching Puppeteer browser...");

  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: false,
  });
  const page = await browser.newPage();
  // const discordToken = process.env.DISCORD_TOKEN;


 // Navigate to the desired page
 await page.goto("https://www.midjourney.com/auth/signin/"); // App Authorization to log into Discord ...

 // Use page.evaluate() to set the token into Discord Local Storage
//  await page.evaluate((token) => {
//    localStorage.setItem("token", token);
//  }, discordToken);

 // Click the button
await page.click('button > span');

 // Wait for the page to load
 await new Promise(resolve => setTimeout(resolve, 50000));// Wait for page to load

 await browser.close();
})();









//pre-sept 17
// const puppeteer  = require("puppeteer"); 
// // const fs = require('fs');//print html to file
// // const cloudflareScraper = require("cloudflare-scraper");//avoid bot detection


// //To run the script, go to the terminal and type:
// //   node ./lib/actions/puppeteer-discord.js
   
// (async () => {
//   // Launch puppeteer instance

//   console.log("Launching Puppeteer browser...");

//   // const browser = await launch({headless: false}); //old version
//   const browser = await puppeteer.launch({headless: false});
//   const page = await browser.newPage();
//   const discordToken = process.env.DISCORD_TOKEN; // Your Discord Token, How To Get Your Discord Token -> https://www.youtube.com/watch?v=YEgFvgg7ZPI&ab_channel=GaugingGadgets

//   // Local Storage error with Puppeteer, found bypass, CREDIT: https://gist.github.com/zelbov/58e9fbbe5157bf61067d2693118dd09a

//   const bypassLocalStorageOverride = (page) =>
//     page.evaluateOnNewDocument(() => {
//       // Preserve localStorage as separate var to keep it before any overrides
//       let __ls = localStorage;

//       // Restrict closure overrides to break global context reference to localStorage
//       Object.defineProperty(window, "localStorage", {
//         writable: false,
//         configurable: false,
//         value: __ls,
//       });
//     });

//   console.log(
//     "Redirecting to https://discord.com/app ... (May take a few seconds)"
//   );

//   // Calling function before storing token into Discord so that errors don't occur
//   bypassLocalStorageOverride(page);

//   // await page.goto("https://www.midjourney.com/app/");
//   // try { 
//   //   		// Send Get request to the target website 
//   //   		const response = await cloudflareScraper.get("https://www.midjourney.com/app/"); 
     
//   //   		// Print out results 
//   //   		console.log(response); 
     
//   //   		// Handle errors 
//   //   	} catch (error) { 
//   //   		console.log(error); 
//   //   	} 

//   // Setting token into Discord Local Storage (Don't worry it's not being sent/stored anywhere, this is how Discord does it)
//   await page.evaluate((token) => {
//     localStorage.setItem("token", `"${token}"`);
//   }, discordToken);

//   // Navigate to a page where you want to use the local storage value
//   await page.goto("https://www.midjourney.com/auth/signin/"); // The discord channel / App Authorization that you want to log into Discord for...
 
//   console.log("Successfully logged in...");

//   // await page.waitForTimeout(50000); //deprecated
//   await new Promise(resolve => setTimeout(resolve, 50000));// Wait for page to load


//   //   // Extract the HTML content of the page
//   //   const htmlContent = await page.content();

//   //   // Save the HTML content to a file
//   //   fs.writeFileSync('output.html', htmlContent);

//   // Ending proccess
//   await browser.close();
// })();












  // Do whatever you want here afterwards, I just decided to take a screenshot for proof
  // await page.screenshot({ path: "output.png" });

//--------------------
//cloudflareScraper:
// (async () => { 
// 	try { 
// 		// Send Get request to the target website 
// 		const response = await cloudflareScraper.get("https://www.getastra.com/"); 
 
// 		// Print out results 
// 		console.log(response); 
 
// 		// Handle errors 
// 	} catch (error) { 
// 		console.log(error); 
// 	} 
// })();
//----------------