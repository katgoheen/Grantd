import "./App.css";
import { Buffer } from "buffer";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  window.Buffer = Buffer;
  return (
    <div>
      <Dashboard />
    </div>
  );
}

export default App;
