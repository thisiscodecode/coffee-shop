import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coffee Glacé | کافی گلاسه",
  description:
    "تجربه‌ای منحصر به فرد از طعم قهوه در کافی‌شاپ Coffee Glacé. مرغوب‌ترین قهوه‌های تخصصی، دمنوش‌های طبیعی و دسرهای خانگی.",
  keywords: [
    "کافی شاپ",
    "قهوه",
    "Coffee Glace",
    "کافی گلاسه",
    "اسپرسو",
    "لاته",
    "کاپوچینو",
    "دسر",
    "چای",
  ],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>☕</text></svg>",
  },
  openGraph: {
    title: "Coffee Glacé | کافی گلاسه",
    description: "تجربه‌ای منحصر به فرد از طعم قهوه",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${vazirmatn.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}