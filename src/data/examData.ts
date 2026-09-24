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
  examCode: 'ĐỀ SỐ 1',
};

export const matrixData: MatrixRow[] = [
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

export const specData: SpecRow[] = [
  {
    tt: '1',
    chuDe: 'CHỦ ĐỀ 1. MÁY TÍNH VÀ XÃ HỘI TRI THỨC',
    noiDung: 'Bài 1. Làm quen với Trí tuệ nhân tạo',
    yccđ: [
      {
        level: 'Biết',
        content: 'Nêu được khái niệm Trí tuệ nhân tạo (AI - Artificial Intelligence). Kể tên được các lĩnh vực ứng dụng của AI trong đời sống như nhận dạng giọng nói, nhận dạng hình ảnh, xe tự lái, trợ lý ảo.',
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
        content: 'Giải thích được tác động tích cực và tiêu cực của AI trong các lĩnh vực y tế, giáo dục, sản xuất. Phân biệt được AI yếu (Narrow AI) và AI mạnh (General AI).',
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
        content: 'Kể tên và nêu được chức năng của các thiết bị mạng thông dụng: Hub, Switch, Router, Modem, Access Point, Card mạng (NIC). Phân biệt được sự khác nhau cơ bản giữa Hub và Switch.',
        competence: 'NLa',
      },
      {
        level: 'Vận dụng',
        content: 'Lựa chọn được thiết bị mạng phù hợp để xây dựng mạng LAN cho lớp học hoặc văn phòng nhỏ.',
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
        content: 'Giải thích được khái niệm giao thức mạng và vai trò của bộ giao thức TCP/IP. Phân biệt được địa chỉ IP, địa chỉ MAC. Nêu được cấu trúc địa chỉ IPv4.',
        competence: 'NLa',
      },
      {
        level: 'Vận dụng',
        content: 'Phân tích và xác định được địa chỉ mạng, địa chỉ máy trong một địa chỉ IPv4 cụ thể.',
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
        content: 'Nhận biết được khái niệm chia sẻ tài nguyên mạng. Kể tên được các loại tài nguyên có thể chia sẻ trên mạng LAN: thư mục, máy in, kết nối Internet.',
        competence: 'NLb',
      },
      {
        level: 'Vận dụng',
        content: 'Thực hiện được việc chia sẻ thư mục và truy cập tài nguyên được chia sẻ trong mạng LAN.',
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
        content: 'Giải thích được các quy tắc ứng xử văn minh trên mạng (Netiquette). Nhận biết được các hành vi vi phạm đạo đức, pháp luật trong không gian mạng như: tung tin giả, xúc phạm người khác, vi phạm bản quyền.',
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
    question: 'Trí tuệ nhân tạo (AI) được định nghĩa là gì theo nội dung SGK Tin học 12?',
    options: [
      { label: 'A', text: 'Phần mềm lập trình giúp máy tính thực hiện các phép tính số học nhanh hơn con người.' },
      { label: 'B', text: 'Khả năng của máy tính mô phỏng trí thông minh con người, thực hiện các nhiệm vụ như suy luận, học hỏi, nhận thức và giải quyết vấn đề.' },
      { label: 'C', text: 'Công nghệ kết nối các thiết bị điện tử thông qua Internet để trao đổi dữ liệu tự động.' },
      { label: 'D', text: 'Hệ thống phần cứng siêu mạnh được chế tạo từ vật liệu bán dẫn thế hệ mới.' },
    ],
    correctAnswer: 'B',
    explanation: 'Theo SGK Tin học 12 KNTT (Bài 1), Trí tuệ nhân tạo (AI - Artificial Intelligence) là khả năng của máy tính mô phỏng các chức năng trí tuệ của con người như: học hỏi, suy luận, giải quyết vấn đề, nhận thức và ngôn ngữ.',
    level: 'Nhận biết',
    lesson: 'Bài 1. Làm quen với Trí tuệ nhân tạo',
  },
  {
    id: 2,
    question: 'Ứng dụng nào sau đây là ví dụ điển hình của AI trong lĩnh vực y tế được đề cập trong SGK Tin 12?',
    options: [
      { label: 'A', text: 'Phần mềm kế toán tự động tính thuế thu nhập cho bệnh viện.' },
      { label: 'B', text: 'Hệ thống AI phân tích hình ảnh X-quang, MRI để hỗ trợ chẩn đoán bệnh với độ chính xác cao.' },
      { label: 'C', text: 'Ứng dụng đặt lịch khám bệnh trực tuyến qua điện thoại di động.' },
      { label: 'D', text: 'Máy tính bảng cho phép bác sĩ tra cứu toa thuốc điện tử.' },
    ],
    correctAnswer: 'B',
    explanation: 'Trong Bài 2 SGK Tin 12 KNTT, AI trong y tế điển hình là hệ thống phân tích hình ảnh y tế (X-quang, CT scan, MRI) để hỗ trợ bác sĩ chẩn đoán bệnh nhanh hơn và chính xác hơn, ví dụ phát hiện ung thư từ hình ảnh y tế.',
    level: 'Thông hiểu',
    lesson: 'Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống',
  },
  {
    id: 3,
    question: 'Thiết bị mạng nào sau đây có chức năng kết nối các máy tính trong cùng một mạng LAN và chuyển tiếp dữ liệu thông minh dựa trên địa chỉ MAC đến đúng cổng đích?',
    options: [
      { label: 'A', text: 'Hub (Bộ tập trung).' },
      { label: 'B', text: 'Modem.' },
      { label: 'C', text: 'Router (Bộ định tuyến).' },
      { label: 'D', text: 'Switch (Bộ chuyển mạch).' },
    ],
    correctAnswer: 'D',
    explanation: 'Switch (Bộ chuyển mạch) là thiết bị kết nối các thiết bị trong LAN và chuyển tiếp dữ liệu thông minh dựa trên bảng địa chỉ MAC - chỉ gửi gói tin đến đúng cổng đích, khác với Hub gửi đến tất cả các cổng.',
    level: 'Nhận biết',
    lesson: 'Bài 3. Một số thiết bị mạng thông dụng',
  },
  {
    id: 4,
    question: 'Địa chỉ IP 192.168.1.100 thuộc lớp mạng nào trong phân lớp địa chỉ IPv4?',
    options: [
      { label: 'A', text: 'Lớp A (Class A) — dải từ 1.0.0.0 đến 126.255.255.255.' },
      { label: 'B', text: 'Lớp B (Class B) — dải từ 128.0.0.0 đến 191.255.255.255.' },
      { label: 'C', text: 'Lớp C (Class C) — dải từ 192.0.0.0 đến 223.255.255.255.' },
      { label: 'D', text: 'Lớp D (Class D) — dùng cho truyền thông multicast.' },
    ],
    correctAnswer: 'C',
    explanation: 'Địa chỉ 192.168.1.100 có octet đầu là 192, nằm trong dải 192-223, thuộc Lớp C (Class C). Lớp C thường được dùng cho mạng LAN gia đình và văn phòng nhỏ với tối đa 254 máy tính.',
    level: 'Vận dụng',
    lesson: 'Bài 4. Giao thức mạng',
  },
  {
    id: 5,
    question: 'Trong mạng LAN của trường, loại tài nguyên nào có thể chia sẻ để tất cả máy tính trong mạng đều có thể in tài liệu mà không cần cắm cáp trực tiếp?',
    options: [
      { label: 'A', text: 'Chia sẻ thư mục chứa tệp tài liệu Word, Excel.' },
      { label: 'B', text: 'Chia sẻ kết nối USB của một máy tính cho máy tính khác.' },
      { label: 'C', text: 'Chia sẻ máy in qua mạng LAN, cho phép nhiều máy tính in ấn dùng chung một máy in.' },
      { label: 'D', text: 'Chia sẻ màn hình máy tính để các máy khác xem được nội dung hiển thị.' },
    ],
    correctAnswer: 'C',
    explanation: 'Chia sẻ máy in (Printer Sharing) qua mạng LAN là tính năng cho phép nhiều máy tính trong cùng mạng sử dụng chung một máy in mà không cần kết nối cáp trực tiếp — đây là ứng dụng thực tế của chia sẻ tài nguyên mạng (Bài 5).',
    level: 'Nhận biết',
    lesson: 'Bài 5. Thực hành chia sẻ tài nguyên trên mạng',
  },
  {
    id: 6,
    question: 'Hành vi nào sau đây vi phạm quy tắc ứng xử văn minh (Netiquette) trong không gian mạng?',
    options: [
      { label: 'A', text: 'Sử dụng ngôn ngữ lịch sự, tôn trọng khi bình luận trên mạng xã hội.' },
      { label: 'B', text: 'Kiểm tra thông tin trước khi chia sẻ và trích dẫn nguồn rõ ràng.' },
      { label: 'C', text: 'Đăng bình luận xúc phạm, đe dọa hoặc bình luận thù địch nhắm vào cá nhân người khác.' },
      { label: 'D', text: 'Báo cáo nội dung vi phạm cho nền tảng mạng xã hội để được xử lý.' },
    ],
    correctAnswer: 'C',
    explanation: 'Theo Bài 6 SGK Tin 12 KNTT, đăng bình luận xúc phạm, đe dọa hay thù địch người khác là vi phạm nghiêm trọng quy tắc ứng xử văn minh (Netiquette) và có thể vi phạm pháp luật về an toàn thông tin mạng.',
    level: 'Thông hiểu',
    lesson: 'Bài 6. Giao tiếp và ứng xử trong không gian mạng',
  },
];

export const trueFalseQuestions: TrueFalseQuestion[] = [
  {
    id: 7,
    context: 'Lớp 12A đang học về Trí tuệ nhân tạo. Thầy giáo đặt câu hỏi về các ứng dụng AI mà học sinh đã gặp trong cuộc sống. Nhiều học sinh kể về trợ lý giọng nói Siri/Google Assistant, bộ lọc ảnh trên mạng xã hội, hệ thống gợi ý phim của Netflix và xe tự lái Tesla. Thầy tiếp tục giải thích về sự khác biệt giữa AI yếu và AI mạnh trong bối cảnh hiện tại.',
    items: [
      {
        id: 'a',
        statement: 'Trợ lý giọng nói như Siri hay Google Assistant là ví dụ của AI yếu (Narrow AI) vì chỉ được huấn luyện để thực hiện các tác vụ ngôn ngữ cụ thể, không thể làm mọi việc như con người.',
        isCorrect: true,
        explanation: 'Đúng. AI yếu (Narrow AI) là AI được thiết kế và huấn luyện cho một nhiệm vụ cụ thể. Siri, Google Assistant chỉ xử lý ngôn ngữ tự nhiên, không thể tự học sang lĩnh vực hoàn toàn mới như con người.',
      },
      {
        id: 'b',
        statement: 'AI mạnh (General AI hay Strong AI) đã tồn tại rộng rãi và hiện đang được sử dụng phổ biến trong đời sống như điện thoại thông minh, máy tính cá nhân hiện tại.',
        isCorrect: false,
        explanation: 'Sai. AI mạnh (General AI) — có khả năng học và thực hiện mọi nhiệm vụ trí tuệ như con người — hiện vẫn chỉ là mục tiêu nghiên cứu, chưa tồn tại trong thực tế. Tất cả AI hiện tại đều là AI yếu.',
      },
      {
        id: 'c',
        statement: 'Hệ thống gợi ý phim của Netflix sử dụng AI để phân tích lịch sử xem của người dùng và đề xuất nội dung phù hợp với sở thích cá nhân.',
        isCorrect: true,
        explanation: 'Đúng. Netflix dùng thuật toán Machine Learning (một nhánh của AI) phân tích hành vi, thói quen xem phim của từng người dùng để cá nhân hóa danh sách gợi ý nội dung.',
      },
      {
        id: 'd',
        statement: 'Một trong những lo ngại khi AI phát triển là vấn đề thất nghiệp khi máy móc có thể thay thế con người trong nhiều công việc lặp đi lặp lại.',
        isCorrect: true,
        explanation: 'Đúng. Theo SGK Tin 12 Bài 2, tác động tiêu cực tiềm tàng của AI là nguy cơ tự động hóa thay thế lao động con người trong các công việc lặp đi lặp lại như sản xuất, kế toán, vận chuyển.',
      },
    ],
    level: 'Thông hiểu (Bài 2)',
    lesson: 'Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống',
  },
  {
    id: 8,
    context: 'Một nhóm bạn đang tranh luận về cách ứng xử trên mạng xã hội. Bạn An thường xuyên chia sẻ thông tin mà không kiểm tra nguồn gốc. Bạn Bình luôn dùng ngôn ngữ tôn trọng và kiểm tra thông tin trước khi đăng. Bạn Châu thỉnh thoảng chụp ảnh bạn bè và đăng lên mạng mà không hỏi phép. Bạn Dũng thích bình luận châm biếm và dùng biệt danh ẩn danh để tránh bị nhận ra.',
    items: [
      {
        id: 'a',
        statement: 'Hành động của bạn An — chia sẻ thông tin không kiểm tra nguồn — có thể góp phần lan truyền tin giả (fake news) và gây hại cho cộng đồng mạng.',
        isCorrect: true,
        explanation: 'Đúng. Chia sẻ thông tin chưa được kiểm chứng là hành vi thiếu trách nhiệm trên không gian mạng, dễ lan truyền tin giả, gây hoang mang dư luận — vi phạm nguyên tắc ứng xử văn minh trong Bài 6.',
      },
      {
        id: 'b',
        statement: 'Bạn Bình đang thực hiện đúng nguyên tắc Netiquette bằng cách sử dụng ngôn ngữ lịch sự và kiểm tra thông tin trước khi chia sẻ.',
        isCorrect: true,
        explanation: 'Đúng. Sử dụng ngôn ngữ tôn trọng và xác minh thông tin trước khi chia sẻ là hai trong số những nguyên tắc cốt lõi của ứng xử văn minh trong không gian mạng.',
      },
      {
        id: 'c',
        statement: 'Bạn Châu đăng ảnh bạn bè mà không xin phép là hành động hoàn toàn bình thường, không vi phạm bất kỳ quy tắc đạo đức nào vì đây là không gian công cộng.',
        isCorrect: false,
        explanation: 'Sai. Đăng ảnh người khác mà không có sự đồng ý là vi phạm quyền riêng tư cá nhân — một trong những vấn đề đạo đức quan trọng trong không gian mạng được đề cập trong Bài 6.',
      },
      {
        id: 'd',
        statement: 'Việc bạn Dũng dùng tài khoản ẩn danh để bình luận châm biếm không miễn trừ trách nhiệm pháp lý nếu các bình luận đó vi phạm pháp luật.',
        isCorrect: true,
        explanation: 'Đúng. Pháp luật Việt Nam (Luật An ninh mạng 2018) quy định người dùng mạng xã hội phải chịu trách nhiệm về nội dung đăng tải, dù dùng tài khoản ẩn danh — vì cơ quan chức năng có thể truy vết IP.',
      },
    ],
    level: 'Vận dụng (Bài 6)',
    lesson: 'Bài 6. Giao tiếp và ứng xử trong không gian mạng',
  },
];

export const shortAnswerQuestions: ShortAnswerQuestion[] = [
  {
    id: 9,
    question: 'Trong mạng TCP/IP, giao thức nào đảm bảo việc truyền dữ liệu tin cậy, có kiểm soát lỗi và xác nhận nhận dữ liệu giữa hai đầu kết nối? Nhập tên viết tắt của giao thức (3 chữ cái in hoa).',
    correctAnswer: 'TCP',
    explanation: 'TCP (Transmission Control Protocol) là giao thức ở tầng vận chuyển (Transport Layer), đảm bảo truyền dữ liệu tin cậy thông qua cơ chế bắt tay 3 bước (3-way handshake), xác nhận nhận (ACK) và kiểm soát lỗi. Cùng với IP tạo thành bộ giao thức TCP/IP.',
    points: 1.0,
    level: 'Thông hiểu (Bài 4)',
    lesson: 'Bài 4. Giao thức mạng',
  },
  {
    id: 10,
    question: 'Khi chia sẻ thư mục trên mạng LAN trong Windows, bạn cần vào phần nào để thiết lập quyền truy cập cho thư mục? Nhập đúng tên tab/thẻ xuất hiện khi bấm chuột phải vào thư mục và chọn Properties (Thuộc tính), sau đó chọn tab liên quan đến chia sẻ (nhập bằng tiếng Anh, 1 từ).',
    correctAnswer: 'Sharing',
    explanation: 'Trong Windows, để chia sẻ thư mục trên mạng LAN, người dùng bấm chuột phải vào thư mục → Properties → chọn tab "Sharing" (Chia sẻ) → nhấn "Share..." hoặc "Advanced Sharing" để thiết lập quyền truy cập.',
    points: 1.0,
    level: 'Vận dụng (Bài 5)',
    lesson: 'Bài 5. Thực hành chia sẻ tài nguyên trên mạng',
  },
];

export const essayQuestions: EssayQuestion[] = [
  {
    id: 11,
    question: 'Hãy nêu khái niệm Trí tuệ nhân tạo (AI). Kể tên và mô tả ngắn gọn 3 lĩnh vực ứng dụng nổi bật của AI trong cuộc sống hiện đại mà em biết từ SGK Tin học 12.',
    points: 1.5,
    criteria: [
      {
        step: 'Khái niệm Trí tuệ nhân tạo',
        detail: 'Trí tuệ nhân tạo (AI - Artificial Intelligence) là lĩnh vực khoa học máy tính nghiên cứu và phát triển các hệ thống máy tính có khả năng thực hiện các nhiệm vụ thường đòi hỏi trí thông minh của con người, bao gồm: học hỏi (Machine Learning), suy luận, nhận thức, xử lý ngôn ngữ tự nhiên và giải quyết vấn đề.',
        points: 0.5,
      },
      {
        step: '3 lĩnh vực ứng dụng AI (kể đúng 3 lĩnh vực, mỗi lĩnh vực 0.25đ)',
        detail: '1. Y tế: AI phân tích hình ảnh X-quang/MRI hỗ trợ chẩn đoán bệnh; robot phẫu thuật AI; dự đoán dịch bệnh.\n2. Giáo dục: hệ thống học cá nhân hóa (adaptive learning), chatbot hỗ trợ học sinh, chấm bài tự động.\n3. Giao thông: xe tự lái, hệ thống nhận dạng biển số, điều phối tín hiệu đèn giao thông thông minh.\n4. Sản xuất: robot công nghiệp, kiểm soát chất lượng bằng thị giác máy (computer vision).\n(Học sinh có thể nêu 3 trong số các lĩnh vực trên.)',
        points: 1.0,
      },
    ],
    level: 'Nhận biết (Bài 1)',
    lesson: 'Bài 1. Làm quen với Trí tuệ nhân tạo',
  },
  {
    id: 12,
    question: 'Trường học muốn xây dựng mạng LAN kết nối 20 máy tính trong phòng thực hành và chia sẻ 1 máy in cho tất cả. Hãy: (a) Kể tên các thiết bị mạng cần thiết, (b) Mô tả cách chia sẻ máy in để tất cả máy tính đều in được.',
    points: 1.5,
    criteria: [
      {
        step: '(a) Thiết bị mạng cần thiết',
        detail: 'Cần các thiết bị: Switch 24-cổng (để kết nối 20 máy tính + máy in + Router), Router (nếu cần kết nối Internet), cáp mạng UTP Cat5e/Cat6, Card mạng (NIC) cho mỗi máy tính. Nếu cần Wi-Fi có thể thêm Access Point.',
        points: 0.5,
      },
      {
        step: '(b) Cách chia sẻ máy in qua mạng LAN',
        detail: '1. Kết nối máy in bằng cáp USB vào một máy tính "máy chủ in" (print server).\n2. Trên máy chủ in: vào Control Panel → Devices and Printers → chuột phải vào máy in → Printer Properties → tab Sharing → tích "Share this printer" → đặt tên chia sẻ.\n3. Trên các máy tính khác: vào Control Panel → Add a printer → chọn "Add a network printer" → tìm máy in theo tên máy chủ hoặc địa chỉ IP → cài đặt driver in.\n4. Tất cả 20 máy tính có thể gửi lệnh in đến máy in dùng chung.',
        points: 1.0,
      },
    ],
    level: 'Vận dụng (Bài 3, 5)',
    lesson: 'Bài 3. Một số thiết bị mạng thông dụng',
  },
];
