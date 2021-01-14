var greeting = [
  "Oh, hi!",
  "Buenas",
  "Hi there",
  "やぁ"
];

var randomGreeting = greeting[Math.floor(Math.random()*greeting.length)];

document.getElementById("quote").innerHTML = randomGreeting;
