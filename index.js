// Your code here

const mapToNegativize = function(source) {
  let negNum = [];
  for(let i = 0; i < source.length; i++) {
    negNum.push(-1 * source[i]);
  }
  return negNum;
}
