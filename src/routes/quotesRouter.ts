import { Router } from 'express';
import { getQuote } from '../controllers/quotesController';

const router = Router();

router.get('/', (req, res) => {
  const quote = getQuote();
  res.render('index', { quote });
});

export default router;