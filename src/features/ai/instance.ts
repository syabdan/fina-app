import { Environment } from '@/config/environment';
import { GoogleGenAI } from '@google/genai';

export function createAI() {
  if (!Environment.googleGenAIKey) {
    throw new Error('AI API Key is missing');
  }
  const ai = new GoogleGenAI({
    apiKey: Environment.googleGenAIKey,
  });

  return ai;
}
