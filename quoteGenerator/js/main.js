$(document).ready(function() {
  sampler();

var randomQs = ["Sup Larry?! ", "Sup Bob", "How you livin' bro?" ];

function sampler(array) {
  var rand = array[Math.floor(Math.random() * array.length)];
$('quote').text(rand);
}

$("button").on("click", function(){
  sampler(randomQs);
});
});
