import React, { useState } from 'react';
import { useExam } from '../contexts/ExamContext';
import { BookOpen, Search, Filter, CheckCircle2, Bookmark } from 'lucide-react';

export const SpecView: React.FC = () => {
  const { currentExam } = useExam();
  const { specData, examInfo } = currentExam;
  const [filterChapter, setFilterChapter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredSpecs = specData.filter((item) => {
    const matchChapter =
      filterChapter === 'all' || item.chuDe.includes(filterChapter);
    const matchSearch =
      item.noiDung.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.yccđ.some((y) => y.content.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchChapter && matchSearch;
  });

  return (
    <div className="space-y-6">
      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3 no-print">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-600 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-blue-600" />
            <span>Chủ đề:</span>
          </span>
          <select
            value={filterChapter}
            onChange={(e) => setFilterChapter(e.target.value)}
            className="text-xs border border-slate-300 rounded-lg px-2.5 py-1.5 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
          >
            <option value="all">Tất cả các chủ đề (6 bài học)</option>
            <option value="CHƯƠNG I">Chương I: Máy tính và xã hội tri thức (Bài 1, 2)</option>
            <option value="CHƯƠNG II">Chương II: Mạng máy tính và Internet (Bài 3, 4)</option>
            <option value="CHƯƠNG III">Chương III: Đạo đức, pháp luật & văn hóa (Bài 5, 6)</option>
          </select>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm theo bài học, nội dung kiến thức..."
            className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Main Spec Table Container */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-6">
        <div className="border-b border-slate-200 pb-4 mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              <span>2. BẢNG ĐẶC TẢ MA TRẬN ĐỀ KIỂM TRA ĐỊNH KỲ GIỮA HỌC KÌ I</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Cụ thể hóa Yêu cầu cần đạt chuẩn SGK Tin 12 Kết nối tri thức và Chương trình GDPT 2018
            </p>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 font-medium border border-indigo-200">
            6 Đơn vị kiến thức
          </span>
        </div>

        {/* Spec Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse border border-black font-times">
            <thead>
              <tr className="bg-slate-100 text-center font-bold text-[12px]">
                <th rowSpan={3} className="border border-black p-2 w-10">TT</th>
                <th rowSpan={3} className="border border-black p-2 w-44 text-left">Chủ đề / Chương</th>
                <th rowSpan={3} className="border border-black p-2 w-48 text-left">Nội dung / đơn vị kiến thức</th>
                <th rowSpan={3} className="border border-black p-2 text-left">Yêu cầu cần đạt</th>
                <th colSpan={12} className="border border-black p-2 bg-indigo-50/70 text-indigo-900">
                  Số câu hỏi / lệnh hỏi ở các mức độ đánh giá
                </th>
              </tr>
              <tr className="bg-slate-50 text-center font-bold text-[11px]">
                <th colSpan={9} className="border border-black p-1">TNKQ</th>
                <th colSpan={3} className="border border-black p-1">Tự luận</th>
              </tr>
              <tr className="bg-slate-50 text-center font-bold text-[11px]">
                {/* Nhiều lựa chọn */}
                <th className="border border-black p-1 w-9" title="NLC - Biết">Biết</th>
                <th className="border border-black p-1 w-9" title="NLC - Hiểu">Hiểu</th>
                <th className="border border-black p-1 w-9" title="NLC - Vận dụng">VD</th>
                {/* Đúng sai */}
                <th className="border border-black p-1 w-9 bg-slate-100" title="Đúng/Sai - Biết">Biết</th>
                <th className="border border-black p-1 w-9 bg-slate-100" title="Đúng/Sai - Hiểu">Hiểu</th>
                <th className="border border-black p-1 w-9 bg-slate-100" title="Đúng/Sai - Vận dụng">VD</th>
                {/* Trả lời ngắn */}
                <th className="border border-black p-1 w-9" title="Trả lời ngắn - Biết">Biết</th>
                <th className="border border-black p-1 w-9" title="Trả lời ngắn - Hiểu">Hiểu</th>
                <th className="border border-black p-1 w-9" title="Trả lời ngắn - Vận dụng">VD</th>
                {/* Tự luận */}
                <th className="border border-black p-1 w-9 bg-slate-100" title="Tự luận - Biết">Biết</th>
                <th className="border border-black p-1 w-9 bg-slate-100" title="Tự luận - Hiểu">Hiểu</th>
                <th className="border border-black p-1 w-9 bg-slate-100" title="Tự luận - Vận dụng">VD</th>
              </tr>
            </thead>
            <tbody>
              {filteredSpecs.map((row) => (
                <tr key={row.tt} className="hover:bg-indigo-50/20 transition">
                  <td className="border border-black p-2 text-center font-bold align-top">{row.tt}</td>
                  <td className="border border-black p-2 font-medium text-slate-800 align-top">{row.chuDe}</td>
                  <td className="border border-black p-2 font-bold text-slate-900 align-top">{row.noiDung}</td>
                  
                  {/* Yêu cầu cần đạt */}
                  <td className="border border-black p-2.5 text-justify align-top space-y-2 leading-relaxed">
                    {row.yccđ.map((item, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex items-center gap-1.5">
                          <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase ${
                            item.level === 'Biết' ? 'bg-blue-100 text-blue-800' :
                            item.level === 'Hiểu' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {item.level}
                          </span>
                          <span className="text-[11px] text-slate-500 font-mono font-medium">
                            Năng lực: {item.competence}
                          </span>
                        </div>
                        <p className="text-slate-800 text-[12px]">{item.content}</p>
                      </div>
                    ))}
                  </td>

                  {/* NLC */}
                  <td className="border border-black p-2 text-center font-bold text-blue-700 align-top">{row.cauHoi.nlc.biet || ''}</td>
                  <td className="border border-black p-2 text-center font-bold text-emerald-700 align-top">{row.cauHoi.nlc.hieu || ''}</td>
                  <td className="border border-black p-2 text-center font-bold text-amber-700 align-top">{row.cauHoi.nlc.vd || ''}</td>

                  {/* Đúng Sai */}
                  <td className="border border-black p-2 text-center bg-slate-50/50 align-top">{row.cauHoi.ds.biet || ''}</td>
                  <td className="border border-black p-2 text-center bg-slate-50/50 font-bold text-emerald-700 align-top whitespace-pre-line">{row.cauHoi.ds.hieu || ''}</td>
                  <td className="border border-black p-2 text-center bg-slate-50/50 font-bold text-amber-700 align-top whitespace-pre-line">{row.cauHoi.ds.vd || ''}</td>

                  {/* Trả lời ngắn */}
                  <td className="border border-black p-2 text-center align-top">{row.cauHoi.ngan.biet || ''}</td>
                  <td className="border border-black p-2 text-center font-bold text-emerald-700 align-top">{row.cauHoi.ngan.hieu || ''}</td>
                  <td className="border border-black p-2 text-center font-bold text-amber-700 align-top">{row.cauHoi.ngan.vd || ''}</td>

                  {/* Tự luận */}
                  <td className="border border-black p-2 text-center bg-slate-50/50 font-bold text-blue-700 align-top whitespace-pre-line">{row.cauHoi.tuLuan.biet || ''}</td>
                  <td className="border border-black p-2 text-center bg-slate-50/50 align-top">{row.cauHoi.tuLuan.hieu || ''}</td>
                  <td className="border border-black p-2 text-center bg-slate-50/50 font-bold text-amber-700 align-top whitespace-pre-line">{row.cauHoi.tuLuan.vd || ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
