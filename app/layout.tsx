import "./globals.css";
import { Ubuntu } from "next/font/google";
import NavbarWrapper from "./components/NavbarWrapper";
import { SplashProvider } from "./SplashContext";
import { ReactNode } from "react";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});

export const metadata = {
  title: "Team Obsidian",
  description: "Official Team Obsidian website",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={ubuntu.variable}>
      <body className="antialiased">
        <SplashProvider>
          <NavbarWrapper />
          {children}
        </SplashProvider>
      </body>
    </html>
  );
}
