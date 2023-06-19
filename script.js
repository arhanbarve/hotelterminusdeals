 // JavaScript logic for hiding certain screen elements at the beginning
      document.getElementById("generatescreen").style.display = "none";
      document.getElementById("finishscreen").style.display = "none";

      // Display changes after selecting a button
      function submit() {
        document.getElementById("column1").style.display = "none";
        document.getElementById("column2").style.display = "none";
        document.getElementById("column3").style.display = "none";
        document.getElementById("selection1").style.display = "none";
        document.getElementById("selection2").style.display = "none";
        document.getElementById("selection3").style.display = "none";
        document.getElementById("generatescreen").style.display = "block";

        // Setting a time limit on showing the generate screen
        setTimeout(() => {
          document.getElementById("generatescreen").style.display = "none";
          document.getElementById("finishscreen").style.display = "block";
          qrdisplay();
        }, 4000);
      }

      // Storing button clicks as variables to determine which one was clicked
      let button1click = false;
      let button2click = false;
      let button3click = false;

      let button1 = document.getElementById("selection1");
      let button2 = document.getElementById("selection2");
      let button3 = document.getElementById("selection3");

      // Checking to see which button was clicked
      button1.addEventListener("click", function () {
        button1click = true;
      });
      button2.addEventListener("click", function () {
        button2click = true;
      });
      button3.addEventListener("click", function () {
        button3click = true;
      });

      // Hiding and showing certain QR codes based on choice
      function qrdisplay() {
        if (button1click) {
          document.getElementById("famqr").style.display = "block";
          document.getElementById("coupqr").style.display = "none";
          document.getElementById("extstayqr").style.display = "none";
        } else if (button2click) {
          document.getElementById("coupqr").style.display = "block";
          document.getElementById("famqr").style.display = "none";
          document.getElementById("extstayqr").style.display = "none";
        } else if (button3click) {
          document.getElementById("extstayqr").style.display = "block";
          document.getElementById("famqr").style.display = "none";
          document.getElementById("coupqr").style.display = "none";
        }
      }
