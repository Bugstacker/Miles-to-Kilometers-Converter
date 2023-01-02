/*(function() {

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

})(); */


// THE SNIPPET ABOVE IS FOR THE FIRST VERSION OF THE APPLICATION
// This 2nd Version converts miles to kilometers and vice verser when the user presses keys "K" and "M"

(function() {
  "use strict";

  let convertType = "miles";
  let heading = document.querySelector("h1");

  // remember the query selector looks for the first element for this case the frst paragraph and h1 in this case

  let intro = document.querySelector("p");
  let answerDiv = document.getElementById("answer");
  const form = document.getElementById("convert");


  document.addEventListener("keydown", function(event) {
    // handle the K or M keys
    let key = event.code;

    if (key === "KeyK") {
      convertType = "kilometers";
      heading.innerHTML = "Kilometers to Miles Converter";
      intro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles";

    }
    else if (key === "KeyM") {
      convertType = "miles";
      heading.innerHTML = "Miles to Kilometers Converter";
      intro.innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers";
    }
  });

  document.addEventListener("submit", function(event) {
    // handle submission of form & distance conversion
    event.preventDefault();
    let distance = parseFloat(document.getElementById("distance").value);
    if (distance) {
      // convert m-k 1.609344
      // convert k-m 0.621371192
      if (convertType == "miles") {
        const conversion = (distance * 1.609344).toFixed(3);
        answerDiv.innerHTML = `<h2>${distance} miles converts to: ${conversion} kilometers</h2>`
      }
      else {
        const conversion = (distance * 0.621371192).toFixed(3);
        answerDiv.innerHTML = `<h2>${distance} kilometers converts to: ${conversion} miles</h2>`
      }k
    }
    else {
      answerDiv.innerHTML = "<h2>Please provide a number</h2>"
    }
  });

 

})();

