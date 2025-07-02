// pages/services.js
import styles from '../styles/Home.module.css';

export default function Services() {
  return (
    <main className={styles.main}>
      <h1>Our Expertise</h1>
      <p>We provide tailored solutions to meet your unique business needs.</p>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Strategic Consulting</h3>
          <p>Navigate market complexities with data-driven insights and strategic planning to unlock sustainable growth.</p>
        </div>
        <div className={styles.card}>
          <h3>Custom Development</h3>
          <p>From web applications to enterprise software, we build scalable and secure solutions that perform.</p>
        </div>
        <div className={styles.card}>
          <h3>Continuous Support</h3>
          <p>Our commitment doesn't end at launch. We provide ongoing support and optimization to ensure your success.</p>
        </div>
      </div>
    </main>
  );
}