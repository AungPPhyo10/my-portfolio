import {Poppins, Lato} from "next/font/google";
import Navbar from './components/navbar';
import Footer from './components/footer';
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets:['latin'], 
  weight: '300'
})

const lato = Lato({
  variable: "--font-lato",
  subsets:['latin'], 
  weight: '700'
})

export const metadata = {
  title: "My Portfolio",
  description: "Built with Next.js and create-next-app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} min-h-screen flex flex-col`}>
        <Navbar/>
        <main className="flex-grow justify-center max-w-[900px] m-auto">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
