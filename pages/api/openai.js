const OpenAI = require("openai-api");
const openai = new OpenAI(process.env.OPENAI_API_KEY);

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default async (req, res) => {
	let prompt = `${req.body.name}`;
	// Need help with the above. If I pass a hardcoded string, I get the desired response back from this function.
	const gptResponse = await openai.complete({
		engine: "text-davinci-001",
		prompt: prompt,
		temperature: 0.7,
		max_tokens: 64,
		top_p: 1.0,
		frequency_penalty: 0.0,
		presence_penalty: 0.0,
	});

	res.status(200).json({ text: `${gptResponse.data.choices[0].text}` });
};
