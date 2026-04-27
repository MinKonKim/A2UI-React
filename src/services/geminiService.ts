import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ 
  model: "gemini-1.5-pro",
  // 시스템 프롬프트에 A2UI JSON 스펙을 반드시 명시해야 합니다.
  systemInstruction: "You are a UI Agent. Respond only in A2UI JSON format. Use components like 'Text', 'Button', 'Column'."
});

export const getAIResponse = async (prompt: string) => {
  const result = await model.generateContent(prompt);
  const response = await result.response;
  // AI가 생성한 JSON 텍스트를 파싱 (실제 구현 시 예외 처리 필요)
  return JSON.parse(response.text());
};