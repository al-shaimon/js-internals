console.log('first');
console.log('second');
let seconds = 0;
const interValId = setInterval(() => {
  console.log(++seconds);
  if (seconds === 10) {
    clearInterval(interValId);
  }
}, 1000);
console.log('fourth');
console.log('fifth');
