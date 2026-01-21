import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Pokémon Dashboard",
  description: "Educational demo for Web Programming",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen bg-black p-14">
          {children}
        </main>
      </body>
    </html>
  );
}