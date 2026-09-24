import React, { useState } from 'react';
import { useExam } from '../contexts/ExamContext';
import { 
  FileText, 
  HelpCircle, 
  CheckCircle, 
  XCircle, 
  Award, 
  RotateCcw, 
  Printer, 
  Eye, 
  EyeOff,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ExamView: React.FC = () => {
  const { currentExam } = useExam();
  const { multipleChoiceQuestions, trueFalseQuestions, shortAnswerQuestions, essayQuestions, examInfo } = currentExam;
  const [interactiveMode, setInteractiveMode] = useState<boolean>(false);
  const [showAllHints, setShowAllHints] = useState<boolean>(false);

  // User selections in interactive mode
  const [userMcq, setUserMcq] = useState<{ [key: number]: string }>({});
  const [userTf, setUserTf] = useState<{ [key: string]: boolean | null }>({});
  const [userShort, setUserShort] = useState<{ [key: number]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const handleSelectMcq = (qId: number, option: string) => {
    if (isSubmitted) return;
    setUserMcq((prev) => ({ ...prev, [qId]: option }));
  };

  const handleSelectTf = (key: string, val: boolean) => {
    if (isSubmitted) return;
    setUserTf((prev) => ({ ...prev, [key]: val }));
  };

  const handleSubmitQuiz = () => {
    let total = 0;
    // 1. MCQ (6 questions * 0.5 = 3.0)
    multipleChoiceQuestions.forEach((q) => {
      if (userMcq[q.id] === q.correctAnswer) {
        total += 0.5;
      }
    });

    // 2. TF (2 questions * 4 items, each 0.25 = 2.0)
    trueFalseQuestions.forEach((q) => {
      q.items.forEach((item) => {
        const key = `${q.id}_${item.id}`;
        if (userTf[key] === item.isCorrect) {
          total += 0.25;
        }
      });
    });

    // 3. Short (2 questions * 1.0 = 2.0)
    shortAnswerQuestions.forEach((q) => {
      if (userShort[q.id]?.trim() === q.correctAnswer) {
        total += 1.0;
      }
    });

    setScore(total);
    setIsSubmitted(true);
    setShowAllHints(true);

    if (total >= 5.0) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  const handleResetQuiz = () => {
    setUserMcq({});
    setUserTf({});
    setUserShort({});
    setIsSubmitted(false);
    setShowAllHints(false);
    setScore(0);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Control Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3 no-print">
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-slate-700">Chế độ hiển thị:</span>
          <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs">
            <button
              onClick={() => { setInteractiveMode(false); setShowAllHints(false); }}
              className={`px-3 py-1.5 rounded-lg font-medium transition ${
                !interactiveMode ? 'bg-white shadow text-blue-700 font-bold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              📄 Bản in Đề thi A4 (Chính thức)
            </button>
            <button
              onClick={() => setInteractiveMode(true)}
              className={`px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 ${
                interactiveMode ? 'bg-white shadow text-blue-700 font-bold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>✍️ Luyện tập & Chấm điểm tự động</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {interactiveMode ? (
            <>
              {isSubmitted ? (
                <div className="flex items-center gap-3">
                  <div className="text-xs font-bold bg-amber-100 text-amber-900 px-3 py-1.5 rounded-lg border border-amber-300">
                    Điểm trắc nghiệm (Phần I, II, III): {score.toFixed(2)} / 7.0 điểm
                  </div>
                  <button
                    onClick={handleResetQuiz}
                    className="flex items-center gap-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-lg transition"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Làm lại</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleSubmitQuiz}
                  className="flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold rounded-lg shadow transition"
                >
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Nộp bài & Chấm điểm</span>
                </button>
              )}
            </>
          ) : (
            <button
              onClick={() => setShowAllHints(!showAllHints)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-lg transition"
            >
              {showAllHints ? <EyeOff className="w-3.5 h-3.5 text-slate-500" /> : <Eye className="w-3.5 h-3.5 text-blue-600" />}
              <span>{showAllHints ? 'Ẩn đáp án & gợi ý' : 'Hiện nhanh đáp án'}</span>
            </button>
          )}

          <button
            onClick={() => window.print()}
            className="flex items-center gap-1 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium rounded-lg transition"
          >
            <Printer className="w-3.5 h-3.5 text-blue-400" />
            <span>In đề A4</span>
          </button>
        </div>
      </div>

      {/* Examination Paper (A4 Style) */}
      <div className="bg-white rounded-2xl border border-slate-300 shadow-md p-6 sm:p-10 font-times a4-paper mx-auto">
        {/* Exam Header */}
        <div className="grid grid-cols-12 gap-2 border-b border-black pb-4 mb-6">
          <div className="col-span-5 text-center">
            <div className="text-[13px] uppercase font-normal">{examInfo.province}</div>
            <div className="text-[13px] uppercase font-bold">{examInfo.school}</div>
            <div className="text-[12px] font-bold text-blue-900 border border-black inline-block px-3 py-0.5 mt-1">
              ĐỀ CHÍNH THỨC
            </div>
          </div>

          <div className="col-span-7 text-center">
            <div className="text-[15px] font-bold uppercase">{examInfo.title}</div>
            <div className="text-[13px] font-bold uppercase mt-0.5">
              MÔN: {examInfo.subject} ({examInfo.textbook})
            </div>
            <div className="text-[12px] italic mt-0.5">
              Năm học: {examInfo.academicYear} • Thời gian làm bài: {examInfo.duration}
            </div>
          </div>
        </div>

        {/* Student Name and Registration Box in print mode */}
        <div className="grid grid-cols-2 gap-4 border border-dashed border-slate-300 p-2.5 rounded-lg mb-6 text-xs text-slate-600 print:text-black">
          <div>Họ và tên thí sinh: ............................................................................</div>
          <div>Số báo danh: ................................... Lớp: 12A.........</div>
        </div>

        {/* Content of Exam */}
        <div className="space-y-8 text-[14px] leading-relaxed text-black">
          {/* PHẦN I: TRẮC NGHIỆM NHIỀU LỰA CHỌN */}
          <div className="space-y-4">
            <div className="bg-slate-100 p-2.5 rounded-lg font-bold uppercase text-[14px] border-l-4 border-blue-600 flex justify-between items-center">
              <span>PHẦN I. TRẮC NGHIỆM NHIỀU LỰA CHỌN (3,0 điểm)</span>
              <span className="text-[11px] font-normal normal-case text-slate-600">6 câu • Mỗi câu 0.5 điểm</span>
            </div>
            <p className="italic text-[12px] text-slate-700">
              Thí sinh trả lời từ Câu 1 đến Câu 6. Mỗi câu hỏi chỉ chọn một phương án trả lời đúng nhất.
            </p>

            <div className="space-y-5">
              {multipleChoiceQuestions.map((q) => {
                const userChoice = userMcq[q.id];
                const isCorrect = userChoice === q.correctAnswer;

                return (
                  <div key={q.id} className="space-y-2 p-3 rounded-xl transition hover:bg-slate-50 border border-transparent hover:border-slate-200">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-bold">
                        <span>Câu {q.id}: </span>
                        <span>{q.question}</span>
                      </p>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200 whitespace-nowrap">
                        {q.level}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2">
                      {q.options.map((opt) => {
                        const isSelected = userChoice === opt.label;
                        let optionStyle = 'bg-white border-slate-200 hover:border-blue-400';

                        if (interactiveMode && isSubmitted) {
                          if (opt.label === q.correctAnswer) {
                            optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                          } else if (isSelected && !isCorrect) {
                            optionStyle = 'bg-rose-50 border-rose-500 text-rose-950';
                          }
                        } else if (isSelected) {
                          optionStyle = 'bg-blue-50 border-blue-600 text-blue-900 font-semibold';
                        } else if (showAllHints && opt.label === q.correctAnswer) {
                          optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                        }

                        return (
                          <div
                            key={opt.label}
                            onClick={() => interactiveMode && handleSelectMcq(q.id, opt.label)}
                            className={`p-2 rounded-lg border text-xs flex items-start gap-2 transition cursor-pointer ${optionStyle}`}
                          >
                            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center font-bold text-[11px] flex-shrink-0">
                              {opt.label}
                            </span>
                            <span className="leading-snug">{opt.text}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Explanation */}
                    {showAllHints && (
                      <div className="mt-2 p-2.5 bg-emerald-50/70 border border-emerald-200 rounded-lg text-xs text-emerald-950">
                        <span className="font-bold">Đáp án đúng: {q.correctAnswer}</span> — {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* PHẦN II: TRẮC NGHIỆM ĐÚNG/SAI */}
          <div className="space-y-4">
            <div className="bg-slate-100 p-2.5 rounded-lg font-bold uppercase text-[14px] border-l-4 border-emerald-600 flex justify-between items-center">
              <span>PHẦN II. TRẮC NGHIỆM ĐÚNG/SAI (2,0 điểm)</span>
              <span className="text-[11px] font-normal normal-case text-slate-600">2 câu (8 ý) • Mỗi ý đúng 0.25đ (tối đa 1.0đ/câu)</span>
            </div>
            <p className="italic text-[12px] text-slate-700">
              Thí sinh trả lời Câu 7 và Câu 8. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn Đúng hoặc Sai.
            </p>

            <div className="space-y-6">
              {trueFalseQuestions.map((q) => (
                <div key={q.id} className="space-y-3 p-3.5 bg-slate-50/50 rounded-xl border border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-blue-900 text-sm">Câu {q.id}</span>
                    <span className="text-[11px] text-slate-500 italic">{q.level}</span>
                  </div>

                  <p className="italic text-xs text-slate-800 bg-white p-3 rounded-lg border border-slate-200 shadow-sm leading-relaxed">
                    "{q.context}"
                  </p>

                  <div className="space-y-2">
                    {q.items.map((item) => {
                      const key = `${q.id}_${item.id}`;
                      const userAns = userTf[key];
                      const isCorrect = userAns === item.isCorrect;

                      return (
                        <div
                          key={item.id}
                          className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2 bg-white rounded-lg border border-slate-200 text-xs"
                        >
                          <div className="flex items-start gap-2 flex-1">
                            <span className="font-bold text-slate-900 uppercase">{item.id})</span>
                            <span className="leading-snug">{item.statement}</span>
                          </div>

                          <div className="flex items-center gap-1.5 self-end sm:self-auto flex-shrink-0">
                            {interactiveMode ? (
                              <div className="flex items-center gap-1">
                                <button
                                  onClick={() => handleSelectTf(key, true)}
                                  className={`px-3 py-1 rounded border text-xs font-bold transition ${
                                    userAns === true
                                      ? isSubmitted
                                        ? item.isCorrect ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                                        : 'bg-blue-600 text-white'
                                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                  }`}
                                >
                                  Đúng
                                </button>
                                <button
                                  onClick={() => handleSelectTf(key, false)}
                                  className={`px-3 py-1 rounded border text-xs font-bold transition ${
                                    userAns === false
                                      ? isSubmitted
                                        ? !item.isCorrect ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                                        : 'bg-blue-600 text-white'
                                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                  }`}
                                >
                                  Sai
                                </button>
                              </div>
                            ) : (
                              <div className="flex items-center gap-1 text-[11px] font-bold">
                                {showAllHints ? (
                                  <span className={`px-2 py-0.5 rounded ${item.isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                                    {item.isCorrect ? 'ĐÚNG' : 'SAI'}
                                  </span>
                                ) : (
                                  <span className="text-slate-400 font-mono">[ Đúng / Sai ]</span>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PHẦN III: TRẮC NGHIỆM TRẢ LỜI NGẮN */}
          <div className="space-y-4">
            <div className="bg-slate-100 p-2.5 rounded-lg font-bold uppercase text-[14px] border-l-4 border-amber-600 flex justify-between items-center">
              <span>PHẦN III. TRẮC NGHIỆM TRẢ LỜI NGẮN (2,0 điểm)</span>
              <span className="text-[11px] font-normal normal-case text-slate-600">2 câu • Mỗi câu đúng được 1.0 điểm</span>
            </div>
            <p className="italic text-[12px] text-slate-700">
              Thí sinh trả lời Câu 9 và Câu 10. Điền kết quả trả lời vào ô trống hoặc phiếu trả lời.
            </p>

            <div className="space-y-4">
              {shortAnswerQuestions.map((q) => (
                <div key={q.id} className="p-3.5 bg-slate-50/50 rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-bold text-xs sm:text-sm">
                      <span>Câu {q.id}: </span>
                      <span>{q.question}</span>
                    </p>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 whitespace-nowrap font-medium">
                      1.0 điểm
                    </span>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-xs font-medium text-slate-600">Đáp số của thí sinh:</span>
                    {interactiveMode ? (
                      <input
                        type="text"
                        disabled={isSubmitted}
                        value={userShort[q.id] || ''}
                        onChange={(e) => setUserShort({ ...userShort, [q.id]: e.target.value })}
                        placeholder="Nhập số..."
                        className="w-24 px-3 py-1 text-xs border border-slate-300 rounded font-mono font-bold text-center focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    ) : (
                      <div className="w-28 border-b-2 border-slate-400 text-center font-mono font-bold text-xs py-0.5">
                        {showAllHints ? <span className="text-emerald-700 font-bold">{q.correctAnswer}</span> : '..............'}
                      </div>
                    )}
                  </div>

                  {showAllHints && (
                    <div className="mt-2 p-2.5 bg-amber-50/70 border border-amber-200 rounded-lg text-xs text-amber-950">
                      <span className="font-bold">Đáp án chuẩn: {q.correctAnswer}</span> — {q.explanation}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* PHẦN IV: TỰ LUẬN */}
          <div className="space-y-4">
            <div className="bg-slate-100 p-2.5 rounded-lg font-bold uppercase text-[14px] border-l-4 border-purple-600 flex justify-between items-center">
              <span>PHẦN IV. TỰ LUẬN (3,0 điểm)</span>
              <span className="text-[11px] font-normal normal-case text-slate-600">2 câu • Mỗi câu 1.5 điểm</span>
            </div>

            <div className="space-y-5">
              {essayQuestions.map((q) => (
                <div key={q.id} className="p-4 bg-slate-50/50 rounded-xl border border-slate-200 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-bold text-xs sm:text-sm">
                      <span>Câu {q.id} ({q.points} điểm): </span>
                      <span>{q.question}</span>
                    </p>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-purple-50 text-purple-800 border border-purple-200 whitespace-nowrap font-medium">
                      Tự luận
                    </span>
                  </div>

                  {showAllHints && (
                    <div className="p-3 bg-purple-50/60 border border-purple-200 rounded-xl text-xs space-y-2">
                      <div className="font-bold text-purple-900">Hướng dẫn giải & Thang điểm chi tiết:</div>
                      <div className="space-y-1.5 divide-y divide-purple-100">
                        {q.criteria.map((c, i) => (
                          <div key={i} className="pt-1.5 flex justify-between gap-3">
                            <div>
                              <span className="font-bold text-purple-950">• {c.step}: </span>
                              <span className="text-slate-800 whitespace-pre-line">{c.detail}</span>
                            </div>
                            <span className="font-bold text-purple-700 whitespace-nowrap">{c.points} đ</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* End of Exam marker */}
          <div className="text-center font-bold text-xs tracking-widest pt-4 border-t border-slate-300">
            -------------------------- HẾT --------------------------
          </div>
          <div className="text-center italic text-[11px] text-slate-500">
            Cán bộ coi thi không giải thích gì thêm. Thí sinh không được sử dụng tài liệu.
          </div>
        </div>
      </div>
    </div>
  );
};
