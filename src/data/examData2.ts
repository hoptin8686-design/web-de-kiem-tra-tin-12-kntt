import { MatrixRow, SpecRow, MultipleChoiceQuestion, TrueFalseQuestion, ShortAnswerQuestion, EssayQuestion } from '../types';

export const examInfo2 = {
  province: 'SỞ GIÁO DỤC VÀ ĐÀO TẠO CAO BẰNG',
  school: 'TRƯỜNG THPT PHỤC HÒA',
  title: 'ĐỀ KIỂM TRA GIỮA HỌC KÌ I',
  subject: 'TIN HỌC 12',
  textbook: 'KẾT NỐI TRI THỨC VỚI CUỘC SỐNG',
  academicYear: '2026 - 2027',
  duration: '45 phút (không kể thời gian phát đề)',
  examDate: 'Ngày 24 tháng 9 năm 2026',
  totalPoints: '10.0 điểm',
  ratio: 'Nhận biết 40% (4.0đ) • Thông hiểu 30% (3.0đ) • Vận dụng 30% (3.0đ)',
  examCode: 'ĐỀ SỐ 2',
};

export const matrixData2: MatrixRow[] = [
  {
    tt: '1',
    chuDe: 'CHƯƠNG I. MÁY TÍNH VÀ XÃ HỘI TRI THỨC',
    noiDung: 'Bài 1. Hệ điều hành và phần mềm ứng dụng',
    tnkqNlc: { biet: '1 (C1)', hieu: '', vd: '' },
    tnkqDs: { biet: '', hieu: '', vd: '' },
    tnkqNgan: { biet: '', hieu: '', vd: '' },
    tuLuan: { biet: '1 (C1) - 1.5đ', hieu: '', vd: '' },
    tong: { biet: '2', hieu: '', vd: '' },
    tiLe: '20%',
  },
  {
    tt: '2',
    chuDe: 'CHƯƠNG I. MÁY TÍNH VÀ XÃ HỘI TRI THỨC',
    noiDung: 'Bài 2. Thực hành sử dụng hệ điều hành',
    tnkqNlc: { biet: '', hieu: '1 (C2)', vd: '' },
    tnkqDs: { biet: '', hieu: '4 ý (C1)', vd: '' },
    tnkqNgan: { biet: '', hieu: '', vd: '' },
    tuLuan: { biet: '', hieu: '', vd: '' },
    tong: { biet: '', hieu: '5', vd: '' },
    tiLe: '15%',
  },
  {
    tt: '3',
    chuDe: 'CHƯƠNG II. MẠNG MÁY TÍNH VÀ INTERNET',
    noiDung: 'Bài 3. Thiết bị mạng và giao thức mạng',
    tnkqNlc: { biet: '1 (C3)', hieu: '', vd: '' },
    tnkqDs: { biet: '', hieu: '', vd: '' },
    tnkqNgan: { biet: '', hieu: '', vd: '' },
    tuLuan: { biet: '', hieu: '', vd: '1 (C2) - 1.5đ' },
    tong: { biet: '1', hieu: '', vd: '1' },
    tiLe: '20%',
  },
  {
    tt: '4',
    chuDe: 'CHƯƠNG II. MẠNG MÁY TÍNH VÀ INTERNET',
    noiDung: 'Bài 4. Thực hành kết nối thiết bị số với máy tính',
    tnkqNlc: { biet: '', hieu: '', vd: '1 (C4)' },
    tnkqDs: { biet: '', hieu: '', vd: '' },
    tnkqNgan: { biet: '', hieu: '1 (C1)', vd: '' },
    tuLuan: { biet: '', hieu: '', vd: '' },
    tong: { biet: '', hieu: '1', vd: '1' },
    tiLe: '15%',
  },
  {
    tt: '5',
    chuDe: 'CHƯƠNG III. ĐẠO ĐỨC, PHÁP LUẬT VÀ VĂN HOÁ',
    noiDung: 'Bài 5. Khái niệm và một số đặc điểm của thông tin tin cậy',
    tnkqNlc: { biet: '1 (C5)', hieu: '', vd: '' },
    tnkqDs: { biet: '', hieu: '', vd: '' },
    tnkqNgan: { biet: '', hieu: '', vd: '1 (C2)' },
    tuLuan: { biet: '', hieu: '', vd: '' },
    tong: { biet: '1', hieu: '', vd: '1' },
    tiLe: '15%',
  },
  {
    tt: '6',
    chuDe: 'CHƯƠNG III. ĐẠO ĐỨC, PHÁP LUẬT VÀ VĂN HOÁ',
    noiDung: 'Bài 6. Thực hành khai thác nguồn thông tin tin cậy',
    tnkqNlc: { biet: '', hieu: '1 (C6)', vd: '' },
    tnkqDs: { biet: '', hieu: '', vd: '4 ý (C2)' },
    tnkqNgan: { biet: '', hieu: '', vd: '' },
    tuLuan: { biet: '', hieu: '', vd: '' },
    tong: { biet: '', hieu: '4', vd: '1' },
    tiLe: '15%',
  },
];

