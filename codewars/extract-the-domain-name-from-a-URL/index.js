function domainName(url) {
    return url.replace(/https?:\/\/|(www.)?/gi, '').split('.')[0];
}

console.log(domainName('http://google.com'));
console.log(domainName('http://google.co.jp'));
console.log(domainName('www.xakep.ru'));
console.log(domainName('https://youtube.com'));
