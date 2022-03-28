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
    const container = $(".container");
    const display = $("#display");
    const outputBox = $(".outputBox");

    //non-selectors
    let totalValueResult = totalValue(coffeeRadioValue, painRadioValue, roomRadioValue, pizzaRadioValue, carRadioValue, bookRadioValue);
    let closePopUpBar = "<div class='closeBox'><button class='close'>X</button></div>";

    if (totalValueResult <22) {
      display.html(closePopUpBar + "<div class='popUp'><img src='css/images/arnieImg.png' id='arnieImg' alt='arnold'><span class='popUpText'><h4> Congrats! You got <strong>Arnold C</strong></h4> <p><strong>Yes, it's a real language, apparently.</strong> Named after the Governator himself, you don't seem to mind anything too complicated; infact, you may get by in life with basic syntax and lots of yelling. Enjoy pumping weights and pumping out mindless code!</p></span></div>").show();
      outputBox.show();
      //declare variable locally not globally for button functionality.
      container.addClass("bgFade");
      const closeButton = $(".close");
      closeButton.click(function() {
        container.removeClass("bgFade");
        outputBox.hide();
      });
      $("#form").trigger("reset");
    } else if (totalValueResult >=22 && totalValueResult < 24) {
      display.html(closePopUpBar + "<div class='popUp'><img src='css/images/python.png' id='python' alt='python'><span class='popUpText'><h4> Congrats! You got <strong>Python</strong></h4> <p><strong>The language of the people!</strong> You know that one person who is friends with every one in high school? Just an 'all-around' lad? The one that you can 'hit-up' on a Wednesday night and is always down for a chill beverage in town? No extra drama, no wild stories...that's Python for you.</p><p>Python may not be the fastest, or the most specialized, and you may find some level of 'complacency' with it...but it's just a nice language to code. Maybe just as nice as <em>you</em>.</span></div>").show();
      outputBox.show();
      container.addClass("bgFade");
      const closeButton = $(".close");
      closeButton.click(function() {
        container.removeClass("bgFade");
        outputBox.hide();
      });
      $("#form").trigger("reset");
    } else if (totalValueResult >=24 && totalValueResult <= 26) {
      display.html(closePopUpBar + "<div class='popUp'><img src='css/images/swift.png' id='swift' alt='swift'><span class='popUpText'><h4> Congrats! You got <strong>Swift</strong></h4> <p><strong>A step-child of the Apple conglomerate!</strong> So, you might be low-maintainence and prefer something reliable, <em>or</em> you might be high-maintainence and slightly eliteist (iOS ftw!), but you enjoy the finer things in life. Either way: you probably love coffee, have some sense of minimalism, and love you some wholesome, quality, and straight-forward (albeit exclusive) code.</p></span></div>").show();
      outputBox.show();
      container.addClass("bgFade");
      const closeButton = $(".close");
      closeButton.click(function() {
        container.removeClass("bgFade");
        outputBox.hide();
      });
      $("#form").trigger("reset");
    } else if (totalValueResult > 26) {
      display.html(closePopUpBar + "<div class='popUp'><img src='css/images/hackermanImg.jpg' id='hackermanImg' alt='hackerman'><span class='popUpText'><h4> Congrats! You got <strong>C++</strong></h4> <p><strong>Good luck living</strong>. You might like drama, or pain, or stress - or maybe you're just <em>hardcore</em>. The truth is: I couldn't tell you much about C++ or older languages like Java, but I always hear the murmurings of how obnoxiously complex they are. My memory is as bad as it is, so I couldn't imagine memory management for someone else, let alone a computer and it's language.</p><p>Your destiny is probably that of a tech engineer.</p></span></div>").show();
      outputBox.show();
      container.addClass("bgFade");
      const closeButton = $(".close");
      closeButton.click(function() {
        container.removeClass("bgFade");
        outputBox.hide();
      });
      $("#form").trigger("reset");
    } else {
      display.html(closePopUpBar + "<div class='popUp' id='error'><h4>Uhh...Don't be lazy!</h4><img src='css/images/catLoading.jpg' id='cat' alt='cat'><p>Please make sure you've actually clicked all the buttons.</p></span><img src='css/images/steve.jpg' id='steve' alt='steve'><p id='parkour'>'parkour'</p></div>").show();
      outputBox.show();
      container.addClass("bgFade");
      const closeButton = $(".close");
      closeButton.click(function() {
        container.removeClass("bgFade");
        outputBox.hide();
      });
    };
  });
});