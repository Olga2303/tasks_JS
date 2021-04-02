//const arr = [1, 2, 3, 'hello', true];
//console.log(arr);
//console.log(typeof arr)
//arr.push(57);//в конец 
//arr.pop ('it');//удаляет последний
//console.log(arr)

//arr.shift()//удаляем первое
//arr.unshift()//добавляем в начало

//const matrix = [
    //[1, 2, 3],
    //[4, 5, 6],
    //[7, 8, 9]
//];
//console.log(matrix);

//let str = 'hello world';
//str = str.split('')

//console.log(str)
//str = str.join('')
//console.log(str)

////const arr = ['I', '', 'love'];
//arr = arr.splice(1, 0)
//console.log(arr. toString());

//const arr = ['I','you', 'super'];

//const arr1 = arr.slice(0, 1);
//const arr2 = arr.slice(2, 3);
//console.log(arr);
//console.log(arr1);
//console.log(arr2);

//const arr3 = arr1.concat(arr2);
//console.log(arr3);



//for (let index = 0; index < 10; index++){
    //if(index!==0)
    //arr[index] = 1;
//}


//задание в зале
//const arr = ['hello', 'world'];
//for (let index = 0; index < arr.length; index++) {
    //arr[index] = arr[index].toUpperCase();
//}
//console.log(arr);

//const arr = [1, 3, 5, 6, 9];
////let max = 10
///let result = 0;
//for (let index =0; index< arr.length; index++){//index = 0;
    
    //console.log(arr[index]);
//}
///for (let index = 0; index < arr.length; index++){
    ///result += arr[index];
    
///}
///console.log(result);

////for (let index = 0; index < arr.length; index++){
   ////if ( arr[index] > max) {
      //// max = arr [index]
   ////}
////}

////console.log(arr)

//домашнее задание//--------------------------------------------------

//const arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
//const arr2 = [11, 22, 33, 44, 55, 66, 77, 88, 99, 111];

//for(let index = 0; index < arr1.length; index++) {
    //arr1[index] = Math.random(arr1);
//}
//console.log(arr1);

//for(let index = 0;index < arr2.length; index++) {
    //arr2[index] = Math.random(arr2);
//}
//console.log(arr2);

//let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
//arr1.push(200, 300);
//console.log(arr1);

//let arr2 = [11, 22, 33, 44, 55, 66, 77, 88, 99, 111];
//arr2.push(222, 333);
//console.log(arr2);

const arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const arr2 = [11, 22, 33, 44, 55, 66, 77, 88, 99, 111];
const arr3 = arr1.concat(arr2);
//console.log(arr3);

//let max = 0
//for (let index = 0; index < arr3.length; index++) {
     //if (arr3[index] > max) {
        // max = arr3[index];
     //}
    
//}
//console.log(max);

//for (let index = 0;index < arr3.length; index++) {
    //if (arr3[index] < max) {
        //max = arr3[index];
    //}
//}
//console.log(max);

//for (let index = 0; index < arr3.length; index++) {
    //if (arr3[index] % 2 == 0)
        //console.log(arr3[index]);
//}

function transfer (arr1) {
  for  (let index = 0; index < arr1.length; index++) {
      arr1.index = transfer;
  }
}
console.log (arr1)

function transfer (arr2) {
    for  (let index = 0; index < arr2.length; index++) {
        arr1.index = transfer;
    }
  }
console.log (arr2)


