import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";

export default defineConfig({
  plugins: [
    { enforce: "pre" as const, ...mdx({ providerImportSource: "@mdx-js/react" }) },
    react(),
  ],
  base: "./",
  assetsInclude: ["**/*.zip", "**/*.pdf", "**/*.mp4"],
});
