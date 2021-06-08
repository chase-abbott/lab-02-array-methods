export default (arr, callback) => {
  const newArray = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i]) newArray[i] = callback(arr[i]);
  }
  return newArray;
};

