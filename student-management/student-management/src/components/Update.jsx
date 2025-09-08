import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState({
        name: '',
        userName: '',
        email: '',
        phone: '',
        website: ''
    });

    useEffect(() => {
        axios.get(`http://localhost:369/students/${id}`)
            .then(res => {
                setStudent(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleChange = (e) => {
        setStudent({...student, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:369/students/${id}`, student)
            .then(res => {
                navigate('/studentList');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Edit Student</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={student.name} 
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <label className="block">Username</label>
                    <input 
                        type="text" 
                        name="userName" 
                        value={student.userName} 
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <label className="block">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={student.email} 
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <label className="block">Phone</label>
                    <input 
                        type="text" 
                        name="phone" 
                        value={student.phone} 
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <label className="block">Website</label>
                    <input 
                        type="text" 
                        name="website" 
                        value={student.website} 
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <button 
                    type="submit" 
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Update Student
                </button>
            </form>
        </div>
    );
};

export default Update;