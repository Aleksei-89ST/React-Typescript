// выношу из userlist отдельно взятого пользователя
import React, { FC } from "react";
import { IUser } from "../types/types";

// на вход передаю самого пользователя
interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div style={{ padding: 15, border: "1px solid gray" }}>
      {user.id}. {user.name} проживает в городе {user.address.city} на улице
      {user.address.street}
    </div>
  );
};

export default UserItem;
