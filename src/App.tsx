import { Navigation } from "./components/Navigation";
import { Routes } from "./routes/Routes";
import "./App.css";
export const App = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Navigation />
      </Routes>
    </div>
  );
};
