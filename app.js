/* ==========================================================================
   BẢNG THỐNG KÊ BÀI GIẢNG TOÁN 12 - ANH HOÀNG VŨ (GOOGLE DRIVE & CLOUDFLARE ENHANCED)
   ========================================================================== */

const STORAGE_KEY = 'hoangvu_math12_v8_final';
const STORAGE_CHAPTERS_LIST = 'hoangvu_chapters_list_v8_final';

// DEFAULT CHAPTER LIST
const DEFAULT_CHAPTERS = [
    "CHƯƠNG 1: ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ HÀM SỐ",
    "CHƯƠNG 2: VECTOR VÀ HỆ TỌA ĐỘ TRONG KHÔNG GIAN",
    "CHƯƠNG 3: CÁC SỐ ĐẶC TRƯNG ĐO MỨC ĐỘ PHÂN TÁN CHO MẪU SỐ LIỆU GHÉP NHÓM",
    "CHƯƠNG 4: NGUYÊN HÀM. TÍCH PHÂN",
    "CHƯƠNG 5: PHƯƠNG TRÌNH MẶT PHẲNG, ĐƯỜNG THẲNG, MẶT CẦU",
    "CHƯƠNG 6: XÁC SUẤT CÓ ĐIỀU KIỆN",
    "CHƯƠNG 7: XÁC SUẤT CỔ ĐIỂN NÂNG CAO",
    "CHƯƠNG 8: 1 SỐ BÀI TOÁN THÚ VỊ KHÁC"
];

