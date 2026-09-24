import { MatrixRow, SpecRow, MultipleChoiceQuestion, TrueFalseQuestion, ShortAnswerQuestion, EssayQuestion } from '../types';

export const examInfo4 = {
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
  examCode: 'ĐỀ SỐ 4',
};

export const matrixData4: MatrixRow[] = [
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

export const specData4: SpecRow[] = [
  {
    tt: '1',
    chuDe: 'CHỦ ĐỀ 1. MÁY TÍNH VÀ XÃ HỘI TRI THỨC',
    noiDung: 'Bài 1. Làm quen với Trí tuệ nhân tạo',
    yccđ: [
      {
        level: 'Biết',
        content: 'Nêu được lịch sử phát triển sơ lược của AI từ 1950 đến nay. Nhận biết được tên nhà khoa học Alan Turing và "Bài kiểm tra Turing" (Turing Test). Hiểu được AI được xây dựng trên nền tảng dữ liệu lớn, sức mạnh tính toán và thuật toán.',
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
        content: 'Phân tích được vai trò của AI trong nghiên cứu khoa học: phân tích dữ liệu thiên văn học, dự đoán cấu trúc protein (AlphaFold), mô phỏng biến đổi khí hậu. Đánh giá được vai trò con người trong việc kiểm soát và định hướng phát triển AI.',
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
        content: 'Phân biệt được Access Point và Router về chức năng trong mạng không dây. Nêu được khái niệm mạng LAN, MAN, WAN theo phạm vi địa lý. Nhận biết được các chuẩn Wi-Fi phổ biến (Wi-Fi 5 / 802.11ac, Wi-Fi 6 / 802.11ax).',
        competence: 'NLa',
      },
      {
        level: 'Vận dụng',
        content: 'Đề xuất được giải pháp tăng cường phủ sóng Wi-Fi cho một tòa nhà nhiều tầng.',
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
        content: 'Giải thích được chức năng của DNS (Domain Name System) trong việc dịch tên miền thành địa chỉ IP. Mô tả được quá trình phân giải tên miền khi người dùng nhập địa chỉ web vào trình duyệt.',
        competence: 'NLa',
      },
      {
        level: 'Vận dụng',
        content: 'Phân tích được điều gì xảy ra khi máy tính không thể kết nối DNS server và cách khắc phục cơ bản.',
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
        content: 'Nhận biết được sự khác biệt giữa chia sẻ ngang hàng (Peer-to-Peer) và mô hình Client-Server trong chia sẻ tài nguyên mạng. Nêu được ưu và nhược điểm của mỗi mô hình.',
        competence: 'NLb',
      },
      {
        level: 'Vận dụng',
        content: 'Lựa chọn được mô hình chia sẻ tài nguyên phù hợp cho quy mô nhỏ (gia đình, nhóm học) hoặc quy mô lớn (doanh nghiệp, trường học).',
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
        content: 'Giải thích được tầm quan trọng của việc bảo vệ bản quyền nội dung số (văn bản, hình ảnh, âm nhạc, phần mềm). Phân biệt được vi phạm bản quyền và sử dụng hợp lý (Fair Use). Nhận biết được các hậu quả pháp lý của vi phạm bản quyền trực tuyến.',
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

export const multipleChoiceQuestions4: MultipleChoiceQuestion[] = [
  {
    id: 1,
    question: '"Bài kiểm tra Turing" (Turing Test) do nhà khoa học Alan Turing đề xuất năm 1950 nhằm mục đích gì?',
    options: [
      { label: 'A', text: 'Đo tốc độ xử lý của máy tính so với não người trong các bài toán toán học.' },
      { label: 'B', text: 'Kiểm tra xem một máy tính có thể trò chuyện bằng ngôn ngữ tự nhiên đủ thuyết phục để người dùng không phân biệt được với người thật không.' },
      { label: 'C', text: 'Đánh giá khả năng máy tính tự lập trình lại thuật toán của chính nó.' },
      { label: 'D', text: 'Xác định số lượng phép tính tối đa máy tính có thể thực hiện trong một giây.' },
    ],
    correctAnswer: 'B',
    explanation: 'Turing Test (1950) là bài kiểm tra trong đó người đánh giá giao tiếp bằng văn bản với một con người và một máy tính mà không biết cái nào là máy. Nếu người đánh giá không thể phân biệt, máy tính được coi là "thông minh". Đây là nền tảng lý thuyết cho AI.',
    level: 'Nhận biết',
    lesson: 'Bài 1. Làm quen với Trí tuệ nhân tạo',
  },
  {
    id: 2,
    question: 'Dự án AI AlphaFold của DeepMind (Google) đã giải quyết bài toán khoa học lớn nào trong nghiên cứu sinh học?',
    options: [
      { label: 'A', text: 'Giải mã toàn bộ bộ gen người (genome) nhanh hơn 1000 lần phương pháp truyền thống.' },
      { label: 'B', text: 'Dự đoán cấu trúc 3D của protein từ chuỗi amino acid — bài toán sinh học phân tử tồn tại 50 năm.' },
      { label: 'C', text: 'Tổng hợp thuốc điều trị ung thư mới bằng cách kết hợp hàng triệu công thức hóa học.' },
      { label: 'D', text: 'Tạo ra sinh vật sống nhân tạo bằng cách thiết kế ADN từ đầu với sự hỗ trợ của AI.' },
    ],
    correctAnswer: 'B',
    explanation: 'AlphaFold (DeepMind, 2020) là hệ thống AI đã giải quyết bài toán "gập protein" (protein folding) — dự đoán chính xác cấu trúc 3D của protein từ chuỗi amino acid. Bài toán này tồn tại 50 năm trong sinh học. Thành công này giúp đẩy nhanh nghiên cứu phát triển thuốc và hiểu bệnh di truyền.',
    level: 'Thông hiểu',
    lesson: 'Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống',
  },
  {
    id: 3,
    question: 'Access Point (điểm truy cập không dây) khác Router ở điểm nào?',
    options: [
      { label: 'A', text: 'Access Point có thể cấp địa chỉ IP cho các thiết bị, còn Router thì không.' },
      { label: 'B', text: 'Access Point chỉ phát sóng Wi-Fi để mở rộng vùng phủ sóng, không có chức năng định tuyến; Router vừa phát Wi-Fi vừa định tuyến và quản lý mạng.' },
      { label: 'C', text: 'Access Point là phiên bản nâng cấp của Router, có tất cả tính năng của Router cộng thêm băng thông rộng hơn.' },
      { label: 'D', text: 'Access Point chỉ dùng trong mạng WAN, còn Router chỉ dùng trong mạng LAN.' },
    ],
    correctAnswer: 'B',
    explanation: 'Access Point chỉ làm nhiệm vụ phát sóng Wi-Fi — cầu nối giữa mạng có dây (Ethernet từ Switch/Router) và thiết bị không dây. Nó KHÔNG có chức năng DHCP, NAT hay firewall. Router tích hợp đầy đủ: định tuyến, DHCP, NAT, firewall, và có thể tích hợp thêm Access Point.',
    level: 'Nhận biết',
    lesson: 'Bài 3. Một số thiết bị mạng thông dụng',
  },
  {
    id: 4,
    question: 'Khi bạn gõ "www.google.com" vào trình duyệt, bước đầu tiên máy tính thực hiện là gì để tìm địa chỉ IP của trang web đó?',
    options: [
      { label: 'A', text: 'Gửi yêu cầu HTTP trực tiếp đến máy chủ Google để lấy trang web.' },
      { label: 'B', text: 'Truy vấn máy chủ DNS để dịch tên miền "www.google.com" thành địa chỉ IP tương ứng.' },
      { label: 'C', text: 'Tìm kiếm địa chỉ IP trong bộ nhớ cache RAM và nếu không có thì dùng địa chỉ IP mặc định.' },
      { label: 'D', text: 'Gửi gói ARP để hỏi Switch trong mạng LAN về địa chỉ IP của Google.' },
    ],
    correctAnswer: 'B',
    explanation: 'Quá trình phân giải tên miền (DNS Resolution): máy tính truy vấn DNS server (thường là DNS của router hoặc của nhà mạng) để dịch "www.google.com" → địa chỉ IP (ví dụ: 142.250.185.46). Sau khi có IP, trình duyệt mới có thể gửi yêu cầu HTTP đến máy chủ Google.',
    level: 'Vận dụng',
    lesson: 'Bài 4. Giao thức mạng',
  },
  {
    id: 5,
    question: 'Trong mô hình chia sẻ Peer-to-Peer (ngang hàng), đặc điểm nào sau đây là ĐÚNG?',
    options: [
      { label: 'A', text: 'Cần có một máy chủ trung tâm (server) chuyên biệt để lưu trữ và quản lý tài nguyên.' },
      { label: 'B', text: 'Mỗi máy tính vừa đóng vai trò máy khách (client) vừa có thể là máy chủ (server) cung cấp tài nguyên cho máy khác.' },
      { label: 'C', text: 'Chỉ phù hợp với doanh nghiệp lớn có hàng trăm máy tính và bộ phận IT chuyên nghiệp.' },
      { label: 'D', text: 'Tất cả dữ liệu phải được mã hóa trước khi chia sẻ giữa các máy tính.' },
    ],
    correctAnswer: 'B',
    explanation: 'Mạng Peer-to-Peer (P2P / ngang hàng): mỗi máy tính đồng thời có thể là client (lấy tài nguyên) và server (cung cấp tài nguyên). Không cần máy chủ trung tâm riêng. Phù hợp cho nhóm nhỏ như gia đình, nhóm làm việc. Nhược điểm: khó quản lý khi quy mô lớn.',
    level: 'Nhận biết',
    lesson: 'Bài 5. Thực hành chia sẻ tài nguyên trên mạng',
  },
  {
    id: 6,
    question: 'Hành động nào sau đây vi phạm bản quyền nội dung số theo quy định pháp luật?',
    options: [
      { label: 'A', text: 'Trích dẫn một đoạn ngắn từ bài báo khoa học và ghi rõ tên tác giả, nguồn trong bài nghiên cứu.' },
      { label: 'B', text: 'Tải phim, nhạc có bản quyền từ trang web lậu về máy và chia sẻ lại cho bạn bè miễn phí.' },
      { label: 'C', text: 'Nghe nhạc trực tuyến trên Spotify với gói đăng ký trả phí hợp pháp.' },
      { label: 'D', text: 'Sử dụng hình ảnh có nhãn Creative Commons (CC) cho phép sử dụng miễn phí trong bài thuyết trình.' },
    ],
    correctAnswer: 'B',
    explanation: 'Tải và chia sẻ nội dung có bản quyền (phim, nhạc) từ trang web lậu mà không trả tiền cho chủ sở hữu là vi phạm Luật Sở hữu trí tuệ. Đây là vi phạm kép: vừa sao chép bất hợp pháp, vừa phân phối không có phép — có thể bị xử phạt hành chính hoặc hình sự.',
    level: 'Thông hiểu',
    lesson: 'Bài 6. Giao tiếp và ứng xử trong không gian mạng',
  },
];

export const trueFalseQuestions4: TrueFalseQuestion[] = [
  {
    id: 7,
    context: 'Nhà khoa học đang nghiên cứu ứng dụng AI trong dự báo thời tiết và biến đổi khí hậu. Họ sử dụng mô hình Machine Learning phân tích dữ liệu từ hàng nghìn trạm khí tượng, vệ tinh để dự đoán thời tiết chính xác hơn và mô phỏng kịch bản biến đổi khí hậu trong tương lai.',
    items: [
      {
        id: 'a',
        statement: 'AI có thể xử lý lượng dữ liệu khổng lồ từ nhiều nguồn (vệ tinh, radar, trạm đo) nhanh hơn các phương pháp dự báo truyền thống, giúp cải thiện độ chính xác của dự báo thời tiết.',
        isCorrect: true,
        explanation: 'Đúng. Mô hình AI (đặc biệt Deep Learning) có thể học từ petabyte dữ liệu khí tượng lịch sử, phát hiện các mẫu phức tạp mà phương pháp truyền thống khó nhận ra, từ đó cải thiện độ chính xác dự báo.',
      },
      {
        id: 'b',
        statement: 'Các trung tâm dữ liệu khổng lồ phục vụ AI tiêu thụ lượng điện năng rất lớn và thải ra nhiệt, đây là tác động tiêu cực của AI đến môi trường.',
        isCorrect: true,
        explanation: 'Đúng. Huấn luyện các mô hình AI lớn (như GPT-4, AlphaFold) tiêu thụ hàng triệu kWh điện và thải ra lượng CO2 đáng kể. Đây là một nghịch lý: AI dùng để nghiên cứu biến đổi khí hậu nhưng lại góp phần vào nó.',
      },
      {
        id: 'c',
        statement: 'Một khi mô hình AI đã được huấn luyện xong, nó có thể hoạt động mà không cần con người giám sát hoặc cập nhật thêm trong suốt vòng đời của nó.',
        isCorrect: false,
        explanation: 'Sai. Mô hình AI cần được giám sát, cập nhật định kỳ vì: dữ liệu thực tế thay đổi theo thời gian (khí hậu thay đổi), mô hình có thể bị "trôi" (model drift) và cho kết quả sai khi điều kiện thay đổi so với dữ liệu huấn luyện ban đầu.',
      },
      {
        id: 'd',
        statement: 'Dù AI hỗ trợ đắc lực trong khoa học, con người vẫn cần đóng vai trò kiểm soát, đặt mục tiêu đạo đức và chịu trách nhiệm về quyết định cuối cùng dựa trên kết quả của AI.',
        isCorrect: true,
        explanation: 'Đúng. AI là công cụ hỗ trợ, không thể tự đặt mục tiêu đạo đức hay chịu trách nhiệm pháp lý. Con người phải kiểm tra kết quả AI, xác nhận tính phù hợp và chịu trách nhiệm về quyết định cuối cùng — đặc biệt trong các lĩnh vực nhạy cảm như y tế, pháp luật, môi trường.',
      },
    ],
    level: 'Thông hiểu (Bài 2)',
    lesson: 'Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống',
  },
  {
    id: 8,
    context: 'Học sinh lớp 12 thảo luận về quyền sở hữu trí tuệ và bản quyền trong môi trường số. Lớp xem xét nhiều tình huống thực tế: sử dụng ảnh Internet cho bài thuyết trình, tải nhạc từ nhiều nguồn khác nhau, chia sẻ tài liệu học tập và sử dụng phần mềm máy tính.',
    items: [
      {
        id: 'a',
        statement: 'Sử dụng hình ảnh từ Google Images mà không kiểm tra giấy phép bản quyền và không ghi nguồn có thể vi phạm quyền tác giả của người chụp ảnh.',
        isCorrect: true,
        explanation: 'Đúng. Hình ảnh trên Google Images không có nghĩa là miễn phí sử dụng. Mỗi ảnh đều có tác giả và bản quyền riêng. Phải kiểm tra giấy phép (Creative Commons, Royalty-free...) và ghi nguồn khi sử dụng.',
      },
      {
        id: 'b',
        statement: 'Phần mềm miễn phí (Freeware) và phần mềm mã nguồn mở (Open Source) đều cho phép người dùng tự do sửa đổi mã nguồn và phân phối lại với bất kỳ điều kiện nào.',
        isCorrect: false,
        explanation: 'Sai. Freeware chỉ miễn phí sử dụng nhưng KHÔNG cho phép xem hay sửa mã nguồn. Open Source mới cho phép xem và sửa mã nguồn — nhưng phải tuân theo điều kiện cụ thể của giấy phép (GPL, MIT, Apache...) chứ không phải "bất kỳ điều kiện nào".',
      },
      {
        id: 'c',
        statement: 'Tải phần mềm có bản quyền (như Microsoft Office, Photoshop) từ trang web crack miễn phí không chỉ vi phạm bản quyền mà còn nguy hiểm vì phần mềm crack thường chứa mã độc (malware, virus).',
        isCorrect: true,
        explanation: 'Đúng. Phần mềm crack từ trang web không chính thống thường bị kẻ xấu gài thêm mã độc như ransomware, keylogger, trojan. Ngoài vi phạm Luật Sở hữu trí tuệ, người dùng còn tự đặt mình vào nguy cơ bảo mật nghiêm trọng.',
      },
      {
        id: 'd',
        statement: 'Chia sẻ tài liệu học tập (giáo trình, bài giảng của giáo viên) trên nhóm lớp không vì mục đích thương mại thì không vi phạm bản quyền trong mọi trường hợp.',
        isCorrect: false,
        explanation: 'Sai. Ngay cả chia sẻ phi thương mại cũng có thể vi phạm bản quyền nếu tài liệu không có giấy phép cho phép. Giáo trình của nhà xuất bản, bài giảng có bản quyền của giảng viên — dù chia sẻ miễn phí vẫn phải được sự cho phép của tác giả hoặc tuân theo quy định "sử dụng hợp lý" (Fair Use).',
      },
    ],
    level: 'Vận dụng (Bài 6)',
    lesson: 'Bài 6. Giao tiếp và ứng xử trong không gian mạng',
  },
];

export const shortAnswerQuestions4: ShortAnswerQuestion[] = [
  {
    id: 9,
    question: 'Giao thức DNS có chức năng dịch tên miền (domain name) thành gì để máy tính có thể kết nối đến đúng máy chủ? Nhập câu trả lời (2 từ, viết tắt tiếng Anh).',
    correctAnswer: 'địa chỉ IP',
    explanation: 'DNS (Domain Name System) chuyển đổi tên miền dễ nhớ (www.google.com) thành địa chỉ IP số học (142.250.185.46) mà các thiết bị mạng sử dụng để định vị và kết nối đến máy chủ đích.',
    points: 1.0,
    level: 'Thông hiểu (Bài 4)',
    lesson: 'Bài 4. Giao thức mạng',
  },
  {
    id: 10,
    question: 'Trong mô hình chia sẻ tài nguyên Client-Server, máy tính nào đóng vai trò lưu trữ và cung cấp tài nguyên tập trung cho các máy tính khác? Nhập 1 từ tiếng Anh.',
    correctAnswer: 'Server',
    explanation: 'Trong mô hình Client-Server, máy chủ (Server) là máy tính chuyên dụng lưu trữ tài nguyên (file, database, phần mềm, máy in...) và cung cấp dịch vụ cho các máy khách (Client) khi có yêu cầu. Đây là mô hình phổ biến trong các doanh nghiệp và trường học quy mô lớn.',
    points: 1.0,
    level: 'Nhận biết (Bài 5)',
    lesson: 'Bài 5. Thực hành chia sẻ tài nguyên trên mạng',
  },
];

export const essayQuestions4: EssayQuestion[] = [
  {
    id: 11,
    question: 'Alan Turing là ai và ông có đóng góp quan trọng nào cho lịch sử phát triển máy tính và Trí tuệ nhân tạo? Giải thích ý nghĩa của "Bài kiểm tra Turing" trong việc định nghĩa trí thông minh máy.',
    points: 1.5,
    criteria: [
      {
        step: 'Alan Turing và đóng góp cho khoa học máy tính',
        detail: 'Alan Turing (1912-1954) là nhà toán học và khoa học máy tính người Anh. Ông được coi là cha đẻ của khoa học máy tính lý thuyết và AI. Đóng góp nổi bật: đề xuất "Máy Turing" (mô hình tính toán lý thuyết là nền tảng cho máy tính ngày nay), giải mã máy Enigma của Đức trong Thế chiến II, và đặt nền móng lý thuyết cho AI.',
        points: 0.75,
      },
      {
        step: 'Giải thích Bài kiểm tra Turing và ý nghĩa',
        detail: 'Turing Test (1950): một người đánh giá giao tiếp bằng văn bản với một người thật và một máy tính (không biết cái nào là máy). Nếu người đánh giá không thể phân biệt đâu là máy, máy đó được coi là "thông minh". Ý nghĩa: là tiêu chí đo lường trí thông minh máy dựa trên hành vi quan sát được (không cần hiểu bên trong), tạo ra định nghĩa thực dụng về AI trong thời kỳ đầu. Ngày nay một số chatbot đã "vượt qua" Turing Test trong điều kiện hạn chế.',
        points: 0.75,
      },
    ],
    level: 'Nhận biết (Bài 1)',
    lesson: 'Bài 1. Làm quen với Trí tuệ nhân tạo',
  },
  {
    id: 12,
    question: 'Trường học có 3 tầng, mỗi tầng 2 phòng học, mỗi phòng 15 máy tính. Tín hiệu Wi-Fi từ một Router duy nhất không đủ mạnh để phủ sóng toàn bộ. Đề xuất giải pháp sử dụng Access Point để giải quyết vấn đề phủ sóng Wi-Fi và giải thích tại sao nên dùng Access Point thay vì mua thêm Router.',
    points: 1.5,
    criteria: [
      {
        step: 'Đề xuất giải pháp với Access Point',
        detail: 'Giải pháp: Đặt 1 Access Point cho mỗi phòng học hoặc mỗi tầng (tổng cần 6 AP cho 6 phòng, hoặc 3 AP cho 3 tầng tùy diện tích). Kết nối tất cả AP bằng cáp mạng Cat6 về Switch trung tâm đặt ở phòng máy chủ/tầng 1. Router chính vẫn quản lý toàn bộ mạng và kết nối Internet.',
        points: 0.75,
      },
      {
        step: 'Giải thích lý do dùng Access Point thay vì Router',
        detail: 'Lý do dùng AP thay Router:\n1. Mỗi Router có DHCP riêng → nếu dùng nhiều Router sẽ tạo ra nhiều mạng con khác nhau, gây phức tạp và khó quản lý.\n2. AP chỉ phát sóng Wi-Fi, không có DHCP/NAT → tất cả thiết bị vẫn dùng chung một mạng, một dải IP quản lý bởi Router chính → đơn giản hơn.\n3. AP rẻ hơn Router có cùng tính năng phủ sóng.\n4. Tất cả AP cùng SSID và mật khẩu → thiết bị di động tự động chuyển sang AP mạnh nhất khi di chuyển (roaming) mà không cần đổi Wi-Fi.',
        points: 0.75,
      },
    ],
    level: 'Vận dụng (Bài 3)',
    lesson: 'Bài 3. Một số thiết bị mạng thông dụng',
  },
];
