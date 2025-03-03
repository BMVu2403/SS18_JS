const hour = prompt("Nhập giờ (0-23):");
const minute = prompt("Nhập phút (0-59):");
const second = prompt("Nhập giây (0-59):");

if (hour >= 0 && hour < 24 && minute >= 0 && minute < 60 && second >= 0 && second < 60) {
// hour >= 0 && hour < 24: Giờ phải nằm trong khoảng từ 0 đến 23.
// minute >= 0 && minute < 60: Phút phải nằm trong khoảng 0 đến 59.
// second >= 0 && second < 60: Giây phải nằm trong khoảng 0 đến 59.
// Nếu điều kiện đúng, tiếp tục chuyển đổi định dạng 24h → 12h.
// Nếu sai, hiển thị thông báo "Giá trị không hợp lệ".
    let period = hour < 12 ? "AM" : "PM";
// Nếu hour < 12 ⇒ AM (buổi sáng).
// Nếu hour >= 12 ⇒ PM (buổi chiều/tối).
    let hour12 = hour % 12 || 12;
// hour % 12: Lấy phần dư khi chia hour cho 12.
// Trường hợp đặc biệt: Khi hour = 0 hoặc hour = 12
// 0 % 12 = 0 (Nửa đêm) → Hiển thị là 12
// 12 % 12 = 0 (Trưa) → Hiển thị là 12
// || 12 giúp chuyển 0 thành 12.
    console.log(hour12 + ":" + minute + ":" + second + " " + period);
} else {
    console.log("Giá trị không hợp lệ");
}
