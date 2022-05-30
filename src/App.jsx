import ExpensesChart from "./components/ExpensesChart";
import data from "../data.json";

function App() {
  return (
    <div className="grid min-h-screen place-items-center bg-cream">
      <ExpensesChart data={data} />
    </div>
  );
}

export default App;