export const specData2: SpecRow[] = [
  {
    tt: '1',
    chuDe: 'CHƯƠNG I. MÁY TÍNH VÀ XÃ HỘI TRI THỨC',
    noiDung: 'Bài 1. Hệ điều hành và phần mềm ứng dụng',
    yccđ: [
      {
        level: 'Biết',
        content: 'Nhận biết được sự khác biệt giữa hệ điều hành và phần mềm ứng dụng. Kể tên được các hệ điều hành phổ biến cho máy tính để bàn và laptop. Phân biệt được giao diện dòng lệnh (CLI) và giao diện đồ họa (GUI).',
        competence: 'NLa',
      },
    ],
    cauHoi: {
      nlc: { biet: '1 (C1)' },
      ds: {},
      ngan: {},
      tuLuan: { biet: '1 (C1) - 1.5đ' },
    },
  },
  {
    tt: '2',
    chuDe: 'CHƯƠNG I. MÁY TÍNH VÀ XÃ HỘI TRI THỨC',
    noiDung: 'Bài 2. Thực hành sử dụng hệ điều hành',
    yccđ: [
      {
        level: 'Hiểu',
        content: 'Giải thích được cách phân vùng ổ đĩa và vai trò của File Explorer trong việc quản lý tệp. Giải thích được sự khác nhau giữa đặt lịch tắt máy tự động và chế độ ngủ đông (Hibernate) của Windows.',
        competence: 'NLa',
      },
    ],
    cauHoi: {
      nlc: { hieu: '1 (C2)' },
      ds: { hieu: '4 ý (C1a, b, c, d)' },
      ngan: {},
      tuLuan: {},
    },
  },
  {
    tt: '3',
    chuDe: 'CHƯƠNG II. MẠNG MÁY TÍNH VÀ INTERNET',
    noiDung: 'Bài 3. Thiết bị mạng và giao thức mạng',
    yccđ: [
      {
        level: 'Biết',
        content: 'Phân biệt được mạng LAN, MAN và WAN theo phạm vi địa lý. Nhận biết được vai trò của bộ giao thức TCP/IP trong truyền thông mạng. Nêu được sự khác biệt cơ bản giữa địa chỉ IPv4 và IPv6 về định dạng.',
        competence: 'NLa',
      },
      {
        level: 'Vận dụng',
        content: 'Xác định được thiết bị mạng nào phù hợp trong từng tình huống kết nối cụ thể. Lý giải được lý do IPv6 ra đời để thay thế IPv4.',
        competence: 'NLa',
      },
    ],
    cauHoi: {
      nlc: { biet: '1 (C3)' },
      ds: {},
      ngan: {},
      tuLuan: { vd: '1 (C2) - 1.5đ' },
    },
  },
  {
    tt: '4',
    chuDe: 'CHƯƠNG II. MẠNG MÁY TÍNH VÀ INTERNET',
    noiDung: 'Bài 4. Thực hành kết nối thiết bị số với máy tính',
    yccđ: [
      {
        level: 'Hiểu',
        content: 'So sánh tốc độ và ứng dụng phù hợp của các chuẩn kết nối có dây USB 2.0, USB 3.0, USB-C. Giải thích được nguyên lý hoạt động của công nghệ Bluetooth khi ghép nối lần đầu (pairing).',
        competence: 'NLa',
      },
      {
        level: 'Vận dụng',
        content: 'Lựa chọn đúng chuẩn kết nối phù hợp cho từng nhu cầu cụ thể (truyền file lớn, kết nối tai nghe không dây, hiển thị lên màn hình ngoài).',
        competence: 'NLa',
      },
    ],
    cauHoi: {
      nlc: { vd: '1 (C4)' },
      ds: {},
      ngan: { hieu: '1 (C1)' },
      tuLuan: {},
    },
  },
  {
    tt: '5',
    chuDe: 'CHƯƠNG III. ĐẠO ĐỨC, PHÁP LUẬT VÀ VĂN HOÁ',
    noiDung: 'Bài 5. Khái niệm và một số đặc điểm của thông tin tin cậy',
    yccđ: [
      {
        level: 'Biết',
        content: 'Nêu được các dấu hiệu nhận biết thông tin không tin cậy (fake news, thông tin thất thiệt). Liệt kê được các loại nguồn thông tin có độ tin cậy cao như tạp chí khoa học, trang .gov, .edu.',
        competence: 'NLb; NLe',
      },
      {
        level: 'Vận dụng',
        content: 'Phân tích và đưa ra nhận định về mức độ tin cậy của một bài đăng mạng xã hội dựa trên các tiêu chí đã học.',
        competence: 'NLb; NLe',
      },
    ],
    cauHoi: {
      nlc: { biet: '1 (C5)' },
      ds: {},
      ngan: { vd: '1 (C2)' },
      tuLuan: {},
    },
  },
  {
    tt: '6',
    chuDe: 'CHƯƠNG III. ĐẠO ĐỨC, PHÁP LUẬT VÀ VĂN HOÁ',
    noiDung: 'Bài 6. Thực hành khai thác nguồn thông tin tin cậy',
    yccđ: [
      {
        level: 'Hiểu',
        content: 'Giải thích được cách hoạt động của toán tử OR và dấu ngoặc kép khi tìm kiếm nâng cao. Phân biệt được kết quả tìm kiếm khi có và không có toán tử nâng cao.',
        competence: 'NLb; NLe',
      },
    ],
    cauHoi: {
      nlc: { hieu: '1 (C6)' },
      ds: { vd: '4 ý (C2a, b, c, d)' },
      ngan: {},
      tuLuan: {},
    },
  },
];

export const multipleChoiceQuestions2: MultipleChoiceQuestion[] = [
  {
    id: 1,
    question: 'Đâu là sự khác biệt cơ bản nhất giữa phần mềm ứng dụng và hệ điều hành?',
    options: [
      { label: 'A', text: 'Phần mềm ứng dụng được cài đặt bởi nhà sản xuất máy tính, còn hệ điều hành do người dùng tự cài.' },
      { label: 'B', text: 'Hệ điều hành quản lý phần cứng và cung cấp nền tảng cho các phần mềm ứng dụng chạy; phần mềm ứng dụng phục vụ nhu cầu cụ thể của người dùng.' },
      { label: 'C', text: 'Phần mềm ứng dụng chỉ có thể chạy trên một hệ điều hành duy nhất.' },
      { label: 'D', text: 'Hệ điều hành chỉ hoạt động khi có kết nối mạng Internet, phần mềm ứng dụng hoạt động ngoại tuyến.' },
    ],
    correctAnswer: 'B',
    explanation: 'Hệ điều hành là lớp phần mềm hệ thống quản lý phần cứng, tài nguyên và là môi trường để phần mềm ứng dụng hoạt động. Phần mềm ứng dụng phục vụ các nhiệm vụ cụ thể của người dùng như soạn thảo, tính toán, nghe nhạc...',
    level: 'Nhận biết',
    lesson: 'Bài 1. Hệ điều hành và phần mềm ứng dụng',
  },
  {
    id: 2,
    question: 'Chức năng nào của File Explorer trong Windows giúp người dùng quản lý tệp và thư mục hiệu quả nhất?',
    options: [
      { label: 'A', text: 'Theo dõi mức sử dụng CPU và RAM theo thời gian thực.' },
      { label: 'B', text: 'Duyệt, sao chép, di chuyển, đổi tên và xóa tệp, thư mục trên các ổ đĩa của hệ thống.' },
      { label: 'C', text: 'Cấu hình địa chỉ IP tĩnh cho máy tính trong mạng LAN.' },
      { label: 'D', text: 'Quản lý các tài khoản người dùng và phân quyền truy cập hệ thống.' },
    ],
    correctAnswer: 'B',
    explanation: 'File Explorer (Windows Explorer) là ứng dụng quản lý tệp tích hợp trong Windows, cho phép người dùng duyệt cây thư mục, sao chép, cắt dán, đổi tên, xóa tệp/thư mục và truy cập các ổ đĩa.',
    level: 'Thông hiểu',
    lesson: 'Bài 2. Thực hành sử dụng hệ điều hành',
  },
  {
    id: 3,
    question: 'Địa chỉ IPv6 có độ dài bao nhiêu bit và được biểu diễn theo định dạng nào?',
    options: [
      { label: 'A', text: '32 bit, biểu diễn dạng thập phân phân cách bởi dấu chấm (ví dụ: 192.168.1.1).' },
      { label: 'B', text: '64 bit, biểu diễn dạng thập lục phân phân cách bởi dấu gạch ngang.' },
      { label: 'C', text: '128 bit, biểu diễn dạng thập lục phân phân cách bởi dấu hai chấm (ví dụ: 2001:0db8::1).' },
      { label: 'D', text: '256 bit, biểu diễn dạng nhị phân thuần túy.' },
    ],
    correctAnswer: 'C',
    explanation: 'IPv6 sử dụng 128 bit (16 bytes) và được viết dưới dạng 8 nhóm 4 chữ số thập lục phân, phân cách bởi dấu hai chấm (:), ví dụ: 2001:0db8:85a3:0000:0000:8a2e:0370:7334.',
    level: 'Nhận biết',
    lesson: 'Bài 3. Thiết bị mạng và giao thức mạng',
  },
  {
    id: 4,
    question: 'Khi cần trình chiếu bài giảng từ máy tính lên máy chiếu trong phòng học mà không có kết nối Wi-Fi, phương thức kết nối nào dưới đây là tốt nhất?',
    options: [
      { label: 'A', text: 'Kết nối qua Bluetooth để truyền tín hiệu hình ảnh không dây.' },
      { label: 'B', text: 'Sử dụng cáp HDMI hoặc VGA để kết nối có dây, đảm bảo tín hiệu ổn định, không bị trễ.' },
      { label: 'C', text: 'Kết nối qua cổng USB Type-A để xuất tín hiệu hình ảnh.' },
      { label: 'D', text: 'Dùng thẻ nhớ SD để sao chép file và phát trực tiếp từ máy chiếu.' },
    ],
    correctAnswer: 'B',
    explanation: 'Cáp HDMI (truyền tín hiệu số âm thanh và hình ảnh chất lượng cao) hoặc VGA (tín hiệu analog hình ảnh) là phương thức kết nối có dây phổ biến và ổn định nhất cho việc hiển thị từ máy tính ra màn hình chiếu/máy chiếu trong lớp học.',
    level: 'Vận dụng',
    lesson: 'Bài 4. Thực hành kết nối thiết bị số với máy tính',
  },
  {
    id: 5,
    question: 'Dấu hiệu nào sau đây thường cho thấy một bài đăng trên mạng xã hội là thông tin KHÔNG đáng tin cậy?',
    options: [
      { label: 'A', text: 'Bài viết được chia sẻ từ trang web chính phủ (.gov.vn) và có ngày đăng rõ ràng.' },
      { label: 'B', text: 'Bài viết có tiêu đề giật gân, cảm xúc cực đoan, thiếu tên tác giả và không dẫn nguồn cụ thể.' },
      { label: 'C', text: 'Bài viết được đăng tải bởi tạp chí khoa học quốc tế có chỉ số ISI/Scopus.' },
      { label: 'D', text: 'Bài viết trích dẫn số liệu thống kê từ Tổng cục Thống kê Việt Nam.' },
    ],
    correctAnswer: 'B',
    explanation: 'Thông tin không đáng tin cậy thường có tiêu đề giật gân để thu hút cảm xúc, thiếu thông tin tác giả, không có nguồn trích dẫn kiểm chứng được, và nội dung mang tính phiến diện hoặc cực đoan.',
    level: 'Nhận biết',
    lesson: 'Bài 5. Khái niệm và một số đặc điểm của thông tin tin cậy',
  },
  {
    id: 6,
    question: 'Toán tử tìm kiếm "OR" trong Google Search có tác dụng gì?',
    options: [
      { label: 'A', text: 'Loại bỏ một từ khóa cụ thể khỏi kết quả tìm kiếm.' },
      { label: 'B', text: 'Tìm kiếm chính xác một cụm từ theo đúng thứ tự.' },
      { label: 'C', text: 'Tìm kiếm kết quả chứa ít nhất một trong các từ khóa được chỉ định.' },
      { label: 'D', text: 'Giới hạn kết quả tìm kiếm trong một tên miền cụ thể.' },
    ],
    correctAnswer: 'C',
    explanation: 'Toán tử OR (hoặc |) trong tìm kiếm Google cho phép tìm kiếm các trang chứa từ khóa A hoặc từ khóa B. Ví dụ: "mạng LAN OR mạng WAN" sẽ trả về kết quả có chứa một trong hai hoặc cả hai từ khóa.',
    level: 'Thông hiểu',
    lesson: 'Bài 6. Thực hành khai thác nguồn thông tin tin cậy',
  },
];

export const trueFalseQuestions2: TrueFalseQuestion[] = [
  {
    id: 7,
    context: 'Trường học cài đặt hệ điều hành Windows 11 trên tất cả máy tính phòng thực hành. Giáo viên tin học muốn hướng dẫn học sinh biết phân biệt và sử dụng hai chế độ tiết kiệm năng lượng: Sleep (ngủ) và Hibernate (ngủ đông), đồng thời giải thích tầm quan trọng của việc quản lý tệp hệ thống đúng cách.',
    items: [
      {
        id: 'a',
        statement: 'Chế độ Sleep (Ngủ) giữ toàn bộ dữ liệu phiên làm việc trong RAM và tiêu thụ một lượng nhỏ điện năng để duy trì.',
        isCorrect: true,
        explanation: 'Đúng. Chế độ Sleep lưu trạng thái phiên làm việc vào RAM, máy tính vẫn dùng một lượng điện nhỏ và khởi động lại rất nhanh (chỉ vài giây).',
      },
      {
        id: 'b',
        statement: 'Chế độ Hibernate (Ngủ đông) lưu toàn bộ nội dung RAM vào ổ cứng và tắt hoàn toàn nguồn điện, giúp tiết kiệm pin tối đa.',
        isCorrect: true,
        explanation: 'Đúng. Hibernate ghi toàn bộ nội dung RAM vào file hiberfil.sys trên ổ đĩa rồi tắt nguồn hoàn toàn, phù hợp khi không dùng máy trong thời gian dài.',
      },
      {
        id: 'c',
        statement: 'Khi máy tính ở chế độ Sleep, tắt nguồn điện đột ngột sẽ không gây mất dữ liệu vì dữ liệu đã được sao lưu vào ổ cứng.',
        isCorrect: false,
        explanation: 'Sai. Ở chế độ Sleep, dữ liệu vẫn nằm trong RAM. Nếu mất điện đột ngột, toàn bộ dữ liệu chưa lưu sẽ bị mất vì RAM là bộ nhớ không bền vững (volatile).',
      },
      {
        id: 'd',
        statement: 'File Explorer trong Windows cho phép người dùng xem, sắp xếp và di chuyển các tệp giữa các thư mục trên ổ cứng.',
        isCorrect: true,
        explanation: 'Đúng. File Explorer là trình quản lý tệp của Windows, hỗ trợ duyệt cây thư mục, sao chép, cắt/dán, đổi tên và xóa tệp/thư mục.',
      },
    ],
    level: 'Thông hiểu (Bài 2)',
    lesson: 'Bài 2. Thực hành sử dụng hệ điều hành',
  },
  {
    id: 8,
    context: 'Học sinh lớp 12 tìm hiểu về thông tin tin cậy và cách khai thác nguồn tài liệu học tập chất lượng trên Internet. Các em đã được học về các tiêu chí đánh giá thông tin và các toán tử tìm kiếm nâng cao để tìm tài liệu từ các nguồn uy tín phục vụ bài tập nghiên cứu.',
    items: [
      {
        id: 'a',
        statement: 'Một bài viết được đăng trên blog cá nhân không có tên tác giả và không có ngày đăng cụ thể được coi là nguồn thông tin có độ tin cậy cao.',
        isCorrect: false,
        explanation: 'Sai. Thiếu thông tin tác giả và ngày đăng là dấu hiệu của thông tin không đáng tin cậy vì không thể xác minh nguồn gốc và tính cập nhật của thông tin.',
      },
      {
        id: 'b',
        statement: 'Câu lệnh tìm kiếm: "biến đổi khí hậu" site:edu.vn filetype:pdf sẽ tìm kiếm tài liệu PDF về biến đổi khí hậu từ các trang giáo dục Việt Nam.',
        isCorrect: true,
        explanation: 'Đúng. Câu lệnh kết hợp dấu ngoặc kép (cụm từ chính xác), site:edu.vn (giới hạn tên miền) và filetype:pdf (lọc định dạng tệp) sẽ cho kết quả rất chính xác.',
      },
      {
        id: 'c',
        statement: 'Tính cập nhật (Currency) của thông tin chỉ quan trọng đối với tin tức thời sự, không cần thiết cho các bài viết khoa học kỹ thuật.',
        isCorrect: false,
        explanation: 'Sai. Tính cập nhật quan trọng với mọi lĩnh vực. Trong khoa học kỹ thuật, nghiên cứu mới thường thay thế hoặc bổ sung cho kết quả cũ, nên ngày xuất bản vẫn là tiêu chí đánh giá quan trọng.',
      },
      {
        id: 'd',
        statement: 'Toán tử filetype:pptx có thể dùng để tìm bài trình chiếu PowerPoint về một chủ đề học tập cụ thể trên Internet.',
        isCorrect: true,
        explanation: 'Đúng. Toán tử filetype: hỗ trợ nhiều định dạng file, trong đó filetype:pptx sẽ lọc kết quả là các file trình chiếu PowerPoint (.pptx).',
      },
    ],
    level: 'Vận dụng (Bài 5, 6)',
    lesson: 'Bài 5. Khái niệm và một số đặc điểm của thông tin tin cậy',
  },
];

export const shortAnswerQuestions2: ShortAnswerQuestion[] = [
  {
    id: 9,
    question: 'Trong Windows, phím tắt nào giúp mở nhanh trình quản lý tác vụ Task Manager mà không cần bấm Ctrl + Alt + Delete? Nhập chính xác 2 phím bấm cùng lúc (phân cách bởi dấu cộng, ví dụ: Ctrl+Alt).',
    correctAnswer: 'Ctrl+Shift+Esc',
    explanation: 'Phím tắt Ctrl + Shift + Esc mở trực tiếp Task Manager mà không qua màn hình khóa. Đây là cách nhanh nhất để mở Task Manager theo SGK Tin học 12 KNTT Bài 2.',
    points: 1.0,
    level: 'Thông hiểu (Bài 2)',
    lesson: 'Bài 2. Thực hành sử dụng hệ điều hành',
  },
  {
    id: 10,
    question: 'Địa chỉ IPv4 gồm bao nhiêu bit? Nhập kết quả bằng số nguyên.',
    correctAnswer: '32',
    explanation: 'Địa chỉ IPv4 có độ dài 32 bit, được chia thành 4 nhóm 8 bit (octet), mỗi nhóm biểu diễn một số thập phân từ 0–255, ví dụ: 192.168.1.100. Tổng số địa chỉ IPv4 là 2³² ≈ 4.3 tỷ địa chỉ.',
    points: 1.0,
    level: 'Nhận biết (Bài 3)',
    lesson: 'Bài 3. Thiết bị mạng và giao thức mạng',
  },
];

