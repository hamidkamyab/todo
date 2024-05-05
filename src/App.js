import Layout from "./components/Layout";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Form from "./components/Form";

function App() {
  return (
    <Layout>
      <Header />
      <Form/>
      <TodoList />
    </Layout>
  );
}

export default App;
