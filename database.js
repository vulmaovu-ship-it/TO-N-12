/* ==========================================================================
   MATH DATABASE MANAGER MODULE - ANH HOÀNG VŨ (CLIENT-SIDE JS DATABASE)
   ========================================================================== */

const MATH_DB_KEY = 'hoangvu_math12_v8_final';
const MATH_CHAPTERS_KEY = 'hoangvu_chapters_list_v8_final';

class MathDatabase {
    constructor() {
        this.lessons = [];
        this.chapters = [];
        this.init();
    }

    /**
     * Khởi tạo và nạp dữ liệu từ LocalStorage hoặc dữ liệu mặc định
     */
    init() {
        const storedLessons = localStorage.getItem(MATH_DB_KEY);
        const storedChapters = localStorage.getItem(MATH_CHAPTERS_KEY);

        if (storedLessons) {
            try {
                this.lessons = JSON.parse(storedLessons);
            } catch (e) {
                console.warn('Lỗi đọc LocalStorage lessons, sử dụng dữ liệu mặc định.', e);
                this.lessons = [...this.getDefaultLessons()];
            }
        } else {
            this.lessons = [...this.getDefaultLessons()];
            this.saveLessons();
        }

        if (storedChapters) {
            try {
                this.chapters = JSON.parse(storedChapters);
            } catch (e) {
                console.warn('Lỗi đọc LocalStorage chapters, sử dụng danh mục mặc định.', e);
                this.chapters = [...this.getDefaultChapters()];
            }
        } else {
            this.chapters = [...this.getDefaultChapters()];
            this.saveChapters();
        }
    }

    // --- READ METHODS ---
    getAllLessons() {
        return this.lessons;
    }

    getLessonsByChapter(chapterName) {
        if (!chapterName) return this.lessons;
        return this.lessons.filter(l => l.chapter === chapterName);
    }

    getLessonById(id) {
        return this.lessons.find(l => l.id === id);
    }

    getAllChapters() {
        return this.chapters;
    }

    search(query, yellowOnly = false, chapter = null) {
        const q = (query || '').toLowerCase().trim();
        return this.lessons.filter(l => {
            const matchesChapter = !chapter || l.chapter === chapter;
            const matchesYellow = !yellowOnly || l.isYellow;
            const matchesQuery = !q || (
                (l.title && l.title.toLowerCase().includes(q)) ||
                (l.videoLabel && l.videoLabel.toLowerCase().includes(q)) ||
                (l.answerLabel && l.answerLabel.toLowerCase().includes(q)) ||
                (l.exerciseLabel && l.exerciseLabel.toLowerCase().includes(q)) ||
                (l.chapter && l.chapter.toLowerCase().includes(q))
            );

            return matchesChapter && matchesYellow && matchesQuery;
        });
    }

    // --- WRITE / MUTATE METHODS ---
    addLesson(lessonData) {
        const newLesson = {
            id: 'hv-' + Date.now(),
            chapter: lessonData.chapter || this.chapters[0],
            title: lessonData.title || 'Bài giảng mới',
            videoLabel: lessonData.videoLabel || '',
            videoUrl: lessonData.videoUrl || '',
            answerLabel: lessonData.answerLabel || '',
            answerUrl: lessonData.answerUrl || '',
            exerciseLabel: lessonData.exerciseLabel || '',
            exerciseUrl: lessonData.exerciseUrl || '',
            isYellow: lessonData.isYellow !== undefined ? lessonData.isYellow : true
        };

        this.lessons.push(newLesson);
        this.saveLessons();
        return newLesson;
    }

    updateLesson(id, updatedFields) {
        const idx = this.lessons.findIndex(l => l.id === id);
        if (idx !== -1) {
            this.lessons[idx] = { ...this.lessons[idx], ...updatedFields };
            this.saveLessons();
            return this.lessons[idx];
        }
        return null;
    }

    deleteLesson(id) {
        const initialLen = this.lessons.length;
        this.lessons = this.lessons.filter(l => l.id !== id);
        if (this.lessons.length !== initialLen) {
            this.saveLessons();
            return true;
        }
        return false;
    }

    addChapter(chapterTitle) {
        if (!chapterTitle || this.chapters.includes(chapterTitle)) return false;
        this.chapters.push(chapterTitle);
        this.saveChapters();
        return true;
    }

