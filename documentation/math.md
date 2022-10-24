# Math Functions

Here you will find a list of all the math functions available in this package. I have done my best to provide as much information as possible.

All the functions are sorted alphabetically.

<details>
  <summary>Table of content:</summary>

- [calculateAreaOfCircle](#calculateareaofcircle)
- [calculateAreaOfRectangle](#calculateareaofrectangle)
- [calculateAverage](#calculateaverage)
- [calculateCorrelation](#calculatecorrelation)
- [calculateDeviationFromMean](#calculatedeviationfrommean)
- [calculateFactorial](#calculatefactorial)
- [calculateHypotenuse](#calculatehypotenuse)
- [calculateMedian](#calculatemedian)
- [calculatePMT](#calculatepmt)
- [calculateProduct](#calculateproduct)
- [calculateStandardDeviation](#calculatestandarddeviation)
- [calculateSum](#calculatesum)
- [generateHEXColor](#generatehexcolor)
- [generateRandomNumber](#generaterandomnumber)
- [generateRangeOfNumbers](#generaterangeofnumbers)
- [getEvenNumbers](#getevennumbers)
- [getLargestNumber](#getlargestnumber)
- [getNegativeNumbers](#getnegativenumbers)
- [getOddNumbers](#getoddnumbers)
- [getPositiveNumbers](#getpositivenumbers)
- [getSmallestNumber](#getsmallestnumber)
- [hasEvenNumbers](#hasevennumbers)
- [hasOddNumbers](#hasoddnumbers)
- [hasZero](#haszero)
- [hasBiggerThan](#hasbiggerthan)
- [hasSmallerThan](#hassmallerthan)
- [isEvenNumber](#isevennumber)
- [isFloatNumber](#isfloatnumber)
- [isNegativeNumber](#isnegativenumber)
- [isNumber](#isnumber)
- [isOddNumber](#isoddnumber)
- [isPositiveNumber](#ispositivenumber)
- [isPrimeNumber](#isprimenumber)
- [isWholeNumber](#iswholenumber)
- [roundNumber](#roundnumber)

</details>

---

## **calculateAreaOfCircle**

Calculates the area of a circle based on its radius.

### Parameters

| params   | type   | required | default |
| -------- | ------ | -------- | ------- |
| `radius` | number | yes      | 1       |

### Return

The area of the circle (number)

### Example

```js
console.log(calculateAreaOfCircle(1.5)) // 7.06
```

---

## **calculateAreaOfRectangle**

Calculates the area of a rectangle based on its two sides.

### Parameters

| params   | type   | required | default |
| -------- | ------ | -------- | ------- |
| `width`  | number | yes      | 10      |
| `height` | number | yes      | 1       |

### Return

The area of the rectangle (number)

### Example

```js
console.log(calculateAreaOfRectangle(2.5, 8.4)) // 21
```

---

## **calculateAverage**

Calculates the average of all the numbers in an array. It ignores any item that is not a number.

### Parameters

| params  | type  | required | default |
| ------- | ----- | -------- | ------- |
| `array` | array | yes      |         |

### Return

The average/mean of the numbers in the array (number)

### Example

```js
const numbersOnly = [1, 2, 3, 4]
console.log(calculateAverage(numbersOnly)) // 2.5

const mixed = [1, 2, 3, '4']
console.log(calculateAverage(mixed)) // 2
```

---

## **calculateCorrelation**

Calculates the correlation between two sets of data. Both sets of data must be arrays and have the same length

### Parameters

| params | type  | required | default |
| ------ | ----- | -------- | ------- |
| `a`    | array | yes      |         |
| `b`    | array | yes      |         |

### Return

The correlation value of the two data sets (number)

### Example

```js
const dataA = [1, 2, 3, 4]
const dataB = [2, 4, 5, 6]
console.log(calculateCorrelation(numbersOnly)) // 0.4242640687119285
```

---

## **calculateDeviationFromMean**

Calculates the deviation of every number in a dataset from the mean of the dataset.

You can use the function `calculateAverage` if you don't know the mean in advance.

### Parameters

| params  | type   | required | default |
| ------- | ------ | -------- | ------- |
| `array` | array  | yes      |         |
| `mean`  | number | yes      |         |

### Return

An array of numbers

### Example

```js
const data = [25, 50, 60, 80]
console.log(calculateDeviationFromMean(data, calculateAverage(data)))
// returns: [ -28.75, -3.75, 6.25, 26.25 ]
```

---

## **calculateFactorial**

Calculates the factorial value of a number.

### Parameters

| params   | type   | required | default |
| -------- | ------ | -------- | ------- |
| `number` | number | yes      |         |

### Return

The factorial value of the number (number)

### Example

```js
console.log(calculateFactorial(6)) // 720
```

---

## **calculateHypotenuse**

Calculates the length of the hypotenuse of a right-angle triangle given its two sides

### Parameters

| params | type   | required | default |
| ------ | ------ | -------- | ------- |
| `a`    | number | yes      |         |
| `b`    | number | yes      |         |

### Return

The length of the hypotenuse (number)

### Example

```js
console.log(calculateHypotenuse(3, 4)) // 5
```

---

## **calculateMedian**

Calculates the median of an array of numbers. It ignores any item that is not a number.

### Parameters

| params  | type  | required | default |
| ------- | ----- | -------- | ------- |
| `array` | array | yes      |         |

### Return

The median (number)

### Example

```js
const dataset = [3, 2, 5, 1, -8]
const dataset2 = [8, 9, -21, -6]
console.log(calculateMedian(dataset)) // 2
console.log(calculateMedian(dataset2)) // 1
```

---

## **calculatePMT**

Calculates the payments for a loan based on a constant annual interest rate and constant payments

### Parameters

You must pass an object with the following keys

| params               | type   | required | default |
| -------------------- | ------ | -------- | ------- |
| `loanAmount`         | number | yes      |         |
| `years`              | number | yes      |         |
| `paymentsPerYear`    | number | yes      |         |
| `annualInterestRate` | number | yes      |         |

### Return

The payment amount per period

### Example

```js
const values = {
  loanAmount: 1000,
  years: 3,
  paymentsPerYear: 12,
  annualInterestRate: 0.02,
}

console.log(calculatePMT(values)) // 28.642578732455764
```

---

## **calculateProduct**

Calculates the product of the numbers in an array. It multiplies every item with the next item.

### Parameters

| params  | type  | required | default |
| ------- | ----- | -------- | ------- |
| `array` | array | yes      |         |

### Return

The product (number)

### Example

```js
const numbers = [2, 3, 4]
console.log(calculateProduct(numbers)) // 24 (2 * 3 * 4)
```

---

## **calculateStandardDeviation**

Calculates the standard deviation of an array of numbers. It ignores any non number item

### Parameters

| params   | type    | required | default |
| -------- | ------- | -------- | ------- |
| `array`  | array   | yes      |         |
| `sample` | boolean | no       | `false` |

### Return

The standard deviation (number)

### Example

```js
const numbers = [3, 7, 1, 7, 4, 9]
console.log(calculateStandardDeviation(numbers)) // 2.733536578
console.log(calculateStandardDeviation(numbers, true)) // 2.994439291
```

---

## **calculateSum**

Calculates the sum of all the numbers in an array. It ignores any item that is not a number.

### Parameters

| params  | type  | required | default |
| ------- | ----- | -------- | ------- |
| `array` | array | yes      |         |

### Return

The sum of the numbers in the array (number)

### Example

```js
const numbersOnly = [1, 2, 3]
console.log(calculateSum(numbersOnly)) // 6

const mixed = [1, '2', true, 'potato']
console.log(calculateSum(mixed)) // 1
```

---

## **generateHEXColor**

Generates a random HEX color every time. It outputs the # as well.

### Parameters

None

### Return

A HEX color value (string)

### Example

```js
generateHEXColor() // #a83b12
generateHEXColor() // 09e321
```

---

## **generateRandomNumber**

Generates a random whole number. Both `min` and `max` are inclusive.

### Parameters

### Parameters

| params | type   | required | default |
| ------ | ------ | -------- | ------- |
| `min`  | number | no       | 1       |
| `max`  | number | no       | 100     |

### Return

A random whole number (number)

### Example

```js
console.log(generateRandomNumber()) // 34
console.log(generateRandomNumber(538, 842)) // 729
```

---

## **generateRangeOfNumbers**

Generates a rangle of numbers starting from the minimum to the maximum values. A step can be defined as well. Both `min` and `max` are inclusive.

### Parameters

| params   | type   | required | default |
| -------- | ------ | -------- | ------- |
| `min`    | number | no       | 1       |
| `max`    | number | no       | 10      |
| `string` | number | no       | 1       |

### Return

An array with the numbers

### Example

```js
console.log(generateRangeOfNumbers()) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(generateRandomNumber(-3, 3)) // [-3, -2, -1, 0, 1, 2, 3]
console.log(generateRandomNumber(1, 3, 0.5)) // [1, 1.5, 2, 2.5, 3]
```

---

## **getEvenNumbers**

Gets all the even numbers in an array. This is the opposite of `getOddNumbers`.

### Parameters

| params  | type  | required | default |
| ------- | ----- | -------- | ------- |
| `array` | array | yes      |         |

### Return

An array with the all the even numbers

### Example

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(getEvenNumbers(numbers)) // [1, 3, 5, 7, 9]
```

---

## **getLargestNumber**

Gets the largest number in an array. This is the opposite of `getSmallestNumber`

### Parameters

| params  | type  | required | default |
| ------- | ----- | -------- | ------- |
| `array` | array | yes      |         |

### Return

The largest number in the array (number)

### Example

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(getLargestNumber(numbers)) // 9
```

---

## **getNegativeNumbers**

Gets all the negative numbers in an array. This is the opposite of `getPositiveNumbers`.

### Parameters

| params  | type  | required | default |
| ------- | ----- | -------- | ------- |
| `array` | array | yes      |         |

### Return

An array with the all the negative numbers

### Example

```js
const numbers = [1, -3, 0, -5.7, 8, -0.02]
console.log(getNegativeNumbers(numbers)) // [-3, -5.7, -0.02]
```

---

## **getOddNumbers**

Gets all the odd numbers in an array. This is the opposite of `getEvenNumbers`.

### Parameters

| params  | type  | required | default |
| ------- | ----- | -------- | ------- |
| `array` | array | yes      |         |

### Return

An array with the all the odd numbers

### Example

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(getOddNumbers(numbers)) // [2, 4, 6, 8]
```

---

## **getPositiveNumbers**

Gets all the positive numbers in an array. This is the opposite of `getNegativeNumbers`.

### Parameters

| params  | type  | required | default |
| ------- | ----- | -------- | ------- |
| `array` | array | yes      |         |

### Return

An array with the all the positive numbers

### Example

```js
const numbers = [1, -3, 0, -5.7, 8, -0.02]
console.log(getPositiveNumbers(numbers)) // [1, 0, 8]
```

---

## **getSmallestNumber**

Gets the smallest number in an array. This is the opposite of `getLargestNumber`

### Parameters

| params  | type  | required | default |
| ------- | ----- | -------- | ------- |
| `array` | array | yes      |         |

### Return

The smallest number in the array (number)

### Example

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(getSmallestNumber(numbers)) // 1
```

---

## **hasEvenNumbers**

Checks if an array has any even numbers (at least one). This is the opposite of `hasOddNumbers`.

### Parameters

| params  | type  | required | default |
| ------- | ----- | -------- | ------- |
| `array` | array | yes      |         |

### Return

`true` if array has at least one even number

### Example

```js
const numbers = [1, 2, 3, 4]
console.log(hasEvenNumbers(numbers)) // true (2, 4)
```

---

## **hasOddNumbers**

Checks if an array has any odd numbers (at least one). This is the opposite of `hasEvenNumbers`.

### Parameters

| params  | type  | required | default |
| ------- | ----- | -------- | ------- |
| `array` | array | yes      |         |

### Return

`true` if array has at least one odd number

### Example

```js
const numbers = [1, 2, 3, 4]
console.log(hasOddNumbers(numbers)) // true (1, 3)
```

---

## **hasZero**

Checks if an array has the number zero in it

### Parameters

| params  | type  | required | default |
| ------- | ----- | -------- | ------- |
| `array` | array | yes      |         |

### Return

`true` if array has at least one zero

### Example

```js
const numbers = [1, 2, 3, 4]
console.log(hasZero(numbers)) // false
```

---

## **hasBiggerThan**

Checks if an array has any number bigger than a specific number. This is the opposite of `hasSmallerThan`.

### Parameters

| params   | type   | required | default |
| -------- | ------ | -------- | ------- |
| `number` | number | yes      |         |
| `array`  | array  | yes      |         |

### Return

`true` if array has at least one number bigger than `number`

### Example

```js
const grades = [75, 91, 43, 87]
console.log(hasBiggerThan(90, grades)) // true (91)
```

---

## **hasSmallerThan**

Checks if an array has any number smaller than a specific number. This is the opposite of `hasBiggerThan`.

### Parameters

| params   | type   | required | default |
| -------- | ------ | -------- | ------- |
| `number` | number | yes      |         |
| `array`  | array  | yes      |         |

### Return

`true` if array has at least one number smaller than `number`

### Example

```js
const grades = [75, 91, 43, 87]
console.log(hasSmaller(50, grades)) // true (43)
```

---

## **isEvenNumber**

Checks if a number is even or not. This is the opposite of `isOddNumber`.

### Parameters

| params   | type   | required | default |
| -------- | ------ | -------- | ------- |
| `number` | number | yes      |         |

### Return

`true` if number is even

### Example

```js
console.log(isEvenNumber(50)) // true
console.log(isEvenNumber(33)) // false
```

---

## **isFloatNumber**

Checks if a number is float (with decimal) or not. This is the opposite of `isWholeNumber`.

### Parameters

| params   | type   | required | default |
| -------- | ------ | -------- | ------- |
| `number` | number | yes      |         |

### Return

`true` if number is float (with decimal)

### Example

```js
console.log(isFloatNumber(3.5)) // true
console.log(isFloatNumber(3)) // false
```

---

## **isNegativeNumber**

Checks if a number is negative (less than 0). This is the opposite of `isPositiveNumber`.

### Parameters

| params   | type   | required | default |
| -------- | ------ | -------- | ------- |
| `number` | number | yes      |         |

### Return

`true` if number is negative

### Example

```js
console.log(isNegativeNumber(-4)) // true
console.log(isNegativeNumber(1.32)) // false
```

---

## **isNumber**

Checks if a value is of the type `number` or not. If `ignoreType` is set to `true`, the function checks the value only and numbers as strings would pass as numbers as well (in this case, `isNumber(4)` and `isNumber('4')` would return `true`).

### Parameters

| params       | type    | required | default |
| ------------ | ------- | -------- | ------- |
| `number`     | number  | yes      |         |
| `ignoreType` | boolean | no       | false   |

### Return

`true` if number is of the type `number`

### Example

```js
console.log(isOddNumber(7)) // true
console.log(isOddNumber('7')) // false
console.log(isOddNumber('7', true)) // true
```

---

## **isOddNumber**

Checks if a number is odd. This is the opposite of `isEvenNumber`.

### Parameters

| params   | type   | required | default |
| -------- | ------ | -------- | ------- |
| `number` | number | yes      |         |

### Return

`true` if number is odd

### Example

```js
console.log(isOddNumber(7)) // true
console.log(isOddNumber(12)) // false
```

---

## **isPositiveNumber**

Checks if a number is positive (less than 0). This is the opposite of `isNegativeeNumber`.

### Parameters

| params   | type   | required | default |
| -------- | ------ | -------- | ------- |
| `number` | number | yes      |         |

### Return

`true` if number is positive

### Example

```js
console.log(isPositiveNumber(-4)) // false
console.log(isPositiveNumber(1.32)) // true
```

---

## **isPrimeNumber**

Checks if a number is prime (divisible by itself and 1 only)

### Parameters

| params   | type   | required | default |
| -------- | ------ | -------- | ------- |
| `number` | number | yes      |         |

### Return

`true` if number is prime

### Example

```js
console.log(isPrimeNumber(7)) // true
console.log(isPrimeNumber(12)) // false
```

---

## **isWholeNumber**

Checks if a number is whole (without decimal) or not. This is the opposite of `isFloatNumber`.

### Parameters

| params   | type   | required | default |
| -------- | ------ | -------- | ------- |
| `number` | number | yes      |         |

### Return

`true` if number is whole

### Example

```js
console.log(isWholeNumber(3.5)) // false
console.log(isWholeNumber(3)) // true
```

---

## **roundNumber**

Rounds a number to the nearest whole number

### Parameters

| params                     | type   | required | default |
| -------------------------- | ------ | -------- | ------- |
| number                     | number | yes      |         |
| {round: nearest, up, down} | object | no       | nearest |

### Return

The number rounded (number)

### Example

```js
roundNumber(4.3)) // 4
roundNumber(4.3), { round: 'nearest' } // 4 (default)
roundNumber(4.3), { round: 'up' } // 5
roundNumber(4.3), { round: 'down' } // 4
```

---
