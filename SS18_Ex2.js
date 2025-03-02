const toan = Number(prompt("Nhập điểm Toán:"));
const van = Number(prompt("Nhập điểm Văn:"));
const anh = Number(prompt("Nhập điểm Anh:"));

const diemTrungBinh = (toan + van + anh) / 3;

if (diemTrungBinh >= 8) {
    console.log("Giỏi");
} else if (diemTrungBinh >= 6.5) {
    console.log("Khá");
} else if (diemTrungBinh >= 5) {
    console.log("Trung bình");
} else {
    console.log("Yếu");
}
