/// <reference types="vitest"/>

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { configDefaults } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTEsts.ts"],
    coverage: {
      exclude: [...configDefaults.coverage.exclude, "*/types*", "src/main.tsx"]
    }
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }]
  }
});
