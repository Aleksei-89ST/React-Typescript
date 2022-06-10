import axios from "axios";
import { useEffect, useState } from "react";
import Card, { CardVariant } from "./components/Card";
import List from "./components/List";
import UserItem from "./components/UserItem";
import UserList from "./components/UserList";
import { IUser } from "./types/types";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    fetchUsers();
  }, []);
  // создаю функцию - где буду получать пользователей с сервера
  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div>
      <Card variant={CardVariant.primary} width="200px" height="200px">
        <button>Кнопка</button>
        <div>Safari</div>
      </Card>
      <List items={users} renderItem ={(user:IUser) => 
      <UserItem user={user} key={user.id}/>}
      />
    </div>
  );
};

export default App;
