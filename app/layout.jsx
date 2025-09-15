import "./globals.css";
import { Manrope } from "next/font/google";
import metadata from "../lib/metadata";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-manrope",
});

export { metadata };

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
