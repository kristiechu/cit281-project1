/*
    CIT 281 Project 1
    Name: Kristie Chu
*/

//let randomNum = getRandomInteger(5,25);
// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomString() {
  let randomString = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const length = getRandomInteger(5, 25);

  for (i = 0; i < length; i++) {
    let randomIndex = getRandomInteger(0, alphabet.length);
    randomString += alphabet.charAt(randomIndex);
  }
  return randomString;
}
console.log(getRandomString());
