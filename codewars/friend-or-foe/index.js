const friend = (friends) => friends.filter((f) => f.length === 4);

console.log(friend(['Ryan', 'Kieran', 'Mark']));
console.log(friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man']));
console.log(friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool']));
console.log(friend(['Love', 'Your', 'Face', '1']));
