const a = prompt("Nhập cạnh a:");
const b = prompt("Nhập cạnh b:");
const c = prompt("Nhập cạnh c:");

if (a + b > c && a + c > b && b + c > a) {
    //  Tổng độ dài của hai cạnh bất kỳ phải lớn hơn cạnh còn lại.
    if (a == b && b == c) {
        console.log("Tam giác đều");
        // Nếu cả ba cạnh bằng nhau, đây là tam giác đều.
    } else if (a == b || a == c || b == c) {
        console.log("Tam giác cân");
        // Nếu có hai cạnh bằng nhau, đây là tam giác cân.
    } else {
        console.log("Tam giác thường");
        // Nếu không rơi vào hai trường hợp trên, đây là tam giác thường.
    }
} else {
    console.log("Không phải tam giác");
    // Nếu không thỏa mãn bất đẳng thức tam giác, ba cạnh không thể tạo thành tam giác.
}