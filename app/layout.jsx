import "./globals.css";
import Link from "next/link";

const layout = ({ children }) => {
  return (
    <html>
      <body>
        <header>
          <div className="container header--container">
            <div className="nav">
              <Link className="link" href="/">
                <img src="/logo.svg" alt="logo" />
              </Link>
              <Link className="link" href="/pricing">Pricing</Link>
              <Link className="link" href="/about">About</Link>
              <Link className="link" href="/contact">Contact</Link>
            </div>
            <Link className="demo" href="">Schedule a Demo</Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
};

export default layout;
