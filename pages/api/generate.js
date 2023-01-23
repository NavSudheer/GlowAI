import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix =
  "Create a custom skincare routine. Based on my budget and skin type: ";
const generateAction = async (req, res) => {
  //run first prompt
  console.log(
    `API: ${basePromptPrefix}${req.body.budgetInput}${req.body.skinTypeInput}`
  );

  const baseCompletion = await openai.createCompletion({
    model: `text-davinci-003`,
    prompt: `${basePromptPrefix}${req.body.budgetInput} ${req.body.skinTypeInput}`,
    temperature: 0.7,
    max_tokens: 500,
  });

  const basePromptOutput = baseCompletion.data.choices.pop();
  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;
