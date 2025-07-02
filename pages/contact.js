// pages/contact.js
import styles from '../styles/Home.module.css';

export default function Contact() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1>Let's Build Something Great Together</h1>
        <p>
          Have a project in mind or want to learn more about our services? We'd love to hear from you.
        </p>
        <a href="mailto:info@northstreamsolutions.com" className={styles.ctaButton}>
          Email Us
        </a>
      </div>
    </main>
  );
}