
exports.min = function min (array) {
  if (array==undefined||array == null || array.length==0) return 0;
  let myArr = [];
  for (let i=0; i<array.length; i++) {
    myArr.push(array[i]);
  }
  let min = myArr.reduce((r,v)=>Math.min(r,v), 100000)
  return  min;
  // return array.reduce((r,v)=>Math.min(r,v), Number.POSITIVE_INFINITY);
}

exports.max = function max (array) {
  if (array==undefined||array == null || array.length==0) return 0;
  let myArr = [];
  for (let i=0; i<array.length; i++) {
    myArr.push(array[i]);
  }
  let max = myArr.reduce((r,v)=>Math.max(r,v), -100000)
  return max;
  // return array.reduce((r,v)=>Math.max(r,v), Number.NEGATIVE_INFINITY);
}

exports.avg = function avg (array) {
  if (array==undefined||array == null || array.length==0) return 0;
  let myArr = [];
  let summ = 0;
  for (let i=0; i<array.length; i++) {
    myArr.push(array[i]);
    summ+=array[i];
  }
  let res = summ/(myArr.length)
  return res;
}
