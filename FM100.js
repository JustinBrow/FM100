function createSortable() {
   Sortable.create(row1, {
      animation: 150,
      ghostClass: 'ghostbox',
      onSort: clearResults
   });

   Sortable.create(row2, {
      animation: 150,
      ghostClass: 'ghostbox',
      onSort: clearResults
   });

   Sortable.create(row3, {
      animation: 150,
      ghostClass: 'ghostbox',
      onSort: clearResults
   });

   Sortable.create(row4, {
      animation: 150,
      ghostClass: 'ghostbox',
      onSort: clearResults
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
   var base = "fm100results";
   var rowList = ["row1", "row2", "row3", "row4"];
   var boundaries = ["01", "22", "43", "64", "85"];
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

      document.getElementById(base.concat(rowId)).value = colourBlockOrder;
      $("#" + base.concat(rowId)).attr('size', $("#" + base.concat(rowId)).val().length)
      var colourBlockOrder = [];
      colourBlockOrder.push(boundaries[i + 1])
   }
}

function clearResults() {
   var base = "fm100results";
   var rowList = ["row1", "row2", "row3", "row4"];
   for (var rowId of rowList) {
      document.getElementById(base.concat(rowId)).value = "";
      $("#" + base.concat(rowId)).prop('size', 20)
   }
}
