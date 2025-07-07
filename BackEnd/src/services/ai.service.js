require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai'); // Corrected import
console.log('GEMINI_API_KEY:', process.env.GEMINI_API_KEY);
const ai = new GoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function main() {
  // Ensure 'gemini-1.5-flash' is a valid and available model for your API key
  const model = ai.getGenerativeModel({ model: 'gemini-2.5-pro' });

  const result = await model.generateContent('Explain how AI works in a few words');
  const response = await result.response;
  console.log(response.text());
}

main().catch(console.error);

module.exports = main;