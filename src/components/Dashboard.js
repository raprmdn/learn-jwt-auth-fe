import React, {useEffect, useState} from 'react';
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [ name, setName ] = useState();
    const [ token, setToken ] = useState();
    const [ expiresAt, setExpiresAt ] = useState();
    const [ users, setUsers ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        refreshToken();
        getUsers();
    },[]);

    const refreshToken = async () => {
        try {
            const res = await axios.get('http://localhost:5000/refresh-token');
            setToken(res.data.accessToken);
            // console.log(token);
            const decoded = jwtDecode(res.data.accessToken);
            setName(decoded.name);
            setExpiresAt(decoded.exp);
        } catch (err) {
            navigate('/');
        }
    }

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expiresAt * 1000 < currentDate.getTime()) {
            const res = await axios.get('http://localhost:5000/refresh-token');
            config.headers.Authorization = `Bearer ${res.data.accessToken}`;
            setToken(res.data.accessToken);
            const decoded = jwtDecode(res.data.accessToken);
            setName(decoded.name);
            setExpiresAt(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    const getUsers = async () => {
        const res = await axiosJWT.get('http://localhost:5000/users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setUsers(res.data);
    }

    return (
        <div className="container mt-5">
            <h1>
                Welcome Back: {name}
            </h1>
            <button onClick={getUsers} className="button is-info">Get Users</button>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Dashboard;