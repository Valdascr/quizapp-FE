import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

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

// export const fetchQuestions = async () => {
//   const response = await fetch('/api/questions');
//   return response.json();
//   console.log(response);
// };
