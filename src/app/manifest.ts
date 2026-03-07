import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "boat2moon - TypeScript全栈工程师",
    short_name: "boat2moon",
    description: "TypeScript全栈工程师，AI应用全栈开发，实现A/B/C端业务闭环交付",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#09090b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
