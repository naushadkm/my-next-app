import React from "react";
import { User } from "./UserModel";

const UsersPage = async () => {
  // If no-store it wont cache.
  // Only fetch has implementation of caching, if you use axios you wont get this feature
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users:</h1>
      <div>{new Date().toLocaleTimeString()}</div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
