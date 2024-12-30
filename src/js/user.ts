import { createElement, getElementById } from "./utils/dom";

type Users = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Geo = {
  lat: string;
  lng: string;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export const fetchUserList = async (): Promise<Users[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const users: Users[] = await response.json();

  // // バリデーション
  // users.forEach((user) => {
  //   if (typeof user.id !== "number") throw new Error(`id is not a number`);
  //   if (typeof user.name !== "string") throw new Error(`id is not a number`);
  // });

  return users;
};

export const appendUserList = (users: Users[]): void => {
  const userList = getElementById("user-list");

  users.forEach((user) => {
    const userElement = createElement("li", ` ${user.name} : ${user.email}`);
    userList.appendChild(userElement);
  });
};

export const removeUsersElement = (): void => {
  const userList = getElementById("user-list");

  while (userList.firstChild) {
    userList.firstChild?.remove();
  }
};
