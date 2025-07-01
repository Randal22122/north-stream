import styles from '../styles/Home.module.css';

export default function Services() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Our Services</h2>
          <ul className={styles.services}>
            <li>Consulting</li>
            <li>Development</li>
            <li>Support</li>
          </ul>
          <p>
            We help businesses grow with expert advice, custom software, and ongoing support.
          </p>
        </section>
      </main>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} North Stream Solutions. All rights reserved.
      </footer>
    </div>
  );
}
