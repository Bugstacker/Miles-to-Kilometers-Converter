(function() {

  "use strict";
  
  document.getElementById("convert").addEventListener("submit", function(event) {

    event.preventDefault();
  
    const distance = parseFloat(document.getElementById("distance").value);
    // alert(distance);
  
    if (distance) {
      // convert
      const conversion = (distance * 1.609344).toFixed(3);
      // display
      let answer = document.getElementById("answer");
      answer.innerHTML = `<h2>${distance} miles converts to: ${conversion} kilometers</h2>`
  
    }
    else {
      // display error
      answer.innerHTML = "<h2>Please Try Again with a number!</h2>"
    }
  
  });

})();