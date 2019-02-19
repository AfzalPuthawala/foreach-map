function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i]; 
        arr[i] = arr[j]; 
        arr[j] = temp; 
      };
    };
  };
  return arr;
};

console.log(sort([100,80,60,40,20,90,70,50,30,10]));