// PERMANENT EMBEDDED LESSON DATA FROM USER BACKUP
const INITIAL_LESSONS = [
    {
        "id": "hv-1",
        "chapter": "CHƯƠNG 1: ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ HÀM SỐ",
        "title": "Bài 1: Tính đơn điệu và cực trị của hàm số",
        "videoLabel": "VIDEO BÀI 1",
        "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "answerLabel": "BẢN VIẾT TAY BÀI 1",
        "answerUrl": "https://drive.google.com/file/d/sample_answer_1/view",
        "exerciseLabel": "FILE ĐỀ IN BÀI 1",
        "exerciseUrl": "https://drive.google.com/file/d/sample_dein_1/view",
        "isYellow": true
    },
    {
        "id": "hv-2",
        "chapter": "CHƯƠNG 1: ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ HÀM SỐ",
        "title": "Bài 2: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số (GTLN - GTNN)",
        "videoLabel": "VIDEO BÀI 2",
        "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "answerLabel": "BẢN VIẾT TAY BÀI 2",
        "answerUrl": "https://drive.google.com/file/d/sample_answer_2/view",
        "exerciseLabel": "",
        "exerciseUrl": "",
        "isYellow": true
    },
    {
        "id": "hv-3",
        "chapter": "CHƯƠNG 1: ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ HÀM SỐ",
        "title": "Bài 3: Đường tiệm cận của đồ thị hàm số (Tiệm cận đứng & Tiệm cận ngang)",
        "videoLabel": "VIDEO BÀI 3",
        "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "answerLabel": "BẢN VIẾT TAY BÀI 3",
        "answerUrl": "https://drive.google.com/file/d/sample_answer_3/view",
        "exerciseLabel": "",
        "exerciseUrl": "",
        "isYellow": true
    },
    {
        "id": "hv-4",
        "chapter": "CHƯƠNG 1: ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ HÀM SỐ",
        "title": "Bài 4: Khảo sát sự biến thiên và vẽ đồ thị hàm số",
        "videoLabel": "VIDEO BÀI 4",
        "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "answerLabel": "BẢN VIẾT TAY BÀI 4",
        "answerUrl": "https://drive.google.com/file/d/sample_answer_4/view",
        "exerciseLabel": "",
        "exerciseUrl": "",
        "isYellow": true
    },
    {
        "id": "hv-5",
        "chapter": "CHƯƠNG 1: ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ HÀM SỐ",
        "title": "Tài liệu rèn luyện thêm Chương 1",
        "videoLabel": "",
        "videoUrl": "",
        "answerLabel": "FILE ĐÁP ÁN RÈN LUYỆN THÊM",
        "answerUrl": "https://drive.google.com/file/d/sample_answer_5/view",
        "exerciseLabel": "FILE ĐỀ RÈN LUYỆN THÊM",
        "exerciseUrl": "https://drive.google.com/file/d/sample_dein_5/view",
        "isYellow": true
    },
    {
        "id": "hv-6",
        "chapter": "CHƯƠNG 2: VECTOR VÀ HỆ TỌA ĐỘ TRONG KHÔNG GIAN",
        "title": "Bài 1: Vector và các phép toán vector trong không gian",
        "videoLabel": "VIDEO BÀI 1",
        "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "answerLabel": "BẢN VIẾT TAY BÀI 1",
        "answerUrl": "https://drive.google.com/file/d/sample_c2_1/view",
        "exerciseLabel": "FILE ĐỀ IN BÀI 1",
        "exerciseUrl": "https://drive.google.com/file/d/sample_de_c2_1/view",
        "isYellow": true
    },
    {
        "id": "hv-7",
        "chapter": "CHƯƠNG 2: VECTOR VÀ HỆ TỌA ĐỘ TRONG KHÔNG GIAN",
        "title": "Bài 2: Tọa độ của vector và điểm trong hệ tọa độ Oxyz",
        "videoLabel": "VIDEO BÀI 2",
        "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "answerLabel": "BẢN VIẾT TAY BÀI 2",
        "answerUrl": "https://drive.google.com/file/d/sample_c2_2/view",
        "exerciseLabel": "",
        "exerciseUrl": "",
        "isYellow": true
    },
    {
        "id": "hv-8",
        "chapter": "CHƯƠNG 2: VECTOR VÀ HỆ TỌA ĐỘ TRONG KHÔNG GIAN",
        "title": "Bài 3: Biểu thức tọa độ của các phép toán vector & Tích vô hướng",
        "videoLabel": "VIDEO BÀI 3",
        "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "answerLabel": "BẢN VIẾT TAY BÀI 3",
        "answerUrl": "https://drive.google.com/file/d/sample_c2_3/view",
        "exerciseLabel": "FILE ĐỀ IN BÀI 3",
        "exerciseUrl": "https://drive.google.com/file/d/sample_de_c2_3/view",
        "isYellow": true
    },
    {
        "id": "hv-9",
        "chapter": "CHƯƠNG 3: CÁC SỐ ĐẶC TRƯNG ĐO MỨC ĐỘ PHÂN TÁN CHO MẪU SỐ LIỆU GHÉP NHÓM",
        "title": "Bài 1: Khoảng biến thiên và khoảng tứ phân vị của mẫu số liệu ghép nhóm",
        "videoLabel": "VIDEO BÀI 1",
        "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "answerLabel": "BẢN VIẾT TAY BÀI 1",
        "answerUrl": "https://drive.google.com/file/d/sample_c3_1/view",
        "exerciseLabel": "FILE ĐỀ IN BÀI 1",
        "exerciseUrl": "https://drive.google.com/file/d/sample_de_c3_1/view",
        "isYellow": true
    },
    {
        "id": "hv-10",
        "chapter": "CHƯƠNG 3: CÁC SỐ ĐẶC TRƯNG ĐO MỨC ĐỘ PHÂN TÁN CHO MẪU SỐ LIỆU GHÉP NHÓM",
        "title": "Bài 2: Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm",
        "videoLabel": "VIDEO BÀI 2",
        "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "answerLabel": "BẢN VIẾT TAY BÀI 2",
        "answerUrl": "https://drive.google.com/file/d/sample_c3_2/view",
        "exerciseLabel": "",
        "exerciseUrl": "",
        "isYellow": true
    },
    {
        "id": "hv-11",
        "chapter": "CHƯƠNG 4: NGUYÊN HÀM. TÍCH PHÂN",
        "title": "Bài 1: Nguyên hàm & Các tính chất của nguyên hàm",
        "videoLabel": "VIDEO BÀI 1",
        "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "answerLabel": "BẢN VIẾT TAY BÀI 1",
        "answerUrl": "https://drive.google.com/file/d/sample_c4_1/view",
        "exerciseLabel": "FILE ĐỀ IN BÀI 1",
        "exerciseUrl": "https://drive.google.com/file/d/sample_de_c4_1/view",
        "isYellow": true
    },
    {
        "id": "hv-12",
        "chapter": "CHƯƠNG 4: NGUYÊN HÀM. TÍCH PHÂN",
        "title": "Bài 2: Tích phân & Phương pháp tính tích phân",
        "videoLabel": "VIDEO BÀI 2",
        "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "answerLabel": "BẢN VIẾT TAY BÀI 2",
        "answerUrl": "https://drive.google.com/file/d/sample_c4_2/view",
        "exerciseLabel": "",
        "exerciseUrl": "",
        "isYellow": true
    },
    {
        "id": "hv-13",
        "chapter": "CHƯƠNG 4: NGUYÊN HÀM. TÍCH PHÂN",
        "title": "Bài 3: Ứng dụng tích phân tính diện tích hình phẳng & thể tích khối tròn xoay",
        "videoLabel": "VIDEO BÀI 3",
        "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "answerLabel": "BẢN VIẾT TAY BÀI 3",
        "answerUrl": "https://drive.google.com/file/d/sample_c4_3/view",
        "exerciseLabel": "FILE ĐỀ IN BÀI 3",
        "exerciseUrl": "https://drive.google.com/file/d/sample_de_c4_3/view",
        "isYellow": true
    },
    {
        "id": "hv-14",
        "chapter": "CHƯƠNG 5: PHƯƠNG TRÌNH MẶT PHẲNG, ĐƯỜNG THẲNG, MẶT CẦU",
        "title": "Bài 1: Phương trình mặt phẳng trong không gian Oxyz",
        "videoLabel": "VIDEO BÀI 1",
        "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "answerLabel": "BẢN VIẾT TAY BÀI 1",
        "answerUrl": "https://drive.google.com/file/d/sample_c5_1/view",
        "exerciseLabel": "FILE ĐỀ IN BÀI 1",
        "exerciseUrl": "https://drive.google.com/file/d/sample_de_c5_1/view",
        "isYellow": true
    },
    {
        "id": "hv-15",
        "chapter": "CHƯƠNG 5: PHƯƠNG TRÌNH MẶT PHẲNG, ĐƯỜNG THẲNG, MẶT CẦU",
        "title": "Bài 2: Phương trình đường thẳng trong không gian Oxyz",
        "videoLabel": "VIDEO BÀI 2",
        "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "answerLabel": "BẢN VIẾT TAY BÀI 2",
        "answerUrl": "https://drive.google.com/file/d/sample_c5_2/view",
        "exerciseLabel": "",
        "exerciseUrl": "",
        "isYellow": true
    },
    {
        "id": "hv-16",
        "chapter": "CHƯƠNG 5: PHƯƠNG TRÌNH MẶT PHẲNG, ĐƯỜNG THẲNG, MẶT CẦU",
        "title": "Bài 3: Phương trình mặt cầu & Vị trí tương đối trong Oxyz",
        "videoLabel": "VIDEO BÀI 3",
        "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "answerLabel": "BẢN VIẾT TAY BÀI 3",
        "answerUrl": "https://drive.google.com/file/d/sample_c5_3/view",
        "exerciseLabel": "FILE ĐỀ IN BÀI 3",
        "exerciseUrl": "https://drive.google.com/file/d/sample_de_c5_3/view",
        "isYellow": true
    },
    {
        "id": "hv-17",
        "chapter": "CHƯƠNG 6: XÁC SUẤT CÓ ĐIỀU KIỆN",
        "title": "Bài 1: Khái niệm xác suất có điều kiện",
        "videoLabel": "VIDEO BÀI 1",
        "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "answerLabel": "BẢN VIẾT TAY BÀI 1",
        "answerUrl": "https://drive.google.com/file/d/sample_c6_1/view",
        "exerciseLabel": "FILE ĐỀ IN BÀI 1",
        "exerciseUrl": "https://drive.google.com/file/d/sample_de_c6_1/view",
        "isYellow": true
    },
    {
        "id": "hv-18",
        "chapter": "CHƯƠNG 6: XÁC SUẤT CÓ ĐIỀU KIỆN",
        "title": "Bài 2: Công thức nhân xác suất & Công thức xác suất toàn phần",
        "videoLabel": "VIDEO BÀI 2",
        "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "answerLabel": "BẢN VIẾT TAY BÀI 2",
        "answerUrl": "https://drive.google.com/file/d/sample_c6_2/view",
        "exerciseLabel": "",
        "exerciseUrl": "",
        "isYellow": true
    },
    {
        "id": "hv-19",
        "chapter": "CHƯƠNG 6: XÁC SUẤT CÓ ĐIỀU KIỆN",
        "title": "Bài 3: Công thức Bayes & Bài toán thực tế ứng dụng xác suất",
        "videoLabel": "VIDEO BÀI 3",
        "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "answerLabel": "BẢN VIẾT TAY BÀI 3",
        "answerUrl": "https://drive.google.com/file/d/sample_c6_3/view",
        "exerciseLabel": "FILE ĐỀ IN BÀI 3",
        "exerciseUrl": "https://drive.google.com/file/d/sample_de_c6_3/view",
        "isYellow": true
    },
    {
        "id": "hv-20",
        "chapter": "CHƯƠNG 7: XÁC SUẤT CỔ ĐIỂN NÂNG CAO",
        "title": "Bài 1: Phương pháp đếm nâng cao, Quy tắc cộng & Quy tắc nhân",
        "videoLabel": "VIDEO BÀI 1",
        "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "answerLabel": "BẢN VIẾT TAY BÀI 1",
        "answerUrl": "https://drive.google.com/file/d/sample_c7_1/view",
        "exerciseLabel": "FILE ĐỀ IN BÀI 1",
        "exerciseUrl": "https://drive.google.com/file/d/sample_de_c7_1/view",
        "isYellow": true
    },
    {
        "id": "hv-21",
        "chapter": "CHƯƠNG 7: XÁC SUẤT CỔ ĐIỂN NÂNG CAO",
        "title": "Bài 2: Bài toán Hoán vị - Chỉnh hợp - Tổ hợp nâng cao trong đề thi THPT QG",
        "videoLabel": "VIDEO BÀI 2",
        "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "answerLabel": "BẢN VIẾT TAY BÀI 2",
        "answerUrl": "https://drive.google.com/file/d/sample_c7_2/view",
        "exerciseLabel": "",
        "exerciseUrl": "",
        "isYellow": true
    },
    {
        "id": "hv-22",
        "chapter": "CHƯƠNG 7: XÁC SUẤT CỔ ĐIỂN NÂNG CAO",
        "title": "Bài 3: Bài toán Xếp hàng, Chọn thẻ, Chia quà & Xác suất cổ điển hình học",
        "videoLabel": "VIDEO BÀI 3",
        "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "answerLabel": "BẢN VIẾT TAY BÀI 3",
        "answerUrl": "https://drive.google.com/file/d/sample_c7_3/view",
        "exerciseLabel": "FILE ĐỀ IN BÀI 3",
        "exerciseUrl": "https://drive.google.com/file/d/sample_de_c7_3/view",
        "isYellow": true
    },
    {
        "id": "hv-23",
        "chapter": "CHƯƠNG 8: 1 SỐ BÀI TOÁN THÚ VỊ KHÁC",
        "title": "Bài 1: Các bài toán Cực trị Vận dụng cao (9+) và Kỹ thuật chuẩn hóa",
        "videoLabel": "VIDEO BÀI 1",
        "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "answerLabel": "BẢN VIẾT TAY BÀI 1",
        "answerUrl": "https://drive.google.com/file/d/sample_c8_1/view",
        "exerciseLabel": "FILE ĐỀ IN BÀI 1",
        "exerciseUrl": "https://drive.google.com/file/d/sample_de_c8_1/view",
        "isYellow": true
    },
    {
        "id": "hv-24",
        "chapter": "CHƯƠNG 8: 1 SỐ BÀI TOÁN THÚ VỊ KHÁC",
        "title": "Bài 2: Giải nhanh trắc nghiệm bằng phương pháp Đồ thị & Đánh giá Bất đẳng thức",
        "videoLabel": "VIDEO BÀI 2",
        "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "answerLabel": "BẢN VIẾT TAY BÀI 2",
        "answerUrl": "https://drive.google.com/file/d/sample_c8_2/view",
        "exerciseLabel": "",
        "exerciseUrl": "",
        "isYellow": true
    },
    {
        "id": "hv-25",
        "chapter": "CHƯƠNG 8: 1 SỐ BÀI TOÁN THÚ VỊ KHÁC",
        "title": "Bài 3: Đề luyện thi thử Đánh giá năng lực & Ôn tập tổng hợp chọn lọc",
        "videoLabel": "VIDEO BÀI 3",
        "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "answerLabel": "BẢN VIẾT TAY BÀI 3",
        "answerUrl": "https://drive.google.com/file/d/sample_c8_3/view",
        "exerciseLabel": "FILE ĐỀ IN BÀI 3",
        "exerciseUrl": "https://drive.google.com/file/d/sample_de_c8_3/view",
        "isYellow": true
    }
];

