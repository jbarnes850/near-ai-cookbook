import type { NextApiRequest, NextApiResponse } from 'next';
import { Hyperbolic } from '@hyperbolic/sdk';
import { ExaSearch } from 'exa-js';
import { TavilyAPI } from 'tavily-js';
import { storeInPinecone, retrieveFromPinecone } from '../../utils/pinecone';
import { createPredictionNFT } from '../../utils/mintbase';

const hyperbolic = new Hyperbolic(process.env.NEXT_PUBLIC_HYPERBOLIC_API_KEY!);
const exaSearch = new ExaSearch(process.env.NEXT_PUBLIC_EXA_API_KEY!);
const tavilyAPI = new TavilyAPI(process.env.NEXT_PUBLIC_TAVILY_API_KEY!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { accountId } = req.body;

      // Fetch latest crypto data
      const exaResults = await exaSearch.search('latest cryptocurrency trends');
      const tavilyResults = await tavilyAPI.getAnswers('cryptocurrency market analysis');

      // Retrieve relevant historical data
      const historicalData = await retrieveFromPinecone('cryptocurrency trends prediction');

      // Combine data for RAG
      const context = `
        Exa Search Results: ${JSON.stringify(exaResults)}
        Tavily Analysis: ${JSON.stringify(tavilyResults)}
        Historical Data: ${historicalData}
      `;

      // Generate prediction using Hyperbolic with RAG
      const prediction = await hyperbolic.complete({
        prompt: `Based on the following context, generate a detailed prediction about cryptocurrency trends for the next month: ${context}`,
        max_tokens: 500,
      });

      const predictionText = prediction.choices[0].text.trim();

      // Create NFT on Mintbase
      const nft = await createPredictionNFT(predictionText, accountId);

      // Store the new prediction in Pinecone
      await storeInPinecone(predictionText);

      res.status(200).json({ success: true, prediction: nft });
    } catch (error) {
      console.error('Error generating prediction:', error);
      res.status(500).json({ success: false, error: 'Failed to generate prediction' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}