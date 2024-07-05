import Link from 'next/link';
import styles from '../pages/styles/Docs.module.css';

const DocsSidebar = () => {
    return (
        <div className={styles.docsSidebar}>
            <Link href="/"><img class="logo" src="/images/logo.png" /></Link>
            <h2>Documentation</h2>
            <ul>
                <li><Link href="/docs/overview">Overview</Link></li>
                <li><Link href="/docs/green-nfts">Green Energy NFTs</Link></li>
                <li><Link href="/docs/yield">Yield Bonds</Link></li>
                <li><Link href="/docs/treasury">Basket Treasury</Link></li>
                <li><Link href="/docs/gov">Green Governence</Link></li>
                <li><Link href="/docs/faqs">FAQs</Link></li>
                <li><Link href="/docs/legal">Legal</Link></li>
            </ul>
        </div>
    );
};

export default DocsSidebar;
