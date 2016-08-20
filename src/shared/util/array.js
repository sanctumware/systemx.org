export default class ArrayUtil {
  /**
   * Generate an array of a fixed length, filling each element according to the creation function,
   * which maps an index in the new array to an arbitrary element.
   *
   * @param {Number} length Length of the new array.
   * @param {Function} creationFunc Function taking one argument, the index of the array, and returns the element to
   *                                insert at that index.
   * @returns {Array} The newly generated array.
   */
  static generateArray(length, creationFunc) {
    return new Array(...new Array(length)).map((_, idx) => creationFunc(idx));
  }
}
