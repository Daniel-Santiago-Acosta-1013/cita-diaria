import { Quote } from '../models/Quote';

const quotes: Quote[] = [
  { text: 'Life is what happens when you’re busy making other plans.', author: 'John Lennon' },
  { text: 'The way to get started is to quit talking and begin doing.', author: 'Walt Disney' },
];

export function getQuote(): Quote {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}