import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-manrope",
});
export const metadata = {
  title:
    "Solar and Electrical Installation Services in Nigeria | Reliable & Efficient Solutionss",
  description:
    "Looking for expert solar panel installation, electrical services, and maintenance in Nigeria? Sungrid offers sustainable, energy-efficient solutions tailored to homes and businesses. Power your future with our top-notch installations and reliable services. Contact us today!",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
