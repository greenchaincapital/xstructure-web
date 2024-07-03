import React from 'react';
import PropTypes from 'prop-types';
import styles from './NFTCard.module.css';

const NFTCard = ({ metadata, onBuy }) => {
  if (!metadata) {
    return <div className={styles.error}>Error loading metadata</div>;
  }

  return (
    <div className={styles.card}>
      {/* <img src={metadata.image} alt={metadata.name} className={styles.image} /> */}
      <img src="./images/jozi.png" alt={metadata.name} className={styles.image} />
      <div className={styles.details}>
        <h2 className={styles.title}>{metadata.name}</h2>
        <p className={styles.description}>{metadata.description}</p>
        <div className={styles.attributes}>
          {metadata.attributes.map((attribute, index) => (
            <div key={index} className={styles.attribute}>
              <strong>{attribute.trait_type}:</strong> {attribute.value}
            </div>
          ))}
        </div>
        <div className={styles.documents}>
          <a href={metadata["Solar Document"]} target="_blank" rel="noopener noreferrer">
            Solar Document
          </a>
          <a href={metadata["Battery Document"]} target="_blank" rel="noopener noreferrer">
            Battery Document
          </a>
          <a href={metadata["Partnership Agreement"]} target="_blank" rel="noopener noreferrer">
            Partnership Agreement
          </a>
        </div>
        <button onClick={() => onBuy(metadata)} className={styles.buyButton}>
          Buy NFT
        </button>
      </div>
    </div>
  );
};

NFTCard.propTypes = {
  metadata: PropTypes.object.isRequired,
  onBuy: PropTypes.func.isRequired,
};

export default NFTCard;
