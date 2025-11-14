function mergeSort(n, arrLength = n.length) {
   let arr = [];
   let arr2 = [];
   if (n.length == 0) return [];
   if (n.length == 1) return [n[0]];

   if (1 < arrLength) {
      let mid = Math.floor((1 + arrLength) / 2);
    //   mergeSort(n, mid);
    //   mergeSort(mid + 1, arrLength);
      return mid;
   }
}

console.log(mergeSort([3, 4]));
