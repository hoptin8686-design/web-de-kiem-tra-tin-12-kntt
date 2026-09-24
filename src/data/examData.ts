import { MatrixRow, SpecRow, MultipleChoiceQuestion, TrueFalseQuestion, ShortAnswerQuestion, EssayQuestion } from '../types';

export const examInfo = {
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
};

export const matrixData: MatrixRow[] = [
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

export const specData: SpecRow[] = [
  {
    tt: '1',
    chuDe: 'CHƯƠNG I. MÁY TÍNH VÀ XÃ HỘI TRI THỨC',
    noiDung: 'Bài 1. Hệ điều hành và phần mềm ứng dụng',
    yccđ: [
      {
        level: 'Biết',
        content: 'Nêu được khái niệm hệ điều hành và phần mềm ứng dụng. Trình bày được các vai trò chính của hệ điều hành trong việc quản lý thiết bị, quản lý tệp, cung cấp giao diện và môi trường chạy ứng dụng. Nhận biết được các đặc điểm đặc trưng của hệ điều hành cho thiết bị di động. Kể tên được một số hệ điều hành phổ biến cho thiết bị di động như Android, iOS.',
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
        content: 'Giải thích được sự khác biệt về quyền truy cập giữa tài khoản quản trị (Administrator) và tài khoản người dùng tiêu chuẩn (Standard User). Giải thích được vai trò của trình quản lý tác vụ (Task Manager) trong việc giám sát hiệu năng hệ thống và xử lý ứng dụng bị treo.',
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
        content: 'Kể tên và nêu được chức năng của các thiết bị mạng thông dụng bao gồm Switch, Router, Access Point và Modem. Phát biểu được khái niệm giao thức mạng và bộ giao thức TCP/IP. Nhận biết được định dạng và độ dài của địa chỉ IPv4 và IPv6.',
        competence: 'NLa',
      },
      {
        level: 'Vận dụng',
        content: 'Lựa chọn được thiết bị mạng phù hợp để thiết lập một sơ đồ kết nối mạng LAN đơn giản cho gia đình hoặc lớp học. Phân tích và phân loại được một địa chỉ IP cụ thể thuộc chuẩn IPv4 hay IPv6.',
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
        content: 'Phân biệt được ưu thế và hạn chế của các phương thức kết nối có dây so với kết nối không dây như Bluetooth, Wi-Fi, Wi-Fi Direct. Giải thích được nguyên lý tự động cài đặt phần mềm điều khiển của công nghệ cắm và chạy (Plug and Play).',
        competence: 'NLa',
      },
      {
        level: 'Vận dụng',
        content: 'Thực hiện kết nối thành công điện thoại thông minh với máy tính qua cáp USB để sao chép dữ liệu hoặc hình ảnh. Thực hiện kết nối và thiết lập chế độ hiển thị từ máy tính lên màn hình phụ hoặc máy chiếu qua cáp HDMI hoặc VGA.',
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
        content: 'Phát biểu được khái niệm thông tin tin cậy. Liệt kê được các tiêu chí đánh giá tính tin cậy của thông tin bao gồm tính xác thực, tính cập nhật, tính khách quan, nguồn gốc và mục đích.',
        competence: 'NLb; NLe',
      },
      {
        level: 'Vận dụng',
        content: 'Đánh giá được mức độ tin cậy của một bài viết hoặc một nguồn thông tin cụ thể dựa trên các tiêu chí xác thực, cập nhật, khách quan, nguồn gốc và mục đích.',
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
        level: 'Biết',
        content: 'Nhận biết được các toán tử tìm kiếm nâng cao trên Internet bao gồm dấu ngoặc kép "", toán tử site:, toán tử filetype: và toán tử loại trừ -.',
        competence: 'NLb; NLe',
      },
      {
        level: 'Hiểu',
        content: 'Giải thích được chức năng và cách hoạt động của từng toán tử tìm kiếm nâng cao trong việc thu hẹp phạm vi và tăng độ chính xác của kết quả tìm kiếm.',
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

export const multipleChoiceQuestions: MultipleChoiceQuestion[] = [
  {
    id: 1,
    question: 'Hệ điều hành có vai trò cốt lõi nào sau đây trong hệ thống máy tính?',
    options: [
      { label: 'A', text: 'Thực hiện soạn thảo văn bản và xử lý bảng tính chuyên sâu cho người dùng.' },
      { label: 'B', text: 'Làm trung gian giữa người sử dụng và phần cứng, quản lý tài nguyên và cung cấp môi trường chạy ứng dụng.' },
      { label: 'C', text: 'Kết nối máy tính trực tiếp với mạng Internet toàn cầu qua giao thức TCP/IP.' },
      { label: 'D', text: 'Tự động tìm kiếm và loại bỏ các tệp rác do phần mềm ứng dụng sinh ra.' },
    ],
    correctAnswer: 'B',
    explanation: 'Theo SGK Tin học 12 KNTT (Bài 1), hệ điều hành là tập hợp các chương trình hệ thống đóng vai trò trung gian giữa người dùng và phần cứng, quản lý tài nguyên máy tính và cung cấp môi trường để các phần mềm ứng dụng hoạt động.',
    level: 'Nhận biết',
    lesson: 'Bài 1. Hệ điều hành và phần mềm ứng dụng',
  },
  {
    id: 2,
    question: 'Trong hệ điều hành Windows, phát biểu nào sau đây giải thích đúng về vai trò của trình quản lý tác vụ (Task Manager)?',
    options: [
      { label: 'A', text: 'Cho phép tạo mới và phân quyền truy cập cho các tài khoản người dùng chuẩn.' },
      { label: 'B', text: 'Dùng để cài đặt các tệp gói phần mềm định dạng mở rộng .msi hoặc .exe.' },
      { label: 'C', text: 'Giám sát hiệu năng sử dụng CPU, RAM, ổ đĩa và cho phép kết thúc các ứng dụng bị treo (Not Responding).' },
      { label: 'D', text: 'Quản lý việc lưu trữ, sao chép và tìm kiếm nâng cao các tệp, thư mục trên ổ đĩa ngoài.' },
    ],
    correctAnswer: 'C',
    explanation: 'Task Manager trong Windows cung cấp thông tin theo thời gian thực về việc sử dụng CPU, RAM, Disk, Network và cho phép tắt tiến trình bị đơ/treo bằng nút End Task.',
    level: 'Thông hiểu',
    lesson: 'Bài 2. Thực hành sử dụng hệ điều hành',
  },
  {
    id: 3,
    question: 'Thiết bị mạng nào sau đây có chức năng kết nối các thiết bị trong cùng một mạng LAN và chuyển tiếp dữ liệu dựa trên địa chỉ MAC?',
    options: [
      { label: 'A', text: 'Router (Bộ định tuyến).' },
      { label: 'B', text: 'Modem.' },
      { label: 'C', text: 'Switch (Bộ chuyển mạch).' },
      { label: 'D', text: 'Access Point.' },
    ],
    correctAnswer: 'C',
    explanation: 'Switch là thiết bị kết nối các đoạn mạng với nhau trong mạng cục bộ (LAN) và chuyển tiếp các khung dữ liệu (frame) dựa trên bảng địa chỉ vật lý MAC.',
    level: 'Nhận biết',
    lesson: 'Bài 3. Thiết bị mạng và giao thức mạng',
  },
  {
    id: 4,
    question: 'Khi bạn kết nối điện thoại thông minh với máy tính cá nhân qua cáp USB và chọn chế độ truyền tệp (MTP), hành động này thể hiện ứng dụng nào trong việc kết nối thiết bị?',
    options: [
      { label: 'A', text: 'Thiết lập kết nối mạng không dây phạm vi ngắn qua Bluetooth để phát nhạc.' },
      { label: 'B', text: 'Thực hiện kết nối có dây để duyệt, sao chép dữ liệu và quản lý tệp giữa bộ nhớ điện thoại và máy tính.' },
      { label: 'C', text: 'Tự động cài đặt phần mềm điều khiển (Driver) thông qua công nghệ cắm và chạy Plug and Play.' },
      { label: 'D', text: 'Truyền tải tín hiệu hình ảnh và âm thanh trực tiếp từ máy tính lên màn hình phụ hoặc máy chiếu.' },
    ],
    correctAnswer: 'B',
    explanation: 'Chế độ MTP (Media Transfer Protocol) qua cáp USB cho phép người dùng truy cập trực tiếp vào hệ thống tệp tin của điện thoại để sao chép hình ảnh, tài liệu giữa điện thoại và máy tính.',
    level: 'Vận dụng',
    lesson: 'Bài 4. Thực hành kết nối thiết bị số với máy tính',
  },
  {
    id: 5,
    question: 'Tiêu chí nào sau đây phản ánh đúng tính xác thực (Accuracy) khi đánh giá độ tin cậy của một nguồn thông tin?',
    options: [
      { label: 'A', text: 'Thông tin được xuất bản gần đây và phù hợp với bối cảnh thời gian hiện tại.' },
      { label: 'B', text: 'Thông tin trình bày trung lập, không mang định kiến cá nhân hay quảng cáo phiến diện.' },
      { label: 'C', text: 'Thông tin không có lỗi logic, số liệu rõ ràng, có bằng chứng thực tế chứng minh và đối chiếu được.' },
      { label: 'D', text: 'Tác giả là chuyên gia uy tín và trang web thuộc sở hữu của cơ quan chính phủ .gov.' },
    ],
    correctAnswer: 'C',
    explanation: 'Tính xác thực (Accuracy) yêu cầu thông tin phải chính xác, không chứa lỗi sai, dữ liệu có nguồn kiểm chứng và bằng chứng khoa học có thể đối chiếu chéo.',
    level: 'Nhận biết',
    lesson: 'Bài 5. Khái niệm và một số đặc điểm của thông tin tin cậy',
  },
  {
    id: 6,
    question: 'Trong quá trình tìm kiếm thông tin trên Internet, toán tử nào sau đây giúp tìm kiếm chính xác một cụm từ khóa theo đúng thứ tự các từ?',
    options: [
      { label: 'A', text: 'Dấu ngoặc kép "".' },
      { label: 'B', text: 'Toán tử site:.' },
      { label: 'C', text: 'Toán tử filetype:.' },
      { label: 'D', text: 'Toán tử loại trừ -.' },
    ],
    correctAnswer: 'A',
    explanation: 'Đặt cụm từ trong dấu ngoặc kép "" yêu cầu công cụ tìm kiếm chỉ trả về các trang chứa chính xác cụm từ đó theo đúng trật tự từ ngữ.',
    level: 'Thông hiểu',
    lesson: 'Bài 6. Thực hành khai thác nguồn thông tin tin cậy',
  },
];

export const trueFalseQuestions: TrueFalseQuestion[] = [
  {
    id: 7,
    context: 'Phòng máy tính của nhà trường cài đặt hệ điều hành Windows quản lý bởi tài khoản Quản trị viên (Administrator). Các học sinh khi đăng nhập sử dụng máy tính được cấp tài khoản người dùng tiêu chuẩn (Standard User). Trong quá trình học tập, một học sinh gặp tình trạng phần mềm lập trình bị đơ, không phản hồi (Not Responding) và muốn sử dụng Task Manager để xử lý.',
    items: [
      {
        id: 'a',
        statement: 'Tài khoản Standard User có toàn quyền cài đặt phần mềm hệ thống và thay đổi các thiết lập bảo mật cốt lõi của máy tính giống như Administrator.',
        isCorrect: false,
        explanation: 'Sai. Standard User bị hạn chế quyền cài đặt phần mềm hệ thống và không được can thiệp vào các tệp bảo mật cốt lõi để bảo vệ máy tính.',
      },
      {
        id: 'b',
        statement: 'Tài khoản Standard User giúp bảo vệ hệ thống tốt hơn bằng cách hạn chế người dùng thay đổi cấu hình hệ thống hoặc cài đặt các ứng dụng trái phép.',
        isCorrect: true,
        explanation: 'Đúng. Việc giới hạn quyền ngăn ngừa người dùng vô tình hoặc cố ý cài mã độc và làm hỏng cấu hình hệ điều hành.',
      },
      {
        id: 'c',
        statement: 'Trình quản lý tác vụ (Task Manager) cho phép học sinh theo dõi mức độ sử dụng CPU và RAM của các ứng dụng đang chạy.',
        isCorrect: true,
        explanation: 'Đúng. Task Manager hiển thị chi tiết phần trăm tài nguyên CPU, Memory, Disk đang bị chiếm dụng bởi từng tiến trình.',
      },
      {
        id: 'd',
        statement: 'Để xử lý ứng dụng bị treo (Not Responding), học sinh mở Task Manager, chọn tiến trình của ứng dụng đó và chọn tính năng End Task.',
        isCorrect: true,
        explanation: 'Đúng. End Task gửi lệnh cưỡng chế đóng ứng dụng để giải phóng bộ nhớ và khôi phục hoạt động cho hệ thống.',
      },
    ],
    level: 'Thông hiểu (Bài 2)',
    lesson: 'Bài 2. Thực hành sử dụng hệ điều hành',
  },
  {
    id: 8,
    context: 'Một nhóm học sinh lớp 12 thực hiện dự án tìm kiếm các tài liệu nghiên cứu chuyên sâu về giao thức mạng an toàn trên Internet. Các em sử dụng công cụ tìm kiếm Google với các toán tử nâng cao để lọc kết quả từ các trang giáo dục có tên miền .edu.vn và định dạng tài liệu cụ thể.',
    items: [
      {
        id: 'a',
        statement: 'Sử dụng toán tử site:edu.vn giúp giới hạn kết quả tìm kiếm chỉ trong các trang web thuộc lĩnh vực giáo dục tại Việt Nam.',
        isCorrect: true,
        explanation: 'Đúng. Toán tử site: giới hạn phạm vi tìm kiếm trong phạm vi tên miền chỉ định (.edu.vn là tên miền giáo dục VN).',
      },
      {
        id: 'b',
        statement: 'Sử dụng toán tử filetype:pdf giúp tìm kiếm các tệp tài liệu có định dạng PDF phục vụ cho việc đọc và lưu trữ nghiên cứu.',
        isCorrect: true,
        explanation: 'Đúng. Toán tử filetype: giúp máy tìm kiếm lọc trực tiếp các đường dẫn tệp tải về có đuôi định dạng tương ứng.',
      },
      {
        id: 'c',
        statement: 'Toán tử loại trừ dấu trừ (-) dùng để thêm các từ khóa quan trọng nhằm mở rộng tối đa phạm vi tìm kiếm.',
        isCorrect: false,
        explanation: 'Sai. Dấu trừ (-) dùng để loại bỏ các kết quả chứa từ khóa đứng ngay sau nó, giúp thu hẹp phạm vi chứ không phải mở rộng.',
      },
      {
        id: 'd',
        statement: 'Kết hợp các toán tử tìm kiếm nâng cao giúp học sinh thu hẹp phạm vi tìm kiếm, tiết kiệm thời gian và thu thập được nguồn thông tin chính xác hơn.',
        isCorrect: true,
        explanation: 'Đúng. Việc kết hợp site:, filetype:, dấu ngoặc kép và toán tử trừ giúp chắt lọc chính xác nguồn tin học thuật chất lượng.',
      },
    ],
    level: 'Vận dụng (Bài 6)',
    lesson: 'Bài 6. Thực hành khai thác nguồn thông tin tin cậy',
  },
];

export const shortAnswerQuestions: ShortAnswerQuestion[] = [
  {
    id: 9,
    question: 'Khi kết nối một máy in mới qua cổng USB, hệ điều hành lập tức nhận diện thiết bị và tự động cấu hình trình điều khiển để sử dụng mà không yêu cầu người dùng đĩa cài đặt thủ công. Công nghệ cắm và chạy tự động này thường được viết tắt bằng tiếng Anh gồm mấy chữ cái? (Nhập kết quả bằng số nguyên).',
    correctAnswer: '3',
    explanation: 'Công nghệ cắm và chạy trong tiếng Anh là Plug and Play, được viết tắt là PnP (gồm đúng 3 chữ cái: P, n, P).',
    points: 1.0,
    level: 'Thông hiểu (Bài 4)',
    lesson: 'Bài 4. Thực hành kết nối thiết bị số với máy tính',
  },
  {
    id: 10,
    question: 'Khi đánh giá một bài báo khoa học trực tuyến, người ta kiểm tra 5 tiêu chí cơ bản gồm: tính xác thực, tính cập nhật, tính khách quan, nguồn gốc (tác giả/tổ chức) và mục đích xuất bản. Theo lý thuyết về đánh giá thông tin tin cậy, tổng số tiêu chí cốt lõi cần xem xét là bao nhiêu? (Nhập kết quả bằng số nguyên).',
    correctAnswer: '5',
    explanation: 'Theo SGK Tin học 12 KNTT (Bài 5), 5 tiêu chí cốt lõi để đánh giá tính tin cậy của thông tin gồm: Tính xác thực (Accuracy), Tính cập nhật (Currency), Tính khách quan (Objectivity), Nguồn gốc (Authority/Origin), Mục đích (Purpose).',
    points: 1.0,
    level: 'Vận dụng (Bài 5)',
    lesson: 'Bài 5. Khái niệm và một số đặc điểm của thông tin tin cậy',
  },
];

export const essayQuestions: EssayQuestion[] = [
  {
    id: 11,
    question: 'Hãy nêu khái niệm hệ điều hành và trình bày hai vai trò chính của hệ điều hành trong việc quản lý thiết bị và cung cấp giao diện tương tác với người dùng.',
    points: 1.5,
    criteria: [
      {
        step: 'Khái niệm hệ điều hành',
        detail: 'Hệ điều hành là tập hợp các chương trình hệ thống làm trung gian giữa người sử dụng và phần cứng máy tính, có chức năng quản lý, phân phối tài nguyên máy tính và cung cấp môi trường thuận tiện để các phần mềm ứng dụng hoạt động.',
        points: 0.5,
      },
      {
        step: 'Vai trò quản lý thiết bị',
        detail: 'Điều phối, giám sát và phân chia thời gian xử lý của CPU, dung lượng bộ nhớ trong (RAM), quản lý việc truy xuất dữ liệu từ các thiết bị lưu trữ (HDD/SSD) và điều khiển các thiết bị ngoại vi thông qua trình điều khiển thiết bị (driver).',
        points: 0.5,
      },
      {
        step: 'Vai trò cung cấp giao diện',
        detail: 'Cung cấp phương tiện để con người giao tiếp với máy tính: qua giao diện dòng lệnh (CLI - nhập lệnh văn bản) hoặc giao diện đồ họa (GUI - sử dụng cửa sổ, biểu tượng icon, chuột chạm cảm ứng).',
        points: 0.5,
      },
    ],
    level: 'Nhận biết (Bài 1)',
    lesson: 'Bài 1. Hệ điều hành và phần mềm ứng dụng',
  },
  {
    id: 12,
    question: 'Tại một phòng học, nhà trường cần thiết lập mạng LAN kết nối 20 máy tính và cho phép các thiết bị di động truy cập Wi-Fi đồng thời kết nối ra Internet. Hãy lựa chọn các thiết bị mạng thích hợp (trong số Switch, Router, Access Point, Modem) và mô tả sơ lược chức năng phối hợp của chúng để hệ thống hoạt động hiệu quả.',
    points: 1.5,
    criteria: [
      {
        step: 'Lựa chọn thiết bị phù hợp',
        detail: 'Cần sử dụng đầy đủ các thiết bị: Modem (hoặc cổng quang), Router (bộ định tuyến), Switch (bộ chuyển mạch từ 24 cổng trở lên) và Access Point (điểm truy cập không dây Wi-Fi).',
        points: 0.5,
      },
      {
        step: 'Mô tả cơ chế phối hợp hoạt động',
        detail: '1. Modem tiếp nhận tín hiệu từ nhà cung cấp dịch vụ mạng (ISP) và biến đổi tín hiệu.\n2. Router nhận tín hiệu từ Modem, cấp phát địa chỉ IP động (DHCP) cho toàn mạng và định tuyến các gói tin ra Internet.\n3. Switch kết nối bằng cáp mạng đến Router và chia sẻ kết nối có dây đến 20 máy tính để bàn để đảm bảo tốc độ cao, ổn định.\n4. Access Point cắm vào Switch/Router để phát sóng Wi-Fi cho các thiết bị di động của học sinh và giáo viên.',
        points: 1.0,
      },
    ],
    level: 'Vận dụng (Bài 3)',
    lesson: 'Bài 3. Thiết bị mạng và giao thức mạng',
  },
];