// ACADEMIC MATH FORMULAS & SYMBOLS FOR 3D CANVAS BACKGROUND
const MATH_SYMBOLS = [
    // Layer 1: Grade 12 Key Formula Badges (Calculus, Vectors 3D, Integrals, Probability)
    { html: '∫<sub>a</sub><sup>b</sup> f(x)dx = F(b) - F(a)', isBadge: true, layer: 'layer-near' },
    { html: 'lim<sub>x→x₀</sub> <span class="frac">f(x) - f(x₀)</span>&frasl;<sub>x - x₀</sub> = f\'(x₀)', isBadge: true, layer: 'layer-near' },
    { html: 'e<sup>iπ</sup> + 1 = 0', isBadge: true, layer: 'layer-near' },
    { html: 'n⃗ = [u⃗, v⃗] = (a; b; c)', isBadge: true, layer: 'layer-near' },
    { html: '(x-a)<sup>2</sup> + (y-b)<sup>2</sup> + (z-c)<sup>2</sup> = R<sup>2</sup>', isBadge: true, layer: 'layer-near' },
    { html: 'P(A|B) = <span class="frac">P(A ∩ B)</span>&frasl;<sub>P(B)</sub>', isBadge: true, layer: 'layer-near' },
    { html: 'y = ax<sup>4</sup> + bx<sup>2</sup> + c', isBadge: true, layer: 'layer-near' },
    { html: 'S<sup>2</sup> = <span class="frac">1</span>&frasl;<sub>n-1</sub> ∑ (x<sub>i</sub> - x̄)<sup>2</sup>', isBadge: true, layer: 'layer-near' },

    // Layer 2: Core High-School Math Formulas (Midground)
    { html: '∫ x<sup>n</sup> dx = <span class="frac">x<sup>n+1</sup></span>&frasl;<sub>n+1</sub> + C', isBadge: false, layer: 'layer-mid' },
    { html: 'Δ = b<sup>2</sup> - 4ac', isBadge: false, layer: 'layer-mid' },
    { html: '|z| = √(a<sup>2</sup> + b<sup>2</sup>)', isBadge: false, layer: 'layer-mid' },
    { html: 'sin<sup>2</sup>x + cos<sup>2</sup>x = 1', isBadge: false, layer: 'layer-mid' },
    { html: 'V = <span class="frac">1</span>&frasl;<sub>3</sub> B · h', isBadge: false, layer: 'layer-mid' },
    { html: 'log<sub>a</sub>(b · c) = log<sub>a</sub>b + log<sub>a</sub>c', isBadge: false, layer: 'layer-mid' },
    { html: 'u⃗ · v⃗ = |u⃗||v⃗|cos(u⃗, v⃗)', isBadge: false, layer: 'layer-mid' },
    { html: 'y\' = f\'(u) · u\'(x)', isBadge: false, layer: 'layer-mid' },
    { html: '∬<sub>D</sub> f(x, y) dx dy', isBadge: false, layer: 'layer-mid' },
    { html: 'lim<sub>x→∞</sub> (1 + <span class="frac">1</span>&frasl;<sub>x</sub>)<sup>x</sup> = e', isBadge: false, layer: 'layer-mid' },
    { html: 'P(A ∪ B) = P(A) + P(B) - P(AB)', isBadge: false, layer: 'layer-mid' },
    { html: 'z = a + bi (i<sup>2</sup> = -1)', isBadge: false, layer: 'layer-mid' },

    // Layer 3: Faint Academic Math Constants & Operators (Background)
    { html: '∫', isBadge: false, layer: 'layer-far' },
    { html: '∑', isBadge: false, layer: 'layer-far' },
    { html: '∏', isBadge: false, layer: 'layer-far' },
    { html: 'lim<sub>x→0</sub>', isBadge: false, layer: 'layer-far' },
    { html: 'd/dx', isBadge: false, layer: 'layer-far' },
    { html: '∂f/∂x', isBadge: false, layer: 'layer-far' },
    { html: '∞', isBadge: false, layer: 'layer-far' },
    { html: '√x', isBadge: false, layer: 'layer-far' },
    { html: 'α, β, γ, θ', isBadge: false, layer: 'layer-far' },
    { html: 'ℝ<sup>3</sup>', isBadge: false, layer: 'layer-far' },
    { html: '∀ x ∈ ℝ', isBadge: false, layer: 'layer-far' },
    { html: '∇ · F⃗ = 0', isBadge: false, layer: 'layer-far' },
    { html: 'π r<sup>2</sup>', isBadge: false, layer: 'layer-far' },
    { html: 'ln|x| + C', isBadge: false, layer: 'layer-far' }
];

