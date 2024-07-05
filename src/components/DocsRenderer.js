import fs from 'fs';
import path from 'path';
import { useRouter } from 'next/router';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import styles from '../pages/styles/Docs.module.css';

export async function getStaticPaths() {
    const docsDirectory = path.join(process.cwd() + '/src/pages/', 'docs');
    const filenames = fs.readdirSync(docsDirectory);
    const paths = filenames.map((filename) => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }));

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const docsDirectory = path.join(process.cwd() + '/src/pages/', 'docs');
    const filePath = path.join(docsDirectory, `${params.slug}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        props: {
            frontmatter: data,
            content
        }
    };
}

const DocsRenderer = ({ content }) => {
    return (
        <div className={styles.docsContainer}>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default DocsRenderer;
