// описываю глобальные стили которые будут использоваться в разных частях приложения

// опысал какие конкретно поля будут у пользователя
export interface IAddress {
  city: string;
  street: string;
  zipcode: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  address: IAddress;
}
export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}
