import React from "react";

const Quote = () => {
  const quotes = [
    {
      quote:
        "Simplicity boils down to two steps: Identify the essential. Eliminate the rest",
      author: "Leo Babauta"
    },
    {
      quote: "Continuous improvement is better than delayed perfection",
      author: "Mark Twain"
    },
    {
      quote: "Quality means dooing it right when no one is looking",
      author: "Henry Ford"
    },
    {
      quote:
        "To succeed in your mission, you must have single-minded devotion to your goal",
      author: "A.P.J Abdul Kalam"
    },
    {
      quote:
        "The best way to improve your self-control is to see how and why you lose control",
      author: "Kelly McGonigal"
    },
    {
      quote:
        "It is possible to commit no mistakes and still lose. That is not a weakness; that is life",
      author: "Jean-Luc Picard"
    }
  ];

  function shuffleArray(array) {
    let i = array.length - 1;

    const j = Math.floor(Math.random() * i);

    return j;
  }

  const randomized = shuffleArray(quotes);
  return (
    <blockquote className="font-sans text-lg  text-center .italic text-orange-500 pt-8">
      {quotes[randomized].quote}
      <footer className="">{quotes[randomized].author}</footer>
    </blockquote>
  );
};

export default Quote;
