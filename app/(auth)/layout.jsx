import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function authLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={ubuntu.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
