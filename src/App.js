import "./App.css";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="h-screen flex items-center flex-col justify-center">
      <h1 className="text-4xl font-bold py-6">
        Todo Application - Redux Toolkit
      </h1>
      <TodoForm />
    </div>
  );
}

export default App;
