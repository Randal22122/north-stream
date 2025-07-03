// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
// This file is used to customize the HTML document structure in Next.js.
// It includes the necessary links for Google Fonts and sets the language attribute for accessibility.
// The <Html> component wraps the entire document, and <Head> is used for metadata and links.
// <Main> is where the main content of the page will be rendered, and <NextScript> is where Next.js will inject its scripts.
// This setup ensures that your application has the correct structure and styles applied globally.
// You can add more metadata or links in the <Head> section
// as needed for SEO or other purposes.
// without affecting the main content of your application.
// This file is essential for setting up the document structure in a Next.js application,
// ensuring that styles and scripts are loaded correctly across all pages.
// and that the document is accessible and SEO-friendly.