import React from 'react';
import { 
  FileText, 
  Download, 
  Printer, 
  Copy, 
  Sparkles,
  Layers,
  BookOpen,
  CheckCircle2,
  GraduationCap
} from 'lucide-react';
import { TabType } from '../types';
import { examInfo } from '../data/examData';

interface NavbarProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
  onDownloadDocx: () => void;
  onPrint: () => void;
  onCopyText: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onDownloadDocx,
  onPrint,
  onCopyText,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & School Branding */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-amber-400 p-0.5 shadow-md flex items-center justify-center">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-amber-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-xs sm:text-sm tracking-wider text-amber-400 uppercase">
                  {examInfo.school}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 hidden sm:inline">
                  Chuẩn Word 2026-2027
                </span>
              </div>
              <h1 className="text-xs sm:text-sm font-semibold text-slate-200">
                Ma Trận • Bảng Đặc Tả • Đề Kiểm Tra Giữa HK I Tin 12 (KNTT)
              </h1>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden lg:flex items-center p-1 bg-slate-800/80 rounded-xl border border-slate-700/60">
            <button
              onClick={() => onSelectTab('matrix')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                currentTab === 'matrix'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>1. Ma Trận Đề</span>
            </button>

            <button
              onClick={() => onSelectTab('spec')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                currentTab === 'spec'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>2. Bảng Đặc Tả</span>
            </button>

            <button
              onClick={() => onSelectTab('exam')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                currentTab === 'exam'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>3. Đề Thi Chính Thức</span>
            </button>

            <button
              onClick={() => onSelectTab('answer')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                currentTab === 'answer'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>4. Đáp Án & Hướng Dẫn Chấm</span>
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={onCopyText}
              title="Sao chép toàn bộ nội dung"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition"
            >
              <Copy className="w-3.5 h-3.5 text-slate-300" />
              <span>Sao chép</span>
            </button>

            <button
              onClick={onPrint}
              title="In đề thi / Xuất file PDF"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition"
            >
              <Printer className="w-3.5 h-3.5 text-blue-400" />
              <span>In / Lưu PDF</span>
            </button>

            <button
              onClick={onDownloadDocx}
              className="flex items-center gap-2 px-3.5 py-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-600 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all transform active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Tải Word (.docx)</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation bar */}
        <div className="grid grid-cols-4 lg:hidden py-2 border-t border-slate-800 text-[11px] gap-1">
          <button
            onClick={() => onSelectTab('matrix')}
            className={`py-1 rounded text-center font-medium ${
              currentTab === 'matrix' ? 'bg-blue-600 text-white' : 'text-slate-400'
            }`}
          >
            Ma Trận
          </button>
          <button
            onClick={() => onSelectTab('spec')}
            className={`py-1 rounded text-center font-medium ${
              currentTab === 'spec' ? 'bg-blue-600 text-white' : 'text-slate-400'
            }`}
          >
            Đặc Tả
          </button>
          <button
            onClick={() => onSelectTab('exam')}
            className={`py-1 rounded text-center font-medium ${
              currentTab === 'exam' ? 'bg-blue-600 text-white' : 'text-slate-400'
            }`}
          >
            Đề Thi
          </button>
          <button
            onClick={() => onSelectTab('answer')}
            className={`py-1 rounded text-center font-medium ${
              currentTab === 'answer' ? 'bg-blue-600 text-white' : 'text-slate-400'
            }`}
          >
            Đáp Án
          </button>
        </div>
      </div>
    </header>
  );
};
