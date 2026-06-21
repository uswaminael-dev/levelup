import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="glass mx-8 mt-6 p-5 flex justify-between items-center z-50 relative">

      <h1 className="text-2xl font-bold">
        LevelUp
      </h1>

      <div className="flex gap-6">
        <Link
            className="hover:opacity-70"
            to="/"
          >
            Dashboard
          </Link>
        <Link
            className="hover:opacity-70"
            to="/tasks"
          >
            Tasks
          </Link>
        <Link
            className="hover:opacity-70"
            to="/analytics"
          >
            Analytics
          </Link>
        <Link
            className="hover:opacity-70"
            to="/habits"
          >
            Habits
          </Link>
        <Link
            className="hover:opacity-70"
            to="/journal"
          >
            Journal
          </Link>
        <Link
            className="hover:opacity-70"
            to="/achievements"
          >
            Achievements
          </Link>
        <Link
            className="hover:opacity-70"
            to="/settings"
          >
            Settings
          </Link>
        <Link
            className="hover:opacity-70"
            to="/focus"
          >
            Focus
          </Link>
      </div>

    </nav>
  );
}