    deleteChapter(chapterTitle) {
        this.chapters = this.chapters.filter(c => c !== chapterTitle);
        this.saveChapters();
        return true;
    }

    // --- PERSISTENCE ---
    saveLessons() {
        localStorage.setItem(MATH_DB_KEY, JSON.stringify(this.lessons));
    }

    saveChapters() {
        localStorage.setItem(MATH_CHAPTERS_KEY, JSON.stringify(this.chapters));
    }

    exportJSON() {
        return JSON.stringify({
            metadata: {
                title: "Bảng Thống Kê Bài Giảng TOÁN 12 - ANH HOÀNG VŨ",
                exportedAt: new Date().toISOString(),
                totalLessons: this.lessons.length,
                totalChapters: this.chapters.length
            },
            chapters: this.chapters,
            lessons: this.lessons
        }, null, 2);
    }

    importJSON(jsonString) {
        try {
            const data = JSON.parse(jsonString);
            if (Array.isArray(data.lessons)) {
                this.lessons = data.lessons;
                this.saveLessons();
            }
            if (Array.isArray(data.chapters)) {
                this.chapters = data.chapters;
                this.saveChapters();
            }
            return true;
        } catch (e) {
            console.error('Import Database JSON không hợp lệ:', e);
            return false;
        }
    }

    resetToDefault() {
        this.lessons = [...this.getDefaultLessons()];
        this.chapters = [...this.getDefaultChapters()];
        this.saveLessons();
        this.saveChapters();
    }

    // --- DEFAULT SEED DATA ---
    getDefaultChapters() {
        return [
            "CHƯƠNG 1: ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ HÀM SỐ",
            "CHƯƠNG 2: VECTOR VÀ HỆ TỌA ĐỘ TRONG KHÔNG GIAN",
            "CHƯƠNG 3: CÁC SỐ ĐẶC TRƯNG ĐO MỨC ĐỘ PHÂN TÁN CHO MẪU SỐ LIỆU GHÉP NHÓM",
            "CHƯƠNG 4: NGUYÊN HÀM. TÍCH PHÂN",
            "CHƯƠNG 5: PHƯƠNG TRÌNH MẶT PHẲNG, ĐƯỜNG THẲNG, MẶT CẦU",
            "CHƯƠNG 6: XÁC SUẤT CÓ ĐIỀU KIỆN",
            "CHƯƠNG 7: XÁC SUẤT CỔ ĐIỂN NÂNG CAO",
            "CHƯƠNG 8: 1 SỐ BÀI TOÁN THÚ VỊ KHÁC"
        ];
    }

