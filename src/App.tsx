import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import TodoItemPage from "./components/TodoItemPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import UsersPage from "./components/UsersPage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Link to="/users">Пользователи</Link>
          <div>
          <Link to="/todos">Список дел</Link>
          </div>
        </div>
        <Routes>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/users/:id" element={<UserItemPage />} />
          <Route path="/todos/:id" element={<TodoItemPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
