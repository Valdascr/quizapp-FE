import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { getCategories } from '../../services/api';
import { Category } from '../../types/QuizTypes';

export const useHome = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
    getCategories()
      .then((res) => {
        const data = res?.data;
        setCategories(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error('Category error!!?', err);
        setCategories([]);
      });
    }, []);

    const handleCategorySelect = (categoryId: number) => {
    navigate(`/quiz/${categoryId}`);
    };
    return {
        categories,
        handleCategorySelect
    }
}