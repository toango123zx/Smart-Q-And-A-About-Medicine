import { SpokeAIConfig } from "@/config";
import axios from "axios";

export class SpokeAIHelper {
  constructor() {}
  async axiosSpokeAIResponse(question: string, history: any) {
    try {
      const url = String(SpokeAIConfig.URL_SPOKE_AI + "/response");
      if (!history) {
        history = [];
      }
      const response = await axios.post(url, {
        question: question,
        history: history,
      });
      return String(response.data.answer);
    } catch (error) {
      throw new Error("error server spoke ai");
    }
  }
}