    getDefaultLessons() {
        return [
            { "id": "hv-1", "chapter": "CHƯƠNG 1: ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ HÀM SỐ", "title": "Bài 1: Tính đơn điệu và cực trị của hàm số", "videoLabel": "VIDEO BÀI 1", "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "answerLabel": "BẢN VIẾT TAY BÀI 1", "answerUrl": "https://drive.google.com/file/d/sample_answer_1/view", "exerciseLabel": "FILE ĐỀ IN BÀI 1", "exerciseUrl": "https://drive.google.com/file/d/sample_dein_1/view", "isYellow": true },
            { "id": "hv-2", "chapter": "CHƯƠNG 1: ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ HÀM SỐ", "title": "Bài 2: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số (GTLN - GTNN)", "videoLabel": "VIDEO BÀI 2", "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "answerLabel": "BẢN VIẾT TAY BÀI 2", "answerUrl": "https://drive.google.com/file/d/sample_answer_2/view", "exerciseLabel": "", "exerciseUrl": "", "isYellow": true },
            { "id": "hv-3", "chapter": "CHƯƠNG 1: ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ HÀM SỐ", "title": "Bài 3: Đường tiệm cận của đồ thị hàm số (Tiệm cận đứng & Tiệm cận ngang)", "videoLabel": "VIDEO BÀI 3", "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "answerLabel": "BẢN VIẾT TAY BÀI 3", "answerUrl": "https://drive.google.com/file/d/sample_answer_3/view", "exerciseLabel": "", "exerciseUrl": "", "isYellow": true },
            { "id": "hv-4", "chapter": "CHƯƠNG 1: ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ HÀM SỐ", "title": "Bài 4: Khảo sát sự biến thiên và vẽ đồ thị hàm số", "videoLabel": "VIDEO BÀI 4", "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "answerLabel": "BẢN VIẾT TAY BÀI 4", "answerUrl": "https://drive.google.com/file/d/sample_answer_4/view", "exerciseLabel": "", "exerciseUrl": "", "isYellow": true },
            { "id": "hv-5", "chapter": "CHƯƠNG 1: ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ HÀM SỐ", "title": "Tài liệu rèn luyện thêm Chương 1", "videoLabel": "", "videoUrl": "", "answerLabel": "FILE ĐÁP ÁN RÈN LUYỆN THÊM", "answerUrl": "https://drive.google.com/file/d/sample_answer_5/view", "exerciseLabel": "FILE ĐỀ RÈN LUYỆN THÊM", "exerciseUrl": "https://drive.google.com/file/d/sample_dein_5/view", "isYellow": true },
            { "id": "hv-6", "chapter": "CHƯƠNG 2: VECTOR VÀ HỆ TỌA ĐỘ TRONG KHÔNG GIAN", "title": "Bài 1: Vector và các phép toán vector trong không gian", "videoLabel": "VIDEO BÀI 1", "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "answerLabel": "BẢN VIẾT TAY BÀI 1", "answerUrl": "https://drive.google.com/file/d/sample_c2_1/view", "exerciseLabel": "FILE ĐỀ IN BÀI 1", "exerciseUrl": "https://drive.google.com/file/d/sample_de_c2_1/view", "isYellow": true },
            { "id": "hv-7", "chapter": "CHƯƠNG 2: VECTOR VÀ HỆ TỌA ĐỘ TRONG KHÔNG GIAN", "title": "Bài 2: Tọa độ của vector và điểm trong hệ tọa độ Oxyz", "videoLabel": "VIDEO BÀI 2", "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "answerLabel": "BẢN VIẾT TAY BÀI 2", "answerUrl": "https://drive.google.com/file/d/sample_c2_2/view", "exerciseLabel": "", "exerciseUrl": "", "isYellow": true },
            { "id": "hv-8", "chapter": "CHƯƠNG 2: VECTOR VÀ HỆ TỌA ĐỘ TRONG KHÔNG GIAN", "title": "Bài 3: Biểu thức tọa độ của các phép toán vector & Tích vô hướng", "videoLabel": "VIDEO BÀI 3", "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "answerLabel": "BẢN VIẾT TAY BÀI 3", "answerUrl": "https://drive.google.com/file/d/sample_c2_3/view", "exerciseLabel": "FILE ĐỀ IN BÀI 3", "exerciseUrl": "https://drive.google.com/file/d/sample_de_c2_3/view", "isYellow": true },
            { "id": "hv-9", "chapter": "CHƯƠNG 3: CÁC SỐ ĐẶC TRƯNG ĐO MỨC ĐỘ PHÂN TÁN CHO MẪU SỐ LIỆU GHÉP NHÓM", "title": "Bài 1: Khoảng biến thiên và khoảng tứ phân vị của mẫu số liệu ghép nhóm", "videoLabel": "VIDEO BÀI 1", "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "answerLabel": "BẢN VIẾT TAY BÀI 1", "answerUrl": "https://drive.google.com/file/d/sample_c3_1/view", "exerciseLabel": "FILE ĐỀ IN BÀI 1", "exerciseUrl": "https://drive.google.com/file/d/sample_de_c3_1/view", "isYellow": true },
            { "id": "hv-10", "chapter": "CHƯƠNG 3: CÁC SỐ ĐẶC TRƯNG ĐO MỨC ĐỘ PHÂN TÁN CHO MẪU SỐ LIỆU GHÉP NHÓM", "title": "Bài 2: Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm", "videoLabel": "VIDEO BÀI 2", "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "answerLabel": "BẢN VIẾT TAY BÀI 2", "answerUrl": "https://drive.google.com/file/d/sample_c3_2/view", "exerciseLabel": "", "exerciseUrl": "", "isYellow": true },
            { "id": "hv-11", "chapter": "CHƯƠNG 4: NGUYÊN HÀM. TÍCH PHÂN", "title": "Bài 1: Nguyên hàm & Các tính chất của nguyên hàm", "videoLabel": "VIDEO BÀI 1", "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "answerLabel": "BẢN VIẾT TAY BÀI 1", "answerUrl": "https://drive.google.com/file/d/sample_c4_1/view", "exerciseLabel": "FILE ĐỀ IN BÀI 1", "exerciseUrl": "https://drive.google.com/file/d/sample_de_c4_1/view", "isYellow": true },
            { "id": "hv-12", "chapter": "CHƯƠNG 4: NGUYÊN HÀM. TÍCH PHÂN", "title": "Bài 2: Tích phân & Phương pháp tính tích phân", "videoLabel": "VIDEO BÀI 2", "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "answerLabel": "BẢN VIẾT TAY BÀI 2", "answerUrl": "https://drive.google.com/file/d/sample_c4_2/view", "exerciseLabel": "", "exerciseUrl": "", "isYellow": true },
            { "id": "hv-13", "chapter": "CHƯƠNG 4: NGUYÊN HÀM. TÍCH PHÂN", "title": "Bài 3: Ứng dụng tích phân tính diện tích hình phẳng & thể tích khối tròn xoay", "videoLabel": "VIDEO BÀI 3", "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "answerLabel": "BẢN VIẾT TAY BÀI 3", "answerUrl": "https://drive.google.com/file/d/sample_c4_3/view", "exerciseLabel": "FILE ĐỀ IN BÀI 3", "exerciseUrl": "https://drive.google.com/file/d/sample_de_c4_3/view", "isYellow": true },
            { "id": "hv-14", "chapter": "CHƯƠNG 5: PHƯƠNG TRÌNH MẶT PHẲNG, ĐƯỜNG THẲNG, MẶT CẦU", "title": "Bài 1: Phương trình mặt phẳng trong không gian Oxyz", "videoLabel": "VIDEO BÀI 1", "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "answerLabel": "BẢN VIẾT TAY BÀI 1", "answerUrl": "https://drive.google.com/file/d/sample_c5_1/view", "exerciseLabel": "FILE ĐỀ IN BÀI 1", "exerciseUrl": "https://drive.google.com/file/d/sample_de_c5_1/view", "isYellow": true },
            { "id": "hv-15", "chapter": "CHƯƠNG 5: PHƯƠNG TRÌNH MẶT PHẲNG, ĐƯỜNG THẲNG, MẶT CẦU", "title": "Bài 2: Phương trình đường thẳng trong không gian Oxyz", "videoLabel": "VIDEO BÀI 2", "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "answerLabel": "BẢN VIẾT TAY BÀI 2", "answerUrl": "https://drive.google.com/file/d/sample_c5_2/view", "exerciseLabel": "", "exerciseUrl": "", "isYellow": true },
            { "id": "hv-16", "chapter": "CHƯƠNG 5: PHƯƠNG TRÌNH MẶT PHẲNG, ĐƯỜNG THẲNG, MẶT CẦU", "title": "Bài 3: Phương trình mặt cầu & Vị trí tương đối trong Oxyz", "videoLabel": "VIDEO BÀI 3", "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "answerLabel": "BẢN VIẾT TAY BÀI 3", "answerUrl": "https://drive.google.com/file/d/sample_c5_3/view", "exerciseLabel": "FILE ĐỀ IN BÀI 3", "exerciseUrl": "https://drive.google.com/file/d/sample_de_c5_3/view", "isYellow": true },
            { "id": "hv-17", "chapter": "CHƯƠNG 6: XÁC SUẤT CÓ ĐIỀU KIỆN", "title": "Bài 1: Khái niệm xác suất có điều kiện", "videoLabel": "VIDEO BÀI 1", "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "answerLabel": "BẢN VIẾT TAY BÀI 1", "answerUrl": "https://drive.google.com/file/d/sample_c6_1/view", "exerciseLabel": "FILE ĐỀ IN BÀI 1", "exerciseUrl": "https://drive.google.com/file/d/sample_de_c6_1/view", "isYellow": true },
            { "id": "hv-18", "chapter": "CHƯƠNG 6: XÁC SUẤT CÓ ĐIỀU KIỆN", "title": "Bài 2: Công thức nhân xác suất & Công thức xác suất toàn phần", "videoLabel": "VIDEO BÀI 2", "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "answerLabel": "BẢN VIẾT TAY BÀI 2", "answerUrl": "https://drive.google.com/file/d/sample_c6_2/view", "exerciseLabel": "", "exerciseUrl": "", "isYellow": true },
            { "id": "hv-19", "chapter": "CHƯƠNG 6: XÁC SUẤT CÓ ĐIỀU KIỆN", "title": "Bài 3: Công thức Bayes & Bài toán thực tế ứng dụng xác suất", "videoLabel": "VIDEO BÀI 3", "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "answerLabel": "BẢN VIẾT TAY BÀI 3", "answerUrl": "https://drive.google.com/file/d/sample_c6_3/view", "exerciseLabel": "FILE ĐỀ IN BÀI 3", "exerciseUrl": "https://drive.google.com/file/d/sample_de_c6_3/view", "isYellow": true },
            { "id": "hv-20", "chapter": "CHƯƠNG 7: XÁC SUẤT CỔ ĐIỀN NÂNG CAO", "title": "Bài 1: Phương pháp đếm nâng cao, Quy tắc cộng & Quy tắc nhân", "videoLabel": "VIDEO BÀI 1", "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "answerLabel": "BẢN VIẾT TAY BÀI 1", "answerUrl": "https://drive.google.com/file/d/sample_c7_1/view", "exerciseLabel": "FILE ĐỀ IN BÀI 1", "exerciseUrl": "https://drive.google.com/file/d/sample_de_c7_1/view", "isYellow": true },
            { "id": "hv-21", "chapter": "CHƯƠNG 7: XÁC SUẤT CỔ ĐIỀN NÂNG CAO", "title": "Bài 2: Bài toán Hoán vị - Chỉnh hợp - Tổ hợp nâng cao trong đề thi THPT QG", "videoLabel": "VIDEO BÀI 2", "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "answerLabel": "BẢN VIẾT TAY BÀI 2", "answerUrl": "https://drive.google.com/file/d/sample_c7_2/view", "exerciseLabel": "", "exerciseUrl": "", "isYellow": true },
            { "id": "hv-22", "chapter": "CHƯƠNG 7: XÁC SUẤT CỔ ĐIỀN NÂNG CAO", "title": "Bài 3: Bài toán Xếp hàng, Chọn thẻ, Chia quà & Xác suất cổ điển hình học", "videoLabel": "VIDEO BÀI 3", "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "answerLabel": "BẢN VIẾT TAY BÀI 3", "answerUrl": "https://drive.google.com/file/d/sample_c7_3/view", "exerciseLabel": "FILE ĐỀ IN BÀI 3", "exerciseUrl": "https://drive.google.com/file/d/sample_de_c7_3/view", "isYellow": true },
            { "id": "hv-23", "chapter": "CHƯƠNG 8: 1 SỐ BÀI TOÁN THÚ VỊ KHÁC", "title": "Bài 1: Các bài toán Cực trị Vận dụng cao (9+) và Kỹ thuật chuẩn hóa", "videoLabel": "VIDEO BÀI 1", "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "answerLabel": "BẢN VIẾT TAY BÀI 1", "answerUrl": "https://drive.google.com/file/d/sample_c8_1/view", "exerciseLabel": "FILE ĐỀ IN BÀI 1", "exerciseUrl": "https://drive.google.com/file/d/sample_de_c8_1/view", "isYellow": true },
            { "id": "hv-24", "chapter": "CHƯƠNG 8: 1 SỐ BÀI TOÁN THÚ VỊ KHÁC", "title": "Bài 2: Giải nhanh trắc nghiệm bằng phương pháp Đồ thị & Đánh giá Bất đẳng thức", "videoLabel": "VIDEO BÀI 2", "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "answerLabel": "BẢN VIẾT TAY BÀI 2", "answerUrl": "https://drive.google.com/file/d/sample_c8_2/view", "exerciseLabel": "", "exerciseUrl": "", "isYellow": true },
            { "id": "hv-25", "chapter": "CHƯƠNG 8: 1 SỐ BÀI TOÁN THÚ VỊ KHÁC", "title": "Bài 3: Đề luyện thi thử Đánh giá năng lực & Ôn tập tổng hợp chọn lọc", "videoLabel": "VIDEO BÀI 3", "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "answerLabel": "BẢN VIẾT TAY BÀI 3", "answerUrl": "https://drive.google.com/file/d/sample_c8_3/view", "exerciseLabel": "FILE ĐỀ IN BÀI 3", "exerciseUrl": "https://drive.google.com/file/d/sample_de_c8_3/view", "isYellow": true }
        ];
    }
}

// Global Singleton Instance
const mathDB = new MathDatabase();
