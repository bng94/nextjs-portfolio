const dev = process.env.NODE_ENV !== "production";
export const SERVER = dev
  ? "http://localhost:3000"
  : "https://nextjs-portfolio-bng94.vercel.app/";
