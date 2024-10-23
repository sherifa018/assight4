//leap year
function leapyear(a) {
  if ((a % 4 == 0 && a % 100 != 0) || a % 400 == 0) {
    console.log(`${a} is a leap year`);
  } else {
    console.log(`${a} is not a leap year`);
  }
}

//jan sun
for (let i = 2014; i <= 2050; i++) {
  let time = new Date(i, 0, 1);
  let weekday = time.getDay();
  if (weekday === 0) {
    console.log(`${i} Jan first day is sunday`);
  }
}
//Odd or Even
for (let i = 0; i <= 15; i++)
  if (i % 2 === 0) {
    console.log(`${i} is even number`);
  } else {
    console.log(`${i} is an odd number`);
  }

//Palindrom
function palindrome(a) {
  let st = a.replaceAll(" ", "");
  let newst = st.split("").reverse().join("");
  return st === newst;
}
console.log(palindrome("m a d"));
