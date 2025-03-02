const hour = prompt("Nhập giờ (0-23):");
const minute = prompt("Nhập phút (0-59):");
const second = prompt("Nhập giây (0-59):");

if (hour >= 0 && hour < 24 && minute >= 0 && minute < 60 && second >= 0 && second < 60) {
    let period = hour < 12 ? "AM" : "PM";
    let hour12 = hour % 12 || 12;
    console.log(hour12 + ":" + minute + ":" + second + " " + period);
} else {
    console.log("Giá trị không hợp lệ");
}
