import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";

export default function RootLayout({ children }) {
  return (
    <main className="">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
