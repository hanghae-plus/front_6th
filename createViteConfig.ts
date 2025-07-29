import { defineConfig as defineTestConfig, mergeConfig, type ViteUserConfig } from "vitest/config";
import { defineConfig, type UserConfig } from "vite";

export function createViteConfig(options: UserConfig = {}, testOptions: ViteUserConfig["test"] = {}): UserConfig {
  return mergeConfig(
    defineConfig(options),
    defineTestConfig({
      test: {
        globals: true,
        environment: "jsdom",
        exclude: ["**/e2e/**", "**/*.e2e.spec.ts", "**/node_modules/**"],
        ...testOptions,
      },
    }),
  );
}
