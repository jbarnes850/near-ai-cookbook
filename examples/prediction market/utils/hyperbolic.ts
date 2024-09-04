import OpenAI from 'openai';

const hyperbolic = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_HYPERBOLIC_API_KEY,
  baseURL: 'https://api.hyperbolic.xyz/v1',
});

export async function generatePrediction(context: string): Promise<string> {
  try {
    const response = await hyperbolic.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are an expert cryptocurrency analyst and predictor.',
        },
        {
          role: 'user',
          content: `Based on the following context, generate a detailed prediction about cryptocurrency trends for the next month: ${context}`,
        },
      ],
      model: 'meta-llama/Meta-Llama-3-70B-Instruct',
      max_tokens: 500,
    });

    const prediction = response.choices[0].message.content;
    return prediction || 'Unable to generate prediction.';
  } catch (error) {
    console.error('Error generating prediction:', error);
    throw new Error('Failed to generate prediction');
  }
}
