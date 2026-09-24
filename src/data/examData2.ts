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

export const specData2: SpecRow[] = [
  {
    tt: '1',
    chuDe: 'CHỦ ĐỀ 1. MÁY TÍNH VÀ XÃ HỘI TRI THỨC',
    noiDung: 'Bài 1. Làm quen với Trí tuệ nhân tạo',
    yccđ: [
      {
        level: 'Biết',
        content: 'Phân biệt được các nhánh chính của AI: Machine Learning (Học máy), Deep Learning (Học sâu), NLP (Xử lý ngôn ngữ tự nhiên), Computer Vision (Thị giác máy tính). Nhận biết được ví dụ cụ thể của từng nhánh.',
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
        content: 'Phân tích được cơ hội và thách thức khi AI ứng dụng trong giáo dục và sản xuất. Lý giải được tại sao Machine Learning cần lượng dữ liệu lớn để đạt độ chính xác cao.',
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
        content: 'So sánh được sự khác biệt giữa Hub và Switch về nguyên lý chuyển tiếp dữ liệu. Nêu được chức năng của Router trong kết nối liên mạng (internetworking) và định tuyến gói tin.',
        competence: 'NLa',
      },
      {
        level: 'Vận dụng',
        content: 'Giải thích được lý do nên dùng Switch thay Hub trong mạng LAN hiện đại để đảm bảo hiệu năng và bảo mật.',
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
        content: 'So sánh được giao thức TCP và UDP về đặc điểm truyền tin cậy và không tin cậy. Giải thích được sự phân cấp mạng trong bộ giao thức TCP/IP.',
        competence: 'NLa',
      },
      {
        level: 'Vận dụng',
        content: 'Lựa chọn được giao thức phù hợp (TCP hoặc UDP) cho từng loại ứng dụng mạng cụ thể.',
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
        content: 'Phân biệt được quyền truy cập Read-only và Full control khi chia sẻ thư mục. Nhận biết được đường dẫn UNC (\\\\TenMay\\ThuMuc) để truy cập tài nguyên mạng.',
        competence: 'NLb',
      },
      {
        level: 'Vận dụng',
        content: 'Thiết lập được chia sẻ thư mục với mức quyền phù hợp cho từng nhóm người dùng trong mạng LAN.',
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
        content: 'Phân biệt được các khái niệm: tự do ngôn luận, phát ngôn thù địch (hate speech), quấy rối mạng (cyberbullying) trong không gian số. Giải thích được quy định pháp luật Việt Nam về phát tán thông tin sai lệch.',
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
    question: 'Nhánh nào của AI chuyên xử lý và hiểu ngôn ngữ của con người, giúp máy tính dịch thuật, tóm tắt văn bản và trả lời câu hỏi?',
    options: [
      { label: 'A', text: 'Computer Vision (Thị giác máy tính) — nhận dạng và phân tích hình ảnh, video.' },
      { label: 'B', text: 'NLP - Natural Language Processing (Xử lý ngôn ngữ tự nhiên).' },
      { label: 'C', text: 'Robotics (Người máy) — lập trình robot thực hiện tác vụ vật lý.' },
      { label: 'D', text: 'Expert Systems (Hệ chuyên gia) — lưu trữ kiến thức từ chuyên gia con người.' },
    ],
    correctAnswer: 'B',
    explanation: 'NLP (Natural Language Processing - Xử lý ngôn ngữ tự nhiên) là nhánh AI cho phép máy tính hiểu, phân tích và tạo ra ngôn ngữ con người. Ứng dụng: Google Translate, ChatGPT, trợ lý giọng nói, phân tích cảm xúc.',
    level: 'Nhận biết',
    lesson: 'Bài 1. Làm quen với Trí tuệ nhân tạo',
  },
  {
    id: 2,
    question: 'Trong lĩnh vực giáo dục, AI có thể hỗ trợ học sinh như thế nào theo nội dung SGK Tin 12?',
    options: [
      { label: 'A', text: 'Thay thế hoàn toàn giáo viên trong việc giảng dạy kiến thức cho học sinh.' },
      { label: 'B', text: 'Cá nhân hóa lộ trình học tập dựa trên điểm mạnh/yếu, theo dõi tiến độ và cung cấp bài tập phù hợp cho từng học sinh.' },
      { label: 'C', text: 'Chỉ dùng để kiểm tra bài làm tự luận thay cho giáo viên.' },
      { label: 'D', text: 'Tự động cấp bằng tốt nghiệp dựa trên dữ liệu học tập lưu trữ trong hệ thống.' },
    ],
    correctAnswer: 'B',
    explanation: 'AI trong giáo dục tập trung vào học tập cá nhân hóa (personalized learning): phân tích điểm mạnh, điểm yếu của từng học sinh, điều chỉnh nội dung và tốc độ học phù hợp, gợi ý tài liệu bổ sung. AI hỗ trợ chứ không thay thế giáo viên.',
    level: 'Thông hiểu',
    lesson: 'Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống',
  },
  {
    id: 3,
    question: 'Sự khác biệt cơ bản nhất giữa Hub và Switch trong mạng LAN là gì?',
    options: [
      { label: 'A', text: 'Hub đắt hơn Switch vì có nhiều tính năng bảo mật hơn.' },
      { label: 'B', text: 'Hub gửi dữ liệu đến tất cả các cổng (broadcast), trong khi Switch gửi dữ liệu thông minh chỉ đến đúng cổng đích dựa trên địa chỉ MAC.' },
      { label: 'C', text: 'Switch chỉ hoạt động với mạng không dây Wi-Fi, còn Hub chỉ dùng cho mạng có dây.' },
      { label: 'D', text: 'Hub có thể kết nối nhiều mạng LAN với nhau, còn Switch chỉ dùng trong một mạng LAN duy nhất.' },
    ],
    correctAnswer: 'B',
    explanation: 'Hub hoạt động theo nguyên lý broadcast: khi nhận dữ liệu từ một cổng, gửi đến TẤT CẢ các cổng còn lại (kể cả máy tính không cần nhận), gây lãng phí băng thông và xung đột dữ liệu. Switch thông minh hơn: dùng bảng MAC để chuyển gói tin đúng đến cổng đích.',
    level: 'Nhận biết',
    lesson: 'Bài 3. Một số thiết bị mạng thông dụng',
  },
  {
    id: 4,
    question: 'Ứng dụng nào sau đây sử dụng giao thức UDP thay vì TCP vì cần truyền nhanh, chấp nhận mất một vài gói tin nhỏ?',
    options: [
      { label: 'A', text: 'Tải file từ Internet (HTTP/HTTPS download).' },
      { label: 'B', text: 'Gửi email qua giao thức SMTP.' },
      { label: 'C', text: 'Gọi video call thời gian thực (Zoom, Google Meet).' },
      { label: 'D', text: 'Đăng nhập vào trang web ngân hàng qua HTTPS.' },
    ],
    correctAnswer: 'C',
    explanation: 'Gọi video call thời gian thực dùng UDP vì: cần truyền nhanh, chấp nhận mất vài gói tin nhỏ (không ảnh hưởng nhiều đến chất lượng âm thanh/hình ảnh), quan trọng là độ trễ thấp. TCP không phù hợp vì cơ chế xác nhận lại sẽ gây trễ quá lớn.',
    level: 'Vận dụng',
    lesson: 'Bài 4. Giao thức mạng',
  },
  {
    id: 5,
    question: 'Trong mạng LAN, đường dẫn UNC (Universal Naming Convention) có dạng nào để truy cập thư mục được chia sẻ?',
    options: [
      { label: 'A', text: 'http://TenMay/ThuMuc — giống đường dẫn website.' },
      { label: 'B', text: '\\\\TenMay\\TenThuMucChiaSe — dùng hai dấu gạch chéo ngược và tên máy.' },
      { label: 'C', text: 'ftp://TenMay/ThuMuc — giao thức truyền file FTP.' },
      { label: 'D', text: 'C:\\TenMay\\ThuMuc — đường dẫn tệp cục bộ trên ổ C.' },
    ],
    correctAnswer: 'B',
    explanation: 'Đường dẫn UNC có cú pháp: \\\\TenMay\\TenThuMucChiaSe (hai dấu gạch chéo ngược + tên máy chủ chia sẻ + tên thư mục được chia sẻ). Ví dụ: \\\\MAYTINH01\\TaiLieu để truy cập thư mục TaiLieu trên máy MAYTINH01 trong mạng LAN.',
    level: 'Nhận biết',
    lesson: 'Bài 5. Thực hành chia sẻ tài nguyên trên mạng',
  },
  {
    id: 6,
    question: 'Hành vi nào sau đây được gọi là "cyberbullying" (quấy rối mạng) theo nội dung Bài 6 SGK Tin 12?',
    options: [
      { label: 'A', text: 'Gửi email thương mại đến nhiều người không cùng lúc (spam).' },
      { label: 'B', text: 'Sử dụng công nghệ số để liên tục gây tổn hại, đe dọa, làm xấu hổ hoặc cô lập một cá nhân.' },
      { label: 'C', text: 'Tải phần mềm miễn phí từ Internet mà không cần trả tiền bản quyền.' },
      { label: 'D', text: 'Truy cập trang web nước ngoài thông qua mạng riêng ảo VPN.' },
    ],
    correctAnswer: 'B',
    explanation: 'Cyberbullying (quấy rối mạng) là hành vi sử dụng công nghệ số (điện thoại, mạng xã hội, email...) để liên tục đe dọa, làm nhục, cô lập hoặc gây tổn hại tâm lý cho một người. Đây là vấn đề nghiêm trọng trong không gian mạng được đề cập trong Bài 6.',
    level: 'Thông hiểu',
    lesson: 'Bài 6. Giao tiếp và ứng xử trong không gian mạng',
  },
];

export const trueFalseQuestions2: TrueFalseQuestion[] = [
  {
    id: 7,
    context: 'Nhà máy sản xuất điện tử muốn ứng dụng AI để tự động hóa dây chuyền sản xuất và kiểm soát chất lượng sản phẩm. Ban giám đốc tổ chức cuộc họp để thảo luận về cơ hội, thách thức và những thay đổi cần thiết khi triển khai AI vào quy trình sản xuất hiện tại.',
    items: [
      {
        id: 'a',
        statement: 'AI có thể được dùng trong kiểm soát chất lượng bằng cách dùng camera và thị giác máy tính (Computer Vision) để tự động phát hiện lỗi trên sản phẩm nhanh hơn và chính xác hơn người kiểm tra bằng mắt thường.',
        isCorrect: true,
        explanation: 'Đúng. Computer Vision AI có thể quét hàng nghìn sản phẩm mỗi giờ, phát hiện lỗi kích thước, màu sắc, vết trầy xước với độ chính xác cao hơn và không bị mỏi như con người.',
      },
      {
        id: 'b',
        statement: 'Khi nhà máy ứng dụng AI và robot vào sản xuất, tất cả công nhân đang làm việc sẽ ngay lập tức mất việc làm và không có giải pháp thay thế.',
        isCorrect: false,
        explanation: 'Sai. Mặc dù AI có thể thay thế một số công việc lặp đi lặp lại, nhưng cũng tạo ra nhiều việc làm mới như kỹ sư AI, người bảo trì robot, chuyên gia dữ liệu. Quá trình chuyển đổi cần đào tạo lại lực lượng lao động.',
      },
      {
        id: 'c',
        statement: 'Machine Learning cần lượng dữ liệu huấn luyện lớn và chất lượng cao để đạt được độ chính xác tốt — đây là một yêu cầu và thách thức khi triển khai AI trong nhà máy.',
        isCorrect: true,
        explanation: 'Đúng. Chất lượng và số lượng dữ liệu huấn luyện là yếu tố quyết định hiệu quả của hệ thống AI. Nhà máy cần đầu tư hệ thống thu thập, lưu trữ và làm sạch dữ liệu trước khi huấn luyện mô hình AI.',
      },
      {
        id: 'd',
        statement: 'Robot AI trong sản xuất có thể hoạt động 24/7 mà không cần nghỉ ngơi, là lợi thế rõ ràng về năng suất so với công nhân người.',
        isCorrect: true,
        explanation: 'Đúng. Robot và hệ thống AI tự động có thể hoạt động liên tục không nghỉ, không cần lương thêm giờ, không bị mệt mỏi — đây là một trong những lợi thế năng suất rõ ràng của tự động hóa bằng AI.',
      },
    ],
    level: 'Thông hiểu (Bài 2)',
    lesson: 'Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống',
  },
  {
    id: 8,
    context: 'Trong buổi sinh hoạt ngoại khóa về Luật An ninh mạng, các học sinh thảo luận về quyền và trách nhiệm khi tham gia mạng xã hội. Giáo viên đưa ra một số tình huống thực tế liên quan đến ứng xử trong không gian mạng để học sinh phân tích.',
    items: [
      {
        id: 'a',
        statement: 'Tự do ngôn luận trên mạng xã hội có giới hạn: không được phép phát tán thông tin sai sự thật, kích động thù địch hoặc xúc phạm danh dự người khác.',
        isCorrect: true,
        explanation: 'Đúng. Điều 16, 17 Luật An ninh mạng 2018 quy định rõ các hành vi bị cấm trên không gian mạng, trong đó có: đưa thông tin sai sự thật gây hoang mang, xúc phạm danh dự, nhân phẩm cá nhân, kích động thù địch.',
      },
      {
        id: 'b',
        statement: 'Đăng tải hình ảnh, thông tin cá nhân của người khác lên mạng mà không có sự đồng ý của họ có thể vi phạm quyền bảo vệ dữ liệu cá nhân theo pháp luật Việt Nam.',
        isCorrect: true,
        explanation: 'Đúng. Quyền bảo vệ dữ liệu cá nhân được quy định trong Nghị định 13/2023/NĐ-CP. Việc đăng thông tin cá nhân của người khác mà không được đồng ý là vi phạm pháp luật.',
      },
      {
        id: 'c',
        statement: 'Sử dụng ngôn ngữ văn minh, tích cực trên mạng xã hội không đóng góp gì cho môi trường số lành mạnh vì hành vi của một cá nhân không ảnh hưởng đến cộng đồng mạng.',
        isCorrect: false,
        explanation: 'Sai. Mỗi cá nhân đều góp phần tạo dựng văn hóa không gian mạng. Hành vi ứng xử văn minh lan tỏa tích cực trong cộng đồng; ngược lại, hành vi tiêu cực cũng lây lan và tạo ra môi trường mạng độc hại.',
      },
      {
        id: 'd',
        statement: 'Khi phát hiện nội dung vi phạm (tin giả, bạo lực, khiêu dâm) trên mạng xã hội, người dùng nên báo cáo (report) để nền tảng xem xét xử lý, thay vì chia sẻ thêm.',
        isCorrect: true,
        explanation: 'Đúng. Báo cáo nội dung vi phạm là hành động có trách nhiệm của công dân số. Chia sẻ thêm nội dung vi phạm sẽ tiếp tay lan truyền thông tin độc hại, trong khi báo cáo giúp nền tảng xử lý và loại bỏ.',
      },
    ],
    level: 'Vận dụng (Bài 6)',
    lesson: 'Bài 6. Giao tiếp và ứng xử trong không gian mạng',
  },
];

export const shortAnswerQuestions2: ShortAnswerQuestion[] = [
  {
    id: 9,
    question: 'Giao thức nào trong bộ TCP/IP có chức năng tự động cấp phát địa chỉ IP cho các thiết bị khi chúng kết nối vào mạng? Nhập tên viết tắt (4 chữ cái in hoa).',
    correctAnswer: 'DHCP',
    explanation: 'DHCP (Dynamic Host Configuration Protocol) là giao thức tự động cấp phát địa chỉ IP, subnet mask, default gateway và DNS server cho các thiết bị khi kết nối mạng — tránh phải cấu hình IP thủ công cho từng máy. Đây là giao thức ứng dụng quan trọng trong TCP/IP được học trong Bài 4.',
    points: 1.0,
    level: 'Thông hiểu (Bài 4)',
    lesson: 'Bài 4. Giao thức mạng',
  },
  {
    id: 10,
    question: 'Khi chia sẻ thư mục trong Windows, quyền truy cập "Read-only" cho phép người dùng mạng làm gì? Nhập câu trả lời ngắn gọn (chỉ mở tệp và XEM, không được làm gì với tệp).',
    correctAnswer: 'đọc',
    explanation: 'Quyền "Read-only" (Chỉ đọc) cho phép người dùng mạng chỉ có thể mở và xem nội dung tệp trong thư mục được chia sẻ, không thể sửa đổi, xóa hay thêm tệp mới. Khác với "Full control" cho phép toàn quyền thao tác.',
    points: 1.0,
    level: 'Nhận biết (Bài 5)',
    lesson: 'Bài 5. Thực hành chia sẻ tài nguyên trên mạng',
  },
];

export const essayQuestions2: EssayQuestion[] = [
  {
    id: 11,
    question: 'Phân biệt Machine Learning (Học máy) và lập trình truyền thống. Cho ví dụ cụ thể về một ứng dụng Machine Learning mà em biết trong đời sống và giải thích cách nó "học" được.',
    points: 1.5,
    criteria: [
      {
        step: 'Phân biệt Machine Learning và lập trình truyền thống',
        detail: 'Lập trình truyền thống: lập trình viên viết tường minh từng quy tắc xử lý (nếu A thì làm B), máy tính chỉ làm đúng những gì được lập trình sẵn.\nMachine Learning: thay vì viết quy tắc, người ta cung cấp nhiều dữ liệu ví dụ có nhãn (ảnh mèo/chó, email spam/không spam...) để mô hình tự TÌM RA quy tắc phân loại thông qua quá trình huấn luyện (training).',
        points: 0.75,
      },
      {
        step: 'Ví dụ cụ thể và giải thích cách học',
        detail: 'Ví dụ: Bộ lọc spam email — Hệ thống được cung cấp hàng triệu email có nhãn "spam" và "không spam". Thuật toán phân tích các từ khóa, cấu trúc email để tự xây dựng mô hình phân loại. Sau khi huấn luyện, khi nhận email mới, mô hình dự đoán xác suất là spam dựa trên các đặc điểm đã học.\n(Học sinh có thể nêu ví dụ khác như: nhận dạng khuôn mặt, gợi ý sản phẩm, chẩn đoán bệnh từ ảnh y tế...)',
        points: 0.75,
      },
    ],
    level: 'Thông hiểu (Bài 1)',
    lesson: 'Bài 1. Làm quen với Trí tuệ nhân tạo',
  },
  {
    id: 12,
    question: 'Giải thích tại sao Switch được ưu tiên sử dụng hơn Hub trong mạng LAN hiện đại. Nêu ít nhất 2 ưu điểm của Switch so với Hub về hiệu năng và bảo mật dữ liệu.',
    points: 1.5,
    criteria: [
      {
        step: 'Ưu điểm về hiệu năng mạng',
        detail: 'Hub gửi dữ liệu đến TẤT CẢ các cổng (broadcast) → gây đụng độ dữ liệu (collision) khi nhiều máy gửi cùng lúc → làm chậm tốc độ mạng. Switch dùng bảng địa chỉ MAC để chỉ gửi đúng đến cổng đích → giảm đụng độ, tăng băng thông hiệu dụng. Mỗi cổng Switch có băng thông riêng (full-duplex), không chia sẻ như Hub.',
        points: 0.75,
      },
      {
        step: 'Ưu điểm về bảo mật',
        detail: 'Hub: tất cả máy trong mạng đều nhận được mọi gói dữ liệu → hacker có thể dùng phần mềm "packet sniffer" để nghe lén dữ liệu của máy khác rất dễ dàng.\nSwitch: chỉ gửi dữ liệu đến đúng máy đích → các máy khác không nhận được gói tin không dành cho mình → bảo mật hơn, khó nghe lén hơn.\n→ Vì 2 lý do trên, Switch là lựa chọn tiêu chuẩn cho mọi mạng LAN hiện đại.',
        points: 0.75,
      },
    ],
    level: 'Vận dụng (Bài 3)',
    lesson: 'Bài 3. Một số thiết bị mạng thông dụng',
  },
];
