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
    chuDe: 'CHỦ ĐỀ 1. MÁY TÍNH VÀ XÃ HỘI TRI THỨC',
    noiDung: 'Bài 1. Làm quen với Trí tuệ nhân tạo',
    tnkqNlc: { biet: '1 (C1)', hieu: '', vd: '' },
    tnkqDs: { biet: '', hieu: '', vd: '' },
    tnkqNgan: { biet: '', hieu: '', vd: '' },
    tuLuan: { biet: '1 (C1) - 1.5đ', hieu: '', vd: '' },
    tong: { biet: '2', hieu: '', vd: '' },
    tiLe: '20%',
  },
  {
    tt: '2',
    chuDe: 'CHỦ ĐỀ 1. MÁY TÍNH VÀ XÃ HỘI TRI THỨC',
    noiDung: 'Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống',
    tnkqNlc: { biet: '', hieu: '1 (C2)', vd: '' },
    tnkqDs: { biet: '', hieu: '4 ý (C1)', vd: '' },
    tnkqNgan: { biet: '', hieu: '', vd: '' },
    tuLuan: { biet: '', hieu: '', vd: '' },
    tong: { biet: '', hieu: '5', vd: '' },
    tiLe: '15%',
  },
  {
    tt: '3',
    chuDe: 'CHỦ ĐỀ 2. MẠNG MÁY TÍNH VÀ INTERNET',
    noiDung: 'Bài 3. Một số thiết bị mạng thông dụng',
    tnkqNlc: { biet: '1 (C3)', hieu: '', vd: '' },
    tnkqDs: { biet: '', hieu: '', vd: '' },
    tnkqNgan: { biet: '', hieu: '', vd: '' },
    tuLuan: { biet: '', hieu: '', vd: '1 (C2) - 1.5đ' },
    tong: { biet: '1', hieu: '', vd: '1' },
    tiLe: '20%',
  },
  {
    tt: '4',
    chuDe: 'CHỦ ĐỀ 2. MẠNG MÁY TÍNH VÀ INTERNET',
    noiDung: 'Bài 4. Giao thức mạng',
    tnkqNlc: { biet: '', hieu: '', vd: '1 (C4)' },
    tnkqDs: { biet: '', hieu: '', vd: '' },
    tnkqNgan: { biet: '', hieu: '1 (C1)', vd: '' },
    tuLuan: { biet: '', hieu: '', vd: '' },
    tong: { biet: '', hieu: '1', vd: '1' },
    tiLe: '15%',
  },
  {
    tt: '5',
    chuDe: 'CHỦ ĐỀ 2. MẠNG MÁY TÍNH VÀ INTERNET',
    noiDung: 'Bài 5. Thực hành chia sẻ tài nguyên trên mạng',
    tnkqNlc: { biet: '1 (C5)', hieu: '', vd: '' },
    tnkqDs: { biet: '', hieu: '', vd: '' },
    tnkqNgan: { biet: '', hieu: '', vd: '1 (C2)' },
    tuLuan: { biet: '', hieu: '', vd: '' },
    tong: { biet: '1', hieu: '', vd: '1' },
    tiLe: '15%',
  },
  {
    tt: '6',
    chuDe: 'CHỦ ĐỀ 3. ĐẠO ĐỨC, PHÁP LUẬT VÀ VĂN HOÁ TRONG MÔI TRƯỜNG SỐ',
    noiDung: 'Bài 6. Giao tiếp và ứng xử trong không gian mạng',
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
    chuDe: 'CHỦ ĐỀ 1. MÁY TÍNH VÀ XÃ HỘI TRI THỨC',
    noiDung: 'Bài 1. Làm quen với Trí tuệ nhân tạo',
    yccđ: [
      {
        level: 'Biết',
        content: 'Kể tên được các sản phẩm AI đang được sử dụng phổ biến trong đời sống (ChatGPT, Google Assistant, FaceID, xe tự lái...). Nhận biết được AI là kết quả của sự phát triển khoa học máy tính, toán học và xử lý dữ liệu lớn (Big Data).',
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
    chuDe: 'CHỦ ĐỀ 1. MÁY TÍNH VÀ XÃ HỘI TRI THỨC',
    noiDung: 'Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống',
    yccđ: [
      {
        level: 'Hiểu',
        content: 'Đánh giá được tác động của AI đến môi trường (tiêu thụ điện năng của trung tâm dữ liệu AI) và vấn đề đạo đức AI (thiên vị thuật toán, deepfake). Giải thích được trách nhiệm của con người khi phát triển và sử dụng AI.',
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
    chuDe: 'CHỦ ĐỀ 2. MẠNG MÁY TÍNH VÀ INTERNET',
    noiDung: 'Bài 3. Một số thiết bị mạng thông dụng',
    yccđ: [
      {
        level: 'Biết',
        content: 'Nêu được chức năng của Card mạng (NIC - Network Interface Card) và vai trò của địa chỉ MAC trong mạng LAN. Phân biệt được Modem và Router về chức năng và vị trí trong sơ đồ mạng gia đình/trường học.',
        competence: 'NLa',
      },
      {
        level: 'Vận dụng',
        content: 'Đọc và diễn giải được sơ đồ kết nối mạng cơ bản trong gia đình hoặc lớp học, xác định vai trò từng thiết bị.',
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
    chuDe: 'CHỦ ĐỀ 2. MẠNG MÁY TÍNH VÀ INTERNET',
    noiDung: 'Bài 4. Giao thức mạng',
    yccđ: [
      {
        level: 'Hiểu',
        content: 'Giải thích được mô hình phân lớp TCP/IP với 4 lớp: Ứng dụng, Vận chuyển, Mạng, Liên kết. Nêu được chức năng của từng lớp và ví dụ giao thức tiêu biểu ở mỗi lớp.',
        competence: 'NLa',
      },
      {
        level: 'Vận dụng',
        content: 'Phân tích được quá trình truyền dữ liệu từ máy gửi đến máy nhận thông qua các lớp TCP/IP.',
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
    chuDe: 'CHỦ ĐỀ 2. MẠNG MÁY TÍNH VÀ INTERNET',
    noiDung: 'Bài 5. Thực hành chia sẻ tài nguyên trên mạng',
    yccđ: [
      {
        level: 'Biết',
        content: 'Nhận biết được hai cách kết nối ổ đĩa mạng trong Windows: Map Network Drive (kết nối như ổ đĩa cục bộ) và truy cập trực tiếp qua Network. Nêu được lợi ích của Map Network Drive trong công việc hàng ngày.',
        competence: 'NLb',
      },
      {
        level: 'Vận dụng',
        content: 'Thực hiện được việc Map Network Drive để truy cập nhanh vào thư mục dùng chung trên mạng LAN.',
        competence: 'NLb',
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
    chuDe: 'CHỦ ĐỀ 3. ĐẠO ĐỨC, PHÁP LUẬT VÀ VĂN HOÁ TRONG MÔI TRƯỜNG SỐ',
    noiDung: 'Bài 6. Giao tiếp và ứng xử trong không gian mạng',
    yccđ: [
      {
        level: 'Hiểu',
        content: 'Phân tích được vấn đề bảo vệ quyền riêng tư và an toàn thông tin cá nhân trên mạng xã hội. Giải thích được mối nguy hiểm của việc chia sẻ thông tin cá nhân công khai (số điện thoại, địa chỉ nhà, ảnh chứa thông tin nhạy cảm).',
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
    question: 'Công nghệ AI nào được sử dụng trong điện thoại thông minh để nhận diện khuôn mặt và mở khóa màn hình?',
    options: [
      { label: 'A', text: 'NLP (Natural Language Processing) — xử lý giọng nói để nhận lệnh mở khóa.' },
      { label: 'B', text: 'Computer Vision (Thị giác máy tính) kết hợp Deep Learning để phân tích đặc điểm khuôn mặt.' },
      { label: 'C', text: 'Expert System (Hệ chuyên gia) so sánh khuôn mặt với cơ sở dữ liệu quy tắc.' },
      { label: 'D', text: 'Robotic Process Automation (RPA) điều khiển camera trước điện thoại.' },
    ],
    correctAnswer: 'B',
    explanation: 'Nhận diện khuôn mặt (Face ID) sử dụng Computer Vision kết hợp Deep Learning (mạng nơ-ron học sâu) để phân tích hàng nghìn điểm đặc trưng trên khuôn mặt, học từ dữ liệu lớn để đạt độ chính xác cao ngay cả khi thay đổi ánh sáng, góc nhìn.',
    level: 'Nhận biết',
    lesson: 'Bài 1. Làm quen với Trí tuệ nhân tạo',
  },
  {
    id: 2,
    question: 'Vấn đề đạo đức nào của AI liên quan đến công nghệ tạo ra video giả mạo, ghép khuôn mặt người nổi tiếng vào nội dung không có thật?',
    options: [
      { label: 'A', text: 'Thiên vị thuật toán (Algorithmic Bias) trong tuyển dụng nhân sự.' },
      { label: 'B', text: 'Deepfake — công nghệ AI tạo video/âm thanh giả mạo nguy hiểm cho xã hội.' },
      { label: 'C', text: 'Quyền riêng tư dữ liệu (Data Privacy) trong hệ thống y tế điện tử.' },
      { label: 'D', text: 'Tự động hóa thay thế lao động trong ngành sản xuất công nghiệp.' },
    ],
    correctAnswer: 'B',
    explanation: 'Deepfake là công nghệ dùng AI (đặc biệt là Generative Adversarial Networks - GANs) để tạo ra video/âm thanh giả mạo rất thực tế — ghép khuôn mặt, giọng nói của người thật vào nội dung giả tạo. Đây là một trong những vấn đề đạo đức AI nghiêm trọng nhất hiện nay.',
    level: 'Thông hiểu',
    lesson: 'Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống',
  },
  {
    id: 3,
    question: 'Card mạng (NIC - Network Interface Card) có vai trò gì trong mạng máy tính?',
    options: [
      { label: 'A', text: 'Phân phối tín hiệu mạng đến nhiều máy tính trong phòng máy.' },
      { label: 'B', text: 'Kết nối máy tính ra Internet thông qua đường truyền cáp quang của ISP.' },
      { label: 'C', text: 'Cung cấp giao diện vật lý để máy tính kết nối vào mạng, mỗi card có địa chỉ MAC duy nhất.' },
      { label: 'D', text: 'Bảo vệ mạng khỏi các cuộc tấn công từ bên ngoài như tường lửa.' },
    ],
    correctAnswer: 'C',
    explanation: 'NIC (Network Interface Card) là thiết bị phần cứng cắm vào máy tính, cung cấp cổng kết nối vật lý (RJ-45 cho Ethernet hoặc ăng-ten cho Wi-Fi). Mỗi NIC có địa chỉ MAC (Media Access Control) duy nhất toàn cầu — dùng để nhận dạng thiết bị trong mạng LAN.',
    level: 'Nhận biết',
    lesson: 'Bài 3. Một số thiết bị mạng thông dụng',
  },
  {
    id: 4,
    question: 'Trong mô hình TCP/IP, giao thức HTTP và HTTPS hoạt động ở lớp nào?',
    options: [
      { label: 'A', text: 'Lớp Liên kết (Link Layer) — giao tiếp với phần cứng mạng.' },
      { label: 'B', text: 'Lớp Mạng (Network Layer) — định tuyến gói tin qua Internet.' },
      { label: 'C', text: 'Lớp Vận chuyển (Transport Layer) — đảm bảo truyền tin cậy.' },
      { label: 'D', text: 'Lớp Ứng dụng (Application Layer) — giao tiếp trực tiếp với phần mềm người dùng.' },
    ],
    correctAnswer: 'D',
    explanation: 'HTTP/HTTPS là giao thức tầng Ứng dụng (Application Layer) trong mô hình TCP/IP. Tầng Ứng dụng là tầng cao nhất, trực tiếp cung cấp dịch vụ cho phần mềm người dùng. Các giao thức khác ở tầng này: FTP, SMTP, DNS, DHCP...',
    level: 'Vận dụng',
    lesson: 'Bài 4. Giao thức mạng',
  },
  {
    id: 5,
    question: 'Tính năng "Map Network Drive" trong Windows dùng để làm gì?',
    options: [
      { label: 'A', text: 'Vẽ bản đồ sơ đồ kết nối mạng LAN của trường hay văn phòng.' },
      { label: 'B', text: 'Kết nối và gắn một thư mục chia sẻ trên mạng thành một ổ đĩa ảo (như ổ E:, F:...) để truy cập nhanh.' },
      { label: 'C', text: 'Tạo bản sao dự phòng (backup) của ổ đĩa C: lên máy chủ mạng.' },
      { label: 'D', text: 'Theo dõi lưu lượng mạng và kiểm tra tốc độ kết nối Internet.' },
    ],
    correctAnswer: 'B',
    explanation: 'Map Network Drive gắn một thư mục chia sẻ trên mạng LAN thành một ổ đĩa ảo (ví dụ: Z:). Sau khi map, người dùng có thể truy cập thư mục chung nhanh chóng từ File Explorer giống như truy cập ổ đĩa cục bộ, rất tiện lợi cho làm việc nhóm.',
    level: 'Nhận biết',
    lesson: 'Bài 5. Thực hành chia sẻ tài nguyên trên mạng',
  },
  {
    id: 6,
    question: 'Mối nguy hiểm nào có thể xảy ra khi học sinh đăng công khai số điện thoại cá nhân và địa chỉ nhà lên mạng xã hội?',
    options: [
      { label: 'A', text: 'Điện thoại sẽ bị hao pin nhanh hơn do nhận nhiều cuộc gọi từ người lạ.' },
      { label: 'B', text: 'Thông tin có thể bị kẻ xấu thu thập để lừa đảo, quấy rối hoặc đe dọa trực tiếp; vi phạm quyền bảo vệ dữ liệu cá nhân.' },
      { label: 'C', text: 'Mạng xã hội sẽ tự động xóa tài khoản vì vi phạm điều khoản dịch vụ.' },
      { label: 'D', text: 'Nhà mạng điện thoại sẽ tính thêm phí vì sử dụng dịch vụ thương mại.' },
    ],
    correctAnswer: 'B',
    explanation: 'Công khai thông tin cá nhân (số điện thoại, địa chỉ nhà) trên mạng xã hội tạo nguy cơ: bị kẻ xấu thu thập để lừa đảo tài chính (gọi điện giả danh ngân hàng, bưu điện...), quấy rối, hoặc thậm chí đe dọa ngoài đời thực.',
    level: 'Thông hiểu',
    lesson: 'Bài 6. Giao tiếp và ứng xử trong không gian mạng',
  },
];

export const trueFalseQuestions3: TrueFalseQuestion[] = [
  {
    id: 7,
    context: 'Công ty Y muốn xây dựng mạng LAN cho văn phòng mới gồm 3 tầng, mỗi tầng có 10 máy tính. Trưởng phòng IT đang lên kế hoạch chọn thiết bị mạng và thiết lập sơ đồ kết nối. Anh băn khoăn giữa việc dùng Hub hay Switch, và cần kết nối mạng các tầng với nhau cũng như ra Internet.',
    items: [
      {
        id: 'a',
        statement: 'Nên dùng Switch thay vì Hub để kết nối các máy tính trong mỗi tầng vì Switch hiệu quả hơn, ít gây đụng độ dữ liệu và bảo mật hơn.',
        isCorrect: true,
        explanation: 'Đúng. Switch sử dụng bảng địa chỉ MAC để chuyển dữ liệu đúng đến đích, tránh đụng độ (collision), tăng hiệu năng và bảo mật so với Hub broadcast dữ liệu đến tất cả các cổng.',
      },
      {
        id: 'b',
        statement: 'Router không cần thiết trong mạng văn phòng này nếu chỉ cần các máy tính trong văn phòng giao tiếp với nhau, không cần Internet.',
        isCorrect: true,
        explanation: 'Đúng. Router chỉ cần thiết khi cần kết nối mạng LAN ra Internet hoặc kết nối hai mạng LAN khác nhau. Nếu chỉ giao tiếp nội bộ, một Switch trung tâm kết nối các Switch tầng là đủ.',
      },
      {
        id: 'c',
        statement: 'Card mạng (NIC) đã được tích hợp sẵn trong bo mạch chủ (mainboard) của hầu hết máy tính hiện đại, nên không cần mua thêm card mạng rời cho 30 máy tính văn phòng.',
        isCorrect: true,
        explanation: 'Đúng. Hầu hết máy tính để bàn và laptop hiện đại đều có NIC Ethernet tích hợp sẵn trên bo mạch chủ. Chỉ cần mua card mạng rời khi máy tính cũ không có hoặc muốn nâng cấp tốc độ.',
      },
      {
        id: 'd',
        statement: 'Địa chỉ MAC của card mạng có thể thay đổi tùy ý bởi người dùng thông qua cài đặt phần mềm, do đó không đáng tin cậy để nhận dạng thiết bị trong mạng.',
        isCorrect: false,
        explanation: 'Sai (một phần). Địa chỉ MAC được ghi cứng trong phần cứng NIC bởi nhà sản xuất và về lý thuyết là duy nhất toàn cầu. Mặc dù có thể "giả mạo" MAC bằng phần mềm (MAC spoofing), nhưng MAC vẫn là cơ chế nhận dạng chính trong mạng LAN.',
      },
    ],
    level: 'Thông hiểu (Bài 3)',
    lesson: 'Bài 3. Một số thiết bị mạng thông dụng',
  },
  {
    id: 8,
    context: 'Nhóm học sinh lớp 12 thảo luận về an toàn thông tin cá nhân trên mạng xã hội. Các em xem xét nhiều tình huống thực tế về quyền riêng tư và ứng xử có trách nhiệm trong không gian số, đặc biệt liên quan đến thông tin bạn bè và dữ liệu cá nhân.',
    items: [
      {
        id: 'a',
        statement: 'Bật tính năng xác thực hai yếu tố (2FA) cho tài khoản mạng xã hội giúp tăng cường bảo mật, ngăn người khác truy cập dù biết mật khẩu.',
        isCorrect: true,
        explanation: 'Đúng. Xác thực hai yếu tố (2FA) yêu cầu thêm bước xác minh (mã OTP gửi qua SMS hoặc ứng dụng xác thực) ngoài mật khẩu. Dù hacker có mật khẩu, họ vẫn không thể đăng nhập nếu không có mã 2FA.',
      },
      {
        id: 'b',
        statement: 'Chia sẻ ảnh chứa vị trí địa lý (GPS tag) ở nhà riêng hoặc trường học lên mạng xã hội công khai có thể vô tình tiết lộ địa điểm thường xuyên lui tới của bạn cho người lạ.',
        isCorrect: true,
        explanation: 'Đúng. Nhiều điện thoại tự động gắn thông tin GPS vào ảnh. Khi đăng ảnh có GPS tag lên mạng, bất kỳ ai cũng có thể xem tọa độ chính xác nơi chụp ảnh — nguy cơ lộ địa chỉ nhà, trường học.',
      },
      {
        id: 'c',
        statement: 'Dùng cùng một mật khẩu cho tất cả tài khoản mạng xã hội là cách tốt vì dễ nhớ và tiện lợi trong quản lý tài khoản hàng ngày.',
        isCorrect: false,
        explanation: 'Sai. Dùng cùng mật khẩu cho nhiều tài khoản rất nguy hiểm: nếu một tài khoản bị lộ mật khẩu (do dữ liệu bị đánh cắp hoặc bị hack), tất cả các tài khoản còn lại đều bị xâm phạm. Nên dùng mật khẩu khác nhau và mạnh cho từng tài khoản.',
      },
      {
        id: 'd',
        statement: 'Trước khi đăng thông tin về bạn bè lên mạng xã hội, nên xin phép họ vì mỗi người có quyền kiểm soát thông tin cá nhân của mình trong không gian số.',
        isCorrect: true,
        explanation: 'Đúng. Quyền kiểm soát thông tin cá nhân là quyền cơ bản của mỗi người. Đăng thông tin, hình ảnh của người khác mà không có sự đồng ý là vi phạm quyền riêng tư và có thể vi phạm pháp luật về bảo vệ dữ liệu cá nhân.',
      },
    ],
    level: 'Vận dụng (Bài 6)',
    lesson: 'Bài 6. Giao tiếp và ứng xử trong không gian mạng',
  },
];

export const shortAnswerQuestions3: ShortAnswerQuestion[] = [
  {
    id: 9,
    question: 'Trong mô hình TCP/IP, địa chỉ MAC hoạt động ở lớp nào để nhận dạng thiết bị trong mạng LAN? Nhập tên lớp bằng tiếng Anh (2 từ, không kể chữ "Layer").',
    correctAnswer: 'Link Layer',
    explanation: 'Địa chỉ MAC (Media Access Control) hoạt động ở tầng Liên kết (Link Layer) của mô hình TCP/IP — tầng thấp nhất, chịu trách nhiệm truyền dữ liệu trong phạm vi mạng LAN cục bộ giữa các thiết bị trực tiếp kết nối với nhau qua Switch.',
    points: 1.0,
    level: 'Thông hiểu (Bài 4)',
    lesson: 'Bài 4. Giao thức mạng',
  },
  {
    id: 10,
    question: 'Khi thực hiện Map Network Drive trong Windows, ổ đĩa mạng được gắn sẽ hiển thị như thế nào trong File Explorer? Nhập câu trả lời (ổ đĩa ảo với ký tự ổ đĩa như ổ ... nào đó).',
    correctAnswer: 'ổ đĩa ảo',
    explanation: 'Sau khi Map Network Drive, thư mục chia sẻ trên mạng xuất hiện trong File Explorer như một ổ đĩa ảo (ví dụ: ổ Z:, ổ Y:...) với biểu tượng ổ mạng. Người dùng có thể truy cập ngay từ This PC mà không cần nhập đường dẫn UNC mỗi lần.',
    points: 1.0,
    level: 'Vận dụng (Bài 5)',
    lesson: 'Bài 5. Thực hành chia sẻ tài nguyên trên mạng',
  },
];

export const essayQuestions3: EssayQuestion[] = [
  {
    id: 11,
    question: 'Kể tên 3 sản phẩm/ứng dụng AI mà em đã từng sử dụng hoặc gặp trong cuộc sống. Với mỗi sản phẩm, nêu: (1) tên sản phẩm, (2) nhánh AI được sử dụng, (3) lợi ích mang lại.',
    points: 1.5,
    criteria: [
      {
        step: 'Mỗi sản phẩm AI (0.5đ/sản phẩm × 3 = 1.5đ)',
        detail: 'Gợi ý câu trả lời mẫu:\n1. Google Dịch → NLP (Xử lý ngôn ngữ tự nhiên) → Dịch văn bản nhanh giữa 100+ ngôn ngữ, hỗ trợ học ngoại ngữ.\n2. FaceID trên iPhone → Computer Vision + Deep Learning → Mở khóa điện thoại bảo mật cao chỉ bằng khuôn mặt.\n3. YouTube gợi ý video → Machine Learning (Recommender System) → Gợi ý nội dung phù hợp sở thích, tiết kiệm thời gian tìm kiếm.\n(Học sinh có thể nêu các sản phẩm khác: ChatGPT, Siri, Spotify gợi ý nhạc, Filter ảnh TikTok, xe tự lái...)',
        points: 1.5,
      },
    ],
    level: 'Nhận biết (Bài 1)',
    lesson: 'Bài 1. Làm quen với Trí tuệ nhân tạo',
  },
  {
    id: 12,
    question: 'Mô tả sơ đồ kết nối mạng gia đình điển hình gồm: router kết nối Internet, 3 máy tính có dây và 2 điện thoại kết nối Wi-Fi. Nêu vai trò của từng thiết bị trong sơ đồ đó.',
    points: 1.5,
    criteria: [
      {
        step: 'Sơ đồ kết nối và thiết bị cần thiết',
        detail: 'Thiết bị trong sơ đồ mạng gia đình:\n- Modem (hoặc Modem tích hợp Router): kết nối đường truyền Internet từ nhà cung cấp ISP.\n- Router Wi-Fi (thường tích hợp Switch 4 cổng + Modem): quản lý kết nối, cấp IP động (DHCP), phát sóng Wi-Fi.\n- Cáp mạng Cat5e/Cat6: nối Router đến 3 máy tính để bàn (kết nối có dây ổn định).\n- 2 điện thoại kết nối Wi-Fi không dây đến Router.',
        points: 0.75,
      },
      {
        step: 'Vai trò của từng thiết bị',
        detail: '1. Modem: biến đổi tín hiệu từ ISP thành tín hiệu số cho mạng nội bộ.\n2. Router: phân phối kết nối Internet đến tất cả thiết bị, cấp địa chỉ IP tự động cho từng thiết bị, bảo vệ mạng nội bộ khỏi Internet (NAT/Firewall).\n3. Switch tích hợp trong Router: kết nối 3 máy tính bằng cáp có dây tốc độ cao.\n4. Ăng-ten Wi-Fi: phát sóng để 2 điện thoại kết nối không dây.\n5. Card mạng (NIC) của mỗi máy tính: giao tiếp vật lý với Router qua cáp.',
        points: 0.75,
      },
    ],
    level: 'Vận dụng (Bài 3)',
    lesson: 'Bài 3. Một số thiết bị mạng thông dụng',
  },
];
