import fs from 'fs';
import path from 'path';

let cards = require('../../components/cards').default;

export default function handler(req, res) {
  if (req.method === 'POST') {
    const newCard = req.body;

    // Find index of the existing card
    const existingIndex = cards.findIndex(card => card.id === newCard.id);

    if (existingIndex >= 0) {
      // Update the existing card
      cards[existingIndex] = newCard;
    } else {
      // Add new card
      cards.push(newCard);
    }

    // Write updated cards to file
    const cardsPath = path.resolve('./components/cards.js');
    fs.writeFileSync(cardsPath, `const cards = ${JSON.stringify(cards, null, 2)};\n\nexport default cards;`);

    res.status(200).json({ message: 'Card updated successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