const MATH_COLOR_CLASSES = [
    "math-item-gold",
    "math-item-cyan",
    "math-item-green",
    "math-item-purple",
    "math-item-pink",
    "math-item-white"
];

// APP STATE
let lessons = [];
let chapterList = [];
let activeChapter = "CHƯƠNG 1: ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ HÀM SỐ";
let searchQuery = "";
let filterYellowOnly = false;

// ROLE / VIEW MODE: 'view' (người xem) or 'edit' (quản lý)
let isReadOnly = true; 

// Check URL params for mode if specified (e.g. ?mode=edit)
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('mode') === 'edit' || urlParams.get('role') === 'admin') {
    isReadOnly = false;
}

// DOM ELEMENTS
const tableBody = document.getElementById('tableBody');
const searchInput = document.getElementById('searchInput');
const btnClearSearch = document.getElementById('btnClearSearch');
const btnFilterYellow = document.getElementById('btnFilterYellow');
const btnExportCsv = document.getElementById('btnExportCsv');
const btnExportBackup = document.getElementById('btnExportBackup');
const btnImportBackup = document.getElementById('btnImportBackup');
const fileImportInput = document.getElementById('fileImportInput');
const btnAddLesson = document.getElementById('btnAddLesson');
const btnAddChapter = document.getElementById('btnAddChapter');
const chapterTabsContainer = document.getElementById('chapterTabs');
const thChapterTitle = document.getElementById('thChapterTitle');
const sheetSubTitle = document.getElementById('sheetSubTitle');

// ROLE DOMS
const btnToggleRole = document.getElementById('btnToggleRole');
const roleText = document.getElementById('roleText');
const chipViewMode = document.getElementById('chipViewMode');

// STAT BADGE DOMS
const chipPriorityCount = document.getElementById('chipPriorityCount');
const chipTotalCount = document.getElementById('chipTotalCount');
const totalLessonNum = document.getElementById('totalLessonNum');

