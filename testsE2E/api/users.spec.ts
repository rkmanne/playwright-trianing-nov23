import { test, expect, APIRequestContext } from "@playwright/test";

const BASE_URL = "https://jsonplaceholder.typicode.com";

test.describe("Users API", () => {
  let api: APIRequestContext;

  test.beforeAll(async ({ playwright }) => {
    api = await playwright.request.newContext({
      baseURL: BASE_URL,
    });
  });

  test.afterAll(async () => {
    await api.dispose();
  });

  test("GET /users returns list of users", async () => {
    const response = await api.get("/users");
    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBeGreaterThan(0);

    const firstUser = body[0];
    expect(firstUser).toHaveProperty("id");
    expect(firstUser).toHaveProperty("name");
    expect(typeof firstUser.email).toBe("string");
  });

  test("GET /users/1 returns a single user", async () => {
    const response = await api.get("/users/1");
    expect(response.status()).toBe(200);

    const user = await response.json();
    expect(user.id).toBe(1);
    expect(user).toMatchObject({
      id: 1,
      name: expect.any(String),
      email: expect.any(String),
    });
  });
});