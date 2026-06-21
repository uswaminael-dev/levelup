import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import Navbar from "../components/layout/Navbar";
import Background from "../components/layout/Background";

export default function Habits() {
  const { habits, addHabit, toggleHabit } =
    useContext(TaskContext);

  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (!title.trim()) return;
    addHabit(title);
    setTitle("");
  };

  return (
    <div>
      <Background />
      <Navbar />

      <div className="page">
        <div className="glass p-6">

          <h1 className="text-3xl font-bold mb-6">
            Habits
          </h1>

          {/* Add Habit */}
          <div className="flex gap-3 mb-6">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="New habit..."
              className="flex-1 p-3 rounded-xl bg-slate-800"
            />

            <button
              onClick={handleAdd}
              className="px-4 py-2 bg-green-500 rounded-xl"
            >
              Add
            </button>
          </div>

          {/* Habit List */}
          <div className="space-y-3">
            {habits.map((habit) => (
              <div
                key={habit.id}
                className="flex justify-between items-center p-4 bg-slate-800 rounded-xl"
              >
                <div>
                  <h3 className="font-semibold">
                    {habit.title}
                  </h3>

                  <p className="text-sm opacity-70">
                    🔥 Streak: {habit.streak} days
                  </p>
                </div>

                <button
                  onClick={() => toggleHabit(habit.id)}
                  className={`px-3 py-1 rounded-xl ${
                    habit.completedToday
                      ? "bg-green-500"
                      : "bg-slate-600"
                  }`}
                >
                  {habit.completedToday
                    ? "Done"
                    : "Mark"}
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}