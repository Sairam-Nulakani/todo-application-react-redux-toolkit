import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="flex flex-col items-center justify-center bg-amber-300 w-1/2 ml-80 rounded-lg overflow-scroll">
      <h1 className="text-4xl font-bold text-  py-6">
        Todo Application - Redux Toolkit
      </h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
