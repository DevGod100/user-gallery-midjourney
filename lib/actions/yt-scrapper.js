const puppeteer  = require("puppeteer"); 

//      node ./lib/actions/yt-scrapper.js

(async () => { 
	const browser = await puppeteer.launch({
        // headless: "new"
        headless: false
    }); 
	const page = await browser.newPage(); 
	// await page.goto('https://www.youtube.com/watch?v=tmNXKqeUtJM'); 
	await page.goto('https://www.youtube.com/watch?v=AJMXrQzMI5o'); 
 
	const videosTitleSelector = '#items h3 #video-title';
	// const videosTitleSelector = '#video-title'; 
	await page.waitForSelector(videosTitleSelector); 
	const titles = await page.$$eval( 
		videosTitleSelector, 
		titles => titles.map(title => title.innerText) 
	); 
	console.log(titles ); 
 
    // [
    //     'Evolution vs Natural Selection',
    //     'Why is the Earth Round and the Milky Way Flat? | Space Time | PBS Digital Studios',
    //     'To Scale: THE SOLAR SYSTEM',
    //     'What Happens If You Destroy A Black Hole?',
    //     'Why is it Dark at Night?',
    //     'How does the electron move around the atom?',
    //     'Black Holes Explained – From Birth to Death',
    //     'Why is the universe flat?',
    //     'Incredible Facts About The Planets In Our Solar System | Zenith Compilation | Spark',
    //     'The Unreasonable Efficiency of Black Holes'
    //   ]
 
	await browser.close(); 
})();