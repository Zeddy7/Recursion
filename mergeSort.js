function merge(x, y) {
   let final = [];
   let i = 0;
   let j = 0;
   let k = 0;
   while (i < x.length && j < y.length) {
      if (x[i] < y[j]) {
         final[k++] = x[i++];
      } else {
         final[k++] = y[j++];
      }
   }
   for (; i < x.length; i++) {
      final[k++] = x[i];
   }
   for (; j < y.length; j++) {
      final[k++] = y[j];
   }
   return final;
}

function mergeSort(n) {
   if (n.length <= 1) return n;
   
   let mid = Math.floor(n.length / 2)
   let arr1 = mergeSort(n.slice(0, mid))
   let arr2 = mergeSort(n.slice(mid))
   return merge(arr1, arr2)
}

console.log(mergeSort([9, 3, 8, 4, 34, 3]));
