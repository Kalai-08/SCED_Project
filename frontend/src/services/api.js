import axios from 'axios';

// Connect to your Backend on Port 5000
const API = axios.create({
    baseURL: 'http://localhost:5000/api/todos' 
});

// GET all tasks
export const getTodos = () => API.get('/');

// POST a new task (matches your Backend Controller)
export const createTodo = (todoData) => API.post('/', todoData);

export default API;