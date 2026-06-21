import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="glass mx-8 mt-6 p-5 flex justify-between items-center z-50 relative">

      <h1 className="text-2xl font-bold">
        LevelUp
      </h1>

      <div className="flex gap-6">
        <Link to="/">Dashboard</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/habits">Habits</Link>
        <Link to="/journal">Journal</Link>
        <Link to="/achievements">Achievements</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/focus">Focus</Link>
      </div>

    </nav>
  );
}