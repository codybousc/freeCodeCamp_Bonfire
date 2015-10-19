$(document).ready(function() {
populateRandomQuotes();

function populateRandomQuotes() {
  var randomQuotes = [
    "The aim of life is to live, and to live means to be aware, joyously, drunkenly, serenely, divinely aware.",
    "I have no money, no resources, no hopes. I am the happiest man alive.",
    "Chaos is the score upon which reality is written.",
    "The moment one gives close attention to any thing, even a blade of grass it becomes a mysterious, awesome, indescribably magnificent world in itself",
    "The only thing we never get enough of is love; and the only thing we never give enough of is love.",
    "If men cease to believe that they will one day become gods then they will surely become worms.",
    "Any genuine philosophy leads to action and from action back again to wonder, to the enduring fact of mystery."
  ];
  var rand = randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
  $('.quote').text(rand);


}


$("button").click(function() {
  populateRandomQuotes();
});



});
