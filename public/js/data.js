$( window ).ready(function(){
    getStores();
})
var storesinfo = [];
var oneStore;
var trialRUN;
var trialValue = [];

function getStores() {
  $.get("/api/stores", function(storeDataLogs) {
      storesinfo = storeDataLogs;
      storeDataLogs.forEach(obj => {
          existingID = obj.id;
          existingStore = obj.longlat;
          existingInventory = obj.availability;
          dataLinesReturned = storeDataLogs.length;
          trialValue.push("store"+ obj.id++);
          trialRUN = "var store"+ obj.id +" = new atlas.data.Feature(new atlas.data.Point(" + existingStore + "));";

      })
  })
}
function obj(item, index) {
    document.getElementsByClassName("store-container").innerHTML += index + ":" + item + "<br>";
    console.log(index + item)
}
