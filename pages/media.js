// pages/media.js
import styles from '../styles/Home.module.css';

export default function Media() {
  return (
    <main className={styles.main}>
      <h1>News & Insights</h1>
      <p>Stay informed with our latest articles, announcements, and industry analysis.</p>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Q3 2025 Market Analysis</h3>
          <p>An in-depth look at the prevailing market trends and opportunities for growth in the coming quarter.</p>
        </div>
        <div className={styles.card}>
          <h3>The Future of AI in Business</h3>
          <p>Exploring how artificial intelligence is reshaping industries and what it means for your business strategy.</p>
        </div>
      </div>
    </main>
  );
}