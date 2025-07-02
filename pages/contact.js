// pages/contact.js
import styles from '../styles/Home.module.css';

export default function Contact() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1>Ready to Transform Your Business?</h1>
        <p>
          Let's discuss how North Stream Solutions can help your business achieve digital clarity, efficiency, and security.
          We'd love to hear from you.
        </p>

        {/* Contact Details */}
        <div className={styles.contactDetails}> {/* You might need to add .contactDetails to Home.module.css */}
          <p>Email: <a href="mailto:info@north-stream.xyz" className={styles.link}>info@north-stream.xyz</a></p>
          <p>Phone: (Your Professional Phone Number)</p> {/* Replace with your actual phone number */}
          <p>Schedule a Free Consultation to get started.</p>
        </div>

        {/* Simple Contact Form Placeholder */}
        <form className={styles.contactForm}> {/* You might need to add .contactForm and other form styles to Home.module.css */}
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" className={styles.formInput} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" className={styles.formInput} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone (Optional):</label>
            <input type="tel" id="phone" name="phone" className={styles.formInput} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" className={styles.formTextarea} required></textarea>
          </div>
          <button type="submit" className={styles.ctaButton}>
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
