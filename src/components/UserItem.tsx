// выношу из yserlist отдельно взятого пользователя
import React, { FC } from "react";
import { IUser } from "../types/types";

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div style={{ padding: 15, border: "1px solid gray" }}>
      {user.id}. {user.name} проживает в городе {user.adress.city} на улице{" "}
      {user.adress.street}
    </div>
  );
};

export default UserItem;
