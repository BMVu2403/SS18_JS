const a = prompt("Nhập cạnh a:");
const b = prompt("Nhập cạnh b:");
const c = prompt("Nhập cạnh c:");

if (a + b > c && a + c > b && b + c > a) {
    if (a == b && b == c) {
        console.log("Tam giác đều");
    } else if (a == b || a == c || b == c) {
        console.log("Tam giác cân");
    } else {
        console.log("Tam giác thường");
    }
} else {
    console.log("Không phải tam giác");
}