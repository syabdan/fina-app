'use server';

import { Environment } from '@/config/environment';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({
  apiKey: Environment.googleGenAIKey,
});

export async function handleChat(message: string, isThinking: boolean) {
  console.log(isThinking);
  const response = await ai.models.generateContent({
    model: 'gemini-3.6-flash',
    contents: message,
    config: {
      thinkingConfig: {
        includeThoughts: isThinking,
      },
    },
  });

  const result = {
    thought: '',
    answer: '',
  };

  if (isThinking) {
    const parts = response.candidates?.[0]?.content?.parts;
    if (!parts) {
      return;
    }

    for (const part of parts) {
      if (!part.text) {
        continue;
      } else if (part.thought) {
        result.thought += part.text;
      } else {
        result.answer += part.text;
      }
    }
  } else {
    result.answer = `${response.text}`;
  }
  return result;
}

