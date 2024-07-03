import { useState, useEffect } from 'react';
import { getTokenMetadata } from '../utils/contract';
import NFTCard from '../components/NFTCard';
import styles from './styles/Marketplace.module.css';

const Marketplace = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const projectIds = [515, 447]; // Ensure these IDs are valid
        const metadataList = await Promise.all(
          projectIds.map(async (id) => {
            const metadata = await getTokenMetadata(id);
            return { id, metadata };
          })
        );
        setProjects(metadataList);
      } catch (error) {
        console.error('Error fetching metadata:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMetadata();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (projects.length === 0) {
    return <div>No projects found.</div>;
  }

  return (
    <div className={styles.marketplace}>
      <h1>NFT Marketplace</h1>
      <div className={styles.projectList}>
        {projects.map(({ id, metadata }) => (
          <div key={id}>
            <NFTCard metadata={metadata} />
            <h4>NFT ID: {id}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
