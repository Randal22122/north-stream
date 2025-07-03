// pages/contact.js
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - North Stream Solutions</title>
        <meta name="description" content="Get in touch with North Stream Solutions to discuss your business needs." />
        <link rel="icon" href="/favicon.ico" />
        {/* Add reCAPTCHA script here if you are using Google reCAPTCHA */}
        {/* <script src="https://www.google.com/recaptcha/api.js" async defer></script> */}
      </Head>

      <main className={`${styles.main} ${styles.contactSection}`}>
        <div className={styles.textCenter}>
            <h1 className={styles.sectionTitle}>Ready to Transform Your Business?</h1>
            <p className={styles.sectionSubtitle}>
                Let's discuss how North Stream Solutions can help your business achieve digital clarity, efficiency, and security.
                We'd love to hear from you.
            </p>

            {/* Contact Details */}
            <div className={styles.contactDetails}>
                <p>Email: <a href="mailto:info@north-stream.xyz" className={styles.link}>info@north-stream.xyz</a></p>
                <p>Phone: (Your Professional Phone Number)</p> {/* Replace with your actual phone number */}
                <p>Please send us a message first, and we'll respond with a link to schedule a Discovery Call if there's a good fit.</p>
            </div>

            {/* Simple Contact Form */}
            <form className={styles.contactForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" className={styles.formInput} required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" className={styles.formInput} required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="company">Company Name:</label>
                    <input type="text" id="company" name="company" className={styles.formInput} required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="5" className={styles.formTextarea} required></textarea>
                </div>
                {/* ReCAPTCHA Placeholder - You'll integrate this with Formspree and Google */}
                <div className={styles.formGroup}>
                    {/* Uncomment and replace YOUR_RECAPTCHA_SITE_KEY with your actual site key */}
                    {/* <div className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div> */}
                </div>
                <button type="submit" className={`${styles.ctaButton} ${styles.cardButtonBlue}`}>
                    Send Message
                </button>
            </form>
        </div>
      </main>
    </>
  );
}
// }
// This page serves as the contact page for North Stream Solutions,
// providing a simple form for potential clients to reach out.
// It includes fields for name, email, company name, and a message.
// The form is designed to be straightforward, encouraging users to get in touch easily.
// The contact section emphasizes the company's readiness to assist businesses in achieving digital clarity, efficiency, and