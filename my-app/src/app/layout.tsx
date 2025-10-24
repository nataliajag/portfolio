
import Navbar from "@/app/components/Navbar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}

