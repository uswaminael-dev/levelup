import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [habits, setHabits] = useState([]);
  const [journalEntries, setJournalEntries] = useState([]);
  const [focusSessions, setFocusSessions] = useState(0);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  const xpPerLevel = 100;

  // =========================
  // LOAD DATA
  // =========================

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    const savedHabits = localStorage.getItem("habits");
    const savedJournal = localStorage.getItem("journal");
    const savedFocusSessions =
      localStorage.getItem("focusSessions");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }

    if (savedHabits) {
      setHabits(JSON.parse(savedHabits));
    }

    if (savedJournal) {
      setJournalEntries(
        JSON.parse(savedJournal)
      );
    }

    if (savedFocusSessions) {
      setFocusSessions(
        Number(savedFocusSessions)
      );
    }
  }, []);

  // =========================
  // SAVE DATA
  // =========================

  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );

    localStorage.setItem(
      "habits",
      JSON.stringify(habits)
    );

    localStorage.setItem(
      "journal",
      JSON.stringify(journalEntries)
    );

    localStorage.setItem(
      "focusSessions",
      focusSessions
    );
  }, [
    tasks,
    habits,
    journalEntries,
    focusSessions,
  ]);

  // =========================
  // DERIVED VALUES
  // =========================

  const completedCount =
    tasks.filter(
      (task) => task.completed
    ).length;

  const xp =
    tasks.reduce(
      (total, task) =>
        task.completed
          ? total + task.xpReward
          : total,
      0
    ) +
    focusSessions * 15;

  const level =
    Math.floor(xp / xpPerLevel) + 1;

  const xpIntoLevel =
    xp % xpPerLevel;

  // =========================
  // TASKS
  // =========================

  const addTask = (taskData) => {
    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: taskData.title,
        reason: taskData.reason || "",
        reward: taskData.reward || "",
        consequence:
          taskData.consequence || "",
        completed: false,
        xpReward: 20,
        createdAt:
          new Date().toISOString(),
      },
    ]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              completed:
                !task.completed,
            }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) =>
      prev.filter(
        (task) => task.id !== id
      )
    );
  };

  // =========================
  // MODAL
  // =========================

  const openTaskModal = () =>
    setIsTaskModalOpen(true);

  const closeTaskModal = () =>
    setIsTaskModalOpen(false);

  // =========================
  // HABITS
  // =========================

  const addHabit = (title) => {
    setHabits((prev) => [
      ...prev,
      {
        id: Date.now(),
        title,
        streak: 0,
        completedToday: false,
        lastCompletedDate: null,
      },
    ]);
  };

  const toggleHabit = (id) => {
    const today =
      new Date().toDateString();

    setHabits((prev) =>
      prev.map((habit) => {
        if (habit.id !== id)
          return habit;

        let streak =
          habit.streak;

        let completedToday =
          habit.completedToday;

        let lastCompletedDate =
          habit.lastCompletedDate;

        if (
          lastCompletedDate === today
        ) {
          completedToday = false;

          streak = Math.max(
            0,
            streak - 1
          );

          lastCompletedDate = null;
        } else {
          completedToday = true;

          const yesterday =
            new Date();

          yesterday.setDate(
            yesterday.getDate() - 1
          );

          if (
            habit.lastCompletedDate ===
            yesterday.toDateString()
          ) {
            streak += 1;
          } else {
            streak = 1;
          }

          lastCompletedDate = today;
        }

        return {
          ...habit,
          streak,
          completedToday,
          lastCompletedDate,
        };
      })
    );
  };

  // =========================
  // JOURNAL
  // =========================

  const addJournalEntry = (
    entry
  ) => {
    setJournalEntries((prev) => [
      {
        id: Date.now(),
        date:
          new Date().toDateString(),
        ...entry,
      },
      ...prev,
    ]);
  };

  // =========================
  // FOCUS
  // =========================

  const addFocusXP = (
    minutes
  ) => {
    if (minutes >= 10) {
      setFocusSessions(
        (prev) => prev + 1
      );
    }
  };

  // =========================
  // PROVIDER
  // =========================

  return (
    <TaskContext.Provider
      value={{
        tasks,
        habits,
        journalEntries,

        xp,
        level,
        xpPerLevel,
        xpIntoLevel,
        completedCount,

        focusSessions,

        addTask,
        toggleTask,
        deleteTask,

        addHabit,
        toggleHabit,

        addJournalEntry,

        addFocusXP,

        isTaskModalOpen,
        openTaskModal,
        closeTaskModal,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}