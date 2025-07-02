// pages/_app.js
import '../styles/globals.css';
import styles from '../styles/Nav.module.css';
import homeStyles from '../styles/Home.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function Layout({ children }) {
  return <div className={homeStyles.container}>{children}</div>;
}

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const getLinkClass = (path) => {
    return router.pathname === path
      ? `${styles.link} ${styles.activeLink}`
      : styles.link;
  };

  return (
    <Layout>
      <nav className={styles.navbar}>
        <div className={styles.logo}>NSS</div>
        <div className={styles.links}>
          <Link href="/" className={getLinkClass('/')}>Home</Link>
          <Link href="/services" className={getLinkClass('/services')}>Services</Link>
          <Link href="/company" className={getLinkClass('/company')}>Company</Link>
          <Link href="/media" className={getLinkClass('/media')}>Media</Link>
          <Link href="/contact" className={getLinkClass('/contact')}>Contact</Link>
        </div>
      </nav>
      <Component {...pageProps} />
      <footer className={homeStyles.footer}>
        &copy; {new Date().getFullYear()} North Stream Solutions. All rights reserved.
      </footer>
    </Layout>
  );
}