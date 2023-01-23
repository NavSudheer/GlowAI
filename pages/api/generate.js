import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = "Give me a skin care routine with a budget of: ";

const basePromptPrefix1 = "and for my skin type: ";
const basePromptSuffix =
  "Do NOT go over my budget. Format it perfectly. No random words.";
const generateAction = async (req, res) => {
  //run first prompt
  console.log(
    `API: ${basePromptPrefix} ${req.body.budgetInput} ${basePromptPrefix1} ${req.body.skinTypeInput}. ${basePromptSuffix}`
  );

  const baseCompletion = await openai.createCompletion({
    model: `text-davinci-003`,
    prompt: `${basePromptPrefix} ${req.body.budgetInput} ${basePromptPrefix1} ${req.body.skinTypeInput}. ${basePromptSuffix}`,
    temperature: 0.7,
    max_tokens: 350,
  });

  const basePromptOutput = baseCompletion.data.choices.pop();
  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;
