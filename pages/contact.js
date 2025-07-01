import styles from '../styles/Home.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Contact Us</h2>
          <p>
            Have questions or want to work with us? Email <a href="mailto:info@northstreamsolutions.com">info@northstreamsolutions.com</a>
          </p>
        </section>
      </main>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} North Stream Solutions. All rights reserved.
      </footer>
    </div>
  );
}
