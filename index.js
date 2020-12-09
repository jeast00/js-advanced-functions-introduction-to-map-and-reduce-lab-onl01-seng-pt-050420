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

const mapToDouble = function(source) {
  let doubleNum = [];
  for(let i = 0; i < source.length; i ++) {
    doubleNum.push(2 * source[i]);
  }
  return doubleNum;
}

const mapToSquare = function(source) {
  let squaredNum = [];
  for(let i = 0; i < source.length; i++) {
    squaredNum.push(Math.pow(2, source[i]))
  }
}

