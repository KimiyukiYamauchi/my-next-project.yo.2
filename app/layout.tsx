import "./globals.css";
import Hearder from "./_components/Hearder";
import Footer from "./_components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Hearder />
        {children}
        <Footer />
      </body>
    </html>
  );
}
