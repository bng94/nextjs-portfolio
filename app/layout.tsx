// app/layout.tsx
import "./globals.css";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { FULL_NAME } from "../utils/variables";

export const metadata: Metadata = {
  title: FULL_NAME,
  authors: [
    {
      name: "Brandon Bing Ng",
      url: "https://www.ngbrandon.com",
    },
  ],
  description:
    "Brandon Bing Ng is a software engineer with a Master of Science Degree in Software Engineering and a Bachelor of Science degree in Computer Science who specializes in developing websites.",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
