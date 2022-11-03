process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
    console.log('data: ', data);
    const n = data.split(' ');
    const a = Number(n[0]),
        b = Number(n[1]);

    // console.log(Array(b).fill(Array(a).fill('*').join('')).join('\n'));
    console.log(`${'*'.repeat(a)}\n`.repeat(b));
});
