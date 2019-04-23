var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function destructivelyAddElementToBeginningOfArray(array, element){
  var newArray = array.unshift(element);
  return newArray;
}

