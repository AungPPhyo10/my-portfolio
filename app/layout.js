import {Poppins, Lato} from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: '300'
})

const lato = Lato({
  variable: "--font-lato",
  weight: '700'
})

export const metadata = {
  title: "My Portfolio",
  description: "Built with Next.js and create-next-app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} min-h-screen mx-10`}>
        {children}
      </body>
    </html>
  );
}
