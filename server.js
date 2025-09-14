import express from "express";
import OpenAI from "openai";

const app = express();
const port = 3000;

// Initialize OpenAI client with your key
const client = new OpenAI({
  apiKey: "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", // replace with your key
});

// Endpoint to get unicorn story
app.get("/unicorn", async (req, res) => {
  try {
    const response = await client.responses.create({
      model: "gpt-5",
      input: "Write a short bedtime story about a unicorn.",
    });

    res.send(`<h1>Unicorn Story</h1><p>${response.output_text}</p>`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error generating story");
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
