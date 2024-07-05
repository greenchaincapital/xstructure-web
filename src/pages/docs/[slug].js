import DocsSidebar from '../../components/DocsSidebar';
import DocsRenderer, { getStaticProps, getStaticPaths } from '../../components/DocsRenderer';
import styles from '../../styles/Docs.module.css';

const DocPage = (props) => {
    return (
        <div className={styles.docsPage}>
            <DocsSidebar />
            <DocsRenderer {...props} />
        </div>
    );
};

export { getStaticPaths, getStaticProps };
export default DocPage;

