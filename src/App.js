import logo from "./logo.svg";
import "./App.css";
import BarChartComponent from "./components/BarChartComponent";
import { data } from "./mock/mockData";

function App() {
  return (
    <div className="App">
      <BarChartComponent
        data={data["result"]["data"]}
        xLabel=""
        yLabel=""
        xDataKey="itemKey"
        yDataKey="Quantity"
        chartHeader="מוצרים לפי כמות"
      />
    </div>
  );
}

export default App;
