import React, { createContext, useContext, useState } from 'react';
import { ExamBundle } from '../types';
import { allExams } from '../data/allExams';

interface ExamContextType {
  currentExam: ExamBundle;
  setCurrentExamId: (id: number) => void;
}

const ExamContext = createContext<ExamContextType>({
  currentExam: allExams[0],
  setCurrentExamId: () => {},
});

export const ExamProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentExamId, setCurrentExamId] = useState<number>(1);
  const currentExam = allExams.find((e) => e.id === currentExamId) ?? allExams[0];

  return (
    <ExamContext.Provider value={{ currentExam, setCurrentExamId }}>
      {children}
    </ExamContext.Provider>
  );
};

export const useExam = () => useContext(ExamContext);
