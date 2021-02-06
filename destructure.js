const person = { name: 'Jack William', age: 17, job: 'facebooker', gfName: 'Ema Watson', address: 'Kochu Khet', phone:'01717112211', friends: ['Tom Hancks', 'Tom Cruise', 'Tom Yarn']}
const gfName = person.gfName;
const phone = person.phone;
const complexObject = {
    name: 'abc',
    info: {
        address: 'Kola bagan',
        leader: 'Tiger Leader'
    }
}
const {leader} = complexObject.info;
console.log(gfName, phone);

const friends = ['Sakib Khan', 'Arman Khan', 'Amir Khan', 'Salman Khan', 'Sharukh Khan'];
// const [first] = friends;
const [chotoFriend, ...olderF] = friends;
// console.log(first); // array ta ke destruct korche
console.log(olderF); // array ta ke destruct korche