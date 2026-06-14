import { World, IWorldOptions, setWorldConstructor } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from '@playwright/test';

export class CustomWorld extends World {
  browser!: Browser;
  browserContext!: BrowserContext;
  page!: Page;
  context: Record<string, unknown> = {};
  a: number = 0;
  b: number = 0;
  result: number = 0;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);
