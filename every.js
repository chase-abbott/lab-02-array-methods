export default (arr, callback) => {
  let truthTeller = 1;
  for(let i = 0; i < arr.length; i++){
    if(callback(arr[i])){
      truthTeller = 1;
    } else {
      truthTeller = -1;
    }
    if(truthTeller === -1) return false;
  }
  return true;
};

