import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

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
