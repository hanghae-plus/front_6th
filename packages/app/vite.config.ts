import react from "@vitejs/plugin-react-oxc";
import { createViteConfig } from "../../createViteConfig";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const base: string = process.env.NODE_ENV === "production" ? "/front_6th/" : "";

export default createViteConfig({
  base,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
