import { generateAIResponse } from "../services/ai.service.js";

const aiController = {
  getResponse: async (req, res) => {
    const prompt = req.query.prompt;
    if (!prompt) {
      return res.status(400).send("Prompt is not recognized");
    }

    try {
      const response = await generateAIResponse(prompt);
      console.log(response)
      res.send(response);
    } catch (err) {
      console.error("AI Error:", err);
      res.status(500).send("Error generating response");
    }
  }
};

export default aiController;
