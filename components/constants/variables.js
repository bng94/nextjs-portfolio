export const FULL_NAME = "Brandon Bing Ng";
export const GRADUATE_DEGREE = "Software Engineer M.S.";
export const UNDERGRADUATE_DEGREE = "Computer Science B.S.";
export const LOCATION = "New York Metropolitan Area";
export const LINKEDIN_URL = "https://www.linkedin.com/in/bng94";
export const GITHUB_URL = "https://www.github.com/bng94";
export const EMAIL_ADDRESS = "Brandon.Bing.Ng@gmail.com";
export const MONTHS_ABBREVIATIONS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const dev = process.env.NODE_ENV !== "production";
export const SERVER = dev
  ? "http://localhost:3000"
  : "https://nextjs-portfolio-bng94.vercel.app/";
