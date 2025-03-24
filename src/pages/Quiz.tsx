import React, { useState } from "react";
import { Question } from "../types/Question";

const Quiz: React.FC = () => {
    const [questions, setQuestion] = useState<Question[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div>
            <h1>QuestionCard</h1>
        </div>
    )
};

export default Quiz;