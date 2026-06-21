import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import Navbar from "../components/layout/Navbar";
import Background from "../components/layout/Background";

export default function Journal() {
  const { journalEntries, addJournalEntry } =
    useContext(TaskContext);

  const [entry, setEntry] = useState({
    win: "",
    challenge: "",
    gratitude: "",
    learning: "",
  });

  const handleChange = (e) => {
    setEntry({
      ...entry,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    if (!entry.win && !entry.challenge) return;

    addJournalEntry(entry);

    setEntry({
      win: "",
      challenge: "",
      gratitude: "",
      learning: "",
    });
  };

  return (
    <div>
      <Background />
      <Navbar />

      <div className="page">
        <div className="glass p-6">

          <h1 className="text-3xl font-bold mb-6">
            Daily Journal
          </h1>

          {/* INPUTS */}
          <div className="space-y-4 mb-6">

            <textarea
              name="win"
              value={entry.win}
              onChange={handleChange}
              placeholder="What went well today?"
              className="w-full p-3 rounded-xl bg-slate-800"
            />

            <textarea
              name="challenge"
              value={entry.challenge}
              onChange={handleChange}
              placeholder="What was difficult?"
              className="w-full p-3 rounded-xl bg-slate-800"
            />

            <textarea
              name="gratitude"
              value={entry.gratitude}
              onChange={handleChange}
              placeholder="What are you grateful for?"
              className="w-full p-3 rounded-xl bg-slate-800"
            />

            <textarea
              name="learning"
              value={entry.learning}
              onChange={handleChange}
              placeholder="What did you learn?"
              className="w-full p-3 rounded-xl bg-slate-800"
            />

            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-500 rounded-xl"
            >
              Save Entry
            </button>

          </div>

          {/* HISTORY */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold">
              Past Entries
            </h2>

            {journalEntries.map((j) => (
              <div
                key={j.id}
                className="p-4 bg-slate-800 rounded-xl"
              >
                <p className="text-sm opacity-70">
                  {j.date}
                </p>

                <p>
                  <b>Win:</b> {j.win}
                </p>

                <p>
                  <b>Challenge:</b> {j.challenge}
                </p>

                <p>
                  <b>Gratitude:</b> {j.gratitude}
                </p>

                <p>
                  <b>Learning:</b> {j.learning}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </div>
  );
}