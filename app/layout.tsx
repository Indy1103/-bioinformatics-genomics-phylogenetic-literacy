import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/source-sans-3/400.css";
import "@fontsource/source-sans-3/600.css";
import "@fontsource/source-sans-3/700.css";
import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phylogenetic Literacy for Medical Students",
  description:
    "A practical one-page guide to phylogenetics, genomics, and bioinformatics for medical students."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
