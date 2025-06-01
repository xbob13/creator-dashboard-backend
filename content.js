
const express = require('express');
const router = express.Router();
const { generateContent } = require('../services/openaiService');

router.post('/generate', async (req, res) => {
    const { title, niche, keyword } = req.body;
    const prompt = `Generate a detailed blog post about "${title}" in the niche of "${niche}", targeting the keyword "${keyword}".`;
    try {
        const content = await generateContent(prompt);
        res.json({ html: `<article><h1>${title}</h1><p>${content}</p></article>` });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to generate content.' });
    }
});

module.exports = router;
