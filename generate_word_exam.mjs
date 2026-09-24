import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
  AlignmentType,
  BorderStyle,
} from 'docx';
import fs from 'fs';

const borderNone = {
  top: { style: BorderStyle.NONE, size: 0, color: 'auto' },
  bottom: { style: BorderStyle.NONE, size: 0, color: 'auto' },
  left: { style: BorderStyle.NONE, size: 0, color: 'auto' },
  right: { style: BorderStyle.NONE, size: 0, color: 'auto' },
};

const tableBorderSingle = {
  top: { style: BorderStyle.SINGLE, size: 1, color: '000000' },
  bottom: { style: BorderStyle.SINGLE, size: 1, color: '000000' },
  left: { style: BorderStyle.SINGLE, size: 1, color: '000000' },
  right: { style: BorderStyle.SINGLE, size: 1, color: '000000' },
};

export const createExamDocument = () => {
  // 1. Header Table
  const headerTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: borderNone,
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 45, type: WidthType.PERCENTAGE },
            borders: borderNone,
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: 'SỞ GIÁO DỤC VÀ ĐÀO TẠO', font: 'Times New Roman', size: 24 }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: 'TRƯỜNG THPT PHỤC HÒA', bold: true, font: 'Times New Roman', size: 24 }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: 'ĐỀ CHÍNH THỨC', bold: true, font: 'Times New Roman', size: 22 }),
                ],
              }),
            ],
          }),
          new TableCell({
            width: { size: 55, type: WidthType.PERCENTAGE },
            borders: borderNone,
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: 'ĐỀ KIỂM TRA GIỮA HỌC KÌ I', bold: true, font: 'Times New Roman', size: 26 }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: 'MÔN: TIN HỌC - LỚP 12 (KNTT)', bold: true, font: 'Times New Roman', size: 24 }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: 'Năm học: 2026 - 2027 • Thời gian: 45 phút', italics: true, font: 'Times New Roman', size: 22 }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });

  // 2. MA TRẬN TABLE
  const matrixHeaders = [
    new TableRow({
      children: [
        new TableCell({ borders: tableBorderSingle, rowSpan: 3, width: { size: 5, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'TT', bold: true, font: 'Times New Roman', size: 20 })] })] }),
        new TableCell({ borders: tableBorderSingle, rowSpan: 3, width: { size: 15, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Chủ đề/\nChương', bold: true, font: 'Times New Roman', size: 20 })] })] }),
        new TableCell({ borders: tableBorderSingle, rowSpan: 3, width: { size: 20, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Nội dung/\nđơn vị kiến thức', bold: true, font: 'Times New Roman', size: 20 })] })] }),
        new TableCell({ borders: tableBorderSingle, colSpan: 12, width: { size: 50, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Mức độ đánh giá', bold: true, font: 'Times New Roman', size: 20 })] })] }),
        new TableCell({ borders: tableBorderSingle, colSpan: 3, rowSpan: 2, width: { size: 10, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Tổng', bold: true, font: 'Times New Roman', size: 20 })] })] }),
        new TableCell({ borders: tableBorderSingle, rowSpan: 3, width: { size: 10, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Tỉ lệ\n%\nđiểm', bold: true, font: 'Times New Roman', size: 20 })] })] }),
      ],
    }),
    new TableRow({
      children: [
        new TableCell({ borders: tableBorderSingle, colSpan: 9, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'TNKQ', bold: true, font: 'Times New Roman', size: 20 })] })] }),
        new TableCell({ borders: tableBorderSingle, colSpan: 3, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Tự luận', bold: true, font: 'Times New Roman', size: 20 })] })] }),
      ],
    }),
    new TableRow({
      children: [
        // TN Nhiều lựa chọn
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Biết', bold: true, font: 'Times New Roman', size: 18 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Hiểu', bold: true, font: 'Times New Roman', size: 18 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'VD', bold: true, font: 'Times New Roman', size: 18 })] })] }),
        // TN Đúng Sai
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Biết', bold: true, font: 'Times New Roman', size: 18 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Hiểu', bold: true, font: 'Times New Roman', size: 18 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'VD', bold: true, font: 'Times New Roman', size: 18 })] })] }),
        // TN Trả lời ngắn
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Biết', bold: true, font: 'Times New Roman', size: 18 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Hiểu', bold: true, font: 'Times New Roman', size: 18 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'VD', bold: true, font: 'Times New Roman', size: 18 })] })] }),
        // Tự luận
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Biết', bold: true, font: 'Times New Roman', size: 18 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Hiểu', bold: true, font: 'Times New Roman', size: 18 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'VD', bold: true, font: 'Times New Roman', size: 18 })] })] }),
        // Tổng Biết - Hiểu - VD
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Biết', bold: true, font: 'Times New Roman', size: 18 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Hiểu', bold: true, font: 'Times New Roman', size: 18 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'VD', bold: true, font: 'Times New Roman', size: 18 })] })] }),
      ],
    }),
  ];

  const matrixRowsData = [
    {
      tt: '1',
      chuDe: 'CHƯƠNG I. MÁY TÍNH VÀ XÃ HỘI TRI THỨC',
      noiDung: 'Bài 1. Hệ điều hành và phần mềm ứng dụng',
      values: ['1 (C1)', '', '', '', '', '', '', '', '', '1 (C1) - 1.5đ', '', '', '2', '', '', '20%'],
    },
    {
      tt: '2',
      chuDe: 'CHƯƠNG I. MÁY TÍNH VÀ XÃ HỘI TRI THỨC',
      noiDung: 'Bài 2. Thực hành sử dụng hệ điều hành',
      values: ['', '1 (C2)', '', '', '4 ý (C1)', '', '', '', '', '', '', '', '', '5', '', '15%'],
    },
    {
      tt: '3',
      chuDe: 'CHƯƠNG II. MẠNG MÁY TÍNH VÀ INTERNET',
      noiDung: 'Bài 3. Thiết bị mạng và giao thức mạng',
      values: ['1 (C3)', '', '', '', '', '', '', '', '', '', '', '1 (C2) - 1.5đ', '1', '', '1', '20%'],
    },
    {
      tt: '4',
      chuDe: 'CHƯƠNG II. MẠNG MÁY TÍNH VÀ INTERNET',
      noiDung: 'Bài 4. Thực hành kết nối thiết bị số với máy tính',
      values: ['', '', '1 (C4)', '', '', '', '', '1 (C1)', '', '', '', '', '', '1', '1', '15%'],
    },
    {
      tt: '5',
      chuDe: 'CHƯƠNG III. ĐẠO ĐỨC, PHÁP LUẬT VÀ VĂN HOÁ',
      noiDung: 'Bài 5. Khái niệm và một số đặc điểm của thông tin tin cậy',
      values: ['1 (C5)', '', '', '', '', '', '', '', '1 (C2)', '', '', '', '1', '', '1', '15%'],
    },
    {
      tt: '6',
      chuDe: 'CHƯƠNG III. ĐẠO ĐỨC, PHÁP LUẬT VÀ VĂN HOÁ',
      noiDung: 'Bài 6. Thực hành khai thác nguồn thông tin tin cậy',
      values: ['', '1 (C6)', '', '', '', '4 ý (C2)', '', '', '', '', '', '', '', '4', '1', '15%'],
    },
  ];

  const matrixBodyRows = matrixRowsData.map((row) => {
    return new TableRow({
      children: [
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: row.tt, font: 'Times New Roman', size: 18 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.LEFT, children: [new TextRun({ text: row.chuDe, font: 'Times New Roman', size: 17 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.LEFT, children: [new TextRun({ text: row.noiDung, bold: true, font: 'Times New Roman', size: 18 })] })] }),
        ...row.values.map((v) => new TableCell({
          borders: tableBorderSingle,
          children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: v, font: 'Times New Roman', size: 17, bold: v.includes('%') || v.includes('đ') })] })],
        })),
      ],
    });
  });

  // Total summary rows
  const matrixSummaryRows = [
    new TableRow({
      children: [
        new TableCell({ borders: tableBorderSingle, colSpan: 3, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Tổng số câu / ý', bold: true, font: 'Times New Roman', size: 19 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '3', bold: true, font: 'Times New Roman', size: 19 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '2', bold: true, font: 'Times New Roman', size: 19 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '1', bold: true, font: 'Times New Roman', size: 19 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '0', bold: true, font: 'Times New Roman', size: 19 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '4', bold: true, font: 'Times New Roman', size: 19 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '4', bold: true, font: 'Times New Roman', size: 19 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '0', bold: true, font: 'Times New Roman', size: 19 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '1', bold: true, font: 'Times New Roman', size: 19 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '1', bold: true, font: 'Times New Roman', size: 19 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '1', bold: true, font: 'Times New Roman', size: 19 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '0', bold: true, font: 'Times New Roman', size: 19 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '1', bold: true, font: 'Times New Roman', size: 19 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '8', bold: true, font: 'Times New Roman', size: 19 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '7', bold: true, font: 'Times New Roman', size: 19 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '3', bold: true, font: 'Times New Roman', size: 19 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '18 câu/ý', bold: true, font: 'Times New Roman', size: 18 })] })] }),
      ],
    }),
    new TableRow({
      children: [
        new TableCell({ borders: tableBorderSingle, colSpan: 3, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Tổng số điểm', bold: true, font: 'Times New Roman', size: 19 })] })] }),
        new TableCell({ borders: tableBorderSingle, colSpan: 3, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '3.0 điểm', bold: true, font: 'Times New Roman', size: 19 })] })] }),
        new TableCell({ borders: tableBorderSingle, colSpan: 3, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '2.0 điểm', bold: true, font: 'Times New Roman', size: 19 })] })] }),
        new TableCell({ borders: tableBorderSingle, colSpan: 3, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '2.0 điểm', bold: true, font: 'Times New Roman', size: 19 })] })] }),
        new TableCell({ borders: tableBorderSingle, colSpan: 3, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '3.0 điểm', bold: true, font: 'Times New Roman', size: 19 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '4.0', bold: true, font: 'Times New Roman', size: 19 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '3.0', bold: true, font: 'Times New Roman', size: 19 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '3.0', bold: true, font: 'Times New Roman', size: 19 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '10.0 đ', bold: true, font: 'Times New Roman', size: 19 })] })] }),
      ],
    }),
    new TableRow({
      children: [
        new TableCell({ borders: tableBorderSingle, colSpan: 3, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Tỉ lệ % điểm', bold: true, font: 'Times New Roman', size: 19 })] })] }),
        new TableCell({ borders: tableBorderSingle, colSpan: 3, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '30%', bold: true, font: 'Times New Roman', size: 19 })] })] }),
        new TableCell({ borders: tableBorderSingle, colSpan: 3, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '20%', bold: true, font: 'Times New Roman', size: 19 })] })] }),
        new TableCell({ borders: tableBorderSingle, colSpan: 3, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '20%', bold: true, font: 'Times New Roman', size: 19 })] })] }),
        new TableCell({ borders: tableBorderSingle, colSpan: 3, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '30%', bold: true, font: 'Times New Roman', size: 19 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '40%', bold: true, font: 'Times New Roman', size: 19 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '30%', bold: true, font: 'Times New Roman', size: 19 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '30%', bold: true, font: 'Times New Roman', size: 19 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '100%', bold: true, font: 'Times New Roman', size: 19 })] })] }),
      ],
    }),
  ];

  const matrixTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: tableBorderSingle,
    rows: [...matrixHeaders, ...matrixBodyRows, ...matrixSummaryRows],
  });

  // 3. BẢNG ĐẶC TẢ TABLE
  const specHeaders = [
    new TableRow({
      children: [
        new TableCell({ borders: tableBorderSingle, rowSpan: 3, width: { size: 5, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'TT', bold: true, font: 'Times New Roman', size: 20 })] })] }),
        new TableCell({ borders: tableBorderSingle, rowSpan: 3, width: { size: 15, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Chủ đề/\nChương', bold: true, font: 'Times New Roman', size: 20 })] })] }),
        new TableCell({ borders: tableBorderSingle, rowSpan: 3, width: { size: 18, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Nội dung/\nđơn vị kiến thức', bold: true, font: 'Times New Roman', size: 20 })] })] }),
        new TableCell({ borders: tableBorderSingle, rowSpan: 3, width: { size: 34, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Yêu cầu cần đạt', bold: true, font: 'Times New Roman', size: 20 })] })] }),
        new TableCell({ borders: tableBorderSingle, colSpan: 12, width: { size: 28, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Số câu hỏi / lệnh hỏi ở các mức độ đánh giá', bold: true, font: 'Times New Roman', size: 20 })] })] }),
      ],
    }),
    new TableRow({
      children: [
        new TableCell({ borders: tableBorderSingle, colSpan: 9, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'TNKQ', bold: true, font: 'Times New Roman', size: 20 })] })] }),
        new TableCell({ borders: tableBorderSingle, colSpan: 3, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Tự luận', bold: true, font: 'Times New Roman', size: 20 })] })] }),
      ],
    }),
    new TableRow({
      children: [
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Biết', font: 'Times New Roman', size: 18, bold: true })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Hiểu', font: 'Times New Roman', size: 18, bold: true })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'VD', font: 'Times New Roman', size: 18, bold: true })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Biết', font: 'Times New Roman', size: 18, bold: true })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Hiểu', font: 'Times New Roman', size: 18, bold: true })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'VD', font: 'Times New Roman', size: 18, bold: true })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Biết', font: 'Times New Roman', size: 18, bold: true })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Hiểu', font: 'Times New Roman', size: 18, bold: true })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'VD', font: 'Times New Roman', size: 18, bold: true })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Biết', font: 'Times New Roman', size: 18, bold: true })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Hiểu', font: 'Times New Roman', size: 18, bold: true })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'VD', font: 'Times New Roman', size: 18, bold: true })] })] }),
      ],
    }),
  ];

  const specRowsData = [
    {
      tt: '1',
      chuDe: 'CHƯƠNG I. MÁY TÍNH VÀ XÃ HỘI TRI THỨC',
      noiDung: 'Bài 1. Hệ điều hành và phần mềm ứng dụng',
      yccđ: 'Biết: Nêu được khái niệm hệ điều hành và phần mềm ứng dụng. Trình bày được các vai trò chính của hệ điều hành trong việc quản lý thiết bị, quản lý tệp, cung cấp giao diện và môi trường chạy ứng dụng. Nhận biết được các đặc điểm đặc trưng của hệ điều hành cho thiết bị di động. Kể tên được một số hệ điều hành phổ biến cho thiết bị di động như Android, iOS.\nNăng lực: NLa',
      values: ['1 (C1)', '', '', '', '', '', '', '', '', '1 (C1)\n1.5đ', '', ''],
    },
    {
      tt: '2',
      chuDe: 'CHƯƠNG I. MÁY TÍNH VÀ XÃ HỘI TRI THỨC',
      noiDung: 'Bài 2. Thực hành sử dụng hệ điều hành',
      yccđ: 'Hiểu: Giải thích được sự khác biệt về quyền truy cập giữa tài khoản quản trị (Administrator) và tài khoản người dùng tiêu chuẩn (Standard User). Giải thích được vai trò của trình quản lý tác vụ (Task Manager) trong việc giám sát hiệu năng hệ thống và xử lý ứng dụng bị treo.\nNăng lực: NLa',
      values: ['', '1 (C2)', '', '', '4 ý\n(C1a, b, c, d)', '', '', '', '', '', '', ''],
    },
    {
      tt: '3',
      chuDe: 'CHƯƠNG II. MẠNG MÁY TÍNH VÀ INTERNET',
      noiDung: 'Bài 3. Thiết bị mạng và giao thức mạng',
      yccđ: 'Biết: Kể tên và nêu được chức năng của các thiết bị mạng thông dụng bao gồm Switch, Router, Access Point và Modem. Phát biểu được khái niệm giao thức mạng và bộ giao thức TCP/IP. Nhận biết được định dạng và độ dài của địa chỉ IPv4 và IPv6.\nVận dụng: Lựa chọn được thiết bị mạng phù hợp để thiết lập một sơ đồ kết nối mạng LAN đơn giản cho gia đình hoặc lớp học. Phân tích và phân loại được một địa chỉ IP cụ thể thuộc chuẩn IPv4 hay IPv6.\nNăng lực: NLa',
      values: ['1 (C3)', '', '', '', '', '', '', '', '', '', '', '1 (C2)\n1.5đ'],
    },
    {
      tt: '4',
      chuDe: 'CHƯƠNG II. MẠNG MÁY TÍNH VÀ INTERNET',
      noiDung: 'Bài 4. Thực hành kết nối thiết bị số với máy tính',
      yccđ: 'Hiểu: Phân biệt được ưu thế và hạn chế của các phương thức kết nối có dây so với kết nối không dây như Bluetooth, Wi-Fi, Wi-Fi Direct. Giải thích được nguyên lý tự động cài đặt phần mềm điều khiển của công nghệ cắm và chạy (Plug and Play).\nVận dụng: Thực hiện kết nối thành công điện thoại thông minh với máy tính qua cáp USB để sao chép dữ liệu hoặc hình ảnh. Thực hiện kết nối và thiết lập chế độ hiển thị từ máy tính lên màn hình phụ hoặc máy chiếu qua cáp HDMI hoặc VGA. Thiết lập kết nối không dây qua Bluetooth giữa máy tính với các thiết bị ngoại vi như chuột, tai nghe hoặc điện thoại di động để truyền tệp.\nNăng lực: NLa',
      values: ['', '', '1 (C4)', '', '', '', '', '1 (C1)', '', '', '', ''],
    },
    {
      tt: '5',
      chuDe: 'CHƯƠNG III. ĐẠO ĐỨC, PHÁP LUẬT VÀ VĂN HOÁ',
      noiDung: 'Bài 5. Khái niệm và một số đặc điểm của thông tin tin cậy',
      yccđ: 'Biết: Phát biểu được khái niệm thông tin tin cậy. Liệt kê được các tiêu chí đánh giá tính tin cậy của thông tin bao gồm tính xác thực, tính cập nhật, tính khách quan, nguồn gốc và mục đích.\nVận dụng: Đánh giá được mức độ tin cậy của một bài viết hoặc một nguồn thông tin cụ thể dựa trên các tiêu chí xác thực, cập nhật, khách quan, nguồn gốc và mục đích.\nNăng lực: NLb; NLe',
      values: ['1 (C5)', '', '', '', '', '', '', '', '1 (C2)', '', '', ''],
    },
    {
      tt: '6',
      chuDe: 'CHƯƠNG III. ĐẠO ĐỨC, PHÁP LUẬT VÀ VĂN HOÁ',
      noiDung: 'Bài 6. Thực hành khai thác nguồn thông tin tin cậy',
      yccđ: 'Biết: Nhận biết được các toán tử tìm kiếm nâng cao trên Internet bao gồm dấu ngoặc kép "", toán tử site:, toán tử filetype: và toán tử loại trừ -.\nHiểu: Giải thích được chức năng và cách hoạt động của từng toán tử tìm kiếm nâng cao trong việc thu hẹp phạm vi và tăng độ chính xác của kết quả tìm kiếm.\nNăng lực: NLb; NLe',
      values: ['', '1 (C6)', '', '', '', '4 ý\n(C2a, b, c, d)', '', '', '', '', '', ''],
    },
  ];

  const specBodyRows = specRowsData.map((row) => {
    return new TableRow({
      children: [
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: row.tt, font: 'Times New Roman', size: 18 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.LEFT, children: [new TextRun({ text: row.chuDe, font: 'Times New Roman', size: 17 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.LEFT, children: [new TextRun({ text: row.noiDung, bold: true, font: 'Times New Roman', size: 18 })] })] }),
        new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.JUSTIFIED, children: [new TextRun({ text: row.yccđ, font: 'Times New Roman', size: 17 })] })] }),
        ...row.values.map((v) => new TableCell({
          borders: tableBorderSingle,
          children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: v, font: 'Times New Roman', size: 17, bold: v.includes('đ') })] })],
        })),
      ],
    });
  });

  const specTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: tableBorderSingle,
    rows: [...specHeaders, ...specBodyRows],
  });

  // 4. Chữ ký bàn giao/phê duyệt
  const signatureTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: borderNone,
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 33, type: WidthType.PERCENTAGE },
            borders: borderNone,
            children: [
              new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'BAN GIÁM HIỆU', bold: true, font: 'Times New Roman', size: 24 })] }),
              new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '(Ký, ghi rõ họ tên và đóng dấu)', italics: true, font: 'Times New Roman', size: 20 })] }),
              new Paragraph({ text: '', spacing: { before: 1200 } }),
              new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Hoàng Trung Kiên', bold: true, font: 'Times New Roman', size: 24 })] }),
            ],
          }),
          new TableCell({
            width: { size: 33, type: WidthType.PERCENTAGE },
            borders: borderNone,
            children: [
              new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'TỔ TRƯỞNG CHUYÊN MÔN', bold: true, font: 'Times New Roman', size: 24 })] }),
              new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '(Ký và ghi rõ họ tên)', italics: true, font: 'Times New Roman', size: 20 })] }),
              new Paragraph({ text: '', spacing: { before: 1200 } }),
              new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Phan Văn Thế', bold: true, font: 'Times New Roman', size: 24 })] }),
            ],
          }),
          new TableCell({
            width: { size: 34, type: WidthType.PERCENTAGE },
            borders: borderNone,
            children: [
              new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'GIÁO VIÊN RA ĐỀ', bold: true, font: 'Times New Roman', size: 24 })] }),
              new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '(Ký và ghi rõ họ tên)', italics: true, font: 'Times New Roman', size: 20 })] }),
              new Paragraph({ text: '', spacing: { before: 1200 } }),
              new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Đàm Thị Hợp', bold: true, font: 'Times New Roman', size: 24 })] }),
            ],
          }),
        ],
      }),
    ],
  });

  const p = (text, opts = {}) => new Paragraph({
    alignment: opts.align || AlignmentType.LEFT,
    spacing: { before: opts.before || 60, after: opts.after || 60 },
    indent: opts.indent ? { firstLine: opts.indent } : undefined,
    children: [
      new TextRun({
        text,
        bold: !!opts.bold,
        italics: !!opts.italics,
        font: 'Times New Roman',
        size: opts.size || 24, // 12pt
      }),
    ],
  });

  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: { top: 1134, bottom: 1134, left: 1417, right: 1134 },
          },
        },
        children: [
          // HEADER
          headerTable,
          p('Phục Hòa, ngày 24 tháng 9 năm 2026', { align: AlignmentType.RIGHT, italics: true, before: 100, after: 150 }),

          // 1. MA TRẬN
          p('1. MA TRẬN ĐỀ KIỂM TRA ĐỊNH KỲ GIỮA HỌC KÌ I', { align: AlignmentType.CENTER, bold: true, size: 28, before: 100, after: 150 }),
          matrixTable,
          p('Ghi chú:', { bold: true, size: 20, before: 100, after: 30 }),
          p('1. Dạng II (Đúng - Sai): Mỗi câu gồm 4 ý (a, b, c, d); mỗi ý đúng được 0.25 điểm, đúng cả 4 ý được 1.0 điểm/câu.', { italics: true, size: 19 }),
          p('2. Dạng III (Trả lời ngắn): Mỗi câu trả lời đúng được 1.0 điểm.', { italics: true, size: 19 }),
          p('3. Tỉ lệ điểm toàn bài: Nhận biết 40% (4.0đ) - Thông hiểu 30% (3.0đ) - Vận dụng 30% (3.0đ) = 100% (10 điểm).', { italics: true, size: 19, after: 200 }),

          // 2. BẢNG ĐẶC TẢ
          p('2. BẢNG ĐẶC TẢ ĐỀ KIỂM TRA ĐỊNH KỲ GIỮA HỌC KÌ I', { align: AlignmentType.CENTER, bold: true, size: 28, before: 200, after: 150 }),
          specTable,
          p('', { after: 200 }),

          // 3. ĐỀ KIỂM TRA CHÍNH THỨC
          p('SỞ GIÁO DỤC VÀ ĐÀO TẠO CAO BẰNG', { align: AlignmentType.CENTER, bold: true, size: 22 }),
          p('TRƯỜNG THPT PHỤC HÒA', { align: AlignmentType.CENTER, bold: true, size: 22 }),
          p('ĐỀ KIỂM TRA GIỮA HỌC KÌ I - NĂM HỌC 2026 - 2027', { align: AlignmentType.CENTER, bold: true, size: 28, before: 100, after: 40 }),
          p('MÔN: TIN HỌC - LỚP 12 (BỘ SÁCH KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)', { align: AlignmentType.CENTER, bold: true, size: 24 }),
          p('Thời gian làm bài: 45 phút (Không kể thời gian phát đề)', { align: AlignmentType.CENTER, italics: true, size: 22, after: 150 }),

          p('PHẦN I. TRẮC NGHIỆM NHIỀU LỰA CHỌN (3,0 điểm)', { bold: true, size: 26, before: 100, after: 60 }),
          p('Thí sinh trả lời từ Câu 1 đến Câu 6. Mỗi câu hỏi chỉ chọn một phương án trả lời đúng nhất (mỗi câu 0.5 điểm).', { italics: true, size: 22, after: 100 }),

          p('Câu 1: Hệ điều hành có vai trò cốt lõi nào sau đây trong hệ thống máy tính?', { bold: true }),
          p('A. Thực hiện soạn thảo văn bản và xử lý bảng tính chuyên sâu cho người dùng.'),
          p('B. Làm trung gian giữa người sử dụng và phần cứng, quản lý tài nguyên và cung cấp môi trường chạy ứng dụng.'),
          p('C. Kết nối máy tính trực tiếp với mạng Internet toàn cầu qua giao thức TCP/IP.'),
          p('D. Tự động tìm kiếm và loại bỏ các tệp rác do phần mềm ứng dụng sinh ra.', { after: 120 }),

          p('Câu 2: Trong hệ điều hành Windows, phát biểu nào sau đây giải thích đúng về vai trò của trình quản lý tác vụ (Task Manager)?', { bold: true }),
          p('A. Cho phép tạo mới và phân quyền truy cập cho các tài khoản người dùng chuẩn.'),
          p('B. Dùng để cài đặt các tệp gói phần mềm định dạng mở rộng .msi hoặc .exe.'),
          p('C. Giám sát hiệu năng sử dụng CPU, RAM, ổ đĩa và cho phép kết thúc các ứng dụng bị treo (Not Responding).'),
          p('D. Quản lý việc lưu trữ, sao chép và tìm kiếm nâng cao các tệp, thư mục trên ổ đĩa ngoài.', { after: 120 }),

          p('Câu 3: Thiết bị mạng nào sau đây có chức năng kết nối các thiết bị trong cùng một mạng LAN và chuyển tiếp dữ liệu dựa trên địa chỉ MAC?', { bold: true }),
          p('A. Router (Bộ định tuyến).          B. Modem.'),
          p('C. Switch (Bộ chuyển mạch).       D. Access Point.', { after: 120 }),

          p('Câu 4: Khi bạn kết nối điện thoại thông minh với máy tính cá nhân qua cáp USB và chọn chế độ truyền tệp (MTP), hành động này thể hiện ứng dụng nào trong việc kết nối thiết bị?', { bold: true }),
          p('A. Thiết lập kết nối mạng không dây phạm vi ngắn qua Bluetooth để phát nhạc.'),
          p('B. Thực hiện kết nối có dây để duyệt, sao chép dữ liệu và quản lý tệp giữa bộ nhớ điện thoại và máy tính.'),
          p('C. Tự động cài đặt phần mềm điều khiển (Driver) thông qua công nghệ cắm và chạy Plug and Play.'),
          p('D. Truyền tải tín hiệu hình ảnh và âm thanh trực tiếp từ máy tính lên màn hình phụ hoặc máy chiếu.', { after: 120 }),

          p('Câu 5: Tiêu chí nào sau đây phản ánh đúng tính xác thực (Accuracy) khi đánh giá độ tin cậy của một nguồn thông tin?', { bold: true }),
          p('A. Thông tin được xuất bản gần đây và phù hợp với bối cảnh thời gian hiện tại.'),
          p('B. Thông tin trình bày trung lập, không mang định kiến cá nhân hay quảng cáo phiến diện.'),
          p('C. Thông tin không có lỗi logic, số liệu rõ ràng, có bằng chứng thực tế chứng minh và đối chiếu được.'),
          p('D. Tác giả là chuyên gia uy tín và trang web thuộc sở hữu của cơ quan chính phủ .gov.', { after: 120 }),

          p('Câu 6: Trong quá trình tìm kiếm thông tin trên Internet, toán tử nào sau đây giúp tìm kiếm chính xác một cụm từ khóa theo đúng thứ tự các từ?', { bold: true }),
          p('A. Dấu ngoặc kép "".          B. Toán tử site:.'),
          p('C. Toán tử filetype:.          D. Toán tử loại trừ -.', { after: 180 }),

          p('PHẦN II. TRẮC NGHIỆM ĐÚNG/SAI (2,0 điểm)', { bold: true, size: 26, before: 120, after: 60 }),
          p('Thí sinh trả lời Câu 7 và Câu 8. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn Đúng hoặc Sai (mỗi ý đúng 0.25 điểm).', { italics: true, size: 22, after: 100 }),

          p('Câu 7: Đọc ngữ cảnh sau và cho biết các phát biểu bên dưới đúng hay sai?', { bold: true }),
          p('\"Phòng máy tính của nhà trường cài đặt hệ điều hành Windows quản lý bởi tài khoản Quản trị viên (Administrator). Các học sinh khi đăng nhập sử dụng máy tính được cấp tài khoản người dùng tiêu chuẩn (Standard User). Trong quá trình học tập, một học sinh gặp tình trạng phần mềm lập trình bị đơ, không phản hồi (Not Responding) và muốn sử dụng Task Manager để xử lý.\"', { italics: true }),
          p('a) Tài khoản Standard User có toàn quyền cài đặt phần mềm hệ thống và thay đổi các thiết lập bảo mật cốt lõi của máy tính giống như Administrator.'),
          p('b) Tài khoản Standard User giúp bảo vệ hệ thống tốt hơn bằng cách hạn chế người dùng thay đổi cấu hình hệ thống hoặc cài đặt các ứng dụng trái phép.'),
          p('c) Trình quản lý tác vụ (Task Manager) cho phép học sinh theo dõi mức độ sử dụng CPU và RAM của các ứng dụng đang chạy.'),
          p('d) Để xử lý ứng dụng bị treo (Not Responding), học sinh mở Task Manager, chọn tiến trình của ứng dụng đó và chọn tính năng End Task.', { after: 140 }),

          p('Câu 8: Đọc ngữ cảnh sau và cho biết các phát biểu bên dưới đúng hay sai?', { bold: true }),
          p('\"Một nhóm học sinh lớp 12 thực hiện dự án tìm kiếm các tài liệu nghiên cứu chuyên sâu về giao thức mạng an toàn trên Internet. Các em sử dụng công cụ tìm kiếm Google với các toán tử nâng cao để lọc kết quả từ các trang giáo dục có tên miền .edu.vn và định dạng tài liệu cụ thể.\"', { italics: true }),
          p('a) Sử dụng toán tử site:edu.vn giúp giới hạn kết quả tìm kiếm chỉ trong các trang web thuộc lĩnh vực giáo dục tại Việt Nam.'),
          p('b) Sử dụng toán tử filetype:pdf giúp tìm kiếm các tệp tài liệu có định dạng PDF phục vụ cho việc đọc và lưu trữ nghiên cứu.'),
          p('c) Toán tử loại trừ dấu trừ (-) dùng để thêm các từ khóa quan trọng nhằm mở rộng tối đa phạm vi tìm kiếm.'),
          p('d) Kết hợp các toán tử tìm kiếm nâng cao giúp học sinh thu hẹp phạm vi tìm kiếm, tiết kiệm thời gian và thu thập được nguồn thông tin chính xác hơn.', { after: 180 }),

          p('PHẦN III. TRẮC NGHIỆM TRẢ LỜI NGẮN (2,0 điểm)', { bold: true, size: 26, before: 120, after: 60 }),
          p('Thí sinh trả lời Câu 9 và Câu 10. Điền kết quả trả lời vào phiếu bài làm (mỗi câu 1.0 điểm).', { italics: true, size: 22, after: 100 }),

          p('Câu 9: Khi kết nối một máy in mới qua cổng USB, hệ điều hành lập tức nhận diện thiết bị và tự động cấu hình trình điều khiển để sử dụng mà không yêu cầu người dùng đĩa cài đặt thủ công. Công nghệ cắm và chạy tự động này thường được viết tắt bằng tiếng Anh gồm mấy chữ cái? (Nhập kết quả bằng số nguyên).', { bold: true, after: 120 }),

          p('Câu 10: Khi đánh giá một bài báo khoa học trực tuyến, người ta kiểm tra 5 tiêu chí cơ bản gồm: tính xác thực, tính cập nhật, tính khách quan, nguồn gốc (tác giả/tổ chức) và mục đích xuất bản. Theo lý thuyết về đánh giá thông tin tin cậy, tổng số tiêu chí cốt lõi cần xem xét là bao nhiêu? (Nhập kết quả bằng số nguyên).', { bold: true, after: 180 }),

          p('PHẦN IV. TỰ LUẬN (3,0 điểm)', { bold: true, size: 26, before: 120, after: 60 }),
          p('Câu 11 (1,5 điểm): Hãy nêu khái niệm hệ điều hành và trình bày hai vai trò chính của hệ điều hành trong việc quản lý thiết bị và cung cấp giao diện tương tác với người dùng.', { bold: true, after: 120 }),
          p('Câu 12 (1,5 điểm): Tại một phòng học, nhà trường cần thiết lập mạng LAN kết nối 20 máy tính và cho phép các thiết bị di động truy cập Wi-Fi đồng thời kết nối ra Internet. Hãy lựa chọn các thiết bị mạng thích hợp (trong số Switch, Router, Access Point, Modem) và mô tả sơ lược chức năng phối hợp của chúng để hệ thống hoạt động hiệu quả.', { bold: true, after: 250 }),

          p('-------------------------- HẾT --------------------------', { align: AlignmentType.CENTER, bold: true, size: 22, after: 300 }),

          // 4. ĐÁP ÁN VÀ HƯỚNG DẪN CHẤM
          p('ĐÁP ÁN VÀ HƯỚNG DẪN CHẤM ĐỀ KIỂM TRA GIỮA HỌC KÌ I', { align: AlignmentType.CENTER, bold: true, size: 28, before: 200, after: 60 }),
          p('MÔN: TIN HỌC - LỚP 12 (KNTT) • NĂM HỌC 2026 - 2027', { align: AlignmentType.CENTER, bold: true, size: 24, after: 150 }),

          p('PHẦN I. TRẮC NGHIỆM NHIỀU LỰA CHỌN (3,0 điểm - Mỗi câu 0.5 điểm)', { bold: true, size: 24, after: 60 }),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: tableBorderSingle,
            rows: [
              new TableRow({
                children: [
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Câu', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '1', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '2', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '3', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '4', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '5', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '6', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Đáp án', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'B', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'C', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'C', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'B', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'C', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'A', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Điểm', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '0.5', font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '0.5', font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '0.5', font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '0.5', font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '0.5', font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '0.5', font: 'Times New Roman', size: 22 })] })] }),
                ],
              }),
            ],
          }),

          p('PHẦN II. TRẮC NGHIỆM ĐÚNG/SAI (2,0 điểm - Mỗi ý 0.25 điểm)', { bold: true, size: 24, before: 140, after: 60 }),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: tableBorderSingle,
            rows: [
              new TableRow({
                children: [
                  new TableCell({ borders: tableBorderSingle, width: { size: 10, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Câu', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, width: { size: 10, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Ý', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, width: { size: 60, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Tóm tắt hướng dẫn giải', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, width: { size: 10, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Đáp án', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, width: { size: 10, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Điểm', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ borders: tableBorderSingle, rowSpan: 4, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '7', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'a', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ children: [new TextRun({ text: 'Standard User không có quyền quản trị tối cao như Administrator.', font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Sai', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '0.25', font: 'Times New Roman', size: 22 })] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'b', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ children: [new TextRun({ text: 'Tài khoản chuẩn hạn chế thay đổi trái phép giúp hệ thống an toàn hơn.', font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Đúng', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '0.25', font: 'Times New Roman', size: 22 })] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'c', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ children: [new TextRun({ text: 'Task Manager giám sát hiệu năng sử dụng tài nguyên phần cứng.', font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Đúng', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '0.25', font: 'Times New Roman', size: 22 })] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'd', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ children: [new TextRun({ text: 'Chọn tiến trình treo và bấm End Task là cách xử lý ứng dụng không phản hồi.', font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Đúng', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '0.25', font: 'Times New Roman', size: 22 })] })] }),
                ],
              }),

              new TableRow({
                children: [
                  new TableCell({ borders: tableBorderSingle, rowSpan: 4, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '8', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'a', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ children: [new TextRun({ text: 'Toán tử site: giúp giới hạn tìm kiếm trong một tên miền cụ thể.', font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Đúng', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '0.25', font: 'Times New Roman', size: 22 })] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'b', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ children: [new TextRun({ text: 'Toán tử filetype: lọc đúng định dạng tệp cần tìm (như pdf).', font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Đúng', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '0.25', font: 'Times New Roman', size: 22 })] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'c', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ children: [new TextRun({ text: 'Dấu trừ (-) là toán tử loại trừ từ khóa, không phải thêm từ khóa mở rộng.', font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Sai', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '0.25', font: 'Times New Roman', size: 22 })] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'd', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ children: [new TextRun({ text: 'Kết hợp toán tử giúp tối ưu hóa kết quả tìm kiếm thông tin chính xác.', font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Đúng', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '0.25', font: 'Times New Roman', size: 22 })] })] }),
                ],
              }),
            ],
          }),

          p('PHẦN III. TRẮC NGHIỆM TRẢ LỜI NGẮN (2,0 điểm - Mỗi câu 1.0 điểm)', { bold: true, size: 24, before: 140, after: 60 }),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: tableBorderSingle,
            rows: [
              new TableRow({
                children: [
                  new TableCell({ borders: tableBorderSingle, width: { size: 10, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Câu', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, width: { size: 70, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Hướng dẫn giải chi tiết', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, width: { size: 10, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Kết quả', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, width: { size: 10, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Điểm', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '9', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ children: [new TextRun({ text: 'Công nghệ cắm và chạy tự động cài đặt phần mềm điều khiển gọi là Plug and Play, viết tắt là PnP (gồm 3 chữ cái).', font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '3', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '1.0', font: 'Times New Roman', size: 22 })] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '10', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ children: [new TextRun({ text: 'Các tiêu chí đánh giá tính tin cậy của thông tin gồm: tính xác thực, tính cập nhật, tính khách quan, nguồn gốc và mục đích (tổng cộng 5 tiêu chí).', font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '5', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '1.0', font: 'Times New Roman', size: 22 })] })] }),
                ],
              }),
            ],
          }),

          p('PHẦN IV. TỰ LUẬN (3,0 điểm)', { bold: true, size: 24, before: 140, after: 60 }),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: tableBorderSingle,
            rows: [
              new TableRow({
                children: [
                  new TableCell({ borders: tableBorderSingle, width: { size: 10, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Câu', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, width: { size: 75, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Các bước làm bài / Tiêu chí đánh giá', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, width: { size: 15, type: WidthType.PERCENTAGE }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Điểm', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ borders: tableBorderSingle, rowSpan: 3, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '11\n(1.5đ)', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ children: [new TextRun({ text: '- Khái niệm hệ điều hành: Là chương trình hệ thống làm trung gian giữa người sử dụng và phần cứng máy tính, quản lý tài nguyên và cung cấp môi trường chạy ứng dụng.', font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '0.5 đ', font: 'Times New Roman', size: 22 })] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ children: [new TextRun({ text: '- Vai trò quản lý thiết bị: Điều phối và quản lý việc sử dụng CPU, RAM, thiết bị ngoại vi và lưu trữ.', font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '0.5 đ', font: 'Times New Roman', size: 22 })] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ children: [new TextRun({ text: '- Vai trò cung cấp giao diện: Giúp người dùng tương tác với máy tính thông qua giao diện dòng lệnh (CLI) hoặc giao diện đồ họa (GUI).', font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '0.5 đ', font: 'Times New Roman', size: 22 })] })] }),
                ],
              }),

              new TableRow({
                children: [
                  new TableCell({ borders: tableBorderSingle, rowSpan: 2, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '12\n(1.5đ)', bold: true, font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ children: [new TextRun({ text: '- Lựa chọn thiết bị: Sử dụng Switch (kết nối mạng LAN hữu tuyến), Router (kết nối Internet và định tuyến), Access Point (cung cấp Wi-Fi) và Modem (chuyển đổi tín hiệu đường truyền).', font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '0.5 đ', font: 'Times New Roman', size: 22 })] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ children: [new TextRun({ text: '- Mô tả phối hợp: Modem nhận tín hiệu nhà mạng chuyển đến Router; Router phân phối IP và định tuyến ra Internet; Switch kết nối dây cho 20 máy tính trong phòng; Access Point chuyển đổi tín hiệu thành sóng Wi-Fi cho thiết bị di động.', font: 'Times New Roman', size: 22 })] })] }),
                  new TableCell({ borders: tableBorderSingle, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '1.0 đ', font: 'Times New Roman', size: 22 })] })] }),
                ],
              }),
            ],
          }),

          p('', { after: 300 }),
          signatureTable,
        ],
      },
    ],
  });

  return doc;
};

const doc = createExamDocument();
Packer.toBuffer(doc).then((buffer) => {
  const desktopPath = 'D:/Desktop/MA_TRAN_BANG_DAC_TA_DE_KT_GIUA_KY_1_TIN_12_KNTT_CHUAN.docx';
  fs.writeFileSync(desktopPath, buffer);
  console.log('Saved to Desktop:', desktopPath);

  const publicDir = 'D:/Du-an-web/web-de-kiem-tra-tin-12-kntt/public';
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  const publicPath = `${publicDir}/MA_TRAN_BANG_DAC_TA_DE_KT_GIUA_KY_1_TIN_12_KNTT_CHUAN.docx`;
  fs.writeFileSync(publicPath, buffer);
  console.log('Saved to Public folder:', publicPath);
});
