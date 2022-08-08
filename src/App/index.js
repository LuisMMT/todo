import "./App.css";
import React from "react";
import { TodoProvider } from '../TodoContext';
import { AppUI } from "./AppUI";

/* const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar curso de React", completed: true },
  { text: "Linea de Credito", completed: false },
]; */

function App() {

  return (
    <TodoProvider>
    <AppUI />
  </TodoProvider>
  );
}

export default App;
