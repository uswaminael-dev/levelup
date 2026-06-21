import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

import Navbar from "../components/layout/Navbar";
import Background from "../components/layout/Background";
import PageWrapper from "../components/layout/PageWrapper";

export default function Dashboard() {
  const { xp, level, tasks, xpPerLevel, xpIntoLevel } =
    useContext(TaskContext);

  return (
    <PageWrapper>
      <div>
        <Background />
        <Navbar />

        <div className="page grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="glass p-8 hover:scale-[1.02] transition">
            <h2 className="text-3xl font-bold">
              Level {level}
            </h2>

            <p>XP: {xp}</p>

            <div className="mt-4 w-full h-3 bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-400 transition-all duration-500"
                style={{
                  width: `${(xpIntoLevel / xpPerLevel) * 100}%`,
                }}
              />
            </div>
          </div>

          <div className="glass p-8 hover:scale-[1.02] transition">
            <h2>Tasks</h2>
            <p>Total: {tasks.length}</p>
            <p>Completed: {tasks.filter(t => t.completed).length}</p>
          </div>

          <div className="glass p-8 hover:scale-[1.02] transition">
            <h2>Focus Status</h2>
            <p>Ready to build today 🚀</p>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
}