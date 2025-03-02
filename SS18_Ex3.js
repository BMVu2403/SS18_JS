const userName = prompt("Nhập tên người dùng:");

if (userName === "ADMIN") {
    const password = prompt("Nhập mật khẩu:");
    if (password === "TheMaster") {
        console.log("Welcome");
    } else if (password === null) {
        console.log("Cancelled");
    } else {
        console.log("Wrong password");
    }
} else if (userName === null) {
    console.log("Cancelled");
} else {
    console.log("I Don’t know you");
}
