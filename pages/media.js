// pages/media.js
import styles from '../styles/Home.module.css';

export default function Media() {
  return (
    <main className={styles.main}>
      <h1>News & Insights from North Stream Solutions</h1>
      <p>Stay informed with our latest articles, announcements, and expert industry analysis designed to help your business.</p>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Q3 2025 Market Analysis: Opportunities for Local Service Businesses</h3>
          <p>An in-depth look at the prevailing market trends and growth opportunities specifically tailored for local service businesses in the coming quarter.</p>
        </div>
        <div className={styles.card}>
          <h3>The Future of AI in Small Business: What You Need to Know</h3>
          <p>Exploring how artificial intelligence is reshaping industries and what practical implications it holds for your small business strategy and efficiency.</p>
        </div>
      </div>
    </main>
  );
}
