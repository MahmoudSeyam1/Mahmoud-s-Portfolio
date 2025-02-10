import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Correct path - files must be in public directory */}
        <link
          rel="icon"
          href="/favicon.svg"
          type="image/svg+xml"
        />
        <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml" />
        {/* Add fallback for older browsers */}
        <link
          rel="alternate icon"
          href="/favicon.ico"
          type="image/x-icon"
        />
        {/* Apple touch icon for iOS */}
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}