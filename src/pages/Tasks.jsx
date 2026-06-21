import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

import Navbar from "../components/layout/Navbar";
import Background from "../components/layout/Background";
import AddTaskModal from "../components/tasks/AddTaskModal";
import { motion } from "framer-motion";

export default function Tasks() {
  const {
    tasks,
    toggleTask,
    deleteTask,
    isTaskModalOpen,
    openTaskModal
  } = useContext(TaskContext);

  return (
    <div>
      <Background />
      <Navbar />

      <div className="page">

        <div className="glass p-6">

          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">
              Tasks
            </h1>

            <button
              onClick={openTaskModal}
              className="px-4 py-2 bg-green-500 rounded-xl"
            >
              + Add Task
            </button>
          </div>

          <div className="space-y-3">
            {tasks.map((task) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02 }}
                className="flex justify-between items-center p-4 bg-slate-800 rounded-xl"
              >
                <div
                  onClick={() => toggleTask(task.id)}
                  className={`cursor-pointer ${
                    task.completed ? "line-through opacity-50" : ""
                  }`}
                >
                  <div>
                    <h3 className="font-semibold">
                      {task.title}
                    </h3>

                    {task.reason && (
                      <p className="text-sm opacity-70">
                        {task.reason}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-400"
                >
                  delete
                </button>
              </motion.div>
            ))}
          </div>

        </div>

      </div>

      {/* MODAL */}
      {isTaskModalOpen && <AddTaskModal />}
    </div>
  );
}