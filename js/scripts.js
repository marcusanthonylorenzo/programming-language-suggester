//Business Logic





//UX UI Logic
$(document).ready(function () {
  $("#form").submit(function(event) {
    event.preventDefault();

  const coffeeRadioValue = $("input:radio[name=coffee]:checked").val();
  const painRadioValue= $("input:radio[name=pain]:checked").val();
  const roomRadioValue = $("input:radio[name=room]:checked").val();
  const pizzaRadioValue = $("input:radio[name=pizza]:checked").val();
  const carRadioValue = $("input:radio[name=car]:checked").val();
  const bookRadioValue = $("input:radio[name=book]:checked").val();
  console.log(pizzaRadioValue);

  });
});
