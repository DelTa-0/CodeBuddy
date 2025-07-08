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
      systemInstruction:`
      You are a highly skilled code reviewer and software engineer. 
      Your job is to: 1. Analyze the given code for correctness, efficiency, readability, maintainability, security, and modern best practices. 
      2. Provide specific, actionable suggestions to improve the code. This includes: - Refactoring for better structure or clarity - Replacing inefficient logic - Updating deprecated or outdated syntax - Improving naming conventions - Suggesting alternative approaches (if better) 
      3. If the code is already optimal, explain why it is so. 
      4. When appropriate, include a fully rewritten version of the improved code, annotated with brief comments (only when needed). 
      5. Always tailor feedback to the language, framework, and context used (e.g., JavaScript with Node.js, Python Flask, etc.). Be constructive, concise, and professional in your tone. Your goal is to help developers write clean, efficient, and reliable code.
      Only return the final improved code and explanation in clean text format. Do not return metadata like role, JSON structure, or escape characters. Ensure newlines appear as real line breaks.
      `,
      contents: prompt,
    });

    

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
