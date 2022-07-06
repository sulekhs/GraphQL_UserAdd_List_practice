import React from 'react'
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from './../../GraphQL/Mutations';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {

  const navigate = useNavigate();
  const [inputField, setInputField] = useState({username:'', email:'', password:'' , gender:''});
  const [createUser, {error}] = useMutation(CREATE_USER);

  const handleChange = (e) => {
    setInputField({
      ...inputField, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(inputField);
      createUser({
        variables: inputField
      });

      navigate('/user-list');
    } catch (error) {
      
    }
  }

  return (
    <div className='row'>
      <div className='col-md-2'></div>
      <div className='col-md-6'>
        <h1>Add User</h1>
        <form action='' autoComplete='off'>
          <div className='form-group'>
            <label htmlFor='username'>UserName:</label>
            <input type='text' className='form-control' name='username' value={inputField.username} onChange={handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>email:</label>
            <input type='text' className='form-control' name='email' value={inputField.email} onChange={handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>password:</label>
            <input type='text' className='form-control' name='password' value={inputField.password} onChange={handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor='gender'>gender:</label>
            <select type='text' className='form-control' name='gender' value={inputField.gender} onChange={handleChange} >
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

export default AddUser