// MODAL DOMS
const lessonModal = document.getElementById('lessonModal');
const lessonForm = document.getElementById('lessonForm');
const modalHeading = document.getElementById('modalHeading');
const editId = document.getElementById('editId');
const inputChapter = document.getElementById('inputChapter');
const inputTitle = document.getElementById('inputTitle');
const inputVideoLabel = document.getElementById('inputVideoLabel');
const inputVideoUrl = document.getElementById('inputVideoUrl');
const inputAnswerLabel = document.getElementById('inputAnswerLabel');
const inputAnswerUrl = document.getElementById('inputAnswerUrl');
const inputExerciseLabel = document.getElementById('inputExerciseLabel');
const inputExerciseUrl = document.getElementById('inputExerciseUrl');
const inputYellowHighlight = document.getElementById('inputYellowHighlight');

const btnCloseModal = document.getElementById('btnCloseModal');
const btnCancelModal = document.getElementById('btnCancelModal');

// CHAPTER MODAL DOMS
const chapterModal = document.getElementById('chapterModal');
const chapterForm = document.getElementById('chapterForm');
const inputChapterName = document.getElementById('inputChapterName');
const btnCloseChapterModal = document.getElementById('btnCloseChapterModal');
const btnCancelChapterModal = document.getElementById('btnCancelChapterModal');

const previewModal = document.getElementById('previewModal');
const previewTitle = document.getElementById('previewTitle');
const previewContainer = document.getElementById('previewContainer');
const btnOpenExternal = document.getElementById('btnOpenExternal');
const btnClosePreview = document.getElementById('btnClosePreview');

// INIT
document.addEventListener('DOMContentLoaded', () => {
    initMathBackground();
    loadStorageData();
    updateRoleUI();
    initEvents();
    renderTabs();
    renderSelectOptions();
    render();
});

// UPDATE UI ACCORDING TO VIEW/EDIT MODE
function updateRoleUI() {
    if (isReadOnly) {
        document.body.classList.add('mode-viewer');
        if (roleText) roleText.innerHTML = `Chế Độ: Chỉ Xem`;
        if (btnToggleRole) btnToggleRole.innerHTML = `<i class="fa-solid fa-eye text-cyan"></i> <span>Chế Độ: Chỉ Xem</span>`;
        if (chipViewMode) chipViewMode.style.display = 'inline-flex';
    } else {
        document.body.classList.remove('mode-viewer');
        if (roleText) roleText.innerHTML = `Chế Độ: Quản Lý`;
        if (btnToggleRole) btnToggleRole.innerHTML = `<i class="fa-solid fa-pen-to-square text-gold"></i> <span>Chế Độ: Quản Lý</span>`;
        if (chipViewMode) chipViewMode.style.display = 'none';
    }
}

// GENERATE DYNAMIC FLOATING MATH BACKGROUND SYMBOLS & PARALLAX DRIFT
function initMathBackground() {
    const container = document.getElementById('mathNodesContainer') || document.getElementById('mathBgDecorations');
    if (!container) return;

    let html = "";
    const totalSymbols = MATH_SYMBOLS.length;

    for (let i = 0; i < totalSymbols; i++) {
        const item = MATH_SYMBOLS[i];
        const colorClass = MATH_COLOR_CLASSES[i % MATH_COLOR_CLASSES.length];
        const badgeClass = item.isBadge ? 'math-card-badge' : '';
        const layerClass = item.layer || 'layer-mid';
        
        // Grid placement distribution to avoid clustering
        const col = i % 6;
        const row = Math.floor(i / 6);
        const topPos = Math.min(90, Math.max(4, (row * 15) + (Math.random() * 10 - 5)));
        const leftPos = Math.min(90, Math.max(4, (col * 15) + (Math.random() * 12 - 6)));
        
        let baseSize = 1.0;
        if (layerClass === 'layer-far') baseSize = 0.85 + Math.random() * 0.35;
        else if (layerClass === 'layer-mid') baseSize = 1.0 + Math.random() * 0.3;
        else if (layerClass === 'layer-near') baseSize = 1.1 + Math.random() * 0.3;

        const fontSize = baseSize.toFixed(2);
        const animDuration = (Math.random() * 10 + 14).toFixed(1);
        const animDelay = (-Math.random() * 15).toFixed(1);

        html += `
            <div class="math-bg-item ${layerClass} ${colorClass} ${badgeClass}" style="
                top: ${topPos}%; 
                left: ${leftPos}%; 
                font-size: ${fontSize}rem; 
                animation-duration: ${animDuration}s; 
                animation-delay: ${animDelay}s;"
                data-speed="${layerClass === 'layer-near' ? '0.04' : (layerClass === 'layer-mid' ? '0.02' : '0.01')}">
                ${item.html}
            </div>
        `;
    }

    container.innerHTML = html;

    // Interactive Subtle Mouse Parallax Drift
    window.addEventListener('mousemove', (e) => {
        const mouseX = (e.clientX / window.innerWidth - 0.5);
        const mouseY = (e.clientY / window.innerHeight - 0.5);
        
        const nodes = container.querySelectorAll('.math-bg-item');
        nodes.forEach(node => {
            const speed = parseFloat(node.getAttribute('data-speed') || '0.02');
            const x = mouseX * 500 * speed;
            const y = mouseY * 500 * speed;
            node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        });
    });
}

function loadStorageData() {
    const rawLessons = localStorage.getItem(STORAGE_KEY);
    const rawChapters = localStorage.getItem(STORAGE_CHAPTERS_LIST);

    if (rawLessons) {
        try { lessons = JSON.parse(rawLessons); } catch (e) { lessons = [...INITIAL_LESSONS]; }
    } else {
        lessons = [...INITIAL_LESSONS];
        saveLessons();
    }

    if (rawChapters) {
        try { chapterList = JSON.parse(rawChapters); } catch (e) { chapterList = [...DEFAULT_CHAPTERS]; }
    } else {
        chapterList = [...DEFAULT_CHAPTERS];
        saveChapterList();
    }
}

const parentChildChannel = typeof BroadcastChannel !== 'undefined' ? new BroadcastChannel('hoangvu_parent_child_sync') : null;

function notifyParentChildSync() {
    if (parentChildChannel) {
        try {
            parentChildChannel.postMessage({ action: 'PARENT_UPDATED', timestamp: Date.now() });
        } catch (e) {
            console.warn('Sync message failed:', e);
        }
    }
}

