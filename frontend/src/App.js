import "./App.css";
import { Buffer } from "buffer";
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
