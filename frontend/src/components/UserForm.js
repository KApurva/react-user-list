import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ onUserAdded }) => {
    const [formData, setFormData] = useState({ name: '', email: '', age: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users', formData);
            onUserAdded(response.data);
            setFormData({ name: '', email: '', age: '' });
        } catch (error) {
            console.error(error);
        }
    };

    return (



        <form onSubmit={handleSubmit}>
            <div class="mb-3">
               
                <input className='form-control' name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
            </div>
            <div class="mb-3">
               
                <input className='form-control' name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            </div>
            <div class="mb-3">
                
                <input className='form-control' name="age" value={formData.age} onChange={handleChange} placeholder="Age" type="number" required />
            </div>
            <button className='btn btn-outline-primary' type="submit">Add User</button>
        </form>
    );
};

export default UserForm;
