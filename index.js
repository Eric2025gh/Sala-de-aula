
let a, b, c;
a = Number(prompt());
b = Number(prompt());
c = a;
while (c < b || c > b) {
    if (a > b) {
        alert(b);
        if (b < a) {
            b = b + 1;
            if (a == b) {
                alert(a);
            }
        }
    }
    if (a < b) {
        alert(a);
        if (a < b) {
            a = a + 1;
            if (a == b) {
                alert(a);
            }
        }
    }
}
