import { useWallet } from '@mintbase-js/react';
import styles from '../styles/Home.module.css';

export default function Header() {
  const { connect, disconnect, activeAccountId, isConnected } = useWallet();

  return (
    <header className={styles.header}>
      <h1>AI Crypto Prediction Market</h1>
      <nav>
        {isConnected ? (
          <>
            <span>Connected: {activeAccountId}</span>
            <button onClick={disconnect} className={styles.button}>Disconnect</button>
          </>
        ) : (
          <button onClick={connect} className={styles.button}>Connect NEAR Wallet</button>
        )}
      </nav>
    </header>
  );
}