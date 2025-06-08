import axios from 'axios';

export interface User {
  id: number;
  name: string;
  email: string;
  created_at: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
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

export const login = async (
  email: string,
  password: string
): Promise<{ user: User; token: string }> => {
  const { data } = await api.post<{ user: User; token: string }>('/login', {
    email,
    password,
  });
  localStorage.setItem('authToken', data.token);
  api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
  console.log(data, 'login response data!?');
  return data;
};

export const setAuthToken = (token?: string | null) => {
  if (token) {
    localStorage.setItem('authToken', token);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    localStorage.removeItem('authToken');
    delete api.defaults.headers.common['Authorization'];
  }
};

export const register = async (payload: RegisterData): Promise<AuthResponse> => {
  const { data } = await api.post<AuthResponse>('/register', payload);
  setAuthToken(data.token);
  console.log('data?!', data);
  return data;
}

