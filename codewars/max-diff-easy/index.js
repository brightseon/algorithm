function maxDiff(list) {
    if (list.length < 2) return 0;

    return Math.max(...list) - Math.min(...list);
}

print(maxDiff([0, 1, 2, 3, 4, 5, 6]));
print(maxDiff([-0, 1, 2, -3, 4, 5, -6]));
print(maxDiff([0, 1, 2, 3, 4, 5, 16]));
print(maxDiff([16]));
print(maxDiff([]));
