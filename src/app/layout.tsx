import "./globals.css";
import { Inter, Lato } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "LeCréateur Jewelry - Uniquely Made Rings",
  description:
    "Discover exquisite engagement rings for your special moment crafted ring here in Singapore. Our business offers a stunning collection of handcrafted rings, showcasing timeless elegance and exceptional quality. Find the perfect symbol of love and commitment at Lecreateurjewel. We craft unique engagement rings for your special someone. This is the place buy engagement ring in Singapore. The diamond we use are GIA certified. Contact me at +65 9121 3519 via WhatsApp to book an appointment.",
  openGraph: {
    title: "LeCréateur Jewelry - Uniquely Made Rings",
    description: "The React Framework for the Web",
    url: "https://lecreateurjewel.com",
    siteName: "LeCréateur Jewelry - Uniquely Made Rings",
    images: [
      {
        url: "https://lecreateurjewel.com/lecreateur-og-800.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "https://lecreateurjewel.com/lecreateurjewel-og-1800.jpg",
        width: 1800,
        height: 1600,
        alt: "lecreateur jewellery crafting engagement ring",
      },
    ],
    locale: "en-US",
    type: "website",
  },
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
