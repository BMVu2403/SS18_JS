let a = +prompt("Nhập số a");
let b = +prompt("Nhập số b");
let operator = prompt("Nhập phép toán (+, -, *, /)");
let cong = a + b;
let tru = a - b;
let nhan = a * b;
let chia = b !== 0 ? a / b : "Không thể chia cho 0";

switch (operator) {
    case "+":
        document.write("a + b = " + cong);
        break;
    case "-":
        document.write("a - b = " + tru);
        break;
    case "*":
        document.write("a * b = " + nhan);
        break;
    case "/":
        document.write("a / b = " + chia);
        break;
    default:
        document.write("Phép toán không hợp lệ");
}
