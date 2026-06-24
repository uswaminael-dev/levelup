import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { motion } from "framer-motion";
import DailyQuote from "../components/dashboard/DailyQuote";
import Navbar from "../components/layout/Navbar";
import Background from "../components/layout/Background";
import PageWrapper from "../components/layout/PageWrapper";

export default function Dashboard() {
  const {
    xp,
    level,
    tasks,
    xpPerLevel,
    xpIntoLevel,
  } = useContext(TaskContext);

  const completedTasks =
    tasks.filter((task) => task.completed).length;

  const quotes = [
    "Small consistent actions create extraordinary results.",
    "Discipline beats motivation.",
    "The future depends on what you do today.",
    "Progress is progress, no matter how small.",
    "Focus on becoming, not having.",
    "A year from now you'll wish you started today.",
  ];

  const quote =
    quotes[
      new Date().getDate() %
      quotes.length
    ];

  return (
    <PageWrapper>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <Background />
        <Navbar />

        <div className="page">

          {/* Welcome Section */}

          <div className="mb-8 text-center">
            <h1 className="text-5xl font-black mb-2">
              Welcome Back 👋
            </h1>

            <p className="opacity-70">
              Continue building your best self.
            </p>
          </div>

          {/* Main Cards */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Level Card */}

            <div className="glass p-8 hover:scale-[1.02] transition duration-300">

              <h2 className="text-3xl font-bold">
                Level {level}
              </h2>

              <p className="mt-2">
                XP: {xp}
              </p>

              <div className="mt-5 w-full h-3 bg-slate-700 rounded-full overflow-hidden">

                <div
                  className="
                  h-full
                  bg-green-400
                  transition-all
                  duration-700
                  "
                  style={{
                    width: `${
                      (xpIntoLevel /
                        xpPerLevel) *
                      100
                    }%`,
                  }}
                />

              </div>

              <p className="text-sm opacity-70 mt-2">
                {xpIntoLevel} / {xpPerLevel} XP
              </p>

            </div>

            {/* Task Card */}

            <div className="glass p-8 hover:scale-[1.02] transition duration-300">

              <h2 className="text-3xl font-bold">
                Tasks
              </h2>

              <p className="mt-3">
                Total: {tasks.length}
              </p>

              <p>
                Completed: {completedTasks}
              </p>

              <p className="opacity-70 mt-2">
                Keep your streak alive.
              </p>

            </div>

            {/* Focus Card */}

            <div className="glass p-8 hover:scale-[1.02] transition duration-300">

              <h2 className="text-3xl font-bold">
                Focus
              </h2>

              <p className="mt-3">
                Ready to build today 🚀
              </p>

              <p className="opacity-70 mt-2">
                Enter Focus Mode and earn XP.
              </p>

            </div>

          </div>

          {/* Daily Quote */}

          <DailyQuote />

        </div>
      </motion.div>
    </PageWrapper>
  );
}