let a, b, i, j, flag, total = 0;

a = window.prompt("Nhập vào số bắt đầu : ");
a = parseInt(a);

b = window.prompt("Nhập vào số kết thúc : ");
b = parseInt(b);

console.log(" ");

for (i = a; i <= b; i++) {
    if (i == 1 || i == 0)
        continue;

    flag = 1;
    for (j = 2; j <= i / 2; ++j) {
        if (i % j == 0) {
            flag = 0;
            break;
        }
    }
    if (flag == 1) {
        console.log(i);
        total += i;
    }
}
console.log("Tổng các số nguyên tố trong khoảng " + a + " và " + b + " là: " + total);
