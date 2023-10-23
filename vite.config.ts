import react from "@vitejs/plugin-react";
import type { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [react()],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "@solaris/core",
      fileName: (format) => `solaris.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
};

export default config;
