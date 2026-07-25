-- ============================================================================
-- CƠ SỞ DỮ LIỆU BẢNG THỐNG KÊ BÀI GIẢNG TOÁN 12 - ANH HOÀNG VŨ
-- SQL Database Schema & Initial Data Seed (Supports MySQL / SQLite / PostgreSQL)
-- Created At: 2026-07-25
-- ============================================================================

-- Create Database if not exists
-- CREATE DATABASE IF NOT EXISTS math12_hoangvu DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- USE math12_hoangvu;

-- 1. Table: chapters (Danh mục Chương học)
DROP TABLE IF EXISTS lessons;
DROP TABLE IF EXISTS chapters;

CREATE TABLE chapters (
    id INT AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(50) NOT NULL UNIQUE,
    title VARCHAR(255) NOT NULL,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Table: lessons (Bài giảng & Tài liệu chi tiết)
CREATE TABLE lessons (
    id VARCHAR(50) PRIMARY KEY,
    chapter_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    video_label VARCHAR(100) DEFAULT '',
    video_url TEXT,
    answer_label VARCHAR(100) DEFAULT '',
    answer_url TEXT,
    exercise_label VARCHAR(100) DEFAULT '',
    exercise_url TEXT,
    is_yellow TINYINT(1) DEFAULT 1,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_lessons_chapter FOREIGN KEY (chapter_id) REFERENCES chapters(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- INDEXES for fast querying
CREATE INDEX idx_lessons_chapter ON lessons(chapter_id);
CREATE INDEX idx_lessons_yellow ON lessons(is_yellow);

-- ============================================================================
-- SEED DATA: CHAPTERS
-- ============================================================================
INSERT INTO chapters (id, code, title, sort_order) VALUES
(1, 'C1', 'CHƯƠNG 1: ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ HÀM SỐ', 1),
(2, 'C2', 'CHƯƠNG 2: VECTOR VÀ HỆ TỌA ĐỘ TRONG KHÔNG GIAN', 2),
(3, 'C3', 'CHƯƠNG 3: CÁC SỐ ĐẶC TRƯNG ĐO MỨC ĐỘ PHÂN TÁN CHO MẪU SỐ LIỆU GHÉP NHÓM', 3),
(4, 'C4', 'CHƯƠNG 4: NGUYÊN HÀM. TÍCH PHÂN', 4),
(5, 'C5', 'CHƯƠNG 5: PHƯƠNG TRÌNH MẶT PHẲNG, ĐƯỜNG THẲNG, MẶT CẦU', 5),
(6, 'C6', 'CHƯƠNG 6: XÁC SUẤT CÓ ĐIỀU KIỆN', 6),
(7, 'C7', 'CHƯƠNG 7: XÁC SUẤT CỔ ĐIỂN NÂNG CAO', 7),
(8, 'C8', 'CHƯƠNG 8: 1 SỐ BÀI TOÁN THÚ VỊ KHÁC', 8);

-- ============================================================================
-- SEED DATA: LESSONS
-- ============================================================================
INSERT INTO lessons (id, chapter_id, title, video_label, video_url, answer_label, answer_url, exercise_label, exercise_url, is_yellow, sort_order) VALUES
-- Chương 1
('hv-1', 1, 'Bài 1: Tính đơn điệu và cực trị của hàm số', 'VIDEO BÀI 1', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'BẢN VIẾT TAY BÀI 1', 'https://drive.google.com/file/d/sample_answer_1/view', 'FILE ĐỀ IN BÀI 1', 'https://drive.google.com/file/d/sample_dein_1/view', 1, 1),
('hv-2', 1, 'Bài 2: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số (GTLN - GTNN)', 'VIDEO BÀI 2', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'BẢN VIẾT TAY BÀI 2', 'https://drive.google.com/file/d/sample_answer_2/view', '', '', 1, 2),
('hv-3', 1, 'Bài 3: Đường tiệm cận của đồ thị hàm số (Tiệm cận đứng & Tiệm cận ngang)', 'VIDEO BÀI 3', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'BẢN VIẾT TAY BÀI 3', 'https://drive.google.com/file/d/sample_answer_3/view', '', '', 1, 3),
('hv-4', 1, 'Bài 4: Khảo sát sự biến thiên và vẽ đồ thị hàm số', 'VIDEO BÀI 4', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'BẢN VIẾT TAY BÀI 4', 'https://drive.google.com/file/d/sample_answer_4/view', '', '', 1, 4),
('hv-5', 1, 'Tài liệu rèn luyện thêm Chương 1', '', '', 'FILE ĐÁP ÁN RÈN LUYỆN THÊM', 'https://drive.google.com/file/d/sample_answer_5/view', 'FILE ĐỀ RÈN LUYỆN THÊM', 'https://drive.google.com/file/d/sample_dein_5/view', 1, 5),

-- Chương 2
('hv-6', 2, 'Bài 1: Vector và các phép toán vector trong không gian', 'VIDEO BÀI 1', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'BẢN VIẾT TAY BÀI 1', 'https://drive.google.com/file/d/sample_c2_1/view', 'FILE ĐỀ IN BÀI 1', 'https://drive.google.com/file/d/sample_de_c2_1/view', 1, 6),
('hv-7', 2, 'Bài 2: Tọa độ của vector và điểm trong hệ tọa độ Oxyz', 'VIDEO BÀI 2', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'BẢN VIẾT TAY BÀI 2', 'https://drive.google.com/file/d/sample_c2_2/view', '', '', 1, 7),
('hv-8', 2, 'Bài 3: Biểu thức tọa độ của các phép toán vector & Tích vô hướng', 'VIDEO BÀI 3', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'BẢN VIẾT TAY BÀI 3', 'https://drive.google.com/file/d/sample_c2_3/view', 'FILE ĐỀ IN BÀI 3', 'https://drive.google.com/file/d/sample_de_c2_3/view', 1, 8),

-- Chương 3
('hv-9', 3, 'Bài 1: Khoảng biến thiên và khoảng tứ phân vị của mẫu số liệu ghép nhóm', 'VIDEO BÀI 1', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'BẢN VIẾT TAY BÀI 1', 'https://drive.google.com/file/d/sample_c3_1/view', 'FILE ĐỀ IN BÀI 1', 'https://drive.google.com/file/d/sample_de_c3_1/view', 1, 9),
('hv-10', 3, 'Bài 2: Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm', 'VIDEO BÀI 2', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'BẢN VIẾT TAY BÀI 2', 'https://drive.google.com/file/d/sample_c3_2/view', '', '', 1, 10),

-- Chương 4
('hv-11', 4, 'Bài 1: Nguyên hàm & Các tính chất của nguyên hàm', 'VIDEO BÀI 1', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'BẢN VIẾT TAY BÀI 1', 'https://drive.google.com/file/d/sample_c4_1/view', 'FILE ĐỀ IN BÀI 1', 'https://drive.google.com/file/d/sample_de_c4_1/view', 1, 11),
('hv-12', 4, 'Bài 2: Tích phân & Phương pháp tính tích phân', 'VIDEO BÀI 2', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'BẢN VIẾT TAY BÀI 2', 'https://drive.google.com/file/d/sample_c4_2/view', '', '', 1, 12),
('hv-13', 4, 'Bài 3: Ứng dụng tích phân tính diện tích hình phẳng & thể tích khối tròn xoay', 'VIDEO BÀI 3', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'BẢN VIẾT TAY BÀI 3', 'https://drive.google.com/file/d/sample_c4_3/view', 'FILE ĐỀ IN BÀI 3', 'https://drive.google.com/file/d/sample_de_c4_3/view', 1, 13),

-- Chương 5
('hv-14', 5, 'Bài 1: Phương trình mặt phẳng trong không gian Oxyz', 'VIDEO BÀI 1', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'BẢN VIẾT TAY BÀI 1', 'https://drive.google.com/file/d/sample_c5_1/view', 'FILE ĐỀ IN BÀI 1', 'https://drive.google.com/file/d/sample_de_c5_1/view', 1, 14),
('hv-15', 5, 'Bài 2: Phương trình đường thẳng trong không gian Oxyz', 'VIDEO BÀI 2', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'BẢN VIẾT TAY BÀI 2', 'https://drive.google.com/file/d/sample_c5_2/view', '', '', 1, 15),
('hv-16', 5, 'Bài 3: Phương trình mặt cầu & Vị trí tương đối trong Oxyz', 'VIDEO BÀI 3', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'BẢN VIẾT TAY BÀI 3', 'https://drive.google.com/file/d/sample_c5_3/view', 'FILE ĐỀ IN BÀI 3', 'https://drive.google.com/file/d/sample_de_c5_3/view', 1, 16),

-- Chương 6
('hv-17', 6, 'Bài 1: Khái niệm xác suất có điều kiện', 'VIDEO BÀI 1', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'BẢN VIẾT TAY BÀI 1', 'https://drive.google.com/file/d/sample_c6_1/view', 'FILE ĐỀ IN BÀI 1', 'https://drive.google.com/file/d/sample_de_c6_1/view', 1, 17),
('hv-18', 6, 'Bài 2: Công thức nhân xác suất & Công thức xác suất toàn phần', 'VIDEO BÀI 2', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'BẢN VIẾT TAY BÀI 2', 'https://drive.google.com/file/d/sample_c6_2/view', '', '', 1, 18),
('hv-19', 6, 'Bài 3: Công thức Bayes & Bài toán thực tế ứng dụng xác suất', 'VIDEO BÀI 3', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'BẢN VIẾT TAY BÀI 3', 'https://drive.google.com/file/d/sample_c6_3/view', 'FILE ĐỀ IN BÀI 3', 'https://drive.google.com/file/d/sample_de_c6_3/view', 1, 19),

-- Chương 7
('hv-20', 7, 'Bài 1: Phương pháp đếm nâng cao, Quy tắc cộng & Quy tắc nhân', 'VIDEO BÀI 1', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'BẢN VIẾT TAY BÀI 1', 'https://drive.google.com/file/d/sample_c7_1/view', 'FILE ĐỀ IN BÀI 1', 'https://drive.google.com/file/d/sample_de_c7_1/view', 1, 20),
('hv-21', 7, 'Bài 2: Bài toán Hoán vị - Chỉnh hợp - Tổ hợp nâng cao trong đề thi THPT QG', 'VIDEO BÀI 2', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'BẢN VIẾT TAY BÀI 2', 'https://drive.google.com/file/d/sample_c7_2/view', '', '', 1, 21),
('hv-22', 7, 'Bài 3: Bài toán Xếp hàng, Chọn thẻ, Chia quà & Xác suất cổ điển hình học', 'VIDEO BÀI 3', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'BẢN VIẾT TAY BÀI 3', 'https://drive.google.com/file/d/sample_c7_3/view', 'FILE ĐỀ IN BÀI 3', 'https://drive.google.com/file/d/sample_de_c7_3/view', 1, 22),

-- Chương 8
('hv-23', 8, 'Bài 1: Các bài toán Cực trị Vận dụng cao (9+) và Kỹ thuật chuẩn hóa', 'VIDEO BÀI 1', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'BẢN VIẾT TAY BÀI 1', 'https://drive.google.com/file/d/sample_c8_1/view', 'FILE ĐỀ IN BÀI 1', 'https://drive.google.com/file/d/sample_de_c8_1/view', 1, 23),
('hv-24', 8, 'Bài 2: Giải nhanh trắc nghiệm bằng phương pháp Đồ thị & Đánh giá Bất đẳng thức', 'VIDEO BÀI 2', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'BẢN VIẾT TAY BÀI 2', 'https://drive.google.com/file/d/sample_c8_2/view', '', '', 1, 24),
('hv-25', 8, 'Bài 3: Đề luyện thi thử Đánh giá năng lực & Ôn tập tổng hợp chọn lọc', 'VIDEO BÀI 3', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'BẢN VIẾT TAY BÀI 3', 'https://drive.google.com/file/d/sample_c8_3/view', 'FILE ĐỀ IN BÀI 3', 'https://drive.google.com/file/d/sample_de_c8_3/view', 1, 25);
