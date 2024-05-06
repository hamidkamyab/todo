import Layout from "./components/Layout";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const getTodosList = ()=>{
    const TodosList = JSON.parse(localStorage.getItem('todos'));
    if(TodosList){
      return TodosList;
    }else{
      return []
    }
}

function App() {
  const [error, setError] = useState(false);
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState(getTodosList);

  const addTodo = (e) => {
    e.preventDefault();
    if(todo.trim().length < 5){
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
      confirmButtonText: "بله، مطمئنم!",
      cancelButtonText:"انصراف"
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

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos));
  }, [todos]);

  return (
    <Layout>
      <Header />
      <Form todo={todo} handleTodo={(val) => setTodo(val)} addTodo={addTodo} error={error} />
      <TodoList todos={todos} handelDel={handelDel} handelDone={handelDone} />
    </Layout>
  );
}

export default App;
