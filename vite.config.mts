import {defineConfig, transformWithEsbuild} from "vite";
import react from "@vitejs/plugin-react";
import macrosPlugin from "vite-plugin-babel-macros";
import svgrPlugin from "vite-plugin-svgr";
import commonjs from "vite-plugin-commonjs";
// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  esbuild: {
    jsxFactory: "jsx",
    jsxInject: `import { jsx } from '@emotion/react'`,
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    {
      name: "svg-react-jsx-compat",
      enforce: "pre",
      async transform(code, id) {
        if (!id.endsWith(".svg?react")) return null;
        return transformWithEsbuild(code, id, {
          loader: "jsx",
        });
      },
    },
    macrosPlugin(),
    react({
      jsxRuntime: "classic",
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
    svgrPlugin({
      include: "**/*.svg?react",
      esbuildOptions: {
        loader: "jsx",
      },
    }),
    commonjs(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern"
      },
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
  },
  build: {
    outDir: "build",
    emptyOutDir: true,
    assetsInlineLimit: 0,
  },
  server: {
    port: 3000,
    proxy: {
      "/assets": "http://localhost:3001",
      "^/(export|import).*": "http://localhost:3001",
      "/upload": "http://localhost:3001",
    },
  },
  optimizeDeps: {
    rolldownOptions: {
      moduleTypes: {
        ".js": "jsx",
      },
    },
  },
});
