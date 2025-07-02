// pages/services.js
import styles from '../styles/Home.module.css';

export default function Services() {
  return (
    <main className={styles.main}>
      <h1>Our Tailored Solutions</h1>
      <p>We provide expert services designed to optimize your digital presence, streamline operations, and fortify your cybersecurity.</p>
      <div className={styles.grid}>
        {/* Service 1: Small Business Digital Security Health Check */}
        <div className={styles.card}>
          <h3>Fortify Your Foundation: Digital Security Health Check</h3>
          <p>
            Get a clear picture of your business's digital vulnerabilities. We conduct a non-technical assessment of your
            current security practices, from network basics to data handling, providing actionable steps to mitigate risks
            and enhance your protection against cyber threats.
          </p>
          <p className={styles.priceDisplay}>$250 - $350 (Fixed Fee)</p> {/* You might need to add .priceDisplay to Home.module.css */}
        </div>

        {/* Service 2: Simple Online Presence Setup (1-Page Site) */}
        <div className={styles.card}>
          <h3>Launch Your Digital Storefront: Simple Online Presence Setup</h3>
          <p>
            Establish or refresh your essential online presence with a professional, mobile-friendly 1-page website.
            We ensure your business is easily found online, clearly showcases your services, and effectively captures
            new leads, giving you a credible digital 'front door'.
          </p>
          <p className={styles.priceDisplay}>$750 - $1,500 (Fixed Fee)</p>
        </div>

        {/* Service 3: Streamlining Operations & Technology */}
        <div className={styles.card}>
          <h3>Boost Productivity: Streamlining Operations & Technology</h3>
          <p>
            Transform your daily workflows from tedious to seamless. We analyze your existing processes and technology usage
            (including tools like Microsoft 365, CRM, booking systems, etc.), then implement tailored solutions to automate
            tasks, improve communication, and maximize efficiency, saving you valuable time and resources.
          </p>
          <p className={styles.priceDisplay}>$75 - $125 per hour (For custom projects & deeper optimization)</p>
        </div>
      </div>
    </main>
  );
}
