import {Lato} from "next/font/google";
import Navbar from './components/navbar';
import Footer from './components/footer';
import "./globals.css";

const lato = Lato({
  subsets:['latin'], 
  weight: '400',
  variable: "--font-lato",
})

export const metadata = {
  title: "My Portfolio",
  description: "Built with Next.js and create-next-app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lato.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar/>
        <main className="flex-grow justify-center max-w-[900px] m-auto">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
