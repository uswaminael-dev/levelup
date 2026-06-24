import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

import Navbar from "../components/layout/Navbar";
import Background from "../components/layout/Background";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

export default function Analytics() {
  const {
    tasks,
    xp,
    level,
    completedCount,
    habits,
    focusSessions,
  } = useContext(TaskContext);

  const totalTasks = tasks.length;

  const taskCompletionRate =
    totalTasks === 0
      ? 0
      : Math.round(
          (completedCount / totalTasks) * 100
        );

  const habitCount = habits.length;

  const completedHabits =
    habits.filter(
      (h) => h.completedToday
    ).length;

  const avgHabitStreak =
    habitCount === 0
      ? 0
      : Math.round(
          habits.reduce(
            (sum, habit) =>
              sum + habit.streak,
            0
          ) / habitCount
        );

  const productivityScore =
    Math.round(
      (
        taskCompletionRate +
        avgHabitStreak * 10
      ) / 2
    );

  const taskData = [
    {
      category: "Completed",
      value: completedCount,
    },
    {
      category: "Pending",
      value:
        tasks.length -
        completedCount,
    },
  ];

  const habitData =
    habits.map((habit) => ({
      habit: habit.title,
      streak: habit.streak,
    }));

  const productivity =
    Math.round(
      (
        (completedCount /
          (tasks.length || 1)) *
          100 +
        habits.reduce(
          (a, b) =>
            a + b.streak,
          0
        )
      ) / 2
    );

  const COLORS = [
    "#22c55e",
    "#ef4444",
  ];

  return (
    <div>
      <Background />
      <Navbar />

      <div className="page">

        <div className="glass p-6">

          <h1 className="text-3xl font-bold mb-6">
            Analytics Dashboard
          </h1>

          {/* Top Stats */}

          <div className="grid md:grid-cols-2 gap-4 mb-6">

            <div className="glass p-4">
              <h2>Level</h2>

              <p className="text-3xl font-bold">
                {level}
              </p>

              <p className="opacity-70">
                XP: {xp}
              </p>
            </div>

            <div className="glass p-4">
              <h2>Tasks</h2>

              <p>
                Total: {totalTasks}
              </p>

              <p>
                Completed: {completedCount}
              </p>

              <p>
                Completion Rate:
                {" "}
                {taskCompletionRate}%
              </p>
            </div>

            <div className="glass p-4">
              <h2>Habits</h2>

              <p>
                Total: {habitCount}
              </p>

              <p>
                Done Today:
                {" "}
                {completedHabits}
              </p>

              <p>
                Avg Streak:
                {" "}
                {avgHabitStreak}
              </p>
            </div>

            <div className="glass p-4">
              <h2>
                Productivity Score
              </h2>

              <p className="text-3xl font-bold">
                {productivityScore}%
              </p>

              <p className="opacity-70">
                Based on tasks & habits
              </p>
            </div>

          </div>

          {/* Charts */}

          <div className="grid lg:grid-cols-2 gap-6">

            {/* Pie Chart */}

            <div className="glass p-4">

              <h2 className="text-xl font-bold mb-3">
                Task Completion
              </h2>

              <ResponsiveContainer
                width="100%"
                height={250}
              >
                <PieChart>

                  <Pie
                    data={taskData}
                    dataKey="value"
                    outerRadius={80}
                  >
                    {taskData.map(
                      (entry, index) => (
                        <Cell
                          key={index}
                          fill={
                            COLORS[
                              index %
                                COLORS.length
                            ]
                          }
                        />
                      )
                    )}
                  </Pie>

                  <Tooltip />

                </PieChart>
              </ResponsiveContainer>

            </div>

            {/* Habit Chart */}

            <div className="glass p-4">

              <h2 className="text-xl font-bold mb-3">
                Habit Streaks
              </h2>

              <ResponsiveContainer
                width="100%"
                height={250}
              >
                <BarChart
                  data={habitData}
                >
                  <XAxis
                    dataKey="habit"
                  />

                  <YAxis />

                  <Tooltip />

                  <Bar
                    dataKey="streak"
                  />
                </BarChart>
              </ResponsiveContainer>

            </div>

            {/* Productivity */}

            <div className="glass p-4">

              <h2 className="text-xl font-bold mb-4">
                Productivity
              </h2>

              <div className="w-full bg-gray-700 rounded-full h-5">

                <div
                  className="
                  bg-green-500
                  h-5
                  rounded-full
                  transition-all
                  "
                  style={{
                    width:
                      `${productivity}%`,
                  }}
                />

              </div>

              <p className="mt-3">
                {productivity}%
              </p>

            </div>

            {/* Focus Sessions */}

            <div className="glass p-4">

              <h2 className="text-xl font-bold">
                Focus Sessions
              </h2>

              <p className="text-5xl font-bold mt-4">
                {focusSessions}
              </p>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}