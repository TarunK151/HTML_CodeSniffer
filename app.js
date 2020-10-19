const puppeteer = require('puppeteer-core');

// Replace with the path to the chrome executable in your file system. This one assumes MacOSX.
const executablePath = 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe';

// Replace with the url you wish to test.
const url = 'https://www.bt.com/broadband';

(async () => {
  const browser = await puppeteer.launch({
    executablePath
  });

  const page = await browser.newPage();

  page.on('console', msg => {
    console.log(msg.text())
  });

  await page.goto(url);

  await page.addScriptTag({
    path: 'build/HTMLCS.js'
  });

  await page.evaluate(function () {
    HTMLCS_RUNNER.run('WCAG2BT');
  });

  await browser.close();
})();