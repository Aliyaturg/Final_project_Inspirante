const PORT = 8000;
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(express.json());
app.use(cors());

const API_KEY = "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";
app.post('/completions/', async (req, res) => {
  const options = {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "how are you?" }],
      max_tokens: 100,
    })
  };

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', options);
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "An error occurred" });
  }
});

app.listen(PORT, () => console.log('Your server running on PORT ' + PORT));