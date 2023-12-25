const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

exports.getGptResponse = async (prompt) => {
  try {
    console.log(process.env.OPENAI_API_KEY);
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      temperature: 0.1,
      max_tokens: 3000,
    });
    const res = response?.data?.choices[0].text.trim();
    console.log('res ===>', res);
    return res || null;
  } catch (err) {
    console.log(err);
    return 'Error in gpt while parsing the content';
  }
};
