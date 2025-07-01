import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2>About North Stream Solutions</h2>
          <p>
            North Stream Solutions is dedicated to delivering modern, reliable, and innovative business solutions.
            Our experienced team is passionate about helping clients succeed.
          </p>
        </section>
      </main>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} North Stream Solutions. All rights reserved.
      </footer>
    </div>
  );
}
