// Câu lệnh if -> Dùng khi chương trình có 1 điều kiện duy nhất
const age =18;
if (age < 18){
    console.log("Đủ điều kiện thi bằng lái xe");
}

// Câu lệnh if-else -> Dùng khi chương trình có 2 điều kiện
const number =  9 ;
if (number % 2 == 0){
    console.log("Số chẵn");
} else {
    console.log("Số lẻ");
}

// Câu lệnh if-else if-else -> Dùng khi chương trình lớn hơn 2 điều kiện
const avgPoint = 4 ;
if (avgPoint >= 9 && avgPoint <= 10) {
    console.log("Học lực xuất sắc");
} else if (avgPoint >= 8 && avgPoint < 9) {
    console.log("Học lực giỏi");
} else if (avgPoint >= 6.5 && avgPoint < 8) {
    console.log("Học lực khá");
} else if (avgPoint >= 5 && avgPoint < 6.5) {
    console.log("Học lực trung bình");
} else {
    console.log("Học lực yếu");
}

// Nested if
const ageSecond =17;
const isVision = true;

// Những giá trị luôn nhận bằng false:false,0,"",null,undefined,NaNNaN
if (false) {
    // Kiểm tra tiếp về thị giác
    if (isVision === true) {
        console.log("Đủ điều kiện để thi");
    } else {
        console.log("Đủ tuổi nhưng thị lực không đạt");
    }
} else {
    console.log("Chưa đủ tuổi thi bằng lái xe");
}

// Switch - Case 
const day = 2;
switch (day) {
    case "2":
        console.log("Thứ 2");
        break;
    case 3:
        console.log("Thứ 3");
        break;
    case 4:
        console.log("Thứ 4");
        break;
    case 5:
        console.log("Thứ 5");
        break;
    case 6:
        console.log("Thứ 6");
        break;
    case 7:
        console.log("Thứ 7");
        break;
    case 8:
        console.log("Chủ nhật");
    break;
    default:
    console.log("Ngày không hợp lệ");
    break;
}

// Toán tử 3 ngôi
const gender = 0;
const result = gender === 0 ? "Nam" : gender === 1 ? "Nữ" : "Khác";
console.log("Result:",result);