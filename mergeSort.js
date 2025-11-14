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

console.log(merge([1, 9, 4], [2, 2, 3]));

function mergeSort(n) {
   if (n.length <= 1) return n;
   let mid = Math.floor((1 + n.length) / 2);
   let arr = [...n.slice(0, mid)];
   let arr2 = [...n.slice(mid)];
   return merge(arr, arr2);
}

// console.log(mergeSort([9, 3, 8]));
