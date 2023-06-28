import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const token = localStorage.getItem('token');

if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export async function login(email, password) {
  try {
    const response = await api.post('/login', { email, password });
    const token = response.data.access_token;
    return token;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
}
