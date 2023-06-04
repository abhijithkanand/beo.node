/**
 * Calculate the sum of even numbers in an array.
 * @param {number[]} numbers - An array of integers.
 * @returns {number} - The sum of even numbers.
 */
export default (numbers) => {
    return numbers.reduce((sum, num) => {
      if (num % 2 === 0) {
        return sum + num;
      }
      return sum;
    }, 0);
  };