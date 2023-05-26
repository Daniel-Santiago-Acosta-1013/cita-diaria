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
  // Obtén las referencias a los elementos que contienen el texto de la cita y el autor
  const quoteTextElement = document.getElementById('quote-text')!;
  const quoteAuthorElement = document.getElementById('quote-author')!;

  // Agrega la clase "quote-change" para iniciar la animación
  quoteTextElement.classList.add('quote-change');
  quoteAuthorElement.classList.add('quote-change');

  // Después de 0.5s (la duración de la animación), actualiza el texto y quita la clase "quote-change"
  setTimeout(() => {
    quoteTextElement.textContent = quotes[currentQuoteIndex].text;
    quoteAuthorElement.textContent = '- ' + quotes[currentQuoteIndex].author;
    
    quoteTextElement.classList.remove('quote-change');
    quoteAuthorElement.classList.remove('quote-change');
  }, 500);
};

document.getElementById('new-quote-button')!.addEventListener('click', async () => {
  await getQuotes();
});

// Llama a getQuotes al cargar la página para iniciar con una cita
getQuotes();