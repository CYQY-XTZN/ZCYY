import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "泽辰瑶源",
  description: "金秀道地瑶药数智产业园",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
