import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Navbar } from './components/Navbar';
import { MatrixView } from './components/MatrixView';
import { SpecView } from './components/SpecView';
import { ExamView } from './components/ExamView';
import { AnswerKeyView } from './components/AnswerKeyView';
import { TabType } from './types';
import { examInfo } from './data/examData';
import { downloadOfficialExamDocx } from './utils/docxExport';
import { 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  BookOpen, 
  FileText, 
  CheckCircle,
  Download,
  GraduationCap
} from 'lucide-react';

export function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('matrix');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleDownloadDocx = async () => {
    try {
      await downloadOfficialExamDocx();
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
      });
      showToast('🎉 Đã tải file Word (.docx) chuẩn gồm Ma trận, Bảng đặc tả, Đề thi & Đáp án!');
    } catch (e) {
      console.error(e);
      showToast('⚠️ Không thể tải file Word. Vui lòng thử lại!');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textToCopy = `
${examInfo.province} - ${examInfo.school}
${examInfo.title} • NĂM HỌC ${examInfo.academicYear}
MÔN: ${examInfo.subject} (${examInfo.textbook})
Thời gian làm bài: ${examInfo.duration}

CẤU TRÚC MA TRẬN KHẢO THÍ:
- Nhận biết 40% (4.0 điểm)
- Thông hiểu 30% (3.0 điểm)
- Vận dụng 30% (3.0 điểm)

PHẦN I. TRẮC NGHIỆM NHIỀU LỰA CHỌN (3,0 điểm)
Câu 1: Đáp án B (0.5đ)
Câu 2: Đáp án C (0.5đ)
Câu 3: Đáp án C (0.5đ)
Câu 4: Đáp án B (0.5đ)
Câu 5: Đáp án C (0.5đ)
Câu 6: Đáp án A (0.5đ)

PHẦN II. TRẮC NGHIỆM ĐÚNG/SAI (2,0 điểm)
Câu 7: a) Sai, b) Đúng, c) Đúng, d) Đúng
Câu 8: a) Đúng, b) Đúng, c) Sai, d) Đúng

PHẦN III. TRẮC NGHIỆM TRẢ LỜI NGẮN (2,0 điểm)
Câu 9: 3 (Plug and Play - PnP)
Câu 10: 5 (5 tiêu chí đánh giá thông tin tin cậy)

PHẦN IV. TỰ LUẬN (3,0 điểm)
Câu 11 (1.5đ): Khái niệm và vai trò quản lý thiết bị, giao diện của HĐH.
Câu 12 (1.5đ): Lựa chọn Switch, Router, AP, Modem cho phòng học 20 máy tính.
    `.trim();

    navigator.clipboard.writeText(textToCopy).then(() => {
      showToast('📋 Đã sao chép tóm tắt nội dung vào bộ nhớ tạm!');
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      {/* Navbar */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={(t) => setCurrentTab(t)}
        onDownloadDocx={handleDownloadDocx}
        onPrint={handlePrint}
        onCopyText={handleCopyText}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
          <span className="text-xs sm:text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-6">
        {/* Hero Banner */}
        <div className="no-print bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 rounded-2xl p-5 sm:p-6 text-white shadow-xl border border-indigo-800/40 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="bg-amber-400 text-slate-950 text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Định dạng Khảo thí 2026 - 2027
                </span>
                <span className="text-indigo-300 text-xs hidden sm:inline">•</span>
                <span className="text-indigo-200 text-xs font-mono">Bộ sách Kết nối tri thức với cuộc sống</span>
              </div>
              <h2 className="text-base sm:text-xl font-bold text-white tracking-wide">
                Ma Trận • Bảng Đặc Tả • Đề Kiểm Tra & Đáp Án Giữa Kỳ I Tin 12
              </h2>
              <p className="text-xs text-indigo-200/90 max-w-3xl leading-relaxed">
                Nội dung bám sát 100% 6 bài học SGK Tin học 12 (Hệ điều hành, Mạng máy tính & Không gian số tin cậy) theo chuẩn tài liệu có sẵn trên máy tính nhà trường.
                Bao gồm 4 phần: <strong>Nhiều lựa chọn (3.0đ)</strong>, <strong>Đúng/Sai (2.0đ)</strong>, <strong>Trả lời ngắn (2.0đ)</strong>, và <strong>Tự luận (3.0đ)</strong>.
              </p>
            </div>

            <div className="flex items-center gap-2 self-end md:self-auto flex-shrink-0">
              <button
                onClick={handleDownloadDocx}
                className="px-4 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-md flex items-center gap-2 transition transform active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Tải File Word (.docx) Chuẩn</span>
                <Sparkles className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="flex-1">
          {currentTab === 'matrix' && <MatrixView />}
          {currentTab === 'spec' && <SpecView />}
          {currentTab === 'exam' && <ExamView />}
          {currentTab === 'answer' && <AnswerKeyView />}
        </div>
      </main>

      {/* Footer */}
      <footer className="no-print bg-slate-900 border-t border-slate-800 text-slate-400 py-6 text-xs text-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-300">{examInfo.school}</span>
            <span>•</span>
            <span>Tổ Chuyên Môn Tin Học — Năm Học {examInfo.academicYear}</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Font chuẩn: Times New Roman</span>
            <span>•</span>
            <span>Khổ A4 • Xuất file: .docx / .pdf</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
