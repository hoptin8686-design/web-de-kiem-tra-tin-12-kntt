export type TabType = 'matrix' | 'spec' | 'exam' | 'answer';

export interface ExamInfo {
  province: string;
  school: string;
  title: string;
  subject: string;
  textbook: string;
  academicYear: string;
  duration: string;
  examDate: string;
  totalPoints: string;
  ratio: string;
  examCode?: string;
}

export interface MatrixRow {
  tt: string;
  chuDe: string;
  noiDung: string;
  tnkqNlc: { biet: string; hieu: string; vd: string };
  tnkqDs: { biet: string; hieu: string; vd: string };
  tnkqNgan: { biet: string; hieu: string; vd: string };
  tuLuan: { biet: string; hieu: string; vd: string };
  tong: { biet: string; hieu: string; vd: string };
  tiLe: string;
}

export interface SpecRow {
  tt: string;
  chuDe: string;
  noiDung: string;
  yccđ: {
    level: 'Biết' | 'Hiểu' | 'Vận dụng';
    content: string;
    competence: string;
  }[];
  cauHoi: {
    nlc: { biet?: string; hieu?: string; vd?: string };
    ds: { biet?: string; hieu?: string; vd?: string };
    ngan: { biet?: string; hieu?: string; vd?: string };
    tuLuan: { biet?: string; hieu?: string; vd?: string };
  };
}

export interface MultipleChoiceQuestion {
  id: number;
  question: string;
  options: { label: string; text: string }[];
  correctAnswer: string;
  explanation: string;
  level: 'Nhận biết' | 'Thông hiểu' | 'Vận dụng';
  lesson: string;
}

export interface TrueFalseQuestion {
  id: number;
  context: string;
  items: {
    id: string;
    statement: string;
    isCorrect: boolean;
    explanation: string;
  }[];
  level: string;
  lesson: string;
}

export interface ShortAnswerQuestion {
  id: number;
  question: string;
  correctAnswer: string;
  explanation: string;
  points: number;
  level: string;
  lesson: string;
}

export interface EssayQuestion {
  id: number;
  question: string;
  points: number;
  criteria: {
    step: string;
    detail: string;
    points: number;
  }[];
  level: string;
  lesson: string;
}

export interface ExamBundle {
  id: number;
  label: string;
  color: 'blue' | 'emerald' | 'violet' | 'amber';
  examInfo: ExamInfo;
  matrixData: MatrixRow[];
  specData: SpecRow[];
  multipleChoiceQuestions: MultipleChoiceQuestion[];
  trueFalseQuestions: TrueFalseQuestion[];
  shortAnswerQuestions: ShortAnswerQuestion[];
  essayQuestions: EssayQuestion[];
}
