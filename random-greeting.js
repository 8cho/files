let clickCount = 0;
const greeting = [
//GREETINGS
  "Oh, hi!",
  "Buenas",
  "Hi there",
  "やぁ〜",
  "'sup",
  "Ciao!",
//GREETINGS RATE++
  "Oh, hi!",
  "Buenas",
  "Hi there",
  "やぁ〜",
  "'sup",
  "Ciao!",
//GREETINGS RATE++
  "Oh, hi!",
  "Buenas",
  "Hi there",
  "やぁ〜",
  "'sup",
  "Ciao!",
//GREETINGS RATE++
  "Oh, hi!",
  "Buenas",
  "Hi there",
  "やぁ〜",
  "'sup",
  "Ciao!",
//GREETINGS RATE++
  "Oh, hi!",
  "Buenas",
  "Hi there",
  "やぁ〜",
  "'sup",
  "Ciao!",
//UNLIKELY QUOTES
  "42"
];

function shuffleGreeting() {
  clickCount++;
  if (clickCount<50) {
    const randomGreeting = greeting[Math.floor(Math.random()*greeting.length)];
    document.getElementById("block-cbc6e7f3e0cc4a098a0ab1163de9b210").getElementsByClassName("notion-semantic-string")[0].innerHTML = randomGreeting;
  } else {
    document.getElementById("block-cbc6e7f3e0cc4a098a0ab1163de9b210").getElementsByClassName("notion-semantic-string")[0].innerHTML = "STAHP!";
  }
}

shuffleGreeting();
document.addEventListener('click',shuffleGreeting);
