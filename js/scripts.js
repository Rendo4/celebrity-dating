$(document).ready(function() {
  $("form#celebrity").submit(function(event) {
      const spiecies = $("select#interest").value();
      const q1Value = parseInt($("select#q1").val());
      const q2Value = parseInt($("select#q2").val());
      const q3Value = parseInt($("select#q3").val());

      if (spiecies = alien) {
        const total = q1Value + q2Value + q3Value;
        if (total === 1 || total === 2 ) {
          partner = "alien1"
        } else if (total === 3 || total === 4 ) {
          partner = "alien2"
        }else {
          partner = "alien3"
        }
      } else {
        const total = q1Value + q2Value + q3Value;

        if (total === 1 || total === 2 ) {
          partner = "pokemon1"
        } else if (total === 3 || total === 4 ) {
          partner = "pokemon2"
        }else {
          partner = "pokemon3"
        }
      }
      $("#partner").text(partner);
      $("#match").show();
      event.preventDefault();
    
  });
})