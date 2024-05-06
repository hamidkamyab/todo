import Layout from "./components/Layout";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import { useState } from "react";
import Swal from "sweetalert2";

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: Date.now(), title: todo, done: false }])
  }

  const handelDel = (id) => {
    Swal.fire({
      title: "آیتم مطمئن هستید؟",
      text: "شما در حال حذف یکی از کارها هستید!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "بله، مطمئنم!"
    }).then((result) => {
      if (result.isConfirmed) {
        const updateTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updateTodos)
        Swal.fire({
          title: "حذف شد!",
          text: "با موفقیت حذف شد",
          icon: "success"
        });
      }
    });
  }

  const handelDone = (id) => {
    const updateTodos = todos.filter((todo) => {
      if(todo.id === id){
        todo.done = !todo.done;
      }
      return todo
    });
    setTodos(updateTodos)
  }

  return (
    <Layout>
      <Header />
      <Form todo={todo} handleTodo={(val) => setTodo(val)} addTodo={addTodo} />
      <TodoList todos={todos} handelDel={handelDel} handelDone={handelDone} />
    </Layout>
  );
}

export default App;
