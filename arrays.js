var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array, element){
 var newArray = [element,...array]
 return newArray;
}

function addElementToEndOfArray(array, element){
  var newArray = [...array,element]
  return newArray
}


function destructivelyAddElementToBeginningOfArray(array, element){
  var array = array.unshift(element);
  return array
}

function destructivelyAddElementToEndOfArray(array, element){
  var array = array.push(element)
  return array
}

