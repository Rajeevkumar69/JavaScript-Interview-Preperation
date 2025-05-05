// Q1. Print the Fibonacci series up to N numbers

function printFibonacci(number) {
  let a = 0;
  let b = 1;
  for (let i = 0; i < number; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
  }
}

// printFibonacci(10);

// Q2. Check if a given number is a prime number.
function checkPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

// console.log(checkPrime(12));

// Q3. Write a function to find the factorial of a number.
function findFactorial(number) {
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result *= i;
  }
  return result;
}

// console.log(findFactorial(4));

// Q4. Find the greatest common divisor (GCD) of two numbers.

function findGCD(num1, num2) {
  while (num2 !== 0) {
    let temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
}

// console.log(findGCD(10, 15));

// Q5. Check whether a given number is a palindrome.
function checkPalindrome(number) {
  let str = number.toString();
  let reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

// console.log(checkPalindrome(1111));

// Q6. Print the first N Armstrong numbers (3-digit only)

function printArmstrong(n) {
  let count = 0;
  let num = 100;

  while (count < n) {
    const digits = num.toString().split("");
    const sum = digits.reduce((acc, d) => acc + Math.pow(Number(d), 3), 0);

    if (sum === num) {
      console.log(num);
      count++;
    }
    num++;
  }
}

// printArmstrong(5);

// Q7. Find the sum of digits of a number using recursion

function recursionSum(number) {
  if (number === 0) return 0;
  return (number % 10) + recursionSum(Math.floor(number / 10));
}

// console.log(recursionSum(1234));

// Q8. Write a function to generate the nth number in the Fibonacci sequence using memoization.

function fibonacci(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

console.log(fibonacci(10));

// Q9. Given a number, count how many set bits (1s) are in its binary representation.
function countSetBits(num) {
  let count = 0;
  while (num > 0) {
    count += num & 1;
    num = num >> 1;
  }
  return count;
}

console.log(countSetBits(13));

// Q10. Find the square root of a number without using built-in methods.

function sqrt(number) {
  if (number < 0) return NaN;
  let low = 0,
    high = number,
    mid;

  while (high - low > 1e-6) {
    mid = (low + high) / 2;
    if (mid * mid > number) {
      high = mid;
    } else {
      low = mid;
    }
  }
  return low;
}

console.log(sqrt(25));
