import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Center for Moral Nexus | GIFT University",
  description: "Center for Moral Nexus (CMN), GIFT University",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
