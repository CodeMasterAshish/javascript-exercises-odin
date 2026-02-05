const removeFromArray = function(arr) {
  return [...arr].reverse();
};

let nums = [1, 3, 4, 5];
console.log(removeFromArray(nums));
console.log(nums);

module.exports = removeFromArray;
