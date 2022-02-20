const devMode = process.env.NODE_ENV !== "production";

export const server = devMode
  ? "http://localhost:3000"
  : "https://yourwwebsite.com";
