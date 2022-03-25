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
    const button = $("#button");
    const display = $("#display");

    let totalValueResult = totalValue(coffeeRadioValue, painRadioValue, roomRadioValue, pizzaRadioValue, carRadioValue, bookRadioValue);


    if (totalValueResult <= 20) {
      display.text("1").show();
    } else if (totalValueResult >20 && totalValueResult < 30) {
      display.text("2").show();
    } else {
      display.text("3").show();
    };
    
    console.log(totalValueResult);

  });
});
