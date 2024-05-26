import "dotenv/config";
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage } from "@langchain/core/messages";
import { StringOutputParser } from "@langchain/core/output_parsers";

const chatModel = new ChatOpenAI();
const outputPrase = new StringOutputParser();

const simpleChain = chatModel.pipe(outputPrase);

// const response = await simpleChain.invoke([new HumanMessage("Tell me a joke")]);
// const response = await chatModel.invoke([new HumanMessage("Tell me a joke")]);
// console.log(response);

// const stream = await simpleChain.stream([new HumanMessage("Tell me a joke")]);

// for await (const chunk of stream) {
//   console.log(chunk);
// }

// const realLLM = new ChatOpenAI();
// const llmWithFallback = simpleChain.withFallbacks({
//   fallbacks: [realLLM],
// });
// await llmWithFallback.invoke("你好")
