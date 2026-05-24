// app/layout.tsx
import "./globals.css";
import { Metadata } from "next";
import { FULL_NAME } from "../utils/variables";

export const metadata: Metadata = {
  title: FULL_NAME,
  authors: [
    {
      name: "Brandon Bing Ng",
      url: "https://bng94.github.io/nextjs-portfolio/",
    },
  ],
  description:
    "Brandon Bing Ng is a software engineer with a Master of Science Degree in Software Engineering and a Bachelor of Science degree in Computer Science who specializes in developing websites.",
  icons: {
    icon: "/nextjs-portfolio/favicon.ico",
  },
};

export const viewport = "width=device-width, initial-scale=1";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
