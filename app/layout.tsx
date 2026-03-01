import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "What If It All Goes Right?",
    template: "%s | Essay Variants",
  },
  description:
    "An editorial essay experience across two variants: Cinematic Editorial Scroll and Interactive Thesis Lab.",
  openGraph: {
    title: "What If It All Goes Right?",
    description:
      "Explore two premium reading experiences built from one essay: cinematic immersion and interactive thesis lab.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What If It All Goes Right?",
    description: "Two variants. One thesis. Built for deep reading.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
