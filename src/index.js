module.exports = function reverse (n) {
  let result = '';
  let str = n.toString();
  let arr = str.split('');

  

  for (let i = 0; i < str.length; i++) {
    
    result = arr[i] + result;

    if(result[result.length - 1] === '-') {
      result = result.slice(result.length);
    }
  }

  return Number(result);
};
