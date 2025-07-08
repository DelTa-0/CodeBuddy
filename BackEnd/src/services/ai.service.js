// src/services/ai.service.js
import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv';
dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function generateAIResponse(prompt) {
  try {
    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    console.log(result); // Logs the full response so you can see the structure

    // Check if candidates exist and extract content
    if (result && result.candidates && result.candidates.length > 0) {
      const content = result.candidates[0].content; // Accessing the first candidate's content
      if (content) {
        return content; // Return the content
      } else {
        throw new Error("Content not found in the response");
      }
    } else {
      throw new Error("Invalid response structure: No candidates found");
    }
  } catch (error) {
    console.error("AI Error:", error.message);
    throw error;
  }
}



export { generateAIResponse };
