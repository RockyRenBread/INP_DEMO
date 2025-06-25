import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 设置相对路径为你的 GitHub 仓库名
  base: "/INP_DEMO/",
  build: {
    // 指定输出目录为 "docs"
    outDir: "docs",
  },
});
