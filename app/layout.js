import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IIIT NAYA RAIPUR CLONE WEBSITE",
  description: "Official Clone Website for students of IIIT Naya Raipur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="IIIT Naya Raipur, IIITNR, Education, College" />
        <meta name="author" content="Your Name" />
        <link rel="canonical" href="https://your-website-domain.com/" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {/* Navigation Bar */}
        <header>
          <Navbar />
        </header>

        {/* Main Content */}
        <main
          id="main-content"
          className="max-w-[1550px] mx-auto px-2 md:px-4 pt-[150px] pb-20" // Added bottom padding to ensure space for footer
        >
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-4 text-center mt-auto">
          <p>
            © {new Date().getFullYear()} IIIT Naya Raipur. All Rights Reserved.{" "}
          </p>
        </footer>
      </body>
    </html>
  );
}
