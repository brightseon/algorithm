function validateCode(code) {
    return /^(1|2|3)\d+/.test(code);
}

assert.strictEqual(validateCode(123));
assert.strictEqual(validateCode(248));
assert.strictEqual(validateCode(8));
assert.strictEqual(validateCode(321));
assert.strictEqual(validateCode(9453));
