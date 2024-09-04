import { HyperbolicClient } from '@hyperbolic/sdk';
import { PineconeClient } from '@pinecone-database/pinecone';
import { MintbaseWallet } from '@mintbase-js/wallet';

const hyperbolic = new HyperbolicClient(process.env.NEXT_PUBLIC_HYPERBOLIC_API_KEY!);
const pinecone = new PineconeClient();
const mintbaseWallet = new MintbaseWallet();

export async function generatePrediction(title: string): Promise<string> {
  // Implement RAG logic here
  // 1. Retrieve relevant info from Pinecone
  // 2. Use Exa and Tavily APIs to get additional context
  // 3. Use Hyperbolic to generate the prediction
  const prediction = await hyperbolic.generatePrediction(title);
  return prediction;
}

export async function createPredictionNFT(predictionText: string) {
  // Implement NFT creation logic using Mintbase
  const nftData = await mintbaseWallet.createNFT({
    metadata: {
      title: "Crypto Prediction",
      description: predictionText,
    },
  });
  return nftData;
}

export async function initializePinecone() {
  await pinecone.init({
    environment: process.env.NEXT_PUBLIC_PINECONE_ENVIRONMENT!,
    apiKey: process.env.NEXT_PUBLIC_PINECONE_API_KEY!,
  });
  const index = pinecone.Index(process.env.NEXT_PUBLIC_PINECONE_INDEX!);
  return index;
}