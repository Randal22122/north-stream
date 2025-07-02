// pages/index.js
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Unlock Growth & Gain Peace of Mind for Your Local Service Business.</h1>
        <p>
          North Stream Solutions optimizes your digital presence, streamlines operations and technology,
          and fortifies cybersecurity, delivering clarity and confidence.
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          Schedule a Free Consultation
        </Link>
      </section>

      {/* About Us / Who We Help Section - Integrated into Home for a single-page feel */}
      <section className={`${styles.main} ${styles.aboutSection}`}> {/* Added aboutSection for potential specific styling */}
        <div className={styles.hero}> {/* Reusing hero class for centering/max-width */}
          <h2>Your Partner for Digital Clarity & Growth</h2>
          <p>
            At North Stream Solutions, we understand the unique challenges faced by local service businesses
            like accounting firms, salons, and barber shops. You're dedicated to your clients, but often find
            yourself navigating complex digital landscapes, struggling with inefficient processes, or worrying
            about cybersecurity risks. We step in to simplify technology, empowering you with streamlined
            operations, a powerful online presence, and robust digital security. Our goal is to provide the
            tools and confidence you need to thrive.
          </p>
        </div>
      </section>

      {/* Benefits / Why Choose Us Section - Also integrated into Home */}
      <section className={`${styles.main} ${styles.benefitsSection}`}> {/* Added benefitsSection for potential specific styling */}
        <div className={styles.hero}> {/* Reusing hero class for centering/max-width */}
          <h2>Why Choose North Stream Solutions?</h2>
          <ul className={styles.benefitsList}> {/* You might need to add .benefitsList to Home.module.css */}
            <li>
              <strong>Clarity & Confidence:</strong> We demystify tech, providing clear guidance and actionable plans
              so you feel secure and in control.
            </li>
            <li>
              <strong>Efficiency & Savings:</strong> Streamlined operations mean more time saved, fewer errors,
              and ultimately, more profit for your business.
            </li>
            <li>
              <strong>Professional Online Presence:</strong> Attract more clients with a modern, effective digital
              storefront that truly represents your brand.
            </li>
            <li>
              <strong>Robust Security:</strong> Protect your valuable data and reputation from evolving cyber threats
              with practical, tailored safeguards.
            </li>
            <li>
              <strong>Local Focus, Personal Touch:</strong> We understand the nuances of local businesses in Utah and
              offer personalized service you won't find with large firms.
            </li>
          </ul>
        </div>
      </section>

      {/* Secondary Call to Action Section */}
      <section className={`${styles.main} ${styles.ctaSecondary}`}> {/* Added ctaSecondary for potential specific styling */}
        <div className={styles.hero}>
          <h2>Ready to Transform Your Business?</h2>
          <Link href="/contact" className={styles.ctaButton}>
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
