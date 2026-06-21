import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import Navbar from "../components/layout/Navbar";
import Background from "../components/layout/Background";

export default function Analytics() {
  const { tasks, xp, level, completedCount, habits } =
    useContext(TaskContext);

  const totalTasks = tasks.length;
  const completedTasks = completedCount;

  const taskCompletionRate =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  const habitCount = habits.length;

  const completedHabits = habits.filter(
    (h) => h.completedToday
  ).length;

  const avgHabitStreak =
    habitCount === 0
      ? 0
      : Math.round(
          habits.reduce((sum, h) => sum + h.streak, 0) /
            habitCount
        );

  const productivityScore = Math.round(
    (taskCompletionRate + avgHabitStreak * 10) / 2
  );

  const taskData = [
    { category: "Completed", value: completedCount },
    { category: "Pending", value: tasks.length - completedCount },
  ];

  const habitData = habits.map((h) => ({
    habit: h.title,
    streak: h.streak,
  }));

  return (
    <div>
      <Background />
      <Navbar />

      <div className="page">
        <div className="glass p-6">

          <h1 className="text-3xl font-bold mb-6">
            Analytics Dashboard
          </h1>

          <div className="grid md:grid-cols-2 gap-4">

            {/* LEVEL */}
            <div className="p-4 bg-slate-800 rounded-xl">
              <h2>Level</h2>
              <p className="text-2xl font-bold">{level}</p>
              <p className="opacity-70">XP: {xp}</p>
            </div>

            {/* TASKS */}
            <div className="p-4 bg-slate-800 rounded-xl">
              <h2>Tasks</h2>
              <p>Total: {totalTasks}</p>
              <p>Completed: {completedTasks}</p>
              <p>Completion Rate: {taskCompletionRate}%</p>
            </div>

            {/* HABITS */}
            <div className="p-4 bg-slate-800 rounded-xl">
              <h2>Habits</h2>
              <p>Total: {habitCount}</p>
              <p>Done Today: {completedHabits}</p>
              <p>Avg Streak: {avgHabitStreak}</p>
            </div>

            {/* PRODUCTIVITY */}
            <div className="p-4 bg-green-500/20 rounded-xl">
              <h2>Productivity Score</h2>
              <p className="text-3xl font-bold">
                {productivityScore}%
              </p>
              <p className="opacity-70">
                Based on tasks + habits
              </p>
            </div>
          </div>

          {/* CHART SECTION (IMPORTANT FIX) */}
          <div className="mt-8 space-y-8">

            <div>
              <h2 className="text-xl font-bold mb-3">
                Task Overview
              </h2>

              {/* CHART GOES HERE (next step we’ll plug it properly) */}
              <div className="p-4 bg-slate-800 rounded-xl">
                Completed: {completedCount} <br />
                Pending: {tasks.length - completedCount}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">
                Habit Streaks
              </h2>

              <div className="p-4 bg-slate-800 rounded-xl">
                {habits.map((h) => (
                  <p key={h.id}>
                    {h.title}: 🔥 {h.streak}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">
                Productivity Breakdown
              </h2>

              <div className="p-4 bg-slate-800 rounded-xl">
                Score: {productivityScore}%
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}