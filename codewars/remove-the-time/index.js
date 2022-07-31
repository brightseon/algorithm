function shortenToDate(longDate) {
    return longDate.replace(/, [0-9]+(am|pm)/gi, '');
}

console.log(shortenToDate('Friday May 2, 9am'));
console.log(shortenToDate('Tuesday January 29, 10pm'));
console.log(shortenToDate('Monday December 25, 10pm'));
