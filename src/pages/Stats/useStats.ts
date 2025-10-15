import react, { useMemo } from 'react';
import { useEffect, useState } from 'react';
import { fetchStats, getCategories } from '../../services/api';
import { Result, Category } from '../../types/Question';


export const useStats = () => {

     const [results, setResults] = useState<Result[]>([]);
     const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
     const [categories, setCategories] = useState<Category[]>([]);
    
      useEffect(() => {
        fetchStats()
          .then((res) => setResults(res.data))
          .catch((err) => console.error('Get error:', err));
      }, []);

      useEffect(() => {
        getCategories()
        .then((results) => setCategories(results.data))
        .catch((err) => console.log("Error getting categories", err))
      }, []);

      const filteredResults = useMemo(() =>{
        if (!selectedCategoryId) return results;
        return results.filter((res) => res.category.id === selectedCategoryId);
      }, [selectedCategoryId, results]);

    return {
        results,
        filteredResults,
        categories,
        selectedCategoryId,
        setSelectedCategoryId
    };
};
