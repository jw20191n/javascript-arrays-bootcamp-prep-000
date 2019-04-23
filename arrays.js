var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(“element”);
}

function addElementToBeginningOfArray(array, element){
 var newArray = [element,...array]
 return newArray;
}

function addElementToEndOfArray(array, element){
  var newArray = [...array,element]
  return newArray
}

