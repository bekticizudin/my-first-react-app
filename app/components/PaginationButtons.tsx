import React from 'react';
import { User } from '..//Users/User'

interface PaginationButtonsProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  usersPerPage: number;
  filteredUsers: User[];
}

const PaginationButtons: React.FC<PaginationButtonsProps> = ({ page, setPage, usersPerPage, filteredUsers }) => {
  return (
    <div>
      <button className='pagination-button' 
      onClick={() => setPage((prevPage) => prevPage - 1)} disabled={page === 0}>
        Prev
      </button>
      <button
        onClick={() => setPage((prevPage) => prevPage + 1)}
        disabled={(page + 1) * usersPerPage >= filteredUsers.length}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationButtons;