import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Analytics from "./pages/Analytics";
import Habits from "./pages/Habits";
import Journal from "./pages/Journal";
import Settings from "./pages/Settings";
import Achievements from "./pages/Achievements";
import Focus from "./pages/Focus";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const timer =
      setTimeout(() => {
        setLoading(false);
      }, 3000);

    return () =>
      clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/tasks"
          element={<Tasks />}
        />

        <Route
          path="/analytics"
          element={<Analytics />}
        />

        <Route
          path="/habits"
          element={<Habits />}
        />

        <Route
          path="/journal"
          element={<Journal />}
        />

        <Route
          path="/achievements"
          element={<Achievements />}
        />

        <Route
          path="/focus"
          element={<Focus />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />


      </Routes>
    </BrowserRouter>
  );
}

export default App;