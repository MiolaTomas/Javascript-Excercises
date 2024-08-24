//Find the largest number
const array = [1, 20, 100 , 5];
let i = 0;
let max = array[0];

for (i = 1; i < array.length; i++) {
  if (array[i] > max){
    max = array[i];
  }
}
console.log(max)



