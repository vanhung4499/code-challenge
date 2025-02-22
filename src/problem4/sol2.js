function sum_to_n(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sum_to_n(5));
