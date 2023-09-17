const puppeteer = require("puppeteer");

//   Run script:
//   node ./lib/actions/puppeteer-amazon.js

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
  });
  const page = await browser.newPage();

  await page.goto(
    "https://www.amazon.com/s?k=touch+laptops&rh=n%3A565108&ref=nb_sb_noss"
  );

  const productHandles = await page.$$(
    "div.s-main-slot.s-result-list.s-search-results.sg-row > .s-result-item"
  );

  let i = 0

  let items = []
  for (const producthandle of productHandles) {
    let title = "Null";
    let price = "Null";
    let img = "Null";

    try {
      title = await page.evaluate(
        (el) => el.querySelector("h2 > a > span").textContent,
        producthandle
      );
    } catch (error) {}

    try {
      price = await page.evaluate(
        (el) => el.querySelector(".a-price .a-offscreen").textContent,
        producthandle
      );
    } catch (error) {}

    try {
      img = await page.evaluate(
        (el) => el.querySelector(".s-image").getAttribute("src"),
        producthandle
      );
    } catch (error) {}

    if(title !== "Null"){
    items.push({title, price, img});
    }
}
  console.log(items);

})();

// await page.screenshot({ path: "example.png" });

// await browser.close();
