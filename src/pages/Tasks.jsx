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
    openTaskModal,
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

          {tasks.length === 0 ? (
            <div className="text-center opacity-70 py-10">
              <p>No tasks yet.</p>
              <p>Create your first task to begin earning XP 🚀</p>
            </div>
          ) : (
            <div className="space-y-3">

              {tasks.map((task) => (

                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass p-4 flex justify-between items-center"
                >

                  <div className="flex items-center gap-4">

                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() =>
                        toggleTask(task.id)
                      }
                      className="w-5 h-5 cursor-pointer"
                    />

                    <div
                      className={
                        task.completed
                          ? "line-through opacity-50"
                          : ""
                      }
                    >
                      <h3 className="font-semibold text-lg">
                        {task.title}
                      </h3>

                      {task.reason && (
                        <p className="text-sm opacity-70">
                          {task.reason}
                        </p>
                      )}

                      <p className="text-green-400 text-sm mt-1">
                        +{task.xpReward} XP
                      </p>
                    </div>

                  </div>

                  <button
                    onClick={() =>
                      deleteTask(task.id)
                    }
                    className="
                      px-3
                      py-2
                      rounded-lg
                      bg-red-500
                      text-white
                    "
                  >
                    Delete
                  </button>

                </motion.div>

              ))}

            </div>
          )}

        </div>

      </div>

      {isTaskModalOpen && (
        <AddTaskModal />
      )}

    </div>
  );
}