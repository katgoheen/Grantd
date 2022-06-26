import "./App.css";
import { Buffer } from "buffer";
import { BaseOptionChartStyle } from "./components/dashboard/BaseOptionChartStyle";
// import { BaseOptionChart } from "./components/dashboard/BaseOptionChart";
// import { BaseOptionChartStyle } from "./components/dashboard/BaseOptionChartStyle";
import Dashboard from "./components/dashboard/Dashboard";
import Form from "./components/form/Form";

function App() {
  window.Buffer = Buffer;
  return (
    <div>
      {/* <Dashboard /> */}
      <Form />
      {/* <BaseOptionChartStyle /> */}
    </div>
  );
}

export default App;
