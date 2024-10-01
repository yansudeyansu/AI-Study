require('dotenv').config({ path: './.env' });
console.log("API Key:", process.env.OPENAI_API_KEY);
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function runCompletion() {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4", // または "gpt-4-turbo-preview" for the latest version
      messages: [{ role: "user", content: "Hello, how are you?" }],
    });
    console.log(completion.choices[0].message.content);
  } catch (error) {
    console.error("Error details:", JSON.stringify(error, null, 2));
  }
}

runCompletion();