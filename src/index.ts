import express from 'express';
import path from 'path';
import quotesRouter from './routes/quotesRouter';

const app = express();
const port = 3055;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.use('/quotes', quotesRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});