//User interface logic
var numbers = [];
var result = "";

function pingPong (final) {
  var numbers = [];
  for (var i = 1; i <= final; i++) {
    // for loop is used to go through the loop a set amount of times in this case 4 times.
    // i++ is also i=i+1
    if (i % 15 === 0) {
      numbers.push("pingpong");
    } else if (i % 3 === 0) {
      numbers.push("ping");
    } else if (i % 5 === 0) {
      numbers.push("pong");
    } else {
      numbers.push(i);
      //.push is used to add to the end of the array and since the length is set to 0 the lentgh is created by the value.
    }
  }
  result = numbers.join(', ');
  return result;
  //The string conversions of all array elements are joined into one string. If an element is undefined or null, it is converted to the empty string.
}
//business logic
$(function(){
  $("form#userInput").submit(function(event){
    $("#result").empty();
    //.empty removes all child nodesfrom the set of nodes of the set of of matched elements of the DOM
    var final = $("input#final").val();
    $("#result").append(pingPong(final));
    event.preventDefault();
  });
});
