import { useMemo } from "react";

export default function DailyQuote() {

  const quotes = [
    {
      quote:
        "Small consistent actions create extraordinary results.",
      author:
        "LevelUp"
    },

    {
      quote:
        "Discipline beats motivation.",
      author:
        "Unknown"
    },

    {
      quote:
        "The future depends on what you do today.",
      author:
        "Mahatma Gandhi"
    },

    {
      quote:
        "A year from now you'll wish you started today.",
      author:
        "Karen Lamb"
    },

    {
      quote:
        "Focus on becoming, not having.",
      author:
        "Unknown"
    },

    {
      quote:
        "Success is the sum of small efforts repeated daily.",
      author:
        "Robert Collier"
    },

    {
      quote:
        "Every action you take is a vote for the person you wish to become.",
      author:
        "James Clear"
    }
  ];

  const dailyQuote = useMemo(() => {

    const day =
      new Date().getDate();

    return quotes[
      day % quotes.length
    ];

  }, []);

  return (
    <div
      className="
      glass
      p-8
      mt-8
      "
    >
      <h2
        className="
        text-2xl
        font-bold
        mb-4
        "
      >
        Daily Inspiration
      </h2>

      <p
        className="
        text-xl
        italic
        leading-relaxed
        "
      >
        "{dailyQuote.quote}"
      </p>

      <p
        className="
        mt-4
        opacity-70
        "
      >
        — {dailyQuote.author}
      </p>
    </div>
  );
}