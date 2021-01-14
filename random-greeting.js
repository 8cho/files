function shuffleGreeting() {
  var greeting = [
    "Oh, hi!",
    "Buenas",
    "Hi there",
    "やぁ〜"
  ];

  var randomGreeting = greeting[Math.floor(Math.random()*greeting.length)];

  document.getElementById("block-cbc6e7f3e0cc4a098a0ab1163de9b210").getElementsByClassName("notion-semantic-string")[0].innerHTML = randomGreeting;
}
document.addEventListener("DOMContentLoaded", shuffleGreeting());
