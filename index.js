import express from 'express';
const router = express.Router();

let cards = [];
let nextId = 1;

router.get('/cards', (req, res) => {
  res.json(cards);
});
router.get('/cards/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const card = cards.find(c => c.id === id);
  if (!card) return res.status(404).json({ message: 'Card not found' });
  res.json(card);
});

router.post('/cards', (req, res) => {
  const { suit, value } = req.body;
  if (!suit || !value) {
    return res.status(400).json({ message: 'Suit and value are required' });
  }
  const card = { id: nextId++, suit, value };
  cards.push(card);
  res.status(201).json(card);
});

router.delete('/cards/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = cards.findIndex(c => c.id === id);
  if (index === -1) return res.status(404).json({ message: 'Card not found' });
  const deletedCard = cards.splice(index, 1);
  res.json(deletedCard[0]);
});

export default router;
