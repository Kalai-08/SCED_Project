import React, { useEffect, useState } from 'react';
import { getTodos } from '../services/api';

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch tasks from the backend when the page loads
        getTodos()
            .then(response => {
                setTasks(response.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Frontend Error:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <h2>Loading Campus Events...</h2>;

    return (
        <div style={{ padding: '20px' }}>
            <h1>Smart Campus Event Dashboard</h1>
            <hr />
            {tasks.length === 0 ? (
                <p>No events found. Start by adding one!</p>
            ) : (
                tasks.map(task => (
                    <div key={task._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                        <h3>{task.title}</h3>
                        <p><strong>Deadline:</strong> {new Date(task.deadline).toLocaleDateString()}</p>
                        <p><strong>User:</strong> {task.user_email}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Dashboard;