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
    

    let totalValueResult = totalValue(coffeeRadioValue, painRadioValue, roomRadioValue, pizzaRadioValue, carRadioValue, bookRadioValue);

    display.hide();

    if (totalValueResult <= 20) {
      display.html("<div class='closeBox'><button class='close'>X</button></div><div class='popUp'><img src='css/images/arnieImg.png' id='arnieImg'><span class='popUpText'><h4> Congrats! You got <strong>Arnold C</strong></h4> <p>Named after the Governator himself, you don't seem to mind anything too complicated; infact, you may get by in life with basic syntax and lots of yelling. Enjoy pumping weights and pumping out mindless code!</p></span></div>").show();
      outputBox.show();
      //declare variable locally not globally for button functionality.
      const closeButton = $(".close");
      closeButton.click(function() {
        outputBox.hide();
      });

    } else if (totalValueResult >20 && totalValueResult < 38) {
      display.html("<div class='closeBox'><button class='close'>X</button></div><div class='popUp'><img src='css/images/apple.png' id='apple'><span class='popUpText'><h4> Congrats! You got <strong>Swift</strong></h4> <p><strong>A step-child of the Apple conglomerate!</strong> So, you might be low-maintainence and prefer something reliable, <em>or</em> you might be high-maintainence and slightly pretentious, but you enjoy the finer things in life. Either way: you probably love coffee, have some sense of minimalism, and love you some wholesome, quality, and straight-forward (albeit exclusive) code.</p></span></div>").show();
      outputBox.show();

      const closeButton = $(".close");
      closeButton.click(function() {
        outputBox.hide();
      });

    } else {
      display.html("<div class='closeBox'><button class='close'>X</button></div><div class='popUp'><img src='css/images/hackermanImg.jpg' id='hackermanImg'><span class='popUpText'><h4> Congrats! You got <strong>C++</strong></h4> <p><strong>Good luck living</strong>. You might like drama, or pain, or stress - or maybe you're just <em>hardcore</em>. The truth is: I couldn't tell you much about C++ or older languages like Java, but I always hear the murmurings of how obnoxiously complex they are. My memory is as bad as it is, so I couldn't imagine memory management for someone else, let alone a computer and it's language.</p><p>Your destiny is probably that of a tech engineer.</p></span></div>").show();
      outputBox.show();

      const closeButton = $(".close");
      closeButton.click(function() {
        outputBox.hide();
      });
    };
    console.log(totalValueResult);
  });
});