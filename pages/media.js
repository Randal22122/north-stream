// pages/media.js
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Media() {
  return (
    <>
      <Head>
        <title>News & Insights - North Stream Solutions</title>
        <meta name="description" content="Stay informed with our latest articles, announcements, and expert industry analysis." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${styles.sectionGrayBg}`}>
        <div className={styles.textCenter}>
            <h1 className={styles.sectionTitle}>News & Insights from North Stream Solutions</h1>
            <p className={styles.sectionSubtitle}>Stay informed with our latest articles, announcements, and expert industry analysis designed to help your business.</p>
            <div className={`${styles.grid} ${styles.mediaGrid} ${styles.mt10}`}>
                <div className={styles.mediaCard}>
                    <h3 className={styles.mediaCardTitle}>Q3 2025 Market Analysis: Opportunities for Local Service Businesses</h3>
                    <p className={styles.mediaCardText}>An in-depth look at the prevailing market trends and growth opportunities specifically tailored for local service businesses in the coming quarter.</p>
                    <Link href="#" className={`${styles.navLink} ${styles.textBlue600} ${styles.textLeft} ${styles.mt6} block`}>Read More &rarr;</Link>
                </div>
                <div className={styles.mediaCard}>
                    <h3 className={styles.mediaCardTitle}>The Future of AI in Small Business: What You Need to Know</h3>
                    <p className={styles.mediaCardText}>Exploring how artificial intelligence is reshaping industries and what practical implications it holds for your small business strategy and efficiency.</p>
                    <Link href="#" className={`${styles.navLink} ${styles.textBlue600} ${styles.textLeft} ${styles.mt6} block`}>Read More &rarr;</Link>
                </div>
                <div className={styles.mediaCard}>
                    <h3 className={styles.mediaCardTitle}>5 Essential Cybersecurity Tips for Small Businesses in 2025</h3>
                    <p className={styles.mediaCardText}>Practical advice to protect your business from the most common cyber threats and build a stronger digital defense.</p>
                    <Link href="#" className={`${styles.navLink} ${styles.textBlue600} ${styles.textLeft} ${styles.mt6} block`}>Read More &rarr;</Link>
                </div>
                <div className={styles.mediaCard}>
                    <h3 className={styles.mediaCardTitle}>Optimizing Your Client Onboarding Process with Automation</h3>
                    <p className={styles.mediaCardText}>Discover how automating client onboarding can save time, reduce errors, and create a seamless experience for new customers.</p>
                    <Link href="#" className={`${styles.navLink} ${styles.textBlue600} ${styles.textLeft} ${styles.mt6} block`}>Read More &rarr;</Link>
                </div>
            </div>
        </div>
      </main>
    </>
  );
}
// This page serves as a media hub for North Stream Solutions,
// featuring the latest news, insights, and expert analysis relevant to small businesses.
// It includes articles on market trends, AI implications, cybersecurity tips, and process optimization.
// The layout is designed to be clean and informative, with a focus on providing valuable content to
// help businesses stay ahead in the digital landscape.
// The media section is a key part of the company's commitment to sharing knowledge and fostering community engagement.
// It allows visitors to stay updated on industry developments and learn from expert insights,
// enhancing their understanding of how to navigate the evolving business environment.