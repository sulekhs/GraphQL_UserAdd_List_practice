import React from 'react';
import { Link } from 'react-router-dom';
import './list.css'


const List = ({user}) => {

  
  return (
    <tr>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.gender}</td>
      <td>
          <button className='btn btn-primary' >
            <Link to='/updateUser/:id'>Edit</Link>
          </button>
          <button className='btn btn-danger' >Delete</button>
      </td>
    </tr>
  )
}

export default List