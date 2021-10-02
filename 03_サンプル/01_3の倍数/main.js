const number = 24

if (number % 3 === 0) {
  console.log(number + "!!!!!!!")
} else {
  console.log(number)
}
const genkiFunction = function(number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(`${n}!!!!!!!`)
    } else {
      console.log(n)
    }
  }
}