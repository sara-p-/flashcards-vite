export const jsArrayMethods = [
  {
    id: 0,
    functionName: 'at()',
    description:
      'The at() method of Array instances takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.',
    imageSrc: 'array-at',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at',
  },
  {
    id: 1,
    functionName: 'concat()',
    description:
      'The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.',
    imageSrc: 'array-concat',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat',
  },
  {
    id: 2,
    functionName: 'copyWithin()',
    description:
      'The copyWithin() method of Array instances shallow copies part of this array to another location in the same array and returns this array without modifying its length.',
    imageSrc: 'array-copy-within',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin',
  },
  {
    id: 3,
    functionName: 'entries()',
    description:
      'The entries() method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.',
    imageSrc: 'array-entries',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries',
  },
  {
    id: 4,
    functionName: 'every()',
    description:
      'The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.',
    imageSrc: 'array-every',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every',
  },
  {
    id: 5,
    functionName: 'fill()',
    description:
      'The fill() method of Array instances changes all elements within a range of indices in an array to a static value. It returns the modified array.',
    imageSrc: 'array-fill',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill',
  },
  {
    id: 6,
    functionName: 'filter()',
    description:
      'The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.',
    imageSrc: 'array-filter',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
  },
  {
    id: 7,
    functionName: 'find()',
    description:
      'The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.',
    imageSrc: 'array-find',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find',
  },
  {
    id: 8,
    functionName: 'findIndex()',
    description:
      'The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.',
    imageSrc: 'array-find-index',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex',
  },
  {
    id: 9,
    functionName: 'findLast()',
    description:
      'The findLast() method of Array instances iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.',
    imageSrc: 'array-find-last',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast',
  },
  {
    id: 10,
    functionName: 'findLastIndex()',
    description:
      'The findLastIndex() method of Array instances iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.',
    imageSrc: 'array-find-last-index',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex',
  },
  {
    id: 11,
    functionName: 'flat()',
    description:
      'The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.',
    imageSrc: 'array-flat',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat',
  },
  {
    id: 12,
    functionName: 'flatMap()',
    description:
      'The flatMap() method of Array instances returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.',
    imageSrc: 'array-flat-map',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap',
  },
  {
    id: 13,
    functionName: 'forEach()',
    description:
      'The forEach() method of Array instances executes a provided function once for each array element.',
    imageSrc: 'array-for-each',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach',
  },
  {
    id: 14,
    functionName: 'includes()',
    description:
      'The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.',
    imageSrc: 'array-includes',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes',
  },
  {
    id: 15,
    functionName: 'indexOf()',
    description:
      'The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.',
    imageSrc: 'array-index-of',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf',
  },
  {
    id: 16,
    functionName: 'join()',
    description:
      'The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.',
    imageSrc: 'array-join',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join',
  },
  {
    id: 17,
    functionName: 'keys()',
    description:
      'The keys() method of Array instances returns a new array iterator object that contains the keys for each index in the array.',
    imageSrc: 'array-keys',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys',
  },
  {
    id: 18,
    functionName: 'lastIndexOf()',
    description:
      'The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.',
    imageSrc: 'array-last-index-of',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf',
  },
  {
    id: 19,
    functionName: 'map()',
    description:
      'The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.',
    imageSrc: 'array-map',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
  },
  {
    id: 20,
    functionName: 'pop()',
    description:
      'The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.',
    imageSrc: 'array-pop',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop',
  },
  {
    id: 21,
    functionName: 'push()',
    description:
      'The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.',
    imageSrc: 'array-push',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push',
  },
  {
    id: 22,
    functionName: 'reduce()',
    description:
      'The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value. The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).',
    imageSrc: 'array-reduce',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce',
  },
  {
    id: 23,
    functionName: 'reduceRight()',
    description:
      'The reduceRight() method of Array instances applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.',
    imageSrc: 'array-reduce-right',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight',
  },
  {
    id: 24,
    functionName: 'reverse()',
    description:
      'The reverse() method of Array instances reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.',
    imageSrc: 'array-reverse',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse',
  },
  {
    id: 25,
    functionName: 'shift()',
    description:
      'The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.',
    imageSrc: 'array-shift',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift',
  },
  {
    id: 26,
    functionName: 'slice()',
    description:
      'The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.',
    imageSrc: 'array-slice',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice',
  },
  {
    id: 27,
    functionName: 'some()',
    description:
      'The some() method of Array instances tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn"t modify the array.',
    imageSrc: 'array-some',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some',
  },
  {
    id: 28,
    functionName: 'sort()',
    description:
      'The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values. The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.',
    imageSrc: 'array-sort',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
  },
  {
    id: 29,
    functionName: 'splice()',
    description:
      'The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced(). To access part of an array without modifying it, see slice().',
    imageSrc: 'array-splice',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice',
  },
  {
    id: 30,
    functionName: 'toLocaleString()',
    description:
      'The toLocaleString() method of Array instances returns a string representing the elements of the array. The elements are converted to strings using their toLocaleString methods and these strings are separated by a locale-specific string (such as a comma ",").',
    imageSrc: 'array-to-locale-string',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString',
  },
  {
    id: 31,
    functionName: 'toReversed()',
    description:
      'The toReversed() method of Array instances is the copying counterpart of the reverse() method. It returns a new array with the elements in reversed order.',
    imageSrc: 'array-to-reversed',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed',
  },
  {
    id: 32,
    functionName: 'toSorted()',
    description:
      'The toSorted() method of Array instances is the copying version of the sort() method. It returns a new array with the elements sorted in ascending order.',
    imageSrc: 'array-to-sorted',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted',
  },
  {
    id: 33,
    functionName: 'toSpliced()',
    description:
      'The toSpliced() method of Array instances is the copying version of the splice() method. It returns a new array with some elements removed and/or replaced at a given index.',
    imageSrc: 'array-to-spliced',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced',
  },
  {
    id: 34,
    functionName: 'toString()',
    description:
      'The toString() method of Array instances returns a string representing the specified array and its elements.',
    imageSrc: 'array-to-string',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString',
  },
  {
    id: 35,
    functionName: 'unshift()',
    description:
      'The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.',
    imageSrc: 'array-unshift',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift',
  },
  {
    id: 36,
    functionName: 'values()',
    description:
      'The values() method of Array instances returns a new array iterator object that iterates the value of each item in the array.',
    imageSrc: 'array-values',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values',
  },
  {
    id: 37,
    functionName: 'with()',
    description:
      'The with() method of Array instances is the copying version of using the bracket notation to change the value of a given index. It returns a new array with the element at the given index replaced with the given value.',
    imageSrc: 'array-with',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with',
  },
]
