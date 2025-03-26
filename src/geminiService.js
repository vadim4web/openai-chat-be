import { GoogleGenAI } from "@google/genai";
import { GEMINI_API_KEY } from "./config.js";
import { styles } from "./styles.js";

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export async function getChatResponse(message, style) {
  const selectedStyle = styles[style] || styles.modern;
  const prompt = `Ти відповідаєш у стилі: ${selectedStyle}.\n\nКористувач запитує: "${message}". Відповідай у відповідному стилі.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt
    });

    // return response.candidates[0].content.parts[0].text; // Дістаємо текст відповіді
    return response.text; // Дістаємо текст відповіді
  } catch (error) {
    throw new Error(error.message);
  }
}
