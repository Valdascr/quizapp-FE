import { useState, useEffect} from "react";
import { User, Stats } from '../../types/QuizTypes';
import { fetchStats, fetchUserById } from '../../services/api';



export const useProfile = () => {
        const [user, setUser] = useState<User | null>(null);
        const [stats, setStats] = useState<Stats | null>(null);

              useEffect(() => {
                   const loadProfileData = async () => {
              try {
                const { data: results } = await fetchStats(); 
                if (!results || results.length === 0) return;
        
                const userId = results[0].user_id;
        
                const { data: userData } = await fetchUserById(userId);
                setUser(userData);
              const totalQuizzes = results.length;
              const averageScore = totalQuizzes > 0 ? results.reduce((sum: number, r: any) => sum + r.score, 0) / totalQuizzes  : 0;
              const totalCorrect = results.reduce((sum:number, r:any) => sum + r.score, 0);
              const totalWrong = results.reduce((sum: number, r: any) =>(r.total - r.score) + sum, 0);
              const lastPlayed = results.at(-1)?.created_at;
        
              setStats({ totalQuizzes, averageScore, totalCorrect, totalWrong, lastPlayed });
              } catch (err) {
                console.error("Error loading profile:", err);
              }
            };
              loadProfileData();
          }, []);
    return {
        user,
        stats
    };
};