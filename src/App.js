import Layout from "./components/Layout";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import { useState } from "react";
import Swal from "sweetalert2";

function App() {
  const [error, setError] = useState(false);
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    if(todo.length < 5){
      setError('برای ایجاد کار جدید باید حداقل 5 کارکتر وارد کنید');
      return;
    }
    setTodos([...todos, { id: Date.now(), title: todo, done: false }])
    setTodo('');
    setError(false)
  }

  const handelDel = (id) => {
    Swal.fire({
      title: "آیتم مطمئن هستید؟",
      text: "شما در حال حذف یکی از کارها هستید!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0652DD",
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
      <Form todo={todo} handleTodo={(val) => setTodo(val)} addTodo={addTodo} error={error} />
      <TodoList todos={todos} handelDel={handelDel} handelDone={handelDone} />
    </Layout>
  );
}

export default App;
