function createSortable() {
   Sortable.create(row1, {
      animation: 150,
      ghostClass: 'ghostbox',
   });

   Sortable.create(row2, {
      animation: 150,
      ghostClass: 'ghostbox',
   });

   Sortable.create(row3, {
      animation: 150,
      ghostClass: 'ghostbox',
   });

   Sortable.create(row4, {
      animation: 150,
      ghostClass: 'ghostbox',
   });
}

//shuffle function
function shuffle() {
   var rowList = ["row1", "row2", "row3", "row4"];

   for (var rowId of rowList) {
      var parent = $("#" + rowId);
      var divs = parent.children();
      while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
      }
   }
}

function getFM100Order() {
   var rowList = ["row1", "row2", "row3", "row4"];
   var boundaries = ["1", "22", "43", "64", "85"];
   var colourBlockOrder = [];

   colourBlockOrder.push(boundaries[0]);
   i = 0;
   for (var rowId of rowList) {
      var parent = $("#" + rowId);
      var divs = parent.children();
      for (var divChild of divs) {
        colourBlockOrder.push($(divChild).attr("data-position"))
      }
      colourBlockOrder.push(boundaries[i + 1])
      i++
   }

   return colourBlockOrder;
}

//get current order on click
$("#submitButton").click(function () {
   fm100Order = getFM100Order();

   console.log(fm100Order)
   document.getElementById("fm100results").value = fm100Order
   console.log("")
});