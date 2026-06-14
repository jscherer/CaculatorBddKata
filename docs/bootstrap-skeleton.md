# Bootstrap Skeleton — File Templates

Full file contents for `bootstrap skeleton`. Create each file exactly as shown.

---

## `package.json`

```json
{
  "name": "bdd-kata-skeleton",
  "version": "1.0.0",
  "scripts": {
    "test": "cucumber-js",
    "test:dry": "cucumber-js --dry-run --format summary"
  },
  "devDependencies": {
    "@cucumber/cucumber": "^10.0.0",
    "@playwright/test": "^1.40.0",
    "typescript": "^5.0.0",
    "ts-node": "^10.9.0",
    "@types/node": "^20.0.0"
  }
}
```

---

## `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src/**/*"]
}
```

---

## `cucumber.json`

```json
{
  "default": {
    "require": ["src/support/**/*.ts", "src/steps/**/*.ts"],
    "requireModule": ["ts-node/register"],
    "paths": ["src/features/**/*.feature"],
    "format": ["progress-bar", "html:reports/report.html"],
    "parallel": 0
  }
}
```

---

## `src/support/world.ts`

CustomWorld holds browser/page (UI katas) and a generic `context` map (domain katas).

```typescript
import { World, IWorldOptions, setWorldConstructor } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from '@playwright/test';

export class CustomWorld extends World {
  browser!: Browser;
  browserContext!: BrowserContext;
  page!: Page;
  context: Record<string, unknown> = {};

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);
```

---

## `src/support/hooks.ts`

Browser lifecycle — runs before and after every scenario (including domain katas).
Tag scenarios with `@ui` to skip the browser for domain katas.

```typescript
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
```

---

## `src/features/smoke.feature`

Proves the wiring is correct. Stays in the project permanently.

```gherkin
Feature: Smoke Test

  Scenario: Skeleton is wired correctly
    Given the skeleton is running
```

---

## `src/steps/smoke.steps.ts`

```typescript
import { Given } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';

Given('the skeleton is running', function (this: CustomWorld) {
  // intentionally empty — proves Cucumber + TypeScript wiring works
});
```

---

## `.gitignore`

```
node_modules/
dist/
reports/
```

---

## Folder structure

Create empty dirs with `.gitkeep`:

```
src/
├── features/
├── steps/
├── pages/
└── support/
reports/
```

---

## Install

```bash
npm install
ls "$USERPROFILE/AppData/Local/ms-playwright/chromium"* 2>/dev/null || npx playwright install chromium
```

---

## Common failure causes

- `Cannot find module 'ts-node/register'` → ts-node not installed or requireModule path wrong
- `TypeError: setWorldConstructor is not a function` → wrong import in world.ts
- `0 scenarios` despite feature file existing → paths glob in cucumber.json doesn't match
- `Error: function timed out` in Before hook → Cucumber's default timeout (5s) is too short for Chromium launch; `setDefaultTimeout(30000)` is already in the hooks.ts template above
