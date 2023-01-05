const quotes = [
  {
    quote: `"I will Never Love again!😒"`,
    writer: `-mk Gift`,
  },
  {
    quote: `"True Love shouldn't be this complicated💖"`,
    writer: `-Mk Mikel`,
  },
  {
    quote: `"Make Money while you're Young💵"`,
    writer: `-Money Man`,
  },
  {
    quote: `"There is alway time to code 🧑‍💻"`,
    writer: `-Efe Gift`,
  },
];

const btn = document.getElementById("new-quote");
const quote = document.getElementById("text");
const author = document.getElementById("author");

const generateQuotes = () => {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerHTML = quotes[random].quote;

  author.innerHTML = quotes[random].writer;
};

btn.addEventListener("click", generateQuotes);
