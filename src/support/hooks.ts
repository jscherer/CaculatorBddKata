import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { CustomWorld } from './world';

setDefaultTimeout(30000);

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({ headless: true });
  this.browserContext = await this.browser.newContext();
  this.page = await this.browserContext.newPage();
});

After(async function (this: CustomWorld) {
  await this.browserContext?.close();
  await this.browser?.close();
});
