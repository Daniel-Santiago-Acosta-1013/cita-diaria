import { Quote } from '../models/Quote';

const quotes: Quote[] = [
    { text: 'La vida es lo que sucede cuando estás ocupado haciendo otros planes.', author: 'John Lennon' },
    { text: 'La forma de empezar es dejar de hablar y comenzar a hacer.', author: 'Walt Disney' },
    { text: 'No cuentes los días, haz que los días cuenten.', author: 'Muhammad Ali' },
    { text: 'El fracaso no es el opuesto al éxito, es parte de él.', author: 'Anónimo' },
    { text: 'El éxito es la suma de pequeños esfuerzos repetidos día tras día.', author: 'Robert Collier' },
    { text: 'No te juzgues por tus fracasos, sino por las veces que te levantaste de ellos.', author: 'Stephen Hawking' },
    { text: 'La felicidad no es algo hecho. Viene de tus propias acciones.', author: 'Dalai Lama' },
    { text: 'Solo vivimos una vez, pero si lo hacemos bien, una vez es suficiente.', author: 'Mae West' },
    { text: 'Quien no arriesga nada, no puede esperar ganar nada.', author: 'Jean-Jacques Rousseau' },
    { text: 'No es porque las cosas sean difíciles que no nos atrevemos, es porque no nos atrevemos que son difíciles.', author: 'Séneca' },
    { text: 'El único lugar donde el éxito viene antes que el trabajo es en el diccionario.', author: 'Vidal Sassoon' },
];

export function getQuote(): Quote {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}