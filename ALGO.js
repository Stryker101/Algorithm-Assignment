
// ALGORITHM  ASSIGNMENT



// QUESTION 1
let test = [1,2,3,4]
function productOfElements(test, index) {
    let product = 1;
    for (i = index; i < test.length; i++) {
      product *= test[i];
    }
    return product;
  }
function findProduct(test) {
    let newArray = 1;
    let productArray = [];
    for(let i=0; i<test.length; i++) {
        productArray[i] = newArray * productOfElements(test, i+1);
        newArray *= test[i];
    }
    return productArray;
}
console.log(findProduct(test))





// QUESTION 2
array1 = [1,2,4,5,10,6,3];
array2 = [0,8,19,90,11,16,13];
newArray = array1.concat(array2);
function sortElements(a,b) {
  return a-b;
}
console.log(newArray.sort(sortElements))