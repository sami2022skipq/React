import "./App.css";
import AddToDo from "./components/AddToDo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1 className="text-3xl bg-slate-400">Learn React Redux..</h1>;
      <AddToDo />
      <Todos />
    </>
  );
}

export default App;
