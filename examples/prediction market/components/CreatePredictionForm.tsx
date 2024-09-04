import { useState } from 'react';
import { useWallet } from '@mintbase-js/react';
import styles from '../styles/Home.module.css';

export default function CreatePredictionForm({ onPredictionCreated }) {
  const [isLoading, setIsLoading] = useState(false);
  const { activeAccountId } = useWallet();

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('/api/generate-prediction', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accountId: activeAccountId }),
      });
      if (response.ok) {
        onPredictionCreated();
      } else {
        throw new Error('Failed to create prediction');
      }
    } catch (error) {
      console.error('Error creating prediction:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <button type="submit" disabled={isLoading} className={styles.button}>
        {isLoading ? 'Generating...' : 'Generate New Prediction'}
      </button>
    </form>
  );
}