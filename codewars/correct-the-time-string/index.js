function timeCorrect(timestring) {
    if (!timestring) return timestring;
    if (!/\d{2}:\d{2}:\d{2}/.test(timestring)) return null;

    const [hours, minutes, seconds] = timestring.split(':');
    const now = new Date();
    now.setHours(hours);
    now.setMinutes(minutes);
    now.setSeconds(seconds);

    return now.toLocaleTimeString('en-GB');
}

console.log(timeCorrect(null));
console.log(timeCorrect(''));

console.log(timeCorrect('001122'));
console.log(timeCorrect('00;11;22'));
console.log(timeCorrect('0a:1c:22'));

console.log(timeCorrect('09:10:01'));
console.log(timeCorrect('11:70:10'));
console.log(timeCorrect('19:99:09'));
console.log(timeCorrect('19:99:99'));
console.log(timeCorrect('24:01:01'));
console.log(timeCorrect('52:01:01'));

console.log(timeCorrect('24:01:01'));