function saveLessons() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lessons));
    if (window.mathDB) mathDB.saveLessons();
    notifyParentChildSync();
}

function saveChapterList() {
    localStorage.setItem(STORAGE_CHAPTERS_LIST, JSON.stringify(chapterList));
    if (window.mathDB) mathDB.saveChapters();
    notifyParentChildSync();
}

function initEvents() {
    // Mode Toggle
    if (btnToggleRole) {
        btnToggleRole.addEventListener('click', () => {
            isReadOnly = !isReadOnly;
            updateRoleUI();
            render();
            showToast(isReadOnly ? '🔒 Đã chuyển sang Chế độ Chỉ Xem' : '🔓 Đã chuyển sang Chế độ Quản Lý', isReadOnly ? 'info' : 'warning');
        });
    }

    // Search
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        btnClearSearch.style.display = searchQuery ? 'block' : 'none';
        render();
    });

    btnClearSearch.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        btnClearSearch.style.display = 'none';
        render();
    });

    // Filter Yellow Toggle
    btnFilterYellow.addEventListener('click', () => {
        filterYellowOnly = !filterYellowOnly;
        btnFilterYellow.classList.toggle('active', filterYellowOnly);
        showToast(filterYellowOnly ? '⭐ Đã bật lọc bài Tô Vàng ưu tiên' : 'Hiển thị tất cả bài học', 'warning');
        render();
    });

    // Backup & Restore
    if (btnExportBackup) btnExportBackup.addEventListener('click', exportBackupJSON);
    if (btnImportBackup) btnImportBackup.addEventListener('click', () => fileImportInput.click());
    if (fileImportInput) fileImportInput.addEventListener('change', importBackupJSON);

    // Export Excel (CSV)
    btnExportCsv.addEventListener('click', exportToCSV);

    // Chapter Tabs Click
    chapterTabsContainer.addEventListener('click', (e) => {
        const tabBtn = e.target.closest('.tab-item');
        if (tabBtn) {
            document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
            tabBtn.classList.add('active');
            activeChapter = tabBtn.dataset.chapter;
            render();
        }
    });

    // Add Lesson Modal
    btnAddLesson.addEventListener('click', () => openAddModal());

    // Add Chapter Modal
    btnAddChapter.addEventListener('click', () => {
        chapterForm.reset();
        chapterModal.classList.remove('hidden');
        inputChapterName.focus();
    });

    // Modal Close
    btnCloseModal.addEventListener('click', () => lessonModal.classList.add('hidden'));
    btnCancelModal.addEventListener('click', () => lessonModal.classList.add('hidden'));

    btnCloseChapterModal.addEventListener('click', () => chapterModal.classList.add('hidden'));
    btnCancelChapterModal.addEventListener('click', () => chapterModal.classList.add('hidden'));

    btnClosePreview.addEventListener('click', () => {
        previewModal.classList.add('hidden');
        previewContainer.innerHTML = '';
    });

    // Form Submit
    lessonForm.addEventListener('submit', handleSaveLesson);
    chapterForm.addEventListener('submit', handleSaveChapter);
}

