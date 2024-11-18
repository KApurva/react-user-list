import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/users');
                setUsers(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div className="container">
            {/* <h2 className="text-center mb-4">User List</h2> */}
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className='text-start' scope="col">ID</th>
                        <th className='text-start' scope="col">Name</th>
                        <th className='text-start' scope="col">Email</th>
                        <th  scope="col">Age</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr>
                            <td className='text-start' scope="row">{user._id}</td>
                            <td className='text-start'>{user.name}</td>
                            <td className='text-start'>{user.email}</td>
                            <td>{user.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <div className="list-group">
                {users.map((user) => (
                    <div className="list-group-item" key={user._id}>
                        <h5 className="mb-1">{user.name}</h5>
                        <p className="mb-1">Email: {user.email}</p>
                        <p className="mb-1">Age: {user.age} years old</p>
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default UserList;
