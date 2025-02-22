function sum_to_n(n: number): number {
    if (n === 1) {
        return 1;
    }
    return n + sum_to_n(n - 1);
}

console.log(sum_to_n(5));