// Install dependencies first: npm install express openai

import express from "express";
import OpenAI from "openai";

const app = express();
const port = 3000;

// Initialize DeepSeek client
const deepseek = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: 'sk-cfde3def1b814aa1928e6f4a88cf2df0', // replace with your key
});

// Root route with built-in prompt, returns JSON
app.get("/", async (req, res) => {
  // Built-in prompt
  const builtInPrompt = "Write a short bedtime story about a unicorn.";

  try {
    const completion = await deepseek.chat.completions.create({
      model: "deepseek-chat",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: builtInPrompt },
      ],
    });

    // Return JSON with prompt and response
    res.json({
      prompt: builtInPrompt,
      response: completion.choices[0].message.content
    });
  } catch (error) {
    console.error("Error calling DeepSeek API:", error);
    res.status(500).json({ error: "Error generating response" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});  } catch (error) {
    console.error("Error calling DeepSeek API:", error);
    res.status(500).json({ error: "Error generating response" });
  }
});

// Root route
app.get("/", (req, res) => {
  res.send("Welcome! Use /api/chat?prompt=your prompt here to get a response from DeepSeek.");
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http:/'sk-your-deepseek-api-key' }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
