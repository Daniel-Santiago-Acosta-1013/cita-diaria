import axios from 'axios';

let quotes: { text: string, author: string }[] = [];
let currentQuoteIndex = 0;

const getQuotes = async () => {
  const response = await axios.get('/quotes/data');
  console.log(response.data); // Esto debería imprimir la cita en la consola
  quotes = [response.data];
  currentQuoteIndex = 0;
  updateQuote();
};

const updateQuote = () => {
  document.getElementById('quote-text')!.textContent = quotes[currentQuoteIndex].text;
  document.getElementById('quote-author')!.textContent = '- ' + quotes[currentQuoteIndex].author;
};

document.getElementById('new-quote-button')!.addEventListener('click', async () => {
  await getQuotes();
});

getQuotes();