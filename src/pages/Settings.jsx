import { useContext } from "react";
import Navbar from "../components/layout/Navbar";
import Background from "../components/layout/Background";
import { ThemeContext } from "../context/ThemeContext";

export default function Settings() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <Background />
      <Navbar />

      <div className="page">
        <div className="glass p-8">

          <h1 className="text-3xl font-bold mb-6">
            Theme Settings
            <p>{theme}</p>
          </h1>

          

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

            <button onClick={() => setTheme("calm")} className="p-4 bg-slate-800 rounded-xl">
              🌿 Calm
            </button>

            <button onClick={() => setTheme("ocean")} className="p-4 bg-slate-800 rounded-xl">
              🌊 Ocean
            </button>

            <button onClick={() => setTheme("forest")} className="p-4 bg-slate-800 rounded-xl">
              🌲 Forest
            </button>

            <button onClick={() => setTheme("night")} className="p-4 bg-slate-800 rounded-xl">
              🌙 Night Focus
            </button>

            <button onClick={() => setTheme("minimal")} className="p-4 bg-slate-800 rounded-xl">
              ⚪ Minimal
            </button>

          </div>

          <p className="mt-6 opacity-70">
            Current Theme: {theme}
          </p>

        </div>
      </div>
    </div>
  );
}