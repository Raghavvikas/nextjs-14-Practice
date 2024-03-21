import { Inter } from "next/font/google";
import "./globals.css";
import HeaderPage from "./header/page";
import FooterPage from "./footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Practice Next Js As Raghav",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderPage />
        <div
          style={{
            position: "absolute",
            textAlign: "center",
            marginLeft: "47%",
            marginTop: "20%",
          }}
        >
          {children}
        </div>
        <FooterPage />
      </body>
    </html>
  );
}