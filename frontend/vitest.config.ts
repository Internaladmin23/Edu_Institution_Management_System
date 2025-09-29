// vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: [
      "src/**/*.{test,spec}.{ts,tsx,js,jsx}",
      "tests/**/*.{test,spec}.{ts,tsx,js,jsx}",
    ],
    exclude: ["node_modules", "dist"],
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"],
    },
  },
});
