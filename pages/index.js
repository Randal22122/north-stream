import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Welcome to North Stream Solutions</h2>
          <p>
            We provide modern solutions for your business needs. 
            Our team is dedicated to delivering quality and innovation.
          </p>
        </section>
        <section className={styles.section}>
          <h3>Our Services</h3>
          <ul className={styles.services}>
            <li>Consulting</li>
            <li>Development</li>
            <li>Support</li>
          </ul>
        </section>
      </main>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} North Stream Solutions. All rights reserved.
      </footer>
    </div>
  );
}
