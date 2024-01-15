import { test, expect } from "@playwright/test";

test.describe("Hello World", () => {
  test("gives hello world string", async ({ request }) => {
    const FRUIT_NAME = process.env.FRUIT_NAME;
    const response = await request.get("/hello-fruit");
    const jsonResponse = await response.json();
    expect(jsonResponse.status).toBe(200);
    expect(jsonResponse.statusText).toBe(`Hello! My fruit is ${FRUIT_NAME}`);
  });
})
