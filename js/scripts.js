//User interface logic
var numbers = [];
var result = "";

function pingPong (final) {
  var numbers = [];
  for (var i = 1; i <= final; i++) {
    if (i % 15 === 0) {
      numbers.push("pingpong");
    } else if (i % 3 === 0) {
      numbers.push("ping");
    } else if (i % 5 === 0) {
      numbers.push("pong");
    } else {
      numbers.push(i);
    }
  }
  result = numbers.join(', ');
  return result;
}
//business logic
$(function(){
  $("form#userInput").submit(function(event){
    $("#result").empty();
    var final = $("input#final").val();

    $("#result").append(pingPong(final));
    event.preventDefault();
  });
});
