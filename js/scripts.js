//Business Logic
function totalValue (input1, input2, input3, input4, input5, input6) {
  return input1 + input2 + input3 + input4 + input5 + input6;
}

//UX UI Logic
$(document).ready(function () {
  $("#form").submit(function(event) {
    event.preventDefault();

  //primary selectors
    const coffeeRadioValue = parseInt($("input:radio[name=coffee]:checked").val());
    const painRadioValue= parseInt($("input:radio[name=pain]:checked").val());
    const roomRadioValue = parseInt($("input:radio[name=room]:checked").val());
    const pizzaRadioValue = parseInt($("input:radio[name=pizza]:checked").val());
    const carRadioValue = parseInt($("input:radio[name=car]:checked").val());
    const bookRadioValue = parseInt($("input:radio[name=book]:checked").val());
    const display = $("#display");
    const outputBox = $(".outputBox");
    const closeBox= $("#close");

    let totalValueResult = totalValue(coffeeRadioValue, painRadioValue, roomRadioValue, pizzaRadioValue, carRadioValue, bookRadioValue);


    if (totalValueResult <= 20) {
      // display.html("").show();
      display.html("<div class='closeBox'><a href='#' id='close'>X</a></div><div id='arnie'><img src='css/images/arnieImg.png' id='arnieImg'><div id='arnieText'><h4> Congrats! You got <strong>Arnold C</strong></h4> <p>Named after the Governator himself, you don't seem to mind anything too complicated; infact, you may get by in life with basic syntax and lots of yelling. Enjoy pumping weights and pumping out mindless code!</p></div></div>").show();
      outputBox.show();
    } else if (totalValueResult >20 && totalValueResult < 30) {
      display.html("<div class='closeBox'><a href='#' id='close'>X</a></div><div id='arnie'><img src='css/images/arnieImg.png' id='arnieImg'><div id='arnieText'><h4> Congrats! You got <strong>Swift</strong></h4> <p>So, you might be low-maintainence and prefer something reliable, <em>or</em> you might be high-maintainence and slightly pretentious, but you enjoy the finer things in life. Either way: you probably love coffee, have some sense of minimalism, and love you some wholesome, quality, and straight-forward (albeit exclusive) code.</p></div></div>").show();
      outputBox.show();
    } else {
      display.text("3").show();
      display.html("<div class='closeBox'><a href='#' id='close'>X</a></div>");
      outputBox.show();
    };

    if (closeBox)

    console.log(totalValueResult);

  });
});
