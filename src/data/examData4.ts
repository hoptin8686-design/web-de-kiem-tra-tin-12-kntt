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

export const specData4: SpecRow[] = [
  {
    tt: '1',
    chuDe: 'CHƯƠNG I. MÁY TÍNH VÀ XÃ HỘI TRI THỨC',
    noiDung: 'Bài 1. Hệ điều hành và phần mềm ứng dụng',
    yccđ: [
      {
        level: 'Biết',
        content: 'Nhận biết được vai trò của hệ điều hành trong việc quản lý bộ nhớ và lập lịch CPU. Kể tên được ít nhất 2 phần mềm ứng dụng thuộc mỗi nhóm chức năng: văn phòng, đồ họa, giải trí.',
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
        content: 'Giải thích được lý do tại sao cần cài đặt driver (trình điều khiển) cho thiết bị phần cứng mới. Mô tả được cách Windows Update giúp duy trì tính bảo mật và hiệu năng hệ thống.',
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
        content: 'Phân biệt được Router và Access Point về chức năng và vị trí trong mạng. Nêu được định nghĩa mạng không dây (Wi-Fi) và các chuẩn Wi-Fi phổ biến (802.11n, 802.11ac, 802.11ax).',
        competence: 'NLa',
      },
      {
        level: 'Vận dụng',
        content: 'Phân tích được vấn đề mạng thông thường và đề xuất giải pháp (ví dụ: tín hiệu yếu, nhiều người dùng cùng lúc).',
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
        content: 'So sánh tốc độ truyền dữ liệu giữa Bluetooth, Wi-Fi Direct và USB 3.0. Giải thích được nguyên lý kết nối Wi-Fi Direct không cần router trung gian.',
        competence: 'NLa',
      },
      {
        level: 'Vận dụng',
        content: 'Xử lý được tình huống: máy tính không nhận ra thiết bị ngoại vi khi kết nối và cần tìm cách khắc phục.',
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
        content: 'Phân biệt được tính khách quan và tính cập nhật trong bộ tiêu chí đánh giá thông tin. Nhận biết được các hệ quả tiêu cực khi chia sẻ thông tin sai lệch trên không gian số.',
        competence: 'NLb; NLe',
      },
      {
        level: 'Vận dụng',
        content: 'Áp dụng bộ tiêu chí đánh giá thông tin để nhận diện và không chia sẻ các tin giả (deepfake, clickbait).',
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
        content: 'Phân tích được ưu và nhược điểm của tìm kiếm thông thường so với tìm kiếm nâng cao. Vận dụng kết hợp nhiều toán tử để tìm chính xác tài liệu theo yêu cầu của bài nghiên cứu.',
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
    question: 'Hệ điều hành thực hiện chức năng "lập lịch CPU" nhằm mục đích gì?',
    options: [
      { label: 'A', text: 'Cài đặt tự động các bản vá bảo mật mới nhất từ nhà sản xuất phần mềm.' },
      { label: 'B', text: 'Phân chia thời gian xử lý của CPU cho nhiều tiến trình khác nhau để tất cả đều được chạy một cách công bằng và hiệu quả.' },
      { label: 'C', text: 'Tối ưu hóa tốc độ ghi/đọc dữ liệu trên ổ cứng SSD hoặc HDD.' },
      { label: 'D', text: 'Tự động sắp xếp các tệp theo thứ tự thời gian tạo ra trên ổ đĩa.' },
    ],
    correctAnswer: 'B',
    explanation: 'Lập lịch CPU (CPU Scheduling) là chức năng cốt lõi của hệ điều hành, giúp phân chia thời gian của bộ vi xử lý cho nhiều tiến trình đang chạy đồng thời, tạo cảm giác đa nhiệm mượt mà cho người dùng.',
    level: 'Nhận biết',
    lesson: 'Bài 1. Hệ điều hành và phần mềm ứng dụng',
  },
  {
    id: 2,
    question: 'Windows Update trong hệ điều hành Windows có vai trò quan trọng nhất là gì?',
    options: [
      { label: 'A', text: 'Cập nhật giao diện người dùng để trở nên đẹp và hiện đại hơn.' },
      { label: 'B', text: 'Tự động tải về và cài đặt các bản vá bảo mật, sửa lỗi và cải thiện hiệu năng cho hệ điều hành.' },
      { label: 'C', text: 'Đồng bộ tệp và thư mục với dịch vụ lưu trữ đám mây OneDrive.' },
      { label: 'D', text: 'Quét và loại bỏ phần mềm độc hại trên máy tính theo lịch trình định kỳ.' },
    ],
    correctAnswer: 'B',
    explanation: 'Windows Update là dịch vụ tự động của Microsoft giúp tải và cài đặt các bản vá bảo mật (security patches), sửa lỗi (bug fixes) và cập nhật driver. Đây là cơ chế quan trọng bảo vệ máy tính khỏi các lỗ hổng bảo mật mới được phát hiện.',
    level: 'Thông hiểu',
    lesson: 'Bài 2. Thực hành sử dụng hệ điều hành',
  },
  {
    id: 3,
    question: 'Access Point (điểm truy cập không dây) trong mạng máy tính có chức năng gì?',
    options: [
      { label: 'A', text: 'Kết nối mạng nội bộ (LAN) với mạng Internet thông qua nhà cung cấp dịch vụ.' },
      { label: 'B', text: 'Chuyển đổi tín hiệu điện từ đường truyền ADSL thành tín hiệu số cho máy tính.' },
      { label: 'C', text: 'Phát tín hiệu Wi-Fi để các thiết bị không dây có thể kết nối vào mạng LAN.' },
      { label: 'D', text: 'Lọc và chặn các gói tin độc hại từ bên ngoài truy cập vào mạng nội bộ.' },
    ],
    correctAnswer: 'C',
    explanation: 'Access Point là thiết bị phát sóng Wi-Fi, hoạt động như một cầu nối giữa mạng có dây (LAN) và các thiết bị không dây. Nó nhận kết nối từ Switch/Router qua cổng Ethernet và phát sóng Wi-Fi cho điện thoại, laptop kết nối không dây.',
    level: 'Nhận biết',
    lesson: 'Bài 3. Thiết bị mạng và giao thức mạng',
  },
  {
    id: 4,
    question: 'Học sinh A không thể kết nối tai nghe Bluetooth mới vào máy tính. Bước đầu tiên cần thực hiện để khắc phục là gì?',
    options: [
      { label: 'A', text: 'Ngay lập tức cài lại hệ điều hành vì đây là lỗi hệ thống nghiêm trọng.' },
      { label: 'B', text: 'Đảm bảo tai nghe đang ở chế độ ghép nối (pairing mode) và Bluetooth trên máy tính đã được bật, sau đó quét tìm thiết bị.' },
      { label: 'C', text: 'Kết nối tai nghe bằng cáp USB để kiểm tra xem tai nghe có hoạt động không.' },
      { label: 'D', text: 'Tắt tường lửa (Firewall) của máy tính vì nó đang chặn kết nối Bluetooth.' },
    ],
    correctAnswer: 'B',
    explanation: 'Khi ghép nối Bluetooth lần đầu (pairing), tai nghe phải ở chế độ pairing (thường nhấn giữ nút nguồn đến khi đèn nhấp nháy xanh/đỏ) và Bluetooth máy tính phải bật. Sau đó chọn "Add Bluetooth device" để máy tính quét và kết nối.',
    level: 'Vận dụng',
    lesson: 'Bài 4. Thực hành kết nối thiết bị số với máy tính',
  },
  {
    id: 5,
    question: 'Trong bộ tiêu chí đánh giá thông tin tin cậy, "tính khách quan" (Objectivity) được hiểu là gì?',
    options: [
      { label: 'A', text: 'Thông tin được viết bởi nhiều tác giả khác nhau để đảm bảo nhiều góc nhìn.' },
      { label: 'B', text: 'Thông tin không mang định kiến cá nhân, quảng cáo che đậy hoặc mục đích thao túng cảm xúc, trình bày trung thực dựa trên bằng chứng.' },
      { label: 'C', text: 'Thông tin được đăng tải công khai và bất kỳ ai cũng có thể đọc miễn phí.' },
      { label: 'D', text: 'Thông tin được kiểm duyệt bởi cơ quan nhà nước hoặc tổ chức quốc tế.' },
    ],
    correctAnswer: 'B',
    explanation: 'Tính khách quan (Objectivity) trong đánh giá thông tin tin cậy yêu cầu nội dung trình bày trung thực, không thiên vị, không phải quảng cáo ngụy trang, không sử dụng ngôn ngữ kích động cảm xúc để thao túng độc giả.',
    level: 'Nhận biết',
    lesson: 'Bài 5. Khái niệm và một số đặc điểm của thông tin tin cậy',
  },
  {
    id: 6,
    question: 'Khi tìm kiếm "tin tức -quảng cáo" trên Google, kết quả tìm kiếm sẽ thay đổi như thế nào?',
    options: [
      { label: 'A', text: 'Tìm kiếm sẽ chỉ trả về các trang web về quảng cáo và marketing.' },
      { label: 'B', text: 'Kết quả sẽ loại bỏ các trang có chứa từ "quảng cáo", giúp lọc bỏ nội dung quảng cáo không mong muốn.' },
      { label: 'C', text: 'Dấu trừ trước "quảng cáo" sẽ mở rộng tìm kiếm sang các chủ đề liên quan đến quảng cáo.' },
      { label: 'D', text: 'Tìm kiếm sẽ bị lỗi vì dấu trừ không phải toán tử hợp lệ trong Google.' },
    ],
    correctAnswer: 'B',
    explanation: 'Dấu trừ (-) đặt ngay trước một từ khóa (không có khoảng trắng giữa - và từ) sẽ loại bỏ các kết quả tìm kiếm có chứa từ đó. Ví dụ: "tin tức -quảng cáo" sẽ lọc bỏ trang web có từ "quảng cáo" trong nội dung.',
    level: 'Thông hiểu',
    lesson: 'Bài 6. Thực hành khai thác nguồn thông tin tin cậy',
  },
];

export const trueFalseQuestions4: TrueFalseQuestion[] = [
  {
    id: 7,
    context: 'Công ty A vừa mua 5 máy tính mới chạy Windows 11 cho nhân viên. Bộ phận IT cần cài đặt driver cho card màn hình, máy in và webcam đồng thời cần cấu hình Windows Update để đảm bảo bảo mật. Một nhân viên phản ánh rằng sau khi cắm webcam vào cổng USB, hệ thống hiện thông báo "Installing driver..." và webcam hoạt động được ngay mà không cần cài thủ công.',
    items: [
      {
        id: 'a',
        statement: 'Hiện tượng webcam được nhận diện và cài đặt driver tự động là nhờ công nghệ Plug and Play (PnP) tích hợp trong Windows.',
        isCorrect: true,
        explanation: 'Đúng. Công nghệ Plug and Play cho phép Windows tự động phát hiện phần cứng mới kết nối, tra cứu driver phù hợp (từ bộ nhớ cục bộ hoặc Windows Update) và cài đặt mà không cần thao tác thủ công.',
      },
      {
        id: 'b',
        statement: 'Driver (trình điều khiển) là phần mềm trung gian giúp hệ điều hành giao tiếp và điều khiển phần cứng theo đúng giao thức của nhà sản xuất.',
        isCorrect: true,
        explanation: 'Đúng. Driver là module phần mềm chuyên biệt cho từng thiết bị phần cứng, cung cấp giao diện lập trình (API) để hệ điều hành điều khiển thiết bị mà không cần biết chi tiết kỹ thuật phần cứng.',
      },
      {
        id: 'c',
        statement: 'Windows Update chỉ dùng để cập nhật giao diện người dùng và thêm tính năng mới; không có tác dụng vá lỗi bảo mật.',
        isCorrect: false,
        explanation: 'Sai. Chức năng quan trọng nhất của Windows Update là phân phối các bản vá bảo mật (security patches) để khắc phục các lỗ hổng mới được phát hiện, bên cạnh việc cải thiện tính năng và hiệu năng.',
      },
      {
        id: 'd',
        statement: 'Nếu Windows Update bị tắt lâu dài, máy tính có thể trở nên dễ bị tấn công bởi các loại mã độc khai thác lỗ hổng chưa được vá.',
        isCorrect: true,
        explanation: 'Đúng. Tắt Windows Update đồng nghĩa với việc không nhận các bản vá bảo mật, khiến hệ thống có thể bị tấn công qua các lỗ hổng đã biết mà đã có bản vá nhưng chưa được cài đặt.',
      },
    ],
    level: 'Thông hiểu (Bài 1, 2, 4)',
    lesson: 'Bài 2. Thực hành sử dụng hệ điều hành',
  },
  {
    id: 8,
    context: 'Một nhà báo trẻ đang viết bài về tác động của mạng xã hội đến sức khỏe tâm thần của học sinh. Nhà báo sử dụng nhiều nguồn thông tin khác nhau: bài đăng không rõ tác giả trên Facebook, báo cáo của WHO, nghiên cứu đăng trên tạp chí Lancet, và video clip 15 giây trên TikTok thiếu nguồn dẫn.',
    items: [
      {
        id: 'a',
        statement: 'Báo cáo của WHO (Tổ chức Y tế Thế giới) là nguồn thông tin đáng tin cậy hơn bài đăng Facebook không rõ tác giả.',
        isCorrect: true,
        explanation: 'Đúng. WHO là tổ chức quốc tế uy tín, có quy trình biên soạn dữ liệu khoa học chặt chẽ. Bài đăng Facebook ẩn danh không có bất kỳ cơ chế kiểm duyệt nào về tính chính xác.',
      },
      {
        id: 'b',
        statement: 'Video TikTok 15 giây không có nguồn dẫn cụ thể đủ tiêu chuẩn để trích dẫn trong bài báo khoa học hoặc báo chí chính thống.',
        isCorrect: true,
        explanation: 'Đúng. Video ngắn không có nguồn trích dẫn không đáp ứng tiêu chí về tính xác thực và nguồn gốc rõ ràng - hai trong năm tiêu chí đánh giá thông tin tin cậy.',
      },
      {
        id: 'c',
        statement: 'Một nghiên cứu đăng trên tạp chí Lancet (tạp chí y khoa hàng đầu thế giới có phản biện ngang hàng) có độ tin cậy thấp vì là tài liệu nước ngoài.',
        isCorrect: false,
        explanation: 'Sai. Tạp chí Lancet là một trong những tạp chí y khoa uy tín nhất thế giới với quy trình phản biện nghiêm ngặt. Xuất xứ nước ngoài không làm giảm độ tin cậy của nghiên cứu khoa học được kiểm chứng.',
      },
      {
        id: 'd',
        statement: 'Tính cập nhật (Currency) của thông tin đòi hỏi nhà báo ưu tiên sử dụng các nghiên cứu mới nhất so với nghiên cứu cùng chủ đề nhưng đã cũ hơn 10 năm.',
        isCorrect: true,
        explanation: 'Đúng. Đặc biệt trong y tế và khoa học xã hội, các kết luận mới thường điều chỉnh hoặc bổ sung nghiên cứu cũ. Tính cập nhật yêu cầu ưu tiên sử dụng tài liệu có ngày xuất bản gần nhất.',
      },
    ],
    level: 'Vận dụng (Bài 5)',
    lesson: 'Bài 5. Khái niệm và một số đặc điểm của thông tin tin cậy',
  },
];

export const shortAnswerQuestions4: ShortAnswerQuestion[] = [
  {
    id: 9,
    question: 'Trong mạng máy tính, thiết bị nào làm nhiệm vụ chuyển đổi tín hiệu tương tự (analog) từ đường dây điện thoại thành tín hiệu số (digital) để máy tính có thể sử dụng? Nhập tên thiết bị bằng tiếng Anh (1 từ).',
    correctAnswer: 'Modem',
    explanation: 'Modem (Modulator-Demodulator) thực hiện điều chế (modulation) và giải điều chế (demodulation) tín hiệu - chuyển đổi giữa tín hiệu số của máy tính và tín hiệu tương tự của đường truyền điện thoại hoặc cáp quang.',
    points: 1.0,
    level: 'Nhận biết (Bài 3)',
    lesson: 'Bài 3. Thiết bị mạng và giao thức mạng',
  },
  {
    id: 10,
    question: 'Tiêu chí đánh giá thông tin tin cậy nào liên quan đến việc xem xét thông tin có được viết để cung cấp kiến thức trung lập hay để thuyết phục, quảng cáo, hoặc gây cảm xúc cực đoan? Nhập tên tiêu chí bằng tiếng Việt (2 từ: tính + ...).',
    correctAnswer: 'Tính khách quan',
    explanation: 'Tính khách quan (Objectivity) là tiêu chí đánh giá xem thông tin có được trình bày trung lập, không thiên vị, không mang mục đích quảng cáo che đậy hay kích động cảm xúc. Đây là một trong 5 tiêu chí cốt lõi đánh giá thông tin tin cậy theo SGK Tin 12 KNTT.',
    points: 1.0,
    level: 'Nhận biết (Bài 5)',
    lesson: 'Bài 5. Khái niệm và một số đặc điểm của thông tin tin cậy',
  },
];

export const essayQuestions4: EssayQuestion[] = [
  {
    id: 11,
    question: 'Nêu vai trò của hệ điều hành trong việc quản lý bộ nhớ RAM. Giải thích điều gì xảy ra khi máy tính hết dung lượng RAM trong khi nhiều ứng dụng đang chạy đồng thời.',
    points: 1.5,
    criteria: [
      {
        step: 'Vai trò quản lý bộ nhớ RAM',
        detail: 'Hệ điều hành quản lý bộ nhớ RAM bằng cách: cấp phát vùng nhớ cho mỗi ứng dụng khi khởi chạy, theo dõi vùng nhớ nào đang được sử dụng, thu hồi bộ nhớ khi ứng dụng đóng lại, và ngăn các ứng dụng can thiệp vào vùng nhớ của nhau (memory protection).',
        points: 0.75,
      },
      {
        step: 'Cơ chế xử lý khi hết RAM',
        detail: 'Khi RAM đầy, hệ điều hành kích hoạt cơ chế bộ nhớ ảo (Virtual Memory): tạm thời chuyển các trang nhớ ít được sử dụng từ RAM ra file trang (pagefile.sys trên ổ cứng), giải phóng RAM cho ứng dụng cần thiết hơn. Quá trình này gọi là "paging" hoặc "swapping". Nhược điểm: ổ cứng chậm hơn RAM nhiều lần, gây ra tình trạng máy tính chạy chậm đáng kể (thrashing).',
        points: 0.75,
      },
    ],
    level: 'Nhận biết - Thông hiểu (Bài 1)',
    lesson: 'Bài 1. Hệ điều hành và phần mềm ứng dụng',
  },
  {
    id: 12,
    question: 'Nhà trường muốn mở rộng phủ sóng Wi-Fi cho một khu vực rộng (2 tầng, mỗi tầng 3 phòng học). Router hiện tại không đủ mạnh để phủ sóng toàn bộ. Hãy đề xuất giải pháp thiết bị mạng phù hợp và giải thích cách triển khai để đảm bảo kết nối Wi-Fi ổn định cho toàn bộ khu vực.',
    points: 1.5,
    criteria: [
      {
        step: 'Đề xuất giải pháp thiết bị',
        detail: 'Giải pháp phù hợp: Sử dụng nhiều Access Point (AP) bổ sung, đặt ở các vị trí chiến lược tại mỗi tầng hoặc mỗi phòng. Kết nối các AP với nhau qua cáp mạng (backbone) đấu vào Switch trung tâm. Cần: 4-6 Access Point (ít nhất 1 AP/phòng hoặc 2-3 AP/tầng), 1 Switch 24 cổng, Router đã có sẵn, và cáp mạng đi ngầm trong tường.',
        points: 0.75,
      },
      {
        step: 'Mô tả cách triển khai',
        detail: '1. Router → Switch 24 cổng (kết nối cáp mạng tầng trung tâm).\n2. Switch → Mỗi Access Point tại từng phòng (qua cáp Cat6 đi trong tường).\n3. Cấu hình tất cả AP dùng cùng SSID (tên Wi-Fi) và mật khẩu để thiết bị tự động chuyển AP mạnh nhất khi di chuyển giữa phòng (roaming).\n4. Phân kênh (channel) khác nhau cho các AP lân cận để tránh nhiễu tín hiệu.',
        points: 0.75,
      },
    ],
    level: 'Vận dụng (Bài 3, 4)',
    lesson: 'Bài 3. Thiết bị mạng và giao thức mạng',
  },
];
