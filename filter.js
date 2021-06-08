export default (arr, callback) => {
  const newArray = [];
  for(let i = 0; i < arr.length; i++){
   
    if((arr[i] !== undefined) && callback(arr[i])) newArray[i] = arr[i]
    ;
  }
  return newArray;
};
