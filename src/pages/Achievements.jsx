import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

import Navbar from "../components/layout/Navbar";
import Background from "../components/layout/Background";

export default function Achievements() {
  const {
    completedCount,
    level,
    focusSessions,
    habits,
    journalEntries,
  } = useContext(TaskContext);

  const achievements = [
    {
      title: "First Step",
      icon: "🌱",
      unlocked: completedCount >= 1,
      description: "Complete your first task",
    },

    {
      title: "Productive Day",
      icon: "⚡",
      unlocked: completedCount >= 5,
      description: "Complete 5 tasks",
    },

    {
      title: "Focus Warrior",
      icon: "🎯",
      unlocked: focusSessions >= 10,
      description: "Finish 10 focus sessions",
    },

    {
      title: "Habit Builder",
      icon: "🔥",
      unlocked:
        habits.some(
          (habit) => habit.streak >= 7
        ),
      description: "Reach a 7 day habit streak",
    },

    {
      title: "Reflective Mind",
      icon: "📖",
      unlocked:
        journalEntries.length >= 10,
      description: "Write 10 journal entries",
    },

    {
      title: "Level Up",
      icon: "🏆",
      unlocked: level >= 5,
      description: "Reach Level 5",
    },
  ];

    const unlockedCount =
    achievements.filter(
        (a) => a.unlocked
    ).length;

    const achievementPercent =
    Math.round(
        (unlockedCount /
        achievements.length) *
        100
    );

  return (
    <div>
      <Background />
      <Navbar />

      <div className="page">

        <div className="glass p-6">

          <h1 className="text-3xl font-bold mb-6">
            Achievements
          </h1>

        <div className="glass p-4 mb-6">

        <h2 className="font-bold text-xl">
            Progress
            <p>
            Completion:
            {achievementPercent}%
            </p>
        </h2>

        <p>
            Unlocked:
            {
            achievements.filter(
                (a) => a.unlocked
            ).length
            }
            /
            {achievements.length}
        </p>

        </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

            {achievements.map(
              (achievement) => (
                <div
                  key={achievement.title}
                  className={`
                    glass
                    p-5
                    transition-all
                    ${
                      achievement.unlocked
                        ? ""
                        : "opacity-50"
                    }
                  `}
                >

                  <div className="text-5xl mb-3">
                    {achievement.icon}
                  </div>

                  <h2 className="font-bold text-xl">
                    {achievement.title}
                  </h2>

                  <p className="opacity-70">
                    {
                      achievement.description
                    }
                  </p>

                  <div className="mt-4">
                    {achievement.unlocked ? (
                      <span className="text-green-500">
                        ✅ Unlocked
                      </span>
                    ) : (
                      <span className="text-yellow-500">
                        🔒 Locked
                      </span>
                    )}
                  </div>

                </div>
              )
            )}

          </div>

        </div>

      </div>
    </div>
  );
}