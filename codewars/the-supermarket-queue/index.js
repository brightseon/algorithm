function queueTime(customers, n) {
    if (n === 1) return customers.reduce((a, b) => a + b, 0);
    if (customers.length <= n) return Math.max(...customers);

    return Math.max(
        ...customers.reduce((a, b, i) => {
            if (i < n) return [...a, b];
            a[a.indexOf(Math.min(...a))] += b;
            return a;
        }, [])
    );
}

console.log(queueTime([], 1));
console.log(queueTime([1, 2, 3, 4], 1));
console.log(queueTime([2, 2, 3, 3, 4, 4], 2));
console.log(queueTime([1, 2, 3, 4, 5], 100));
console.log(queueTime([5, 3, 4], 1));
console.log(queueTime([10, 2, 3, 3], 2));
console.log(queueTime([2, 3, 10], 2));
