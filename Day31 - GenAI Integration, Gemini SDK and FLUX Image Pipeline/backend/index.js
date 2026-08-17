/*******************************************************************************************************
 * *************************************** GEMINI EXPRESS BACKEND (DAY 31) *****************************
 *
 * New Topics Covered in Day 31:
 * - Express server routing configuration for custom endpoints
 * - Initializing client objects using Google GenAI SDK (`GoogleGenAI` from `@google/genai`)
 * - Asynchronous prompt parsing using the Gemini models (`gemini-3.5-flash`)
 * - Cross-Origin Resource Sharing (`cors`) configuration to authorize frontend queries
 *
 * Cross-File & Architecture References:
 * - Accessed by: `GenAI/script.js` (targets POST http://localhost:5000/generate)
 * - Required Env Parameters: `GEMINI_API_KEY` defined in local `.env` configuration file
 * - Libraries Used: `express` (routing wrapper), `@google/genai` (SDK client)
 *******************************************************************************************************/

const express = require("express");
const cors = require("cors");
// Load environment parameters from local .env files
require('dotenv').config()

// Import the official Google GenAI SDK
const { GoogleGenAI } = require("@google/genai");

const app = express();
// Enable Cross-Origin requests so the browser client can make API requests
app.use(cors());
// Parse incoming body payloads as JSON format
app.use(express.json());

// Extract the API credential key from process environment variables
const API_KEY = process.env.GEMINI_API_KEY
// Initialize the GoogleGenAI instance with the credential key
const ai = new GoogleGenAI({apiKey:API_KEY});

/**
 * Endpoint POST /generate
 * Intercepts incoming prompts and calls the Google Gemini API to retrieve text generations.
 */
app.post("/generate", async (req, res) => {
  const { prompt } = req.body;

  console.log("Received prompt:", prompt);

  try {
    /*
    Call Gemini Content Generation API:
    - model: Specify "gemini-3.5-flash" (fast, cost-effective multimodal model)
    - contents: The text string prompt parsed from the request body
    */
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    console.log("response", response)

    // Respond with a JSON object containing the generated text
    res.json({
      output: response.text || "No response",
    });

  } catch (error) {
    console.error("ERROR:", error.message);

    res.status(500).json({
      error: "Error generating content",
      details: error.message,
    });
  }
});

app.listen(5000, () => {
  console.log("Gemini server running on http://localhost:5000");
});