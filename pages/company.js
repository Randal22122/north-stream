// pages/company.js
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Company() {
  return (
    <>
      <Head>
        <title>About Us - North Stream Solutions</title>
        <meta name="description" content="Learn about North Stream Solutions' mission, approach, and values." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${styles.aboutSection}`}>
        <div className={styles.textCenter}>
            <h1 className={styles.sectionTitle}>About North Stream Solutions</h1>
            <p className={styles.sectionSubtitle}>
                At North Stream Solutions, we believe that every small business deserves access to top-tier digital strategy, robust cybersecurity, and a powerful online presence. We are dedicated to simplifying complex technology challenges, empowering you to focus on what you do best: growing your business.
            </p>
            <div className={`${styles.grid} ${styles.gridMd3} ${styles.mt10}`}>
                <div className={styles.aboutCard}>
                    <h3 className={styles.aboutCardTitle}>Our Mission</h3>
                    <p className={styles.aboutCardText}>To provide accessible, impactful, and tailored digital solutions that drive efficiency, enhance security, and expand market reach for small and medium-sized businesses.</p>
                </div>
                <div className={styles.aboutCard}>
                    <h3 className={styles.aboutCardTitle}>Our Approach</h3>
                    <p className={styles.aboutCardText}>We combine expert knowledge with a personalized touch, ensuring our strategies are practical, sustainable, and perfectly aligned with your unique business objectives.</p>
                </div>
                <div className={styles.aboutCard}>
                    <h3 className={styles.aboutCardTitle}>Our Values</h3>
                    <p className={styles.aboutCardText}>Integrity, Innovation, Client Empowerment, and Simplicity are at the core of everything we do. We build trust through transparency and results.</p>
                </div>
            </div>
        </div>
      </main>
    </>
  );
}
// This file defines the "About Us" page for North Stream Solutions.
// It includes a brief overview of the company's mission, approach, and values.
// The layout is designed to be clean and informative, with a focus on providing valuable content to
// help businesses understand the benefits of partnering with North Stream Solutions.
// The about section emphasizes the company's commitment to simplifying technology challenges,
// empowering small businesses with digital solutions, and fostering a culture of integrity and innovation.
// This page serves as a key part of the company's online presence, allowing potential clients to learn