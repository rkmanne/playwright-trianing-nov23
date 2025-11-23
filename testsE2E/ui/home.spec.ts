import { test, Page, expect } from "@playwright/test";

class PlaywrightHomePage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("https://playwright.dev");
  }

  async assertTitleContains(text: string) {
    await expect(this.page).toHaveTitle(new RegExp(text, "i"));
  }

  async clickGetStarted() {
    await this.page.click("text=Get started");
  }

  async assertDocsPageVisible() {
    await expect(this.page.locator("h1")).toBeVisible();
  }
}

test.describe("Playwright site smoke tests", () => {
  test("User can navigate to docs from home", async ({ page }) => {
    const home = new PlaywrightHomePage(page);

    await home.goto();
    await home.assertTitleContains("Playwright");
    await home.clickGetStarted();
    await home.assertDocsPageVisible();
  });
});