import React from 'react';
import { matrixData, examInfo } from '../data/examData';
import { Layers, Award, BarChart3, CheckCircle, Info } from 'lucide-react';

export const MatrixView: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 no-print">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg">
            40%
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium">Mức độ Nhận biết</div>
            <div className="text-base font-bold text-slate-800">4.0 Điểm</div>
            <div className="text-[11px] text-blue-600">3 câu NLC + 1 câu TL</div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-lg">
            30%
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium">Mức độ Thông hiểu</div>
            <div className="text-base font-bold text-slate-800">3.0 Điểm</div>
            <div className="text-[11px] text-emerald-600">2 NLC + 4 ý Đ/S + 1 TLN</div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-lg">
            30%
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium">Mức độ Vận dụng</div>
            <div className="text-base font-bold text-slate-800">3.0 Điểm</div>
            <div className="text-[11px] text-amber-600">1 NLC + 4 ý Đ/S + 1 TLN + 1 TL</div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-lg">
            10.0
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium">Tổng điểm toàn bài</div>
            <div className="text-base font-bold text-slate-800">Thời gian: 45 phút</div>
            <div className="text-[11px] text-purple-600">4 phần thi định dạng mới</div>
          </div>
        </div>
      </div>

      {/* Main Matrix Paper Container */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-6">
        <div className="border-b border-slate-200 pb-4 mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              <span>1. MA TRẬN ĐỀ KIỂM TRA ĐỊNH KỲ GIỮA HỌC KÌ I</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Môn: Tin học - Lớp 12 (Bộ sách Kết nối tri thức với cuộc sống) • Năm học {examInfo.academicYear}
            </p>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-medium border border-slate-200">
            Tỉ lệ 40 - 30 - 30
          </span>
        </div>

        {/* Matrix Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse border border-black font-times">
            <thead>
              <tr className="bg-slate-100 text-center font-bold text-[12px]">
                <th rowSpan={3} className="border border-black p-2 w-10">TT</th>
                <th rowSpan={3} className="border border-black p-2 w-48 text-left">Chủ đề / Chương</th>
                <th rowSpan={3} className="border border-black p-2 text-left">Nội dung / đơn vị kiến thức</th>
                <th colSpan={12} className="border border-black p-2 bg-blue-50/70 text-blue-900">Mức độ đánh giá</th>
                <th colSpan={3} rowSpan={2} className="border border-black p-2 bg-amber-50 text-amber-900">Tổng</th>
                <th rowSpan={3} className="border border-black p-2 w-16">Tỉ lệ % điểm</th>
              </tr>
              <tr className="bg-slate-50 text-center font-bold text-[11px]">
                <th colSpan={9} className="border border-black p-1">TNKQ</th>
                <th colSpan={3} className="border border-black p-1">Tự luận</th>
              </tr>
              <tr className="bg-slate-50 text-center font-bold text-[11px]">
                {/* Nhiều lựa chọn */}
                <th className="border border-black p-1 w-9" title="Nhiều lựa chọn - Biết">Biết</th>
                <th className="border border-black p-1 w-9" title="Nhiều lựa chọn - Hiểu">Hiểu</th>
                <th className="border border-black p-1 w-9" title="Nhiều lựa chọn - Vận dụng">VD</th>
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
                {/* Tổng */}
                <th className="border border-black p-1 w-9 bg-amber-50">Biết</th>
                <th className="border border-black p-1 w-9 bg-amber-50">Hiểu</th>
                <th className="border border-black p-1 w-9 bg-amber-50">VD</th>
              </tr>
            </thead>
            <tbody>
              {matrixData.map((row) => (
                <tr key={row.tt} className="hover:bg-blue-50/20 transition">
                  <td className="border border-black p-2 text-center font-medium">{row.tt}</td>
                  <td className="border border-black p-2 font-medium text-slate-800">{row.chuDe}</td>
                  <td className="border border-black p-2 font-bold text-slate-900">{row.noiDung}</td>
                  
                  {/* NLC */}
                  <td className="border border-black p-2 text-center font-semibold text-blue-700">{row.tnkqNlc.biet}</td>
                  <td className="border border-black p-2 text-center font-semibold text-emerald-700">{row.tnkqNlc.hieu}</td>
                  <td className="border border-black p-2 text-center font-semibold text-amber-700">{row.tnkqNlc.vd}</td>

                  {/* Đúng Sai */}
                  <td className="border border-black p-2 text-center bg-slate-50/50">{row.tnkqDs.biet}</td>
                  <td className="border border-black p-2 text-center bg-slate-50/50 font-semibold text-emerald-700">{row.tnkqDs.hieu}</td>
                  <td className="border border-black p-2 text-center bg-slate-50/50 font-semibold text-amber-700">{row.tnkqDs.vd}</td>

                  {/* Trả lời ngắn */}
                  <td className="border border-black p-2 text-center">{row.tnkqNgan.biet}</td>
                  <td className="border border-black p-2 text-center font-semibold text-emerald-700">{row.tnkqNgan.hieu}</td>
                  <td className="border border-black p-2 text-center font-semibold text-amber-700">{row.tnkqNgan.vd}</td>

                  {/* Tự luận */}
                  <td className="border border-black p-2 text-center bg-slate-50/50 font-semibold text-blue-700">{row.tuLuan.biet}</td>
                  <td className="border border-black p-2 text-center bg-slate-50/50">{row.tuLuan.hieu}</td>
                  <td className="border border-black p-2 text-center bg-slate-50/50 font-semibold text-amber-700">{row.tuLuan.vd}</td>

                  {/* Tổng */}
                  <td className="border border-black p-2 text-center bg-amber-50/50 font-bold">{row.tong.biet}</td>
                  <td className="border border-black p-2 text-center bg-amber-50/50 font-bold">{row.tong.hieu}</td>
                  <td className="border border-black p-2 text-center bg-amber-50/50 font-bold">{row.tong.vd}</td>

                  <td className="border border-black p-2 text-center font-bold text-slate-800">{row.tiLe}</td>
                </tr>
              ))}

              {/* Summary Rows */}
              <tr className="bg-slate-100 font-bold text-center">
                <td colSpan={3} className="border border-black p-2">Tổng số câu / ý</td>
                <td className="border border-black p-2 text-blue-700">3</td>
                <td className="border border-black p-2 text-emerald-700">2</td>
                <td className="border border-black p-2 text-amber-700">1</td>
                <td className="border border-black p-2">0</td>
                <td className="border border-black p-2 text-emerald-700">4</td>
                <td className="border border-black p-2 text-amber-700">4</td>
                <td className="border border-black p-2">0</td>
                <td className="border border-black p-2 text-emerald-700">1</td>
                <td className="border border-black p-2 text-amber-700">1</td>
                <td className="border border-black p-2 text-blue-700">1</td>
                <td className="border border-black p-2">0</td>
                <td className="border border-black p-2 text-amber-700">1</td>
                <td className="border border-black p-2 bg-amber-100 text-blue-800">8</td>
                <td className="border border-black p-2 bg-amber-100 text-emerald-800">7</td>
                <td className="border border-black p-2 bg-amber-100 text-amber-800">3</td>
                <td className="border border-black p-2 text-purple-700">18 ý/câu</td>
              </tr>

              <tr className="bg-slate-100 font-bold text-center">
                <td colSpan={3} className="border border-black p-2">Tổng số điểm</td>
                <td colSpan={3} className="border border-black p-2 text-blue-700">3.0 điểm</td>
                <td colSpan={3} className="border border-black p-2 text-emerald-700">2.0 điểm</td>
                <td colSpan={3} className="border border-black p-2 text-amber-700">2.0 điểm</td>
                <td colSpan={3} className="border border-black p-2 text-purple-700">3.0 điểm</td>
                <td className="border border-black p-2 bg-amber-100 text-blue-800">4.0 đ</td>
                <td className="border border-black p-2 bg-amber-100 text-emerald-800">3.0 đ</td>
                <td className="border border-black p-2 bg-amber-100 text-amber-800">3.0 đ</td>
                <td className="border border-black p-2 bg-purple-100 text-purple-900 text-sm">10.0 đ</td>
              </tr>

              <tr className="bg-slate-100 font-bold text-center">
                <td colSpan={3} className="border border-black p-2">Tỉ lệ % điểm</td>
                <td colSpan={3} className="border border-black p-2">30%</td>
                <td colSpan={3} className="border border-black p-2">20%</td>
                <td colSpan={3} className="border border-black p-2">20%</td>
                <td colSpan={3} className="border border-black p-2">30%</td>
                <td className="border border-black p-2 bg-amber-100 text-blue-800">40%</td>
                <td className="border border-black p-2 bg-amber-100 text-emerald-800">30%</td>
                <td className="border border-black p-2 bg-amber-100 text-amber-800">30%</td>
                <td className="border border-black p-2 bg-purple-100 text-purple-900">100%</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Note Box */}
        <div className="mt-4 p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl text-xs text-slate-700 space-y-1">
          <div className="font-bold text-blue-900 flex items-center gap-1.5">
            <Info className="w-4 h-4 text-blue-600" />
            <span>Ghi chú hướng dẫn cấu trúc ma trận khảo thí 2026-2027:</span>
          </div>
          <p>• <strong>Dạng I (Trắc nghiệm nhiều lựa chọn):</strong> 6 câu hỏi đơn, mỗi câu 0.5 điểm, tổng 3.0 điểm.</p>
          <p>• <strong>Dạng II (Trắc nghiệm Đúng - Sai):</strong> 2 câu chùm, mỗi câu gồm 4 ý (a, b, c, d); mỗi ý đúng được 0.25 điểm, đạt tối đa 1.0 điểm/câu, tổng 2.0 điểm.</p>
          <p>• <strong>Dạng III (Trắc nghiệm trả lời ngắn):</strong> 2 câu hỏi điền số nguyên, mỗi câu đúng được 1.0 điểm, tổng 2.0 điểm.</p>
          <p>• <strong>Dạng IV (Tự luận):</strong> 2 câu giải quyết vấn đề thực tiễn, mỗi câu 1.5 điểm, tổng 3.0 điểm.</p>
        </div>
      </div>
    </div>
  );
};
