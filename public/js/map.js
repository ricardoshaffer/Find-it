$('#search-input').click(function() {
  getLocation();
  // Get all Stores from database when page loads
})
function getLocation() {
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  innerHTML = "Geolocation is not supported by this browser.";
}
}

function showPosition(position) {
  latitudeLoc = position.coords.latitude;
  longitudeLoc = position.coords.longitude;
console.log("Latitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude);
GetMap();
}


        
              function sendTPStatus(storeID, radioValue) {
                $.ajax({
                  type: "POST",
                  url: "/api/status",
                  data: {
                    storeID: storeID,
                    radioValue: radioValue,
                  }
                });
                console.log("you chose"+ " " + radioValue);
                console.log(storeID);
              }

$( document ).ready(function() {
  $('#search-input').trigger("click");
   $('[data-toggle="tooltip"]').tooltip();
});

