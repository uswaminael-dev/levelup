import toast from "react-hot-toast";

export function checkAchievements({
  completedCount,
  level,
  focusSessions,
  habits,
  journalEntries,
}) {
  const achievements = [
    {
      key: "first-step",
      unlocked: completedCount >= 1,
      title: "🌱 First Step",
    },

    {
      key: "productive-day",
      unlocked: completedCount >= 5,
      title: "⚡ Productive Day",
    },

    {
      key: "focus-warrior",
      unlocked: focusSessions >= 10,
      title: "🎯 Focus Warrior",
    },

    {
      key: "habit-builder",
      unlocked: habits.some(
        (h) => h.streak >= 7
      ),
      title: "🔥 Habit Builder",
    },

    {
      key: "reflective-mind",
      unlocked:
        journalEntries.length >= 10,
      title: "📖 Reflective Mind",
    },

    {
      key: "level-up",
      unlocked: level >= 5,
      title: "🏆 Level Up",
    },
  ];

  achievements.forEach(
    (achievement) => {
      if (!achievement.unlocked)
        return;

      const alreadyShown =
        localStorage.getItem(
          achievement.key
        );

      if (!alreadyShown) {
        toast.success(
          `Achievement Unlocked: ${achievement.title}`
        );

        localStorage.setItem(
          achievement.key,
          "true"
        );
      }
    }
  );
}