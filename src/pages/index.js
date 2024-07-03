import styles from './styles/Home.module.css';

const Home = () => {
  return (
    <div>
      {/* Header */}
      <header className={styles.header}>
      <img src="/images/logo.png" alt="XStructure Logo" className={styles.logo} />
        <nav className={styles.nav}>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#greenbond-treasury">GreenBond</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Invest in Green Energy with NFTs</h1>
        <p>Own a piece of sustainable energy projects and earn revenue.</p>
        <button onClick={() => window.location.href = '/marketplace'}>Explore Marketplace</button>
      </section>

      {/* Features Section */}
      <section id="features" className={styles.features}>
        <h2>Features</h2>
        <div className={styles.featureList}>
          <div className={`${styles.feature} ${styles.feature1}`}>
            <h3>Fractional Ownership</h3>
            <p>Invest in renewable energy projects through fractional NFTs.</p>
          </div>
          <div className={`${styles.feature} ${styles.feature2}`}>
            <h3>Revenue Sharing</h3>
            <p>Earn rental income from energy projects directly to your wallet.</p>
          </div>
          <div className={`${styles.feature} ${styles.feature3}`}>
            <h3>Transparent and Secure</h3>
            <p>Blockchain technology ensures transparent and secure transactions.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className={styles.howItWorks}>
        <h2>How It Works</h2>
        <div className={styles.steps}>
          <div className={`${styles.step} ${styles.step1}`}>
            <h3>1. Explore</h3>
            <p>Browse available green energy projects.</p>
          </div>
          <div className={`${styles.step} ${styles.step2}`}>
            <h3>2. Invest</h3>
            <p>Purchase fractional NFTs to invest in projects.</p>
          </div>
          <div className={`${styles.step} ${styles.step3}`}>
            <h3>3. Earn</h3>
            <p>Receive rental income from your investments.</p>
          </div>
        </div>
      </section>

      <section id="greenbond-treasury" className={styles.greenBondTreasury}>
      <h2>GreenBond</h2>
      
      <div className={styles.steps}>
      <a href="https://greenchain.capital" target="_blank">
        <div className={`${styles.greenBond} ${styles.contractSection}`}>
          <h2>GreenBond Contract</h2>
          <p>Crowdsourced investments into green energy projects offer secure and predictable returns.</p>
        </div>
        </a>
        <a href="https://beta.velvet.capital/#/fund/manage/0xb8a4cf99dd0f6c50fa039630d2e470efa6167813" target="_blank">
        <div className={`${styles.balancedTreasury} ${styles.contractSection}`}>
          <h2>Treasury Contract</h2>
          <p>Diverse range of assets to provide stable returns and support long-term growth.</p>
        </div>
        </a>
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
