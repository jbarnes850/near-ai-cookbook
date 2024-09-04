# AI-Powered Prediction Market for Crypto Trends

This example project demonstrates how to build an AI-powered prediction market for cryptocurrency trends using tools and frameworks available on NEAR AI Stack. It leverages advanced AI capabilities, including Retrieval Augmented Generation (RAG) and specialized search APIs, to analyze vast amounts of crypto-related data and generate informed predictions. 

These predictions are then tokenized as NFTs on the NEAR blockchain, creating a decentralized prediction market. This is a work in progress, and we will be adding more examples and use cases in the near future!

**Tooling:**

[![Use Case](https://img.shields.io/badge/Use%20Case-AI%20Prediction%20Market-blue)](#)
[![Tools](https://img.shields.io/badge/Tools-Hyperbolic,Mintbase,Exa,Tavily,Pinecone-blue)](#)
[![Framework](https://img.shields.io/badge/Framework-Next.js-blue)](#)


## Key Features

1. RAG-powered analysis of crypto trends using historical data and real-time information
2. Integration with Exa API for comprehensive web content retrieval
3. Utilization of Tavily API for AI-driven research on crypto topics
4. Hyperbolic API for advanced AI inference and prediction generation
5. Mintbase integration for creating and managing prediction NFTs
6. Pinecone vector database for storing and retrieving relevant historical data
7. User-friendly interface for browsing predictions and participating in the market

## Technical Architecture

This application is built using the following technologies:

- **Frontend**: Next.js with React
- **AI Stack**:
  - Hyperbolic API for AI inference
  - OpenAI Embeddings for vector representations
  - Pinecone for vector storage and retrieval (implementing RAG)
- **Web3 Stack**: 
  - NEAR Protocol
  - Mintbase for NFT creation and management
- **External APIs**:
  - Exa for web content retrieval
  - Tavily for AI-driven research

## Project Walkthrough

1. The system continuously gathers and analyzes crypto-related data using RAG, Exa, and Tavily APIs.
2. Relevant information is stored in the Pinecone vector database.
3. When generating a new prediction:
   a. The system retrieves relevant historical data from Pinecone.
   b. It combines this with fresh data from Exa and Tavily.
   c. Hyperbolic's AI generates a detailed prediction based on this comprehensive context.
4. Predictions are tokenized as NFTs on the NEAR blockchain using Mintbase.
5. Users can browse predictions, stake NEAR tokens on outcomes, and earn rewards for accurate predictions.
6. Smart contracts automatically settle predictions and distribute rewards.

## Setup and Installation

### Prerequisites

1. Node.js 14+ and npm
2. A NEAR account and wallet
3. API keys for Hyperbolic, Exa, Tavily, and Pinecone
4. Mintbase API key and store ID
5. OpenAI API key (for embeddings)

### Installation Steps

1. Clone the repository:
   ```
   git clone https://github.com/your-repo/ai-crypto-prediction-market.git
   cd ai-crypto-prediction-market
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Fill in all the required API keys and configuration values

4. Set up Pinecone:
   - Create a Pinecone account and set up a new index
   - Note down the environment and index name for your .env file

5. Initialize the Pinecone index:
   - Create a script to populate your Pinecone index with initial crypto-related data
   - This step is crucial for the RAG functionality to work effectively

### Running the Project

1. Start the development server:
   ```
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000` to interact with the marketplace.

## Code Structure and Key Components

### `pages/index.tsx`

This is the main component of the application. Key functions include:

- `initializePinecone()`: Sets up the connection to the Pinecone database.
- `retrieveRelevantInfo(query)`: Retrieves relevant historical data from Pinecone based on the current query.
- `generatePrediction()`: Combines data from various sources (Exa, Tavily, Pinecone) and uses Hyperbolic to generate a prediction.
- `createPredictionNFT(predictionText)`: Creates an NFT on Mintbase and stores the prediction in Pinecone for future reference.

### RAG Implementation

The RAG (Retrieval Augmented Generation) is implemented as follows:

1. Historical predictions and relevant data are stored in Pinecone as vector embeddings.
2. When generating a new prediction, relevant historical data is retrieved from Pinecone.
3. This historical data is combined with fresh data from Exa and Tavily to create a comprehensive context.
4. The AI model (via Hyperbolic) uses this rich context to generate more informed and accurate predictions.

## Deployment

To deploy this project:

1. Fork this repository
2. Connect your forked repo to Vercel
3. Set up the environment variables in Vercel (ensure all API keys are securely stored)
4. Deploy!

## Future Improvements

- Implement a data ingestion pipeline to regularly update the Pinecone database with new crypto-related information
- Enhance the prediction algorithm by incorporating more data sources and fine-tuning the AI model
- Develop a more sophisticated staking and reward system using NEAR smart contracts

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
