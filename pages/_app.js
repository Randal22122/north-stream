// pages/_app.js
import '../styles/globals.css';
import styles from '../styles/Nav.module.css'; // For Navbar styles
import homeStyles from '../styles/Home.module.css'; // For Footer styles (and global body style)
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

// Reusable Navbar Component
function Navbar() {
  const router = useRouter();
  const [theme, setTheme] = useState('light'); // Default theme state

  useEffect(() => {
    // Check for user's preferred theme from localStorage or browser preference
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      document.body.setAttribute('data-theme', storedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.body.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Persist preference
  };

  const getLinkClass = (path) => {
    return router.pathname === path
      ? `${styles.link} ${styles.activeLink}`
      : styles.link;
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
          <img src="https://placehold.co/40x40/39657F/ffffff?text=NS" alt="North Stream Solutions Logo" className={styles.logoImage} /> {/* Updated logo color */}
          <span className={styles.logoText}>North Stream Solutions</span>
      </div>
      <div className={styles.links}>
        <Link href="/" className={getLinkClass('/')}>Home</Link>
        <Link href="/services" className={getLinkClass('/services')}>Services</Link>
        <Link href="/company" className={getLinkClass('/company')}>Company</Link>
        <Link href="/media" className={getLinkClass('/media')}>News & Insights</Link>
        <Link href="/contact" className={getLinkClass('/contact')}>Contact</Link>
        {/* Theme Toggle Button */}
        <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle theme">
          {theme === 'light' ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0112 21.75c-5.385 0-9.75-4.365-9.75-9.75S6.615 2.25 12 2.25c2.474 0 4.744.974 6.472 2.564A9.718 9.718 0 0121.752 15.002z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12H5.25m-.386-6.364l1.591 1.591M12 12.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
            </svg>
          )}
        </button>
      </div>
      <div className="md:hidden">
          {/* Mobile Menu Button (Placeholder for future JS toggle) */}
          <button className={styles.mobileMenuButton}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
      </div>
    </nav>
  );
}

// Reusable Footer Component
function Footer() {
  return (
    <footer className={homeStyles.footer}>
      <div className={homeStyles.footerContent}>
          <div className={styles.logoContainer}> {/* Reusing logo container style from Nav.module.css */}
              <img src="https://placehold.co/40x40/39657F/ffffff?text=NS" alt="North Stream Solutions Logo" className={styles.logoImage} /> {/* Updated logo color */}
              <span className={styles.logoText}>North Stream Solutions</span>
          </div>
          <div className={homeStyles.footerNav}>
              <Link href="/" className={homeStyles.footerNavLink}>Home</Link>
              <Link href="/company" className={homeStyles.footerNavLink}>About Us</Link>
              <Link href="/services" className={homeStyles.footerNavLink}>Services</Link>
              <Link href="/media" className={homeStyles.footerNavLink}>News & Insights</Link>
              <Link href="/contact" className={homeStyles.footerNavLink}>Contact</Link>
          </div>
          <div className={homeStyles.footerSocials}>
              {/* Social Media Icons - Placeholders */}
              <a href="#" className={homeStyles.footerSocialLink} aria-label="Facebook">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className={homeStyles.footerSocialLink} aria-label="LinkedIn">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
              </a>
          </div>
          <p className={homeStyles.footerCopyright}>&copy; {new Date().getFullYear()} North Stream Solutions LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <div className={homeStyles.body}> {/* Apply global body styles here */}
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}