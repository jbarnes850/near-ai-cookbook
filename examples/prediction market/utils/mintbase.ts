import { MintbaseWallet } from '@mintbase-js/wallet';
import { MintbaseAPI } from '@mintbase-js/sdk';

const mintbaseWallet = new MintbaseWallet();
const mintbaseAPI = new MintbaseAPI({
  apiKey: process.env.NEXT_PUBLIC_MINTBASE_API_KEY,
});

export async function createPredictionNFT(predictionText: string, accountId: string): Promise<any> {
  try {
    // Prepare metadata for the NFT
    const metadata = {
      title: "Crypto Prediction",
      description: predictionText,
      media: "https://example.com/prediction-image.jpg", // Replace with actual image URL
      extra: [
        {
          key: "prediction_date",
          value: new Date().toISOString(),
        },
        {
          key: "creator",
          value: accountId,
        },
      ],
    };

    // Create the NFT
    const result = await mintbaseAPI.createNFT({
      contractAddress: process.env.NEXT_PUBLIC_MINTBASE_CONTRACT_ADDRESS!,
      ownerId: accountId,
      metadata: metadata,
      royalties: {
        [accountId]: 1000, // 10% royalty to the creator
      },
    });

    console.log("NFT created successfully:", result);
    return result;
  } catch (error) {
    console.error("Error creating prediction NFT:", error);
    throw new Error("Failed to create prediction NFT");
  }
}

export async function getPredictionNFTs(): Promise<any[]> {
  try {
    const nfts = await mintbaseAPI.getNFTs({
      contractAddress: process.env.NEXT_PUBLIC_MINTBASE_CONTRACT_ADDRESS!,
      limit: 20,
      offset: 0,
    });

    return nfts.data;
  } catch (error) {
    console.error("Error fetching prediction NFTs:", error);
    throw new Error("Failed to fetch prediction NFTs");
  }
}

export async function transferNFT(tokenId: string, receiverId: string): Promise<void> {
  try {
    await mintbaseWallet.transfer({
      tokenId,
      receiverId,
      contractAddress: process.env.NEXT_PUBLIC_MINTBASE_CONTRACT_ADDRESS!,
    });
    console.log("NFT transferred successfully");
  } catch (error) {
    console.error("Error transferring NFT:", error);
    throw new Error("Failed to transfer NFT");
  }
}
