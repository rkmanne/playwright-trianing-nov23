// Basic types
const baseUrl: string = "https://playwright.dev";
let retryCount: number = 3;
let isLoggedIn: boolean = false;

// Interface for a login response
interface LoginResponse {
  success: boolean;
  token?: string;
}

function login(username: string, password: string): LoginResponse {
  if (username === "admin" && password === "password") {
    return { success: true, token: "fake-jwt-token" };
  }
  return { success: false };
}

// Arrow function
const buildUrl = (path: string): string => {
  return `${baseUrl}${path}`;
};

// Simple class to mimic a Page Object
class LoginPage {
  readonly url: string;
  constructor(baseUrl: string) {
    this.url = `${baseUrl}/login`;
  }

  async login(username: string, password: string): Promise<LoginResponse> {
    // In real tests, Playwright would interact with UI.
    return login(username, password);
  }
}

async function main(): Promise<void> {
  const page = new LoginPage(baseUrl);
  console.log("Login page URL:", page.url);

  const response = await page.login("admin", "password");
  console.log("Login success:", response.success);
}

main();