/**
 * Sum elements
 */

// function twoSum(nums, target_num) {
//   const map = [];
//   const indexnum = [];

//   for (let x = 0; x < nums.length; x++) {
//     console.log(x, nums[x], map);
//     if (map[nums[x]] != null) {
//       var index = map[nums[x]];
//       indexnum[0] = index;
//       indexnum[1] = x;
//       break;
//     }
//     else {
//       map[target_num - nums[x]] = x;
//     }
//   }

//   console.log(map);
//   console.log(indexnum);

//   return indexnum;
// }

// function main(input_0, input_1) {
//   /* your codes starts here */
//   if (Array.isArray(input_0)) {
//     // const numbers = input_0.filter().sort(sortNumbers);
//     if (input_0.find(n => n == input_1)) return 'yes';

//     if (twoSum(input_0, input_1).length > 0) return 'yes'
//     return 'no'
//   }

//   return 'no'
// }

// console.log(twoSum([10, 20, 10, 40, 50, 60, 70], 6033));


// console.log(main([1, 3, 4, 5, 6, 7, 8, 33, 77], 9))



// class GFG {

//   // Returns true if there is a subset 
//   // of set[] with sum equal to given sum 
//   static boolean isSubsetSum(int set[],
//     int n, int sum) {
//     // Base Cases 
//     if (sum == 0)
//       return true;
//     if (n == 0 && sum != 0)
//       return false;

//     // If last element is greater than  
//     // sum, then ignore it 
//     if (set[n - 1] > sum)
//       return isSubsetSum(set, n - 1, sum);

//     /* else, check if sum can be obtained  
//     by any of the following 
//         (a) including the last element 
//         (b) excluding the last element */
//     return isSubsetSum(set, n - 1, sum) ||
//       isSubsetSum(set, n - 1, sum - set[n - 1]);
//   }

//   /* Driver program to test above function */
//   public static void main(String args[]) {
//     int set[] = { 3, 34, 4, 12, 5, 2};
//     int sum = 9;
//     int n = set.length;
//     if (isSubsetSum(set, n, sum) == true)
//       System.out.println("Found a subset"
//         + " with given sum");
//     else
//       System.out.println("No subset with"
//         + " given sum");
//   }
// }


// function isSubsetSum(set, n, sum) {
//   // Base Cases 
//   if (sum == 0)
//     return true;
//   if (n == 0 && sum != 0)
//     return false;

//   if (set[n - 1] > sum)
//     return isSubsetSum(set, n - 1, sum);

//   return isSubsetSum(set, n - 1, sum) ||
//     isSubsetSum(set, n - 1, sum - set[n - 1]);
// }

// function main1() {
//   var set = [3, 34, 4, 12, 5, 2];
//   var sum = 11;
//   var n = set.length;
//   if (isSubsetSum(set, n, sum) == true)
//     console.log("Found a subset"
//       + " with given sum");
//   else
//     console.log("No subset with"
//       + " given sum");
// }

// main1();


/**

Character to Number
GIven an array of string (A). The element in A will only consist of single character (A...Z) either in lower case or upper case. Write a function to convert the those characters into numbers that represent the order of that character in alphabet.
"A" and "a" will be converted into 1,
"B" and "b" will be converted into 2,
and so on.

Your function must return the converted A into a comma-separated string.
 */

// function main (str) {
//   /* your codes starts here */
//   return str.map(c => c.toUpperCase().charCodeAt() - 64);
// }

// console.log(main(['A', 'B', 'a']));


/**
tring Transformation
Given a string S containing only the letters "X", "Y", and "Z".

The string can be transformed into another string by following these rules:

Remove the first occurrence of "XY", "YZ", or "ZX"
Remove the next occurrence of "XY", "YZ", or "ZX", if found
As long as at least one rule mentioned above can be applied, repeat the process.

Write a function that accept the string, and return the last string after full transformation, and total of transformation, separated by white space (" "). If the last string is empty string, just return the total of transformation without white space at the first or end of string (example: "4")

For example:

XXYXYZYZ, will be transformed into:

X[XY]XYZYZ --> XXYZYZ
X[XY]ZYZ --> XZYZ
XZ[YZ] --> XZ
The last string is XZ and can not be transformed again. Therefore, the function should return: XZ 3, because there are only 3 steps of transformation.

Another example:

XZYXZYXX, can not be transformed because it does not match any rule. Therefore, the function should return XZYXZYXX 0.

 */

// function main(str, count = 0) {
//   const keys = ['XY', 'YZ', 'ZX'];

//   const index = keys.reduce((acc, cur) => {
//     const index = str.indexOf(cur);
//     if (index === -1) return acc;
//     if (acc > index) return index;
//     return acc === -1 ? index : acc;
//   }, -1);

//   if (index === -1) {
//     return str ? `${str} ${count}` : `${count}`;
//   }
//   const strTran = str.slice(0, index) + str.slice(index + 2);
//   return main(strTran, count + 1);
// }

// console.log(main("ZYXXZZY"));

