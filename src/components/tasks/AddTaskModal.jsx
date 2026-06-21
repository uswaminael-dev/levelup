import { useContext, useState } from "react";
import { TaskContext } from "../../context/TaskContext";

export default function AddTaskModal() {
  const { addTask, closeTaskModal } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [reason, setReason] = useState("");
  const [reward, setReward] = useState("");
  const [consequence, setConsequence] = useState("");
  
  const handleAdd = () => {
    if (!title.trim()) return;

    addTask({
      title,
      reason,
      reward,
      consequence,
    });

    setTitle("");
    setReason("");
    setReward("");
    setConsequence("");

    closeTaskModal();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div className="glass p-6 w-[90%] max-w-md">

        <h2 className="text-2xl font-bold mb-4">
          Add New Task
        </h2>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What do you want to achieve?"
          className="w-full p-3 rounded-xl bg-slate-800 mb-4"
        />
  
        <div className="flex justify-end gap-3">

          <button
            onClick={closeTaskModal}
            className="px-4 py-2 bg-gray-600 rounded-xl"
          >
            Cancel
          </button>

          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-green-500 rounded-xl"
          >
            Add Task
          </button>

        </div>

      </div>

    </div>
  );
}