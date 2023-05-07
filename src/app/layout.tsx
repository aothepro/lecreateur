import "./globals.css";
import { Inter, Lato } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({ subsets: ["latin"], weight: "300" });

export const metadata = {
  title: "LeCréateur Jewelry - Uniquely Made Rings",
  description:
    "We craft unique Engagement rings for your special person. Contact me at +65 9121 3519 via WhatsApp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${lato.className}`}>{children}</body>
    </html>
  );
}
