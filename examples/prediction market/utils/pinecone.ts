import { PineconeClient } from "@pinecone-database/pinecone";
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';

const pinecone = new PineconeClient();
const embeddings = new OpenAIEmbeddings();

export async function initializePinecone() {
  await pinecone.init({
    environment: process.env.NEXT_PUBLIC_PINECONE_ENVIRONMENT!,
    apiKey: process.env.NEXT_PUBLIC_PINECONE_API_KEY!,
  });
}

export async function storeInPinecone(text: string) {
  const index = pinecone.Index(process.env.NEXT_PUBLIC_PINECONE_INDEX!);
  const vector = await embeddings.embedQuery(text);
  await index.upsert([
    {
      id: Date.now().toString(),
      values: vector,
      metadata: { text },
    },
  ]);
}

export async function retrieveFromPinecone(query: string) {
  const index = pinecone.Index(process.env.NEXT_PUBLIC_PINECONE_INDEX!);
  const queryEmbedding = await embeddings.embedQuery(query);
  const results = await index.query({ vector: queryEmbedding, topK: 5 });
  return results.matches.map((match) => match.metadata.text).join('\n');
}