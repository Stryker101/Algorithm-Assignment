
// ALGORITHM  ASSIGNMENT



// QUESTION 1

function findProduct(arr) {
  function productOfElements(arr, index) {
    let product = 1;
    for (i = index; i < arr.length; i++) {
      product *= arr[i];
    }
    return product;
  }
    let newArray = 1;
    let productArray = [];
    for(let i=0; i<arr.length; i++) {
        productArray[i] = newArray * productOfElements(arr, i+1);
        newArray *= arr[i];
    }
    return productArray;
}
console.log(findProduct(arr))



// QUESTION 2
function mergeArray (array1, array2) {

  let mergeArray = array1.concat(array2).sort((a, b) => a-b);
  return mergeArray
   
 }
 console.log(mergeArray(array1, array2))