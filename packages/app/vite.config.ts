import react from "@vitejs/plugin-react-oxc";
import { createViteConfig } from "../../createViteConfig";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import svgr from "vite-plugin-svgr";

export default createViteConfig({
  base: "/front_6th/",
  plugins: [react(), tailwindcss(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssr: {
    noExternal: ["@uiw/react-markdown-preview"],
  },
});
