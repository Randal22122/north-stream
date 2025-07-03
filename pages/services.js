// pages/services.js
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services & Pricing - North Stream Solutions</title>
        <meta name="description" content="Explore our range of strategic IT consulting, cybersecurity, and digital presence solutions for small businesses." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${styles.sectionGrayBg}`}>
        <div className={styles.textCenter}>
            <h1 className={styles.sectionTitle}>Our Services & Pricing</h1>
            <p className={styles.sectionSubtitle}>
                We offer a range of specialized services designed to meet the unique needs of small businesses, from foundational security to comprehensive digital transformation.
            </p>

            {/* Core Services */}
            <h3 className={`${styles.sectionTitle} ${styles.textBlue700} ${styles.mb8}`}>Core Services</h3>
            <div className={`${styles.grid} ${styles.gridMd2} ${styles.gridLg4} ${styles.mb16}`}>
                {/* CyberPulse Check Card */}
                <div className={styles.card}>
                    <div>
                        <h4 className={`${styles.cardTitle} ${styles.textBlue600}`}>CyberPulse Check</h4>
                        <p className={styles.cardPrice}>$500<span className={styles.cardPrice}>/one-time</span></p>
                        <ul className={styles.cardList}>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>High-level Security Assessment</li>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Vulnerability & Risk Matrix</li>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Actionable Remediation Plan</li>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Post-Assessment Debrief</li>
                        </ul>
                    </div>
                    <button className={`${styles.cardButton} ${styles.cardButtonBlue}`}>Learn More</button>
                </div>

                {/* Simple Online Presence Launch Card */}
                <div className={styles.card}>
                    <div>
                        <h4 className={`${styles.cardTitle} ${styles.textBlue600}`}>Simple Online Presence Launch</h4>
                        <p className={styles.cardPrice}>$500<span className={styles.cardPrice}>/one-time</span></p>
                        <ul className={styles.cardList}>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Professional 1-Page Website</li>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Mobile-Friendly Design</li>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Domain & Basic Hosting Setup</li>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Functional Contact Form</li>
                        </ul>
                    </div>
                    <button className={`${styles.cardButton} ${styles.cardButtonBlue}`}>Learn More</button>
                </div>

                {/* Efficiency Blueprint Package Card */}
                <div className={styles.card}>
                    <div>
                        <h4 className={`${styles.cardTitle} ${styles.textBlue600}`}>Efficiency Blueprint Package</h4>
                        <p className={styles.cardPrice}>$500<span className={styles.cardPrice}>/one-time</span></p>
                        <ul className={styles.cardList}>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Current Operations Review</li>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Technology Recommendation</li>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Optimization Plan Development</li>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Strategic Debrief</li>
                        </ul>
                    </div>
                    <button className={`${styles.cardButton} ${styles.cardButtonBlue}`}>Learn More</button>
                </div>

                {/* Productivity Implementation Package Card */}
                <div className={styles.card}>
                    <div>
                        <h4 className={`${styles.cardTitle} ${styles.textBlue600}`}>Productivity Implementation Package</h4>
                        <p className={styles.cardPrice}>$500<span className={styles.cardPrice}>/one-time</span></p>
                        <ul className={styles.cardList}>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>New System Configuration</li>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Automated Workflow Setup</li>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Custom User Guides/SOPs</li>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Basic Data Migration Support</li>
                        </ul>
                    </div>
                    <button className={`${styles.cardButton} ${styles.cardButtonBlue}`}>Learn More</button>
                </div>
            </div>

            {/* Add-on Services */}
            <h3 className={`${styles.sectionTitle} ${styles.textBlue700} ${styles.mb8}`}>Add-on Services</h3>
            <div className={`${styles.grid} ${styles.gridMd2} ${styles.gridLg3} ${styles.mb16}`}>
                {/* Digital Fortification Playbook Add-on Card */}
                <div className={styles.card}>
                    <div>
                        <h4 className={`${styles.cardTitle} ${styles.textPurple600}`}>Digital Fortification Playbook</h4>
                        <p className={styles.cardPrice}>$500<span className={styles.cardPrice}>/one-time</span></p>
                        <ul className={styles.cardList}>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Customizable Security Policies</li>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Security SOPs & Best Practices</li>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Employee Awareness Materials</li>
                        </ul>
                    </div>
                    <button className={`${styles.cardButton} ${styles.cardButtonPurple}`}>Add to Service</button>
                </div>

                {/* Expanded Web Presence Add-on Card */}
                <div className={styles.card}>
                    <div>
                        <h4 className={`${styles.cardTitle} ${styles.textPurple600}`}>Expanded Web Presence</h4>
                        <p className={styles.cardPrice}>$100<span className={styles.cardPrice}>/per page</span></p>
                        <ul className={styles.cardList}>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Additional Website Pages</li>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Content Integration for New Pages</li>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Navigation Updates</li>
                        </ul>
                    </div>
                    <button className={`${styles.cardButton} ${styles.cardButtonPurple}`}>Add to Service</button>
                </div>

                {/* Digital Visibility Boost Add-on Card */}
                <div className={styles.card}>
                    <div>
                        <h4 className={`${styles.cardTitle} ${styles.textPurple600}`}>Digital Visibility Boost</h4>
                        <p className={styles.cardPrice}>$500<span className={styles.cardPrice}>/one-time</span></p>
                        <ul className={styles.cardList}>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Basic On-Page SEO</li>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Google Analytics Setup</li>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Basic SEO & Analytics Overview</li>
                        </ul>
                    </div>
                    <button className={`${styles.cardButton} ${styles.cardButtonPurple}`}>Add to Service</button>
                </div>

                {/* Team Empowerment Training Add-on Card */}
                <div className={styles.card}>
                    <div>
                        <h4 className={`${styles.cardTitle} ${styles.textPurple600}`}>Team Empowerment Training</h4>
                        <p className={styles.cardPrice}>$500<span className={styles.cardPrice}>/one-time</span></p>
                        <ul className={styles.cardList}>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Practical User Training</li>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>New Systems & Workflows</li>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Digital Security Best Practices</li>
                        </ul>
                    </div>
                    <button className={`${styles.cardButton} ${styles.cardButtonPurple}`}>Add to Service</button>
                </div>
            </div>

            {/* Combined Packages */}
            <h3 className={`${styles.sectionTitle} ${styles.textBlue700} ${styles.mb8}`}>Combined Packages</h3>
            <div className={`${styles.grid} ${styles.gridMd2} ${styles.mb16}`}>
                {/* Combined Package Discount Card */}
                <div className={`${styles.card} ${styles.cardBorderBlue}`}>
                    <div>
                        <h4 className={`${styles.cardTitle} ${styles.textBlue600}`}>Combined Package Discount</h4>
                        <p className={styles.cardPrice}>10% OFF<span className={styles.cardPrice}>/on 2-4 Core Services</span></p>
                        <ul className={styles.cardList}>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Bundle Any 2-4 Core Services</li>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Receive a 10% Discount</li>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Tailored Solutions</li>
                        </ul>
                    </div>
                    <button className={`${styles.cardButton} ${styles.cardButtonBlue}`}>Build Your Bundle</button>
                </div>

                {/* Total Transformation Bundle Card */}
                <div className={`${styles.card} ${styles.cardGradient}`}>
                    <div>
                        <h4 className={styles.cardTitle}>Total Transformation Bundle</h4>
                        <p className={styles.cardPrice}>$2,340<span className={styles.cardPrice}>/one-time</span></p>
                        <p className={`${styles.fontSemibold} ${styles.mb2}`}>Original Value: <span className={styles.lineThrough}>$3,900</span></p>
                        <p className={`${styles.fontSemibold} ${styles.mb6}`}>You Save: <span className={styles.fontBold}>40%</span></p>
                        <ul className={styles.cardList}>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Includes ALL Core Services!</li>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Includes ALL Add-on Services!</li>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Complete Digital Overhaul</li>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Maximum Value & Impact</li>
                        </ul>
                    </div>
                    <button className={`${styles.cardButton} ${styles.cardButtonWhite}`}>Get the Full Bundle</button>
                </div>
            </div>

            {/* Monthly Retainer */}
            <h3 className={`${styles.sectionTitle} ${styles.textBlue700} ${styles.mb8}`}>Ongoing Support & Retainers</h3>
            <div className={`${styles.grid} ${styles.gridMd3}`}>
                {/* Essential Care Card */}
                <div className={styles.card}>
                    <div>
                        <h4 className={`${styles.cardTitle} ${styles.textGray800}`}>Essential Care</h4>
                        <p className={styles.cardPrice}>$250<span className={styles.cardPrice}>/month</span></p>
                        <ul className={styles.cardList}>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Up to 2 Hours Support</li>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Priority Email Support</li>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Basic Uptime Monitoring</li>
                        </ul>
                    </div>
                    <button className={`${styles.cardButton} ${styles.cardButtonGray}`}>Select Plan</button>
                </div>

                {/* Growth Partner Card */}
                <div className={`${styles.card} ${styles.cardBorderBlue}`}>
                    <div>
                        <h4 className={`${styles.cardTitle} ${styles.textBlue600}`}>Growth Partner</h4>
                        <p className={styles.cardPrice}>$450<span className={styles.cardPrice}>/month</span></p>
                        <ul className={styles.cardList}>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Up to 4 Hours Support</li>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Priority Email & Phone</li>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Proactive Security Monitoring</li>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Monthly Strategic Call</li>
                        </ul>
                    </div>
                    <button className={`${styles.cardButton} ${styles.cardButtonBlue}`}>Select Plan</button>
                </div>

                {/* Strategic Accelerator Card */}
                <div className={styles.card}>
                    <div>
                        <h4 className={`${styles.cardTitle} ${styles.textGray800}`}>Strategic Accelerator</h4>
                        <p className={styles.cardPrice}>$750<span className={styles.cardPrice}>/month</span></p>
                        <ul className={styles.cardList}>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Up to 8 Hours Support</li>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Dedicated Phone & Chat</li>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Advanced Threat Monitoring</li>
                            <li className={styles.cardListItem}><svg className={styles.cardListItem.svg} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Bi-Weekly Strategic Call</li>
                        </ul>
                    </div>
                    <button className={`${styles.cardButton} ${styles.cardButtonGray}`}>Select Plan</button>
                </div>
            </div>
        </div>
      </main>
    </>
  );
}