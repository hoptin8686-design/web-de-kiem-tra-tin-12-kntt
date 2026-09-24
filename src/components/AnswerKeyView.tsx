import React from 'react';
import { 
  multipleChoiceQuestions, 
  trueFalseQuestions, 
  shortAnswerQuestions, 
  essayQuestions, 
  examInfo 
} from '../data/examData';
import { CheckCircle2, Award, Printer, ShieldCheck } from 'lucide-react';

export const AnswerKeyView: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Container */}
      <div className="bg-white rounded-2xl border border-slate-300 shadow-md p-6 sm:p-10 font-times a4-paper mx-auto">
        {/* Header */}
        <div className="grid grid-cols-12 gap-2 border-b border-black pb-4 mb-6">
          <div className="col-span-5 text-center">
            <div className="text-[13px] uppercase font-normal">{examInfo.province}</div>
            <div className="text-[13px] uppercase font-bold">{examInfo.school}</div>
            <div className="text-[12px] font-bold text-emerald-900 border border-black inline-block px-3 py-0.5 mt-1">
              ĐÁP ÁN CHÍNH THỨC
            </div>
          </div>

          <div className="col-span-7 text-center">
            <div className="text-[15px] font-bold uppercase">
              ĐÁP ÁN VÀ HƯỚNG DẪN CHẤM
            </div>
            <div className="text-[13px] font-bold uppercase mt-0.5">
              ĐỀ KIỂM TRA GIỮA HỌC KÌ I • NĂM HỌC {examInfo.academicYear}
            </div>
            <div className="text-[12px] italic mt-0.5">
              Môn: {examInfo.subject} ({examInfo.textbook}) • Thời gian: 45 phút
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 text-[13px] leading-relaxed text-black">
          {/* PHẦN I */}
          <div>
            <h3 className="font-bold uppercase text-[14px] mb-2 text-blue-900">
              PHẦN I. TRẮC NGHIỆM NHIỀU LỰA CHỌN (3,0 điểm)
            </h3>
            <p className="italic text-[12px] text-slate-600 mb-2">
              Mỗi câu trả lời đúng được 0.5 điểm.
            </p>

            <table className="w-full border-collapse border border-black text-center text-xs">
              <thead>
                <tr className="bg-slate-100 font-bold">
                  <th className="border border-black p-2 w-16">Câu</th>
                  {multipleChoiceQuestions.map((q) => (
                    <th key={q.id} className="border border-black p-2">{q.id}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="font-bold text-sm text-blue-700">
                  <td className="border border-black p-2 bg-slate-50 text-black">Đáp án</td>
                  {multipleChoiceQuestions.map((q) => (
                    <td key={q.id} className="border border-black p-2">{q.correctAnswer}</td>
                  ))}
                </tr>
                <tr className="text-slate-700">
                  <td className="border border-black p-2 bg-slate-50 font-bold text-black">Điểm</td>
                  {multipleChoiceQuestions.map((q) => (
                    <td key={q.id} className="border border-black p-2">0.5</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* PHẦN II */}
          <div>
            <h3 className="font-bold uppercase text-[14px] mb-2 text-emerald-900">
              PHẦN II. TRẮC NGHIỆM ĐÚNG/SAI (2,0 điểm)
            </h3>
            <p className="italic text-[12px] text-slate-600 mb-2">
              Mỗi ý đúng được 0.25 điểm; đúng 1 ý = 0.25đ, đúng 2 ý = 0.5đ, đúng 3 ý = 0.75đ, đúng cả 4 ý = 1.0 điểm/câu.
            </p>

            <table className="w-full border-collapse border border-black text-xs">
              <thead>
                <tr className="bg-slate-100 font-bold text-center">
                  <th className="border border-black p-2 w-12">Câu</th>
                  <th className="border border-black p-2 w-12">Ý</th>
                  <th className="border border-black p-2 text-left">Tóm tắt hướng dẫn giải chi tiết</th>
                  <th className="border border-black p-2 w-20">Đáp án</th>
                  <th className="border border-black p-2 w-16">Điểm</th>
                </tr>
              </thead>
              <tbody>
                {trueFalseQuestions.map((q) => (
                  <React.Fragment key={q.id}>
                    {q.items.map((item, index) => (
                      <tr key={item.id}>
                        {index === 0 && (
                          <td rowSpan={4} className="border border-black p-2 text-center font-bold text-sm bg-slate-50">
                            {q.id}
                          </td>
                        )}
                        <td className="border border-black p-2 text-center font-bold uppercase">{item.id}</td>
                        <td className="border border-black p-2 leading-relaxed">{item.explanation}</td>
                        <td className="border border-black p-2 text-center font-bold">
                          <span className={`px-2 py-0.5 rounded ${item.isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                            {item.isCorrect ? 'ĐÚNG' : 'SAI'}
                          </span>
                        </td>
                        <td className="border border-black p-2 text-center">0.25</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* PHẦN III */}
          <div>
            <h3 className="font-bold uppercase text-[14px] mb-2 text-amber-900">
              PHẦN III. TRẮC NGHIỆM TRẢ LỜI NGẮN (2,0 điểm)
            </h3>
            <p className="italic text-[12px] text-slate-600 mb-2">
              Mỗi câu trả lời đúng được 1.0 điểm.
            </p>

            <table className="w-full border-collapse border border-black text-xs">
              <thead>
                <tr className="bg-slate-100 font-bold text-center">
                  <th className="border border-black p-2 w-12">Câu</th>
                  <th className="border border-black p-2 text-left">Hướng dẫn giải chi tiết</th>
                  <th className="border border-black p-2 w-28">Kết quả chuẩn</th>
                  <th className="border border-black p-2 w-16">Điểm</th>
                </tr>
              </thead>
              <tbody>
                {shortAnswerQuestions.map((q) => (
                  <tr key={q.id}>
                    <td className="border border-black p-2 text-center font-bold text-sm bg-slate-50">{q.id}</td>
                    <td className="border border-black p-2 leading-relaxed">{q.explanation}</td>
                    <td className="border border-black p-2 text-center font-mono font-bold text-base text-amber-900 bg-amber-50">
                      {q.correctAnswer}
                    </td>
                    <td className="border border-black p-2 text-center font-bold">{q.points.toFixed(1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PHẦN IV */}
          <div>
            <h3 className="font-bold uppercase text-[14px] mb-2 text-purple-900">
              PHẦN IV. TỰ LUẬN (3,0 điểm)
            </h3>

            <table className="w-full border-collapse border border-black text-xs">
              <thead>
                <tr className="bg-slate-100 font-bold text-center">
                  <th className="border border-black p-2 w-16">Câu</th>
                  <th className="border border-black p-2 text-left">Các bước làm bài / Tiêu chí đánh giá</th>
                  <th className="border border-black p-2 w-16">Điểm</th>
                </tr>
              </thead>
              <tbody>
                {essayQuestions.map((q) => (
                  <React.Fragment key={q.id}>
                    {q.criteria.map((c, index) => (
                      <tr key={index}>
                        {index === 0 && (
                          <td rowSpan={q.criteria.length} className="border border-black p-2 text-center font-bold text-sm bg-slate-50">
                            Câu {q.id}<br />({q.points}đ)
                          </td>
                        )}
                        <td className="border border-black p-2 leading-relaxed">
                          <div className="font-bold text-slate-900">• {c.step}:</div>
                          <div className="text-slate-800 whitespace-pre-line pl-2">{c.detail}</div>
                        </td>
                        <td className="border border-black p-2 text-center font-bold">{c.points.toFixed(1)} đ</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Signatures */}
          <div className="grid grid-cols-3 text-center text-xs pt-8 border-t border-slate-300">
            <div>
              <div className="font-bold uppercase">BAN GIÁM HIỆU</div>
              <div className="italic text-[11px] text-slate-500">(Ký, ghi rõ họ tên và đóng dấu)</div>
              <div className="h-20"></div>
              <div className="font-bold text-sm">Hoàng Trung Kiên</div>
            </div>

            <div>
              <div className="font-bold uppercase">TỔ TRƯỞNG CHUYÊN MÔN</div>
              <div className="italic text-[11px] text-slate-500">(Ký và ghi rõ họ tên)</div>
              <div className="h-20"></div>
              <div className="font-bold text-sm">Phan Văn Thế</div>
            </div>

            <div>
              <div className="font-bold uppercase">GIÁO VIÊN RA ĐỀ</div>
              <div className="italic text-[11px] text-slate-500">(Ký và ghi rõ họ tên)</div>
              <div className="h-20"></div>
              <div className="font-bold text-sm">Đàm Thị Hợp</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
