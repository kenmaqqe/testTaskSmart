import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, selectUsers, selectStatus } from '../features/users/userSlice';
import { AppDispatch, RootState } from '../app/store';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

const UserManagementTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector(selectUsers);
  const status = useSelector(selectStatus);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const filteredUsers = users.filter(user => {
    const userString = `${user.name} ${user.username} ${user.email} ${user.phone}`.toLowerCase();
    return userString.includes(filter.toLowerCase());
  });

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error loading users</div>;
  }

  return (
    <div>
      <h1>User Management Table</h1>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={filter}
          onChange={handleFilterChange}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagementTable;
