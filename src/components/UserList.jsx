
import React from "react";

const UserList = ({ users, onSelectUser }) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <div
          key={user.id}
          className="user-card"
          onClick={() => onSelectUser(user.login)}
        >
          <img src={user.avatar_url} alt={user.login} className="avatar" />
          <p>{user.login}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;