// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>North Stream Solutions - Empowering Your Digital Future</title>
        <meta name="description" content="Strategic IT Consulting, Cybersecurity, and Digital Presence Solutions for Small Businesses." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <header id="hero" className={styles.heroSection}>
          <div className={styles.heroBackground} style={{ backgroundImage: "url('https://placehold.co/1920x1080/212120/ffffff?text=Digital+Abstract')" }}></div> {/* Updated background image color */}
          <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                  Empowering Your Business in the Digital Age
              </h1>
              <p className={styles.heroSubtitle}>
                  Strategic IT Consulting, Cybersecurity, and Digital Presence Solutions for Small Businesses.
              </p>
              <Link href="/contact" className={styles.ctaButton}>
                  Get Started Today
              </Link>
          </div>
      </header>

      <main className={styles.main}>
        {/* About Us / Who We Help Section - Adjusted for homepage summary */}
        <section className={`${styles.section} ${styles.sectionWhiteBg}`}>
            <div className={styles.textCenter}>
                <h2 className={styles.sectionTitle}>Your Partner for Digital Clarity & Growth</h2>
                <p className={styles.sectionSubtitle}>
                    At North Stream Solutions, we understand the unique challenges faced by local service businesses
                    like accounting firms, salons, and barber shops. You're dedicated to your clients, but often find
                    yourself navigating complex digital landscapes, struggling with inefficient processes, or worrying
                    about cybersecurity risks. We step in to simplify technology, empowering you with streamlined
                    operations, a powerful online presence, and robust digital security. Our goal is to provide the
                    tools and confidence you need to thrive.
                </p>
                <Link href="/company" className={`${styles.ctaButton} ${styles.cardButtonBlue}`}>Learn More About Us</Link>
            </div>
        </section>

        {/* Why Choose Us Section */}
        <section className={`${styles.section} ${styles.sectionGrayBg}`}>
            <div className={styles.textCenter}>
                <h2 className={styles.sectionTitle}>Why Choose North Stream Solutions?</h2>
                <p className={styles.sectionSubtitle}>
                    We combine expert knowledge with a personalized touch, ensuring our strategies are practical, sustainable, and perfectly aligned with your unique business objectives.
                </p>
                <div className={`${styles.grid} ${styles.gridMd3} ${styles.mt10}`}>
                    <div className={styles.aboutCard}>
                        <h3 className={styles.aboutCardTitle}>Clarity & Confidence</h3>
                        <p className={styles.aboutCardText}>We demystify tech, providing clear guidance and actionable plans so you feel secure and in control.</p>
                    </div>
                    <div className={styles.aboutCard}>
                        <h3 className={styles.aboutCardTitle}>Efficiency & Savings</h3>
                        <p className={styles.aboutCardText}>Streamlined operations mean more time saved, fewer errors, and ultimately, more profit for your business.</p>
                    </div>
                    <div className={styles.aboutCard}>
                        <h3 className={styles.aboutCardTitle}>Professional Online Presence</h3>
                        <p className={styles.aboutCardText}>Attract more clients with a modern, effective digital storefront that truly represents your brand.</p>
                    </div>
                    <div className={styles.aboutCard}>
                        <h3 className={styles.aboutCardTitle}>Robust Security</h3>
                        <p className={styles.aboutCardText}>Protect your valuable data and reputation from evolving cyber threats with practical, tailored safeguards.</p>
                    </div>
                    <div className={styles.aboutCard}>
                        <h3 className={styles.aboutCardTitle}>Local Focus, Personal Touch</h3>
                        <p className={styles.aboutCardText}>We understand the nuances of local businesses in Utah and offer personalized service you won't find with large firms.</p>
                    </div>
                    <div className={styles.aboutCard}>
                        <h3 className={styles.aboutCardTitle}>Transparent & Fair Pricing</h3>
                        <p className={styles.aboutCardText}>Clear, upfront pricing with no hidden fees, ensuring you know exactly what to expect from your investment.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Services Teaser Section */}
        <section className={`${styles.section} ${styles.sectionWhiteBg}`}>
            <div className={styles.textCenter}>
                <h2 className={styles.sectionTitle}>Explore Our Services</h2>
                <p className={styles.sectionSubtitle}>
                    From foundational cybersecurity to comprehensive digital transformation, we have solutions tailored for your business.
                </p>
                <Link href="/services" className={`${styles.ctaButton} ${styles.cardButtonBlue}`}>View All Services & Pricing</Link>
            </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className={`${styles.section} ${styles.testimonialsSection}`}>
            <div className={styles.textCenter}>
                <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
                <p className={styles.sectionSubtitle}>
                    Hear directly from business owners who have transformed their operations and peace of mind with North Stream Solutions.
                </p>
                <div className={`${styles.grid} ${styles.gridMd2} ${styles.mt10}`}>
                    <div className={styles.testimonialCard}>
                        <p className={styles.testimonialQuote}>"North Stream Solutions completely demystified cybersecurity for my salon. I feel so much more secure and confident about our client data now!"</p>
                        <p className={styles.testimonialAuthor}>Jane Doe, Owner of "The Glamour Studio"</p>
                        <p className={styles.testimonialCompany}>Local Salon, Utah</p>
                    </div>
                    <div className={styles.testimonialCard}>
                        <p className={styles.testimonialQuote}>"Their team streamlined our invoicing process, saving us hours every week. The efficiency blueprint was a game-changer for our accounting firm."</p>
                        <p className={styles.testimonialAuthor}>John Smith, Managing Partner at "Summit Accounting"</p>
                        <p className={styles.testimonialCompany}>Accounting Firm, Utah</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Secondary Call to Action Section */}
        <section className={`${styles.section} ${styles.sectionGrayBg}`}>
            <div className={styles.textCenter}>
                <h2 className={styles.sectionTitle}>Ready to Transform Your Business?</h2>
                <p className={styles.sectionSubtitle}>
                    Let's discuss how North Stream Solutions can help your business achieve digital clarity, efficiency, and security.
                </p>
                <Link href="/contact" className={`${styles.ctaButton} ${styles.cardButtonBlue}`}>
                    Schedule a Consultation
                </Link>
            </div>
        </section>
      </main>
    </>
  );
}
// This is the main page of the North Stream Solutions website.
// It includes a hero section, about us summary, why choose us, services teaser, testimonials,
// and a secondary call to action.
// The layout is designed to be clean and informative, with a focus on providing valuable content to
// help businesses understand the benefits of partnering with North Stream Solutions.