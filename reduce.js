export const reduce = (arr, callback, initialValue) => {
  if(initialValue !== undefined){
    let accumulator = initialValue;
    if(typeof accumulator === 'number' || accumulator === ''){
      for(let i = 0; i < arr.length; i++){
        accumulator = callback(accumulator, arr[i]);
      }
    } else if(Array.isArray(accumulator)){
      for(let i = 0; i < arr.length; i++){
        accumulator[i] = callback(accumulator, arr[i]);
      }
    } else if(typeof accumulator === 'object'){
      for(let i = 0; i < arr.length; i++){
        callback(accumulator, arr[i]);
      }
    }
    return accumulator;
  } else {
    let accumulator = arr[0];
    if(typeof accumulator === 'number' || accumulator === ''){
      for(let i = 1; i < arr.length; i++){
        accumulator = callback(accumulator, arr[i]);
      }
    } else if(Array.isArray(accumulator)){
      for(let i = 1; i < arr.length; i++){
        accumulator[i] = callback(accumulator, arr[i]);
      }
    } else if(typeof accumulator === 'object'){
      for(let i = 1; i < arr.length; i++){
        callback(accumulator, arr[i]);
      }
    }
    return accumulator;
  }

}; 


