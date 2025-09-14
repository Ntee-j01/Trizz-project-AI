// Install dependencies first: npm install express openai

import express from "express";
import OpenAI from "openai";

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Initialize DeepSeek client
const deepseek = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: 'sk-cfde3def1b814aa1928e6f4a88cf2df0', // replace with your key
});

// Endpoint to get AI response
app.post("/api/chat", async (req, res) => {
  const userPrompt = req.body.prompt;

  if (!userPrompt) {
    return res.status(400).json({ error: "Missing 'prompt' in request body." });
  }

  try {
    const completion = await deepseek.chat.completions.create({
      model: "deepseek-chat",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: userPrompt },
      ],
    });

    res.json({ response: completion.choices[0].message.content });
  } catch (error) {
    console.error("Error calling DeepSeek API:", error);
    res.status(500).json({ error: "Error generating response" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http:/'sk-your-deepseek-api-key''
