//Create a funtion that checks if an element exists in an array
function check(element, array){
  for (let i = 0; i < array.length; i++) {
    if (element === array[i]) {
      return true; // Return true if element is found
    }
  }
  return false; // Return false if the element is not found in the array
  }
  let element = 9;
  const array = [1, 6, 3, 7, 8];
  console.log(check(element, array));