// function mergeSort(n, arrLength = n.length) {
//    let arr = [];
//    let arr2 = [];
//    if (n.length == 0) return [];
//    if (n.length == 1) return [n[0]];

//    if (1 < arrLength) {
//       let mid = Math.floor((1 + arrLength) / 2);
//     //   mergeSort(n, mid);
//     //   mergeSort(mid + 1, arrLength);
//       return mid;
//    }
// }
function merge(x, y) {
   let final = [];
   //    x = [...n.slice(0, mid)];
   //    y = [...n.slice(mid)];
   for (let i = 0; i < x.length || i < y.length; i++) {
      if (x[i] < y[i]) {
         //  final = [...x[i], y[i]];
         final.push(x[i], y[i]);
      } else {
         final.push(y[i], x[i]);
         //  final.push(arr2[i]);
      }
   }
   return final;
}

function mergeSort(n) {
   if (n.length <= 1) return n;
   let mid = Math.floor((1 + n.length) / 2);

   return merge([...n.slice(0, mid)], [...n.slice(mid)]);
}

console.log(mergeSort([9, 3, 5, 1, 2, 7, 4, 0]));
