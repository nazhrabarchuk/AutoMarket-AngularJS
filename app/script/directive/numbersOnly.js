app.directive("allowNumbersOnly", function() {
      return {
        restrict: "A",
        link: function(scope, element, attrs) {
          element.bind("keydown", function(event) {
            if (event.keyCode == 8) {
              return true;
            } else if (!((event.keyCode > 46 && event.keyCode < 58)||(event.keyCode > 95 && event.keyCode < 106)) || event.shiftKey) {
              event.preventDefault();
              return false;
            }
          });



        }
      }
    });