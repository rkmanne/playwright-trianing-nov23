import { Page, expect } from "@playwright/test";

export class PlaywrightHomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("https://playwright.dev/");
  }

  async assertTitleContains(text: string) {
    await expect(this.page).toHaveTitle(new RegExp(text, "i"));
  }

  async clickGetStarted() {
    await this.page.getByRole("link", { name: "Get started" }).click();
  }

  async assertDocsPageVisible() {
    await expect(
      this.page.getByRole("heading", { name: "Getting started" })
    ).toBeVisible();
  }
}