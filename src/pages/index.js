import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { FaDollarSign, FaSolarPanel, FaLock } from 'react-icons/fa';
import { GiSouthAfricaFlag } from "react-icons/gi";

const Home = () => {
  return (
    <div>
      {/* Header */}
      <header className={styles.header}>
      <img src="/images/logo.png" alt="XStructure Logo" className={styles.logo} />
        <nav className={styles.nav}>
        <Link href="#products">Smart Contracts</Link>
          <Link href="#features">Features</Link>
          <Link href="/docs/overview">Docs</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Invest in Green Energy with NFTs</h1>
        <p>Own a piece of sustainable energy projects and earn revenue.</p>
        <button onClick={() => window.location.href = '/marketplace'}>Explore Marketplace</button>
      </section>

      {/* Core Products */}
      <section id="products" className={styles.products}>
          <h2>Smart Contracts</h2>
          <div className={styles.productCards}>
              {/* Green Bond */}
              <div className={styles.card} style={{ backgroundImage: 'url(/images/bond.png)' }}>
                  <h3>Green Bond</h3>
                  <p>Invest in renewable energy projects fund to receive stable yields over time.</p>
                  <Link href="https://greenchain.capital"><button className={styles.learnMore}>Learn More</button></Link>
              </div>

              {/* NFT Fractional Ownership */}
              <div className={styles.card} style={{ backgroundImage: 'url(/images/fraction2.png)' }}>
                  <h3>NFT Fractional Ownership</h3>
                  <p>Own shares of solar projects and earn rental income each month.</p>
                  <Link href="/marketplace"><button className={styles.learnMore}>Learn More</button></Link>
              </div>

              {/* Basket Treasury Portfolio */}
              <div className={styles.card} style={{ backgroundImage: 'url(/images/treasure.png)' }}>
                  <h3>Basket Treasury Portfolio</h3>
                  <p>Diversified investment in multiple green assets.</p>
                  <Link href="/docs/treasury"><button className={styles.learnMore}>Learn More</button></Link>
              </div>

              {/* Governance Tokens */}
              <div className={styles.card} style={{ backgroundImage: 'url(/images/gov.png)' }}>
                  <h3>Governance Tokens</h3>
                  <p>Participate in the decision-making of XStructure.</p>
                  <Link href="/docs/gov"><button className={styles.learnMore}>Learn More</button></Link>
              </div>
          </div>
      </section>

      {/* Features Section */}
      <section id="features" className={styles.features}>
        <h2>Features</h2>
        <div className={styles.featureList}>
          <div className={`${styles.feature} ${styles.feature1}`}>
            <FaSolarPanel className={styles.icon} />
            <h3>Fractional Ownership</h3>
            <p>Invest in renewable energy projects through fractional NFTs.</p>
            
          </div>
          <div className={`${styles.feature} ${styles.feature2}`}>
            <FaDollarSign className={styles.icon} />
            <h3>Revenue Sharing</h3>
            <p>Earn rental income from energy projects directly to your wallet.</p>
          </div>
          <div className={`${styles.feature} ${styles.feature3}`}>
            <FaLock className={styles.icon} />
            <h3>Transparent and Secure</h3>
            <p>Blockchain technology ensures transparent and secure transactions.</p>
          </div>
          <div className={`${styles.feature} ${styles.feature3}`}>
            <GiSouthAfricaFlag className={styles.icon} />
            <h3>Tax Rebate</h3>
            <p>South African investors can receive 125% tax rebate for their invesment.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer} id="contact">
      <p>XStructure | Connecting you to sustainable investments.</p>
      <div className={styles.socialLinks}>

          <a href="https://twitter.com/greenchaincap" target="_blank" rel="noopener noreferrer">
            <img src="/images/twitter.png" alt="Twitter" />
          </a>
          <a href="https://github.com/greenchaincapital" target="_blank" rel="noopener noreferrer">
            <img src="/images/github.png" alt="GitHub" />
          </a>
          <a href="/whitepaper.pdf" target="_blank" rel="noopener noreferrer">
            <img src="/images/paper.png" alt="Whitepaper" />
          </a>
        </div>
        
        <p>Contact: info@xstructure.tech</p>
      </footer>
    </div>
  );
};

export default Home;
