import "./globals.css";
import Link from "next/link";

const layout = ({ children }) => {
  return (
    <html>
      <body>
        <header>
                <div>
                <Link href="/"><img src="/logo.svg" alt="logo" /></Link>
                <Link href="/pricing">Pricing</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                </div>
        </header>
        {children}
        </body>
    </html>
  );
};

export default layout;
