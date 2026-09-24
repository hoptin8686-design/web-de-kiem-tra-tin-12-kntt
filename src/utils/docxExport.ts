import { saveAs } from 'file-saver';

export const downloadOfficialExamDocx = async () => {
  try {
    // Tải file Word đã được biên soạn sẵn từ thư mục public
    const response = await fetch('/MA_TRAN_BANG_DAC_TA_DE_KT_GIUA_KY_1_TIN_12_KNTT_CHUAN.docx');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const blob = await response.blob();
    saveAs(blob, 'MA_TRAN_BANG_DAC_TA_DE_KT_GIUA_KY_1_TIN_12_KNTT_CHUAN.docx');
  } catch (error) {
    console.error('Lỗi khi tải file docx:', error);
    // Fallback: điều hướng trực tiếp
    window.open('/MA_TRAN_BANG_DAC_TA_DE_KT_GIUA_KY_1_TIN_12_KNTT_CHUAN.docx', '_blank');
  }
};
