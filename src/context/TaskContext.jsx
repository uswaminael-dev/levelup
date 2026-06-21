import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  
  const [level, setLevel] = useState(1);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  
  const [habits, setHabits] = useState([]);
  const [journalEntries, setJournalEntries] = useState([]);
  const [focusSessions, setFocusSessions] = useState(0);
  const xpPerLevel = 100;

  // Load
  useEffect(() => {
  const savedTasks = localStorage.getItem("tasks");
  const savedXp = localStorage.getItem("xp");
  const savedCompleted =localStorage.getItem("completedCount");
  const savedHabits = localStorage.getItem("habits");
  const savedJournal = localStorage.getItem("journal");

  if (savedJournal) {
    setJournalEntries(JSON.parse(savedJournal));
  }

  if (savedHabits) {
    setHabits(JSON.parse(savedHabits));
  }

  if (savedTasks) setTasks(JSON.parse(savedTasks));
  if (savedXp) setXp(Number(savedXp));

  if (savedCompleted) {
    setCompletedCount(
      Number(savedCompleted)
    );
  }
}, []);

  // Save
  useEffect(() => {
  localStorage.setItem(
    "tasks",
    JSON.stringify(tasks)
  );

  localStorage.setItem(
    "xp",
    xp
  );

  localStorage.setItem(
    "completedCount",
    completedCount
  );

  localStorage.setItem(
  "habits", 
  JSON.stringify(habits));

  localStorage.setItem(
  "journal",
  JSON.stringify(journalEntries)
);

}, [tasks, xp, completedCount, habits, journalEntries]);

  // Level system
  useEffect(() => {
    const newLevel = Math.floor(xp / xpPerLevel) + 1;
    setLevel(newLevel);
  }, [xp]);

  // progress inside level (IMPORTANT NEW)
  const xpIntoLevel = xp % xpPerLevel;

  // Add task
  const addTask = (taskData) => {
    setTasks((prev) => [...prev,
      {
        id: Date.now(),
        title: taskData.title,
        reason: taskData.reason,
        reward: taskData.reward,
        consequence: taskData.consequence,
        completed: false,
        xpReward: 20,
        createdAt: new Date().toISOString(),
      },
    ]);
  };

  // Toggle complete + XP reward
  const toggleTask = (id) => {
  setTasks((prev) => {
    let xpChange = 0;
    let completedChange = 0;

    const updated = prev.map((task) => {
      if (task.id !== id) return task;

      // CASE 1: completing task
      if (!task.completed) {
        xpChange += task.xpReward;
        completedChange += 1;

        return {
          ...task,
          completed: true,
        };
      }

      // CASE 2: uncompleting task
      xpChange -= task.xpReward;
      completedChange -= 1;

      return {
        ...task,
        completed: false,
      };
    });

    // SAFE: update outside loop
    setXp((prev) => Math.max(0, prev + xpChange));
    setCompletedCount((prev) =>
      Math.max(0, prev + completedChange)
    );

    return updated;
  });
};

  // Delete task
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };


const openTaskModal = () => setIsTaskModalOpen(true);
const closeTaskModal = () => setIsTaskModalOpen(false);

  //Add habit (IMPORTANT NEW)
  const addHabit = (title) => {
  setHabits((prev) => [
    ...prev,
    {
      id: Date.now(),
      title,
      streak: 0,
      lastCompletedDate: null,
      completedToday: false,
    },
  ]);
};

  //Toggle Habit
  const toggleHabit = (id) => {
  const today = new Date().toDateString();

  setHabits((prev) =>
    prev.map((habit) => {
      if (habit.id !== id) return habit;

      let newStreak = habit.streak;
      let completedToday = habit.completedToday;
      let lastDate = habit.lastCompletedDate;

      if (lastDate === today) {
        // undo today completion
        completedToday = false;
        newStreak = Math.max(0, newStreak - 1);
        lastDate = null;
      } else {
        // mark complete
        completedToday = true;

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        if (habit.lastCompletedDate === yesterday.toDateString()) {
          newStreak += 1;
        } else {
          newStreak = 1;
        }

        lastDate = today;
      }

      return {
        ...habit,
        streak: newStreak,
        completedToday,
        lastCompletedDate: lastDate,
      };
    })
  );
};

  //Add journal entry (IMPORTANT NEW)
    const addJournalEntry = (entry) => {
  setJournalEntries((prev) => [
    {
      id: Date.now(),
      date: new Date().toDateString(),
      ...entry,
    },
    ...prev,
  ]);
};


  //add focus
  const addFocusXP = (minutes) => {
  let earnedXP = 0;

  if (minutes >= 25) earnedXP = 15;
  else if (minutes >= 10) earnedXP = 5;

  setXp((prev) => prev + earnedXP);
};

setFocusSessions((prev) => prev + 1);

  return (
    <TaskContext.Provider
      value={{
  tasks,
  xp,
  level,
  xpPerLevel,
  xpIntoLevel,
  addTask,
  toggleTask,
  deleteTask,
  isTaskModalOpen,
  openTaskModal,
  closeTaskModal,
  completedCount,
  habits,
  addHabit,
  toggleHabit,
  journalEntries,
  addJournalEntry,
  addFocusXP,
  focusSessions
}}
    >
      {children}
    </TaskContext.Provider>
  );



}