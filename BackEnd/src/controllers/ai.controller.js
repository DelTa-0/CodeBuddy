import { generateAIResponse } from "../services/ai.service.js";

const aiController = {
  getReview: async (req, res) => {
    const code = req.body.code;
    if (!code) {
      return res.status(400).send("Prompt is not recognized");
    }

    try {
      const response = await generateAIResponse(code);
      
      res.send(response);
    } catch (err) {
      console.error("AI Error:", err);
      res.status(500).send("Error generating response");
    }
  }
};

export default aiController;
