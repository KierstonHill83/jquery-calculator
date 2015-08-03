$(document).ready(function() {


    // //when the button class is clicked, put that button on the screen.
    $("span").on("click", function() {
      var buttonClicked = $(this).not(".operator, #zero").html();
        $("#screen").append(buttonClicked);
    });


  //operators
  $(".buttons").on("click", function(event) {
    if($("span:eq(1)").is(event.target)) {
      $("#screen").append(" / ");
    }
    if($("span:eq(2)").is(event.target)) {
      $("#screen").append(" x ");
    }
    if($("span:eq(6)").is(event.target)) {
      $("#screen").append(" - ");
    }
    if($("span:eq(10)").is(event.target)) {
      $("#screen").append(" + ");
    }
  });

  //zero
  $(".buttons").on("click", function(event) {
    if($("#zero").is(event.target)) {
      $("#screen").append("0");
    }
  });

  //clear
  $(".buttons").on("click", function(event) {
    if($("span:eq(0)").is(event.target)) {
      $("#screen").empty();
    }
  });


  $("#calc").on("click", function() {
    var operatorArray = ["+", "-", "x", "/"];
    var onScreen = $("#screen").html();
    var resultsArray = onScreen.split(" ");
    $("#screen").html(screenResults(resultsArray));
  });


  function screenResults(resultsArray) {

        firstInput = resultsArray[0];
        operatorInput = resultsArray[1];
        secondInput = resultsArray[2];

      switch (operatorInput) {
        case "+":
          return firstInput + secondInput;
          break;
        case "-":
          return firstInput - secondInput;
          break;
        case "x":
          return firstInput * secondInput;
          break;
        case "/":
          return firstInput / secondInput;
          break;
        default:
          return "try again";
      }
  }


});



