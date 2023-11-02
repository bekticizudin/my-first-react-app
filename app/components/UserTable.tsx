"use client"
import React, { useState, useEffect } from 'react';
import { fetchUsers } from '../utils/api';
import SearchByCity from './SearchByCity';
import PaginationButtons from './PaginationButtons';
import { User } from '../Users/User';

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [page, setPage] = useState(0);
  const usersPerPage = 5;
  const paginatedUsers = filteredUsers.slice(page * usersPerPage, (page + 1) * usersPerPage);

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
      setFilteredUsers(data);
    });
  }, []);

  const handleCityFilter = (city: string) => {
    const filtered = users.filter((user) =>
      user.address.city.toLowerCase().includes(city.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const handleSort = (type: 'asc' | 'desc') => {
    const sorted = [...filteredUsers].sort((a, b) => {
      if (type === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setFilteredUsers(sorted);
  };
  return (
    <div> 
      <SearchByCity handleCityFilter={handleCityFilter} />
      <span className='sort-buttons'>
      <button onClick={() => handleSort('asc')}>Sort A-Z</button>
      <button onClick={() => handleSort('desc')}>Sort Z-A</button>
      </span>
      <table className='styled-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.map((user: any) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{`${user.address.street}, ${user.address.suite}, ${user.address.city}`}</td>
              <td>{user.phone}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <PaginationButtons
        page={page}
        setPage={setPage}
        usersPerPage={usersPerPage}
        filteredUsers={filteredUsers}/>
      </div>
      
    </div>
  );
};

export default UserTable;