import React from 'react'
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_USER_LIST } from '../../GraphQL/Queries';
import List from '../../pages/list/List';

const UserList = () => {

  const {data} = useQuery(GET_USER_LIST);

  return (
    <div className="container">
       <h2>User List &nbsp;
        <button className='btn btn-primary' >
            <Link to='/home'>Add User</Link>    
        </button> 
       </h2> 
       <table className='table'>
           <thead>
                <tr>
                    <th>username</th>
                    <th>email</th>
                    <th>gender</th>
                </tr>
           </thead>
           <tbody>
            {
                (data) ? data.userList.map((item) => <List key={item._id} user={item} /> ) : null
            }
           </tbody>
       </table>
    </div>
  )
}

export default UserList