// BACKUP & RESTORE JSON FUNCTIONS
function exportBackupJSON() {
    const backupData = {
        app: "BẢNG THỐNG KÊ BÀI GIẢNG TOÁN 12 - ANH HOÀNG VŨ",
        exportedAt: new Date().toISOString(),
        chapterList: chapterList,
        lessons: lessons
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `Backup_BaiGiang_Toan12_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();

    showToast('Đã sao lưu file dự phòng (JSON) về máy thành công!', 'success');
}

function importBackupJSON(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            const parsed = JSON.parse(event.target.result);
            if (parsed && Array.isArray(parsed.lessons)) {
                lessons = parsed.lessons;
                if (Array.isArray(parsed.chapterList)) {
                    chapterList = parsed.chapterList;
                }
                saveLessons();
                saveChapterList();
                renderTabs();
                renderSelectOptions();
                render();
                showToast('Khôi phục toàn bộ dữ liệu bài giảng thành công!', 'success');
            } else {
                showToast('File dự phòng JSON không hợp lệ!', 'danger');
            }
        } catch (err) {
            showToast('Lỗi khi đọc file dự phòng!', 'danger');
        }
    };
    reader.readAsText(file);
    fileImportInput.value = '';
}

// RENDER CHAPTER TABS
function renderTabs() {
    let tabsHtml = "";
    const icons = ['fa-chart-line', 'fa-arrows-to-dot', 'fa-chart-pie', 'fa-calculator', 'fa-cube', 'fa-dice', 'fa-trophy', 'fa-wand-magic-sparkles'];

    chapterList.forEach((chap, idx) => {
        const isActive = (chap === activeChapter);
        const iconClass = icons[idx % icons.length] || 'fa-book';
        const shortName = `Chương ${idx + 1}`;

        tabsHtml += `
            <button class="tab-item ${isActive ? 'active' : ''}" data-chapter="${escapeHtml(chap)}">
                <i class="fa-solid ${iconClass}"></i> ${shortName}
            </button>
        `;
    });

    tabsHtml += `
        <button class="tab-item ${activeChapter === 'ALL' ? 'active' : ''}" data-chapter="ALL">
            <i class="fa-solid fa-border-all"></i> Tất Cả Chương
        </button>
    `;

    chapterTabsContainer.innerHTML = tabsHtml;
}

// RENDER SELECT OPTIONS IN FORM
function renderSelectOptions() {
    inputChapter.innerHTML = chapterList.map(c => `
        <option value="${escapeHtml(c)}">${escapeHtml(c)}</option>
    `).join('');
}

// HANDLE SAVE CHAPTER
function handleSaveChapter(e) {
    e.preventDefault();
    const name = inputChapterName.value.trim();
    if (!name) return;

    if (chapterList.includes(name)) {
        showToast('Chương này đã tồn tại!', 'warning');
        return;
    }

    chapterList.push(name);
    saveChapterList();
    chapterModal.classList.add('hidden');
    activeChapter = name;

    renderTabs();
    renderSelectOptions();
    render();

    showToast(`Đã thêm thành công: ${name}`, 'success');
}

// MAIN RENDER FUNCTION
function render() {
    // Update Badge Counter Stat Chips
    const yellowCount = lessons.filter(l => l.isYellow).length;
    chipPriorityCount.innerHTML = `<i class="fa-solid fa-star"></i> ${yellowCount} Bài Ưu Tiên`;
    totalLessonNum.textContent = lessons.length;

    // Group lessons by Chapter
    let displayChapters = [];
    if (activeChapter === 'ALL') {
        displayChapters = [...chapterList];
        thChapterTitle.textContent = "TIÊU ĐỀ BÀI GIẢNG TOÁN 12";
        sheetSubTitle.textContent = "(Lịch học & Danh sách Tài liệu Môn Toán 12 - TẤT CẢ CÁC CHƯƠNG)";
    } else {
        displayChapters = [activeChapter];
        const shortChapName = activeChapter.split(':')[0] || activeChapter;
        thChapterTitle.textContent = `TIÊU ĐỀ BÀI GIẢNG TOÁN (${shortChapName})`;
        sheetSubTitle.textContent = `(Lịch học & Danh sách Tài liệu Môn Toán 12 - ${activeChapter})`;
    }

    let tbodyHtml = "";

    displayChapters.forEach(chapName => {
        // Filter lessons for this chapter
        let chapLessons = lessons.filter(l => l.chapter === chapName);

        if (filterYellowOnly) {
            chapLessons = chapLessons.filter(l => l.isYellow);
        }

        if (searchQuery) {
            chapLessons = chapLessons.filter(l => 
                l.title.toLowerCase().includes(searchQuery) ||
                (l.videoLabel && l.videoLabel.toLowerCase().includes(searchQuery)) ||
                (l.answerLabel && l.answerLabel.toLowerCase().includes(searchQuery))
            );
        }

        if (chapLessons.length === 0 && activeChapter !== 'ALL') return;

        // Render Chapter Section Header Row
        const colspanVal = isReadOnly ? 5 : 6;
        tbodyHtml += `
            <tr class="section-header-row">
                <td colspan="${colspanVal}">${chapName}</td>
            </tr>
        `;

        chapLessons.forEach((item, idx) => {
            const bgClass = item.isYellow ? 'row-yellow' : 'row-normal';

            // Video Link
            const vLabel = item.videoLabel || (item.videoUrl ? `VIDEO BÀI ${idx + 1}` : "");
            const videoHtml = item.videoUrl ? 
                `<a class="doc-link" onclick="openPreview('${escapeHtml(item.videoUrl)}', '${escapeHtml(vLabel)}')">${escapeHtml(vLabel)}</a>` : 
                `<span class="empty-dash">-</span>`;

            // Answer Link
            const aLabel = item.answerLabel || (item.answerUrl ? `BẢN VIẾT TAY BÀI ${idx + 1}` : "");
            const answerHtml = item.answerUrl ? 
                `<a class="doc-link" onclick="openPreview('${escapeHtml(item.answerUrl)}', '${escapeHtml(aLabel)}')">${escapeHtml(aLabel)}</a>` : 
                `<span class="empty-dash">-</span>`;

            // Exercise Link
            const eLabel = item.exerciseLabel || (item.exerciseUrl ? `FILE ĐỀ IN BÀI ${idx + 1}` : "");
            const exerciseHtml = item.exerciseUrl ? 
                `<a class="doc-link" onclick="openPreview('${escapeHtml(item.exerciseUrl)}', '${escapeHtml(eLabel)}')">${escapeHtml(eLabel)}</a>` : 
                `<span class="empty-dash">-</span>`;

            const actionTd = isReadOnly ? '' : `
                <td class="td-center admin-only">
                    <div class="action-box">
                        <div class="action-top-row">
                            <button class="act-btn act-star" onclick="toggleYellow('${item.id}')" title="Bật/Tắt tô vàng">⭐</button>
                            <button class="act-btn act-edit" onclick="openEditModal('${item.id}')" title="Sửa bài giảng">✏️</button>
                        </div>
                        <button class="act-btn act-delete" onclick="deleteLesson('${item.id}')" title="Xóa bài giảng">🗑️</button>
                    </div>
                </td>
            `;

            tbodyHtml += `
                <tr class="${bgClass}" data-id="${item.id}">
                    <td class="td-stt">${idx + 1}</td>
                    <td class="td-title">${escapeHtml(item.title)}</td>
                    <td class="td-center">${videoHtml}</td>
                    <td class="td-center">${answerHtml}</td>
                    <td class="td-center">${exerciseHtml}</td>
                    ${actionTd}
                </tr>
            `;
        });
    });

    const emptyColspan = isReadOnly ? 5 : 6;
    if (!tbodyHtml) {
        tbodyHtml = `
            <tr>
                <td colspan="${emptyColspan}" style="text-align: center; padding: 40px; color: #64748b; font-weight: 700;">
                    Chưa có bài giảng nào trong chương này.
                </td>
            </tr>
        `;
    }

    tableBody.innerHTML = tbodyHtml;
}

// TOGGLE YELLOW HIGHLIGHT
function toggleYellow(id) {
    if (isReadOnly) return;
    const item = lessons.find(l => l.id === id);
    if (item) {
        item.isYellow = !item.isYellow;
        saveLessons();
        render();
        showToast(item.isYellow ? '⭐ Đã tô vàng bài học!' : 'Đã bỏ tô vàng bài học', item.isYellow ? 'warning' : 'info');
    }
}

// DELETE LESSON
function deleteLesson(id) {
    if (isReadOnly) return;
    const item = lessons.find(l => l.id === id);
    if (!item) return;
    if (confirm(`Bạn có chắc chắn muốn xóa bài: "${item.title}"?`)) {
        lessons = lessons.filter(l => l.id !== id);
        saveLessons();
        render();
        showToast('Đã xóa bài giảng!', 'danger');
    }
}

// OPEN ADD MODAL
function openAddModal() {
    if (isReadOnly) return;
    modalHeading.innerHTML = `<i class="fa-solid fa-circle-plus text-primary"></i> Thêm Bài Giảng Toán 12`;
    editId.value = '';
    lessonForm.reset();

    if (activeChapter !== 'ALL') {
        inputChapter.value = activeChapter;
    }

    inputYellowHighlight.checked = true;
    lessonModal.classList.remove('hidden');
    inputTitle.focus();
}

// OPEN EDIT MODAL
function openEditModal(id) {
    if (isReadOnly) return;
    const item = lessons.find(l => l.id === id);
    if (!item) return;

    modalHeading.innerHTML = `<i class="fa-solid fa-pen-to-square text-primary"></i> Chỉnh Sửa Bài Giảng`;
    editId.value = item.id;
    inputChapter.value = item.chapter;
    inputTitle.value = item.title;
    inputVideoLabel.value = item.videoLabel || '';
    inputVideoUrl.value = item.videoUrl || '';
    inputAnswerLabel.value = item.answerLabel || '';
    inputAnswerUrl.value = item.answerUrl || '';
    inputExerciseLabel.value = item.exerciseLabel || '';
    inputExerciseUrl.value = item.exerciseUrl || '';
    inputYellowHighlight.checked = !!item.isYellow;

    lessonModal.classList.remove('hidden');
}

// HANDLE SAVE LESSON
function handleSaveLesson(e) {
    e.preventDefault();
    if (isReadOnly) return;

    const id = editId.value;
    const chapter = inputChapter.value;
    const title = inputTitle.value.trim();
    const videoLabel = inputVideoLabel.value.trim();
    const videoUrl = inputVideoUrl.value.trim();
    const answerLabel = inputAnswerLabel.value.trim();
    const answerUrl = inputAnswerUrl.value.trim();
    const exerciseLabel = inputExerciseLabel.value.trim();
    const exerciseUrl = inputExerciseUrl.value.trim();
    const isYellow = inputYellowHighlight.checked;

    if (!title) return;

    if (id) {
        // Edit
        const idx = lessons.findIndex(l => l.id === id);
        if (idx !== -1) {
            lessons[idx] = {
                ...lessons[idx],
                chapter,
                title,
                videoLabel,
                videoUrl,
                answerLabel,
                answerUrl,
                exerciseLabel,
                exerciseUrl,
                isYellow
            };
            showToast('Cập nhật bài giảng thành công!', 'success');
        }
    } else {
        // Add
        const newLesson = {
            id: 'hv-' + Date.now(),
            chapter,
            title,
            videoLabel,
            videoUrl,
            answerLabel,
            answerUrl,
            exerciseLabel,
            exerciseUrl,
            isYellow
        };
        lessons.push(newLesson);
        showToast('Đã thêm bài giảng mới thành công!', 'success');
    }

    saveLessons();
    lessonModal.classList.add('hidden');
    render();
}

// ADVANCED MEDIA PREVIEW MODAL (GOOGLE DRIVE & CLOUDFLARE ENHANCED)
function openPreview(url, title) {
    if (!url) return;

    btnOpenExternal.href = url;
    previewTitle.innerHTML = `<i class="fa-solid fa-file-pdf text-primary"></i> ${escapeHtml(title)}`;

    let embedUrl = url;

    // 1. GOOGLE DRIVE LINK AUTO-CONVERTER (/view -> /preview)
    if (url.includes('drive.google.com')) {
        embedUrl = url.replace(/\/view(\?.*)?$/, '/preview').replace(/\/view\?usp=sharing/, '/preview');
        if (!embedUrl.endsWith('/preview') && embedUrl.includes('/view')) {
            embedUrl = embedUrl.replace('/view', '/preview');
        }
        previewContainer.innerHTML = `
            <iframe src="${embedUrl}" width="100%" height="100%" allow="autoplay" allowfullscreen></iframe>
        `;
        previewModal.classList.remove('hidden');
        return;
    }

    // 2. YOUTUBE VIDEO CONVERTER
    const youtubeId = getYoutubeId(url);
    if (youtubeId) {
        previewContainer.innerHTML = `
            <iframe src="https://www.youtube.com/embed/${youtubeId}?autoplay=1" allowfullscreen></iframe>
        `;
        previewModal.classList.remove('hidden');
        return;
    }

    // 3. CLOUDFLARE R2 / STREAM / DIRECT PDF LINK
    if (url.includes('cloudflare') || url.includes('r2.dev') || url.endsWith('.pdf') || url.includes('.pdf?')) {
        let pdfUrl = url;
        if ((url.endsWith('.pdf') || url.includes('r2.dev')) && !url.includes('#')) {
            pdfUrl += '#toolbar=0';
        }
        previewContainer.innerHTML = `
            <iframe src="${pdfUrl}" width="100%" height="100%" allowfullscreen></iframe>
        `;
        previewModal.classList.remove('hidden');
        return;
    }

    // Fallback: Open in new tab if generic link
    window.open(url, '_blank');
    showToast('Đang mở tài liệu...', 'info');
}

function getYoutubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

// EXPORT EXCEL (CSV)
function exportToCSV() {
    let csvContent = "\uFEFF"; // UTF-8 BOM
    csvContent += "STT,Tiêu Đề Bài Giảng,Chương,Link Video,Link Đáp Án (PDF),Link File Đề In\n";

    lessons.forEach((l, idx) => {
        const row = [
            idx + 1,
            `"${l.title.replace(/"/g, '""')}"`,
            `"${l.chapter.replace(/"/g, '""')}"`,
            `"${l.videoUrl}"`,
            `"${l.answerUrl}"`,
            `"${l.exerciseUrl}"`
        ];
        csvContent += row.join(",") + "\n";
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `Thong_Ke_Bai_Giang_Toan_12_Hoang_Vu.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast('Đã tải xuống file Excel (CSV)!', 'success');
}

// TOAST NOTIFICATIONS
function showToast(message, type = 'info') {
    const container = document.getElementById('toastWrapper');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast-item toast-${type}`;

    let icon = 'fa-info-circle';
    if (type === 'success') icon = 'fa-circle-check';
    if (type === 'warning') icon = 'fa-star';
    if (type === 'danger') icon = 'fa-circle-xmark';

    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${escapeHtml(message)}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
