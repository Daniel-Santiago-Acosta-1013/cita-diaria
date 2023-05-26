import { Router } from 'express';
import { getQuote } from '../controllers/quotesController';

const router = Router();

router.get('/', (req, res) => {
  const quote = getQuote();
  res.render('index', { quote });
});

router.get('/data', (req, res) => {
  const quote = getQuote();
  res.json(quote);
});

export default router;