// Your code here

const mapToNegativize = function(source) {
  let negNum = [];
  for(let i = 0; i < source.length; i++) {
    negNum.push(-1 * source[i]);
  }
  return negNum;
}

const mapToNoChange = function(source) {
  let num = [];
  for(let i = 0; i < source.length; i++) {
    num.push(source[i]);
  }
  return num;
}

const napToDouble = function(source) {
  let doubleNum = [];
  for(let i = 0; i < source.length; i ++) {
    doubleNum.push(source[i]*2);
  }
  return doubleNum;
}

