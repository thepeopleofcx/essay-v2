import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "What If It All Goes Right? — William & Mary",
  description: "A front-line dispatch from deep within the AI transition.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
