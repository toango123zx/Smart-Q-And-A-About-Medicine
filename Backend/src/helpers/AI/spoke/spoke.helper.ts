import { SpokeAIConfig } from "@/config";
import axios from "axios";

export class SpokeAIHelper {
  constructor() {}
  async axiosSpokeAIResponse(question: string) {
    try {
      const url = String(SpokeAIConfig.URL_SPOKE_AI + "/response");
      const response = await axios.post(url, { question: question });

      return response.data.answer;
    } catch (error) {
      throw new Error("error server spoke ai");
    }
  }
}
