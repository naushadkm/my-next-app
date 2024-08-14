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
      <ul></ul>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;
