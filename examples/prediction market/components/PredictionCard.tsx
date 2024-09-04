import styles from '../styles/Home.module.css';

export default function PredictionCard({ prediction }) {
  return (
    <div className={styles.card}>
      <h2>{prediction.title}</h2>
      <p>{prediction.text}</p>
      <div className={styles.cardActions}>
        <button className={styles.button}>Stake</button>
        <span>Created by: {prediction.creator}</span>
      </div>
    </div>
  );
}