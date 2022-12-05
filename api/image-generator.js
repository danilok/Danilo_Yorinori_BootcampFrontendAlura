import puppeteer from 'puppeteer-core';
import chrome from 'chrome-aws-lambda';

export async function getOptions() {
  const isDev = !process.env.AWS_REGION;
  let options;

  const chromeExecPaths = {
    win32: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    linux: '/usr/bin/google-chrome',
    darwin: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  };

  const exePath = chromeExecPaths[process.platform];

  if (isDev) {
    options = {
      args: [],
      executablePath: exePath,
      headless: true,
    };
  } else {
    options = {
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
    };
  }

  return options;
}

async function getScreenshot(url, { width, height } = { width: 800, height: 800 }) {
  const options = await getOptions();
  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();
  await page.goto(url);
  await page.setViewport({ width, height });
  const file = await page.screenshot({ type: 'png' });
  await browser.close();

  return file;
}

export default async (req, res) => {
  const { url } = req.query;

  const file = await getScreenshot(url, { width: 1440, height: 960 });

  res.setHeader('Content-Type', 'image/png');
  return res.end(file);
};
