import { 
  examInfo, matrixData, specData, multipleChoiceQuestions, 
  trueFalseQuestions, shortAnswerQuestions, essayQuestions 
} from './examData';
import { 
  examInfo2, matrixData2, specData2, multipleChoiceQuestions2, 
  trueFalseQuestions2, shortAnswerQuestions2, essayQuestions2 
} from './examData2';
import { 
  examInfo3, matrixData3, specData3, multipleChoiceQuestions3, 
  trueFalseQuestions3, shortAnswerQuestions3, essayQuestions3 
} from './examData3';
import { 
  examInfo4, matrixData4, specData4, multipleChoiceQuestions4, 
  trueFalseQuestions4, shortAnswerQuestions4, essayQuestions4 
} from './examData4';
import type { ExamBundle } from '../types';

// Gán examCode cho đề 1
const examInfo1WithCode = { ...examInfo, examCode: 'ĐỀ SỐ 1' };

export const allExams: ExamBundle[] = [
  {
    id: 1,
    label: 'Đề Số 1',
    color: 'blue',
    examInfo: examInfo1WithCode,
    matrixData,
    specData,
    multipleChoiceQuestions,
    trueFalseQuestions,
    shortAnswerQuestions,
    essayQuestions,
  },
  {
    id: 2,
    label: 'Đề Số 2',
    color: 'emerald',
    examInfo: examInfo2,
    matrixData: matrixData2,
    specData: specData2,
    multipleChoiceQuestions: multipleChoiceQuestions2,
    trueFalseQuestions: trueFalseQuestions2,
    shortAnswerQuestions: shortAnswerQuestions2,
    essayQuestions: essayQuestions2,
  },
  {
    id: 3,
    label: 'Đề Số 3',
    color: 'violet',
    examInfo: examInfo3,
    matrixData: matrixData3,
    specData: specData3,
    multipleChoiceQuestions: multipleChoiceQuestions3,
    trueFalseQuestions: trueFalseQuestions3,
    shortAnswerQuestions: shortAnswerQuestions3,
    essayQuestions: essayQuestions3,
  },
  {
    id: 4,
    label: 'Đề Số 4',
    color: 'amber',
    examInfo: examInfo4,
    matrixData: matrixData4,
    specData: specData4,
    multipleChoiceQuestions: multipleChoiceQuestions4,
    trueFalseQuestions: trueFalseQuestions4,
    shortAnswerQuestions: shortAnswerQuestions4,
    essayQuestions: essayQuestions4,
  },
];
