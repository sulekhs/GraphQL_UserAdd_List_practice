import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../GraphQL/Mutations';

const UpdateUser = () => {

  const navigate = useNavigate();  
  const [updateData, setUpdateData] = useState({ username:'', email:'', password:'' , gender:'' });
  const [updateUser, {data, success, message, error}] = useMutation(UPDATE_USER);

  const handleChange = (e) => {
    setUpdateData({
      ...updateData, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(updateData);
      updateUser({
        variables: updateData
      });

      navigate('/user-list');
    } catch (error) {
      
    }
  }

  return (
    <div className='row' key={updateUser._id}>
      <div className='col-md-2'></div>
      <div className='col-md-6'>
        <h1>Edit Your Details</h1>
        <form action='' autoComplete='off'>
          <div className='form-group'>
            <label htmlFor='username'>UserName:</label>
            <input type='text' className='form-control' name='username' value={updateData.username} onChange={handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>email:</label>
            <input type='text' className='form-control' name='email' value={updateData.email} onChange={handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>password:</label>
            <input type='text' className='form-control' name='password' value={updateData.password} onChange={handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor='gender'>gender:</label>
            <select type='text' className='form-control' name='gender' value={updateData.gender} onChange={handleChange} >
              <option value=''>Select Gender</option>
              <option value='M'>M</option>
              <option value='F'>F</option>
            </select>
          </div>
          <button type='button' className='btn btn-primary' onClick={handleSubmit} >Submit</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateUser