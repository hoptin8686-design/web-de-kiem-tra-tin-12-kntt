import { MatrixRow, SpecRow, MultipleChoiceQuestion, TrueFalseQuestion, ShortAnswerQuestion, EssayQuestion } from '../types';

export const examInfo3 = {
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
  examCode: 'ĐỀ SỐ 3',
};

export const matrixData3: MatrixRow[] = [
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

export const specData3: SpecRow[] = [
  {
    tt: '1',
    chuDe: 'CHƯƠNG I. MÁY TÍNH VÀ XÃ HỘI TRI THỨC',
    noiDung: 'Bài 1. Hệ điều hành và phần mềm ứng dụng',
    yccđ: [
      {
        level: 'Biết',
        content: 'Kể tên và phân loại được các phần mềm ứng dụng theo nhóm chức năng: xử lý văn bản, bảng tính, trình chiếu, phần mềm đồ họa, phần mềm học tập. Nhận biết được hệ điều hành cho thiết bị di động phổ biến.',
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
        content: 'Giải thích được cơ chế hoạt động của Recycle Bin và cách khôi phục tệp đã xóa. Mô tả được quy trình tạo tài khoản người dùng mới và phân quyền trong Windows.',
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
        content: 'Nêu được vai trò của Modem trong việc kết nối mạng gia đình ra Internet. Phân biệt được Switch và Hub về nguyên lý hoạt động. Nhận biết được khái niệm DNS và DHCP.',
        competence: 'NLa',
      },
      {
        level: 'Vận dụng',
        content: 'Thiết kế được sơ đồ kết nối mạng LAN cơ bản cho văn phòng nhỏ có 10 máy tính và 1 máy in mạng.',
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
        content: 'Giải thích được sự khác nhau giữa Wi-Fi Direct và Bluetooth khi chia sẻ file không dây. Mô tả được các bước kết nối ổ cứng ngoài qua USB và an toàn tháo thiết bị.',
        competence: 'NLa',
      },
      {
        level: 'Vận dụng',
        content: 'Giải quyết được tình huống thực tế: kết nối máy tính bảng với máy tính để sao lưu dữ liệu an toàn.',
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
        content: 'Phân biệt được tin tức thật (news) và tin tức giả (fake news). Nêu được tác hại của việc lan truyền thông tin sai lệch trên mạng xã hội.',
        competence: 'NLb; NLe',
      },
      {
        level: 'Vận dụng',
        content: 'Vận dụng các tiêu chí tin cậy để đánh giá một bài viết cụ thể và quyết định có nên chia sẻ không.',
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
        content: 'Xây dựng được câu lệnh tìm kiếm nâng cao kết hợp nhiều toán tử để tìm tài liệu học tập chuyên sâu. Giải thích được sự khác nhau giữa kết quả tìm kiếm thông thường và tìm kiếm nâng cao.',
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

export const multipleChoiceQuestions3: MultipleChoiceQuestion[] = [
  {
    id: 1,
    question: 'Hệ điều hành nào sau đây được thiết kế chuyên biệt cho thiết bị di động (điện thoại thông minh và máy tính bảng)?',
    options: [
      { label: 'A', text: 'Windows 11 và macOS Ventura.' },
      { label: 'B', text: 'Ubuntu Linux và Fedora.' },
      { label: 'C', text: 'Android và iOS.' },
      { label: 'D', text: 'Chrome OS và Windows Server.' },
    ],
    correctAnswer: 'C',
    explanation: 'Android (do Google phát triển dựa trên Linux kernel) và iOS (do Apple phát triển) là hai hệ điều hành di động phổ biến nhất thế giới, được thiết kế tối ưu cho màn hình cảm ứng và pin di động.',
    level: 'Nhận biết',
    lesson: 'Bài 1. Hệ điều hành và phần mềm ứng dụng',
  },
  {
    id: 2,
    question: 'Khi xóa một tệp vào Recycle Bin (Thùng rác) trong Windows, điều gì xảy ra với tệp đó?',
    options: [
      { label: 'A', text: 'Tệp bị xóa hoàn toàn khỏi ổ cứng và không thể khôi phục.' },
      { label: 'B', text: 'Tệp được nén lại và di chuyển vào Recycle Bin, vẫn chiếm dung lượng ổ đĩa và có thể khôi phục.' },
      { label: 'C', text: 'Tệp được sao lưu tự động lên đám mây trước khi xóa.' },
      { label: 'D', text: 'Tệp được mã hóa và chuyển sang ổ đĩa khác trong hệ thống.' },
    ],
    correctAnswer: 'B',
    explanation: 'Recycle Bin là vùng lưu trữ tạm cho tệp bị xóa. Tệp xóa vào Recycle Bin vẫn còn trên ổ đĩa (vẫn chiếm dung lượng) và có thể Restore (khôi phục) dễ dàng. Chỉ khi "Empty Recycle Bin" mới xóa thực sự.',
    level: 'Thông hiểu',
    lesson: 'Bài 2. Thực hành sử dụng hệ điều hành',
  },
  {
    id: 3,
    question: 'Dịch vụ DHCP trong mạng máy tính có chức năng gì?',
    options: [
      { label: 'A', text: 'Chuyển đổi tên miền (domain name) thành địa chỉ IP tương ứng.' },
      { label: 'B', text: 'Tự động cấp phát địa chỉ IP cho các thiết bị khi chúng kết nối vào mạng.' },
      { label: 'C', text: 'Mã hóa dữ liệu truyền qua mạng để bảo vệ thông tin cá nhân.' },
      { label: 'D', text: 'Định tuyến gói tin từ mạng nội bộ ra mạng Internet toàn cầu.' },
    ],
    correctAnswer: 'B',
    explanation: 'DHCP (Dynamic Host Configuration Protocol) là giao thức tự động cấp phát địa chỉ IP, subnet mask, gateway và DNS server cho các thiết bị kết nối mạng, giúp quản lý mạng không cần cấu hình IP thủ công cho từng thiết bị.',
    level: 'Nhận biết',
    lesson: 'Bài 3. Thiết bị mạng và giao thức mạng',
  },
  {
    id: 4,
    question: 'Sau khi sử dụng ổ cứng di động (USB/HDD ngoài), hành động nào đúng để bảo vệ dữ liệu trước khi rút thiết bị?',
    options: [
      { label: 'A', text: 'Rút thiết bị trực tiếp bất cứ lúc nào vì Windows tự động lưu dữ liệu.' },
      { label: 'B', text: 'Nhấn Ctrl + S để lưu tất cả các file đang mở rồi rút thiết bị.' },
      { label: 'C', text: 'Sử dụng tính năng "Safely Remove Hardware" (Tháo thiết bị an toàn) để hệ thống hoàn tất ghi dữ liệu trước khi rút.' },
      { label: 'D', text: 'Khởi động lại máy tính trước khi rút thiết bị để đảm bảo an toàn.' },
    ],
    correctAnswer: 'C',
    explanation: 'Tính năng "Safely Remove Hardware" đảm bảo hệ thống đã hoàn tất tất cả thao tác đọc/ghi vào thiết bị lưu trữ trước khi cho phép rút, tránh mất dữ liệu hoặc hỏng file system do ngắt kết nối đột ngột.',
    level: 'Vận dụng',
    lesson: 'Bài 4. Thực hành kết nối thiết bị số với máy tính',
  },
  {
    id: 5,
    question: 'Một bài viết có đủ đặc điểm nào sau đây được đánh giá là thông tin CÓ ĐỘ TIN CẬY CAO?',
    options: [
      { label: 'A', text: 'Được chia sẻ nhiều lần trên mạng xã hội và nhận nhiều lượt thích (like).' },
      { label: 'B', text: 'Có tên tác giả rõ ràng, trích dẫn nguồn uy tín, được đăng trên tạp chí khoa học có phản biện.' },
      { label: 'C', text: 'Viết bằng ngôn ngữ học thuật khó hiểu và nhiều thuật ngữ chuyên sâu.' },
      { label: 'D', text: 'Được đăng lần đầu tiên và chưa ai phủ nhận hoặc phản bác.' },
    ],
    correctAnswer: 'B',
    explanation: 'Thông tin tin cậy cần có tác giả xác định được, nguồn trích dẫn rõ ràng từ nguồn uy tín, và qua quy trình phản biện khoa học (peer review) để đảm bảo tính chính xác và khách quan.',
    level: 'Nhận biết',
    lesson: 'Bài 5. Khái niệm và một số đặc điểm của thông tin tin cậy',
  },
  {
    id: 6,
    question: 'Câu lệnh tìm kiếm nào sau đây sẽ tìm tài liệu PDF về "an toàn thông tin" từ các trang web chính phủ Việt Nam (.gov.vn)?',
    options: [
      { label: 'A', text: 'an toàn thông tin -filetype:pdf -site:gov.vn' },
      { label: 'B', text: '"an toàn thông tin" site:gov.vn filetype:pdf' },
      { label: 'C', text: 'an toàn thông tin OR site:gov.vn filetype:pdf' },
      { label: 'D', text: 'filetype:pdf OR "an toàn thông tin" site:gov.vn' },
    ],
    correctAnswer: 'B',
    explanation: 'Câu lệnh đúng cần: dấu ngoặc kép để tìm cụm từ chính xác "an toàn thông tin", toán tử site:gov.vn để giới hạn trong tên miền chính phủ VN, và filetype:pdf để chỉ lấy tài liệu PDF. Ba toán tử này kết hợp cùng nhau.',
    level: 'Thông hiểu',
    lesson: 'Bài 6. Thực hành khai thác nguồn thông tin tin cậy',
  },
];

export const trueFalseQuestions3: TrueFalseQuestion[] = [
  {
    id: 7,
    context: 'Một gia đình có 3 thành viên dùng chung một máy tính Windows. Bố là quản trị viên (Administrator), mẹ và con được cấp tài khoản Standard User riêng biệt. Trong lúc cài đặt phần mềm diệt virus, con gặp thông báo yêu cầu nhập mật khẩu Administrator. Ngoài ra gia đình thường xuyên kết nối ổ cứng ngoài để sao lưu dữ liệu ảnh gia đình.',
    items: [
      {
        id: 'a',
        statement: 'Tài khoản Administrator (bố) có toàn quyền cài đặt và gỡ bỏ phần mềm, thay đổi cấu hình bảo mật hệ thống trên máy tính.',
        isCorrect: true,
        explanation: 'Đúng. Tài khoản Administrator có đặc quyền cao nhất trong hệ thống Windows, có thể thực hiện mọi thao tác bao gồm cài phần mềm, sửa registry, tạo/xóa tài khoản khác.',
      },
      {
        id: 'b',
        statement: 'Tài khoản Standard User (mẹ, con) có thể tự cài đặt phần mềm diệt virus mà không cần xin phép Administrator.',
        isCorrect: false,
        explanation: 'Sai. Tài khoản Standard User cần nhập mật khẩu Administrator (UAC prompt) để cài các phần mềm hệ thống như phần mềm diệt virus vì chúng cần quyền truy cập sâu vào hệ điều hành.',
      },
      {
        id: 'c',
        statement: 'Việc tách biệt tài khoản Administrator và Standard User giúp bảo vệ máy tính khỏi việc người dùng thông thường vô tình cài phần mềm độc hại.',
        isCorrect: true,
        explanation: 'Đúng. Cơ chế phân quyền giúp giới hạn thiệt hại khi tài khoản người dùng thông thường bị tấn công hoặc vô tình cài mã độc, vì mã độc cũng bị giới hạn quyền của tài khoản đó.',
      },
      {
        id: 'd',
        statement: 'Trước khi rút ổ cứng ngoài, gia đình nên sử dụng chức năng "Safely Remove Hardware" để đảm bảo dữ liệu ảnh được ghi hoàn toàn trước khi tháo.',
        isCorrect: true,
        explanation: 'Đúng. "Safely Remove Hardware" kích hoạt quá trình flush bộ đệm ghi (write cache), đảm bảo tất cả dữ liệu đã được lưu hoàn toàn vào ổ cứng ngoài trước khi tháo, tránh mất ảnh.',
      },
    ],
    level: 'Thông hiểu (Bài 2, 4)',
    lesson: 'Bài 2. Thực hành sử dụng hệ điều hành',
  },
  {
    id: 8,
    context: 'Trong một buổi học kỹ năng số, giáo viên yêu cầu học sinh đánh giá độ tin cậy của các nguồn thông tin và xây dựng câu lệnh tìm kiếm nâng cao để tìm tài liệu về "sức khỏe tâm thần thanh thiếu niên" phục vụ bài nghiên cứu khoa học cuối năm.',
    items: [
      {
        id: 'a',
        statement: 'Câu lệnh: "sức khỏe tâm thần thanh thiếu niên" site:edu.vn sẽ trả về kết quả từ các trang giáo dục Việt Nam có chứa chính xác cụm từ đó.',
        isCorrect: true,
        explanation: 'Đúng. Dấu ngoặc kép đảm bảo tìm cụm từ chính xác theo thứ tự, site:edu.vn giới hạn phạm vi tìm kiếm trong các trang có tên miền .edu.vn.',
      },
      {
        id: 'b',
        statement: 'Một bài viết trên Wikipedia được coi là nguồn trích dẫn khoa học chính thức và đáng tin cậy tuyệt đối cho bài nghiên cứu khoa học.',
        isCorrect: false,
        explanation: 'Sai. Wikipedia là tài liệu tham khảo chung nhưng không phải nguồn khoa học chính thức vì bất kỳ ai cũng có thể chỉnh sửa nội dung. Cần dùng các tạp chí khoa học có phản biện (peer-reviewed journals) cho nghiên cứu.',
      },
      {
        id: 'c',
        statement: 'Thêm toán tử filetype:pdf vào câu lệnh tìm kiếm giúp thu hẹp kết quả chỉ lấy các tài liệu dạng file PDF, phù hợp với bài nghiên cứu học thuật.',
        isCorrect: true,
        explanation: 'Đúng. Các nghiên cứu, luận văn và báo cáo khoa học thường được phát hành dưới dạng PDF. Toán tử filetype:pdf giúp lọc ra đúng những tài liệu này.',
      },
      {
        id: 'd',
        statement: 'Toán tử trừ (-) trong câu lệnh tìm kiếm dùng để mở rộng phạm vi và bao gồm thêm các từ khóa liên quan.',
        isCorrect: false,
        explanation: 'Sai. Toán tử trừ (-) dùng để loại bỏ các kết quả chứa từ khóa đứng ngay sau nó, giúp thu hẹp phạm vi tìm kiếm chứ không phải mở rộng.',
      },
    ],
    level: 'Vận dụng (Bài 5, 6)',
    lesson: 'Bài 5, 6. Thông tin tin cậy',
  },
];

export const shortAnswerQuestions3: ShortAnswerQuestion[] = [
  {
    id: 9,
    question: 'Trong hệ điều hành Windows, tệp nào bị ẩn và có dung lượng lớn được tạo ra khi bật chế độ Hibernate (Ngủ đông) để lưu toàn bộ nội dung RAM? Nhập tên tệp chính xác (chỉ nhập phần tên, không cần ổ đĩa hay đường dẫn).',
    correctAnswer: 'hiberfil.sys',
    explanation: 'File hiberfil.sys là file ẩn hệ thống của Windows, được tạo tự động khi bật chế độ Hibernate. Nó lưu toàn bộ nội dung RAM vào ổ đĩa và có kích thước bằng dung lượng RAM vật lý của máy tính.',
    points: 1.0,
    level: 'Thông hiểu (Bài 2)',
    lesson: 'Bài 2. Thực hành sử dụng hệ điều hành',
  },
  {
    id: 10,
    question: 'Giao thức TCP/IP là viết tắt của cụm từ gì trong tiếng Anh? Nhập chữ cái viết tắt của 2 giao thức (phân cách bởi dấu /).',
    correctAnswer: 'TCP/IP',
    explanation: 'TCP/IP là viết tắt của Transmission Control Protocol / Internet Protocol. TCP đảm bảo truyền dữ liệu tin cậy, có kiểm soát lỗi; IP đảm nhận địa chỉ hóa và định tuyến gói tin qua mạng. Bộ giao thức này là nền tảng của Internet hiện đại.',
    points: 1.0,
    level: 'Nhận biết (Bài 3)',
    lesson: 'Bài 3. Thiết bị mạng và giao thức mạng',
  },
];

export const essayQuestions3: EssayQuestion[] = [
  {
    id: 11,
    question: 'Kể tên ba nhóm phần mềm ứng dụng phổ biến theo chức năng và cho ví dụ minh họa cụ thể về tên phần mềm cho mỗi nhóm. Giải thích tại sao phần mềm ứng dụng cần hệ điều hành để chạy.',
    points: 1.5,
    criteria: [
      {
        step: 'Kể tên 3 nhóm và ví dụ minh họa',
        detail: '1. Nhóm xử lý văn bản và bảng tính: Microsoft Word, Microsoft Excel, Google Docs, LibreOffice Writer.\n2. Nhóm trình chiếu: Microsoft PowerPoint, Google Slides, Prezi.\n3. Nhóm đồ họa và thiết kế: Adobe Photoshop, Canva, GIMP.\n(Học sinh có thể kể các nhóm khác như phần mềm lập trình, phần mềm học tập, trình duyệt web - đều được chấp nhận với ví dụ phù hợp.)',
        points: 0.75,
      },
      {
        step: 'Giải thích lý do cần hệ điều hành',
        detail: 'Phần mềm ứng dụng cần hệ điều hành vì: Hệ điều hành cung cấp môi trường thực thi (runtime environment) và các dịch vụ hệ thống; phần mềm ứng dụng gọi các API của hệ điều hành để sử dụng bộ nhớ, lưu tệp, hiển thị giao diện; không có hệ điều hành, phần mềm ứng dụng không thể trực tiếp điều khiển phần cứng.',
        points: 0.75,
      },
    ],
    level: 'Nhận biết (Bài 1)',
    lesson: 'Bài 1. Hệ điều hành và phần mềm ứng dụng',
  },
  {
    id: 12,
    question: 'Thiết kế sơ đồ kết nối mạng LAN cho một văn phòng nhỏ gồm: 10 máy tính có dây, 1 máy in mạng, và cần kết nối Internet qua đường truyền cáp quang của ISP. Hãy nêu tên các thiết bị mạng cần dùng và mô tả luồng kết nối từ ISP đến từng máy tính.',
    points: 1.5,
    criteria: [
      {
        step: 'Xác định đủ các thiết bị mạng',
        detail: 'Thiết bị cần: Modem quang (ONT - Optical Network Terminal), Router (bộ định tuyến), Switch 16-cổng (bộ chuyển mạch), cáp mạng Cat5e/Cat6 cho 10 máy tính và máy in.',
        points: 0.5,
      },
      {
        step: 'Mô tả luồng kết nối',
        detail: '1. Cáp quang từ ISP → Modem quang (ONT): chuyển đổi tín hiệu quang thành tín hiệu điện.\n2. Modem → Router (qua cổng WAN): Router nhận IP công cộng từ ISP và tạo mạng nội bộ.\n3. Router → Switch (qua cổng LAN): Switch nhân rộng số lượng cổng kết nối.\n4. Switch → 10 máy tính + 1 máy in (mỗi thiết bị một cổng): Switch phân phối kết nối mạng đến từng máy, dữ liệu được chuyển tiếp theo địa chỉ MAC.',
        points: 1.0,
      },
    ],
    level: 'Vận dụng (Bài 3)',
    lesson: 'Bài 3. Thiết bị mạng và giao thức mạng',
  },
];
