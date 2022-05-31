function setAlarm(employed, vacation) {
    return employed && !vacation;
}

console.log(setAlarm(true, true));
console.log(setAlarm(false, true));
console.log(setAlarm(true, false));
