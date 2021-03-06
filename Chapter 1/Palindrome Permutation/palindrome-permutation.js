const ASCII_CODES = 127;

/*
 * Assuming the length of the string equals to n
 * The time complexity of the following algorithm is O(n)
 * Last assumptions: blank spaces are considered in the count and the algorithm
 * is case sensitive (so, for example, 'A' is different from 'a')
 */
exports.palindromePermutation = function(str){
  // Auxiliary variable to count how many characters are odd in the strings
  // Only one character could be odd and only if the string length is odd
  var odd = false;

  /*
   * Initialize an array of 127 boolean elements set to false.
   * This is because a character in a string could be only a character
   * of the ASCII table that is composed by 127 elements.
   * This array represents a sort of Hashing table to directly know if
   * a char of the string has already been encountered and therefore
   * it is not unique
   */
  var hashStr = [];

  // Time complexity of the cycle is O(1) (the time is constant independently
  // to the string length)
  for(var i = 0; i <= ASCII_CODES; i++){
    hashStr[i] = true;
  }

  // Time complexity of the cycle is O(n) (it directly depends on the string
  // length). The time to complete the code inside the for cycle is constant
  // and the cycle is performed n times.
  for(var i=0; i < str.length; i++){
    var asciiCode = str.charCodeAt(i);
    hashStr[asciiCode] = !hashStr[asciiCode];
  }

  // Time complexity of the cycle is O(1) (the time is constant independently
  // to the string length)
  for(var i=0; i < ASCII_CODES; i++){
    if(!hashStr[i]){
      if(odd || str.length % 2 == 0){
        return false;
      }
      odd = true;
    }
  }

  return true;
}
