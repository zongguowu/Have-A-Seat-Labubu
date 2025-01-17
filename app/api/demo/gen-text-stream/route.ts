import { LanguageModelV1, streamText } from "ai";

import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { openai } from "@ai-sdk/openai";
import { respErr } from "@/lib/resp";

export async function POST(req: Request) {
  try {
    const { prompt, provider, model } = await req.json();
    if (!prompt || !provider || !model) {
      return respErr("invalid params");
    }

    let textModel: LanguageModelV1;

    switch (provider) {
      case "openai":
        textModel = openai(model);
        break;
      case "openrouter":
        const openrouter = createOpenRouter({
          apiKey: process.env.OPENROUTER_API_KEY,
        });
        textModel = openrouter(model);
        break;
      case "zhipu":
        const zhipu = createOpenAICompatible({
          name: "zhipu",
          apiKey: process.env.ZHIPU_API_KEY,
          baseURL: process.env.ZHIPU_BASE_URL,
        });
        textModel = zhipu(model);
        break;
      default:
        return respErr("invalid provider");
    }

    const result = await streamText({
      model: textModel,
      prompt: prompt,
      onFinish: async () => {
        console.log("finish", await result.text);
      },
    });

    return result.toTextStreamResponse();
  } catch (err) {
    console.log("gen text stream failed:", err);
    return respErr("gen text stream failed");
  }
}
