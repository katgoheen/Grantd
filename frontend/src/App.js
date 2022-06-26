import "./App.css";
import { Buffer } from "buffer";
// import { BaseOptionChart } from "./components/dashboard/BaseOptionChart";
// import { BaseOptionChartStyle } from "./components/dashboard/BaseOptionChartStyle";
import Dashboard from "./components/dashboard/Dashboard";
import Form from "./components/form/Form";
import Navbar from './components/navbar/Navbar'
function App() {
  window.Buffer = Buffer;
  return (
    <div>
      {/* <Dashboard /> */}
      {/* <Navbar /> */}
      <Form />
      {/* <BaseOptionChartStyle /> */}
    </div>
  );
}

export default App;
