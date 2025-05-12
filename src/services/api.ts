import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchQuestions = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/questions`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching questions:', error);
    return [];
  }
};

export const login = async (email: string, password: string) => {
  try {
    await api.get('/sanctum.csrf-cookie');

    const response = await api.post('/login', { email, password });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: 'Login error?!' };
  }
};


