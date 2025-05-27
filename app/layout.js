import {Poppins} from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: '300'
})

export const metadata = {
  title: "My Portfolio",
  description: "Built with Next.js and create-next-app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} flex justify-center items-center min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
