import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Athul Mohan | Frontend Developer",
  description: "A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer/>
        <script src="//code.tidio.co/dugy2h79tzntp8ysen8litbuke2empc4.js" async></script>
      </body>
    </html>
  );
}
