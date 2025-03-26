import express from "express";
import { styles } from "./styles.js";
import { getChatResponse } from "./geminiService.js";

const router = express.Router();

router.get("/styles", (req, res) => {
  res.json(styles);
});

router.post('/chat', async (req, res) => {
  const { message, style } = req.body;

  // Логування вхідних даних
  console.log('Отриманий запит на сервері:', JSON.stringify(req.body, null, 2));

  try {
    const response = await getChatResponse(message, style);
    res.json({ reply: response });
  } catch (error) {
    console.error('Помилка:', error);
    res.status(500).send('Error occurred while processing your request');
  }
});


export default router;
