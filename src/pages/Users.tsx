/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addUser, fetchUsers } from '../features/user/userSlice';
import { toast } from 'react-hot-toast';

function Users() {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const { loading, error, users } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers())
      .then((data) => {})
      .catch((error) => {});
  }, []);

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const promise = dispatch(addUser({ name, email }));

      toast.promise(promise, {
        loading: 'Loading...',
        success: <b>User added successfully.</b>,
        error: (error) =>
          `${
            error?.response?.data?.message ||
            error?.message ||
            'Internal server Error.'
          }`,
      });

      setName('');
      setEmail('');
    } catch (error) {
      console.log('err', error);
    }
  };

  return (
    <div>
      Users
      {/* <USAMap /> */}
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="name type here..."
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="email"
          placeholder="email type here..."
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button type="submit">submit</button>
      </form>
      <br />
      <div>
        {users.map((user) => {
          return <div key={user.name}>{user.name}</div>;
        })}
      </div>
    </div>
  );
}

export default Users;
