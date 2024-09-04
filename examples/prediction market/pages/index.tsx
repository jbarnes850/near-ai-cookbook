import { useState, useEffect } from 'react';
import { useWallet } from '@mintbase-js/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PredictionCard from '../components/PredictionCard';
import CreatePredictionForm from '../components/CreatePredictionForm';
import styles from '../styles/Home.module.css';

// Define the Prediction type for better type checking
interface Prediction {
  id: string;
  title: string;
  text: string;
  creator: string;
  createdAt: string;
}

export default function Home() {
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const { isConnected, activeAccountId } = useWallet();

  useEffect(() => {
    fetchPredictions();
  }, []);

  async function fetchPredictions() {
    try {
      // In a real application, this would be an API call to your backend
      const response = await fetch('/api/predictions');
      const data = await response.json();
      setPredictions(data.predictions);
    } catch (error) {
      console.error('Error fetching predictions:', error);
    }
  }

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>AI Crypto Prediction Market</h1>
        {isConnected ? (
          <>
            <CreatePredictionForm onPredictionCreated={fetchPredictions} />
            <div className={styles.predictionGrid}>
              {predictions.map((prediction) => (
                <PredictionCard key={prediction.id} prediction={prediction} />
              ))}
            </div>
          </>
        ) : (
          <p className={styles.description}>Connect your wallet to participate in the prediction market.</p>
        )}
      </main>
      <Footer />
    </div>
  );
}