export const essayQuestions2: EssayQuestion[] = [
  {
    id: 11,
    question: 'Hãy nêu sự khác biệt giữa giao diện dòng lệnh (CLI) và giao diện đồ họa (GUI). Cho ví dụ cụ thể về một hệ điều hành sử dụng mỗi loại giao diện và nêu ưu điểm của giao diện đồ họa với người dùng phổ thông.',
    points: 1.5,
    criteria: [
      {
        step: 'Phân biệt CLI và GUI',
        detail: 'CLI (Command Line Interface) là giao diện dòng lệnh, người dùng nhập lệnh văn bản để điều khiển máy tính (ví dụ: Terminal trên Linux/macOS, Command Prompt trên Windows). GUI (Graphical User Interface) là giao diện đồ họa sử dụng cửa sổ, biểu tượng, menu và chuột để thao tác (ví dụ: Windows 11, macOS Ventura).',
        points: 0.75,
      },
      {
        step: 'Ưu điểm của GUI với người dùng phổ thông',
        detail: 'GUI trực quan, dễ học và dễ dùng ngay cả với người không có kiến thức kỹ thuật sâu. Người dùng có thể thực hiện thao tác kéo thả, nhấp chuột vào biểu tượng thay vì phải nhớ câu lệnh. GUI giảm thiểu lỗi nhập sai cú pháp và cho phép đa nhiệm trực quan qua nhiều cửa sổ mở cùng lúc.',
        points: 0.75,
      },
    ],
    level: 'Nhận biết (Bài 1)',
    lesson: 'Bài 1. Hệ điều hành và phần mềm ứng dụng',
  },
  {
    id: 12,
    question: 'Giải thích vì sao IPv6 ra đời để thay thế IPv4. Nêu ít nhất hai ưu điểm nổi bật của IPv6 so với IPv4.',
    points: 1.5,
    criteria: [
      {
        step: 'Lý do IPv6 ra đời',
        detail: 'IPv4 chỉ có 32 bit nên tổng số địa chỉ tối đa là khoảng 4.3 tỷ địa chỉ. Với sự bùng nổ của thiết bị kết nối Internet (điện thoại, IoT, máy chủ...), không gian địa chỉ IPv4 đã gần cạn kiệt, dẫn đến nhu cầu cấp thiết cần một giao thức địa chỉ mới với không gian lớn hơn.',
        points: 0.75,
      },
      {
        step: 'Ưu điểm của IPv6',
        detail: '1. Không gian địa chỉ khổng lồ: IPv6 có 128 bit, cung cấp 2¹²⁸ ≈ 3.4 × 10³⁸ địa chỉ, đủ cho mọi thiết bị trên Trái Đất trong tương lai xa.\n2. Bảo mật tích hợp: IPv6 hỗ trợ IPSec (mã hóa và xác thực) ngay ở tầng giao thức mạng, cải thiện bảo mật đầu cuối.\n3. Cấu hình tự động: IPv6 hỗ trợ tự cấu hình địa chỉ (SLAAC) mà không cần máy chủ DHCP riêng biệt.',
        points: 0.75,
      },
    ],
    level: 'Vận dụng (Bài 3)',
    lesson: 'Bài 3. Thiết bị mạng và giao thức mạng',
  },
];
