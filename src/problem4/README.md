# Problem 4: Three ways to sum to n

## Task

Provide 3 unique implementations of the following function in TypeScript.
- Comment on the complexity or efficiency of each function.

**Input**: `n` - any integer

*Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`*.

**Output**: `return` - summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`.

## Solutions

### Solution 1

I have met this problem for a long time, and I know the formula for the sum of the first n natural numbers is `n * (n + 1) / 2`. 

This solution has a time complexity of O(1). This is the most efficient solution.

```ts
function sum_to_n(n: number): number {
  return n * (n + 1) / 2;
}
```

### Solution 2

Because i need to find 3 unique implementations, I will iterate from 1 to n and sum the numbers.

This solution has a time complexity of O(n). This is less efficient than the first solution.

```ts
function sum_to_n(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
```

Or use the reduce method on an array of numbers from 1 to n. This solution is same as the previous one.

```ts
function sum_to_n(n: number): number {
  return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, curr) => acc + curr, 0);
}
```

### Solution 3

The last solution that i can think of is to use recursion. I dont usually use recursion in real life projects, only use it when solving data structure and algorithm problems.

This solution has a time complexity of O(n).

```ts
function sum_to_n(n: number): number {
  if (n === 1) {
    return 1;
  }
  return n + sum_to_n(n - 1);
}
```

### Testing

The source code is in the `sol1.ts`, `sol2.ts`, and `sol3.ts` files. You can run the test by running the following command:

> Make sure you have installed TypeScript compiler and Node.js in your machine.

```bash
cd src/problem4

tsc sol1.ts && node sol1.js
15

tsc sol2.ts && node sol2.js
15

tsc sol3.ts && node sol3.js
15
```

### Conclusion

If i dont need to find 3 unique implementations, i will only write the first solution. It is the most efficient solution.