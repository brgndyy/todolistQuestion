import Card from "./components/Card";
import Header from "./components/Header";
import TodoInsert from "./components/TodoInsert";
import TodoListContainer from "./components/TodoListContainer";
import TodoTemplate from "./components/TodoTemplate";

function App() {

  return <>
  <Card>
  <TodoTemplate>
  <Header/>
  <TodoListContainer/>
  <TodoInsert/>
  </TodoTemplate>
  </Card>
  </>;
}

export default App;
