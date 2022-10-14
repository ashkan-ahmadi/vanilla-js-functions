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
- [calculateProduct](#calculateproduct)
- [calculateStandardDeviation](#calculatestandarddeviation)
- [calculateSum](#calculatesum)
- [round](#round)

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
console.log(calculateSum(numbersOnly)) // 2.5

const mixed = [1, 2, 3, '4']
console.log(calculateSum(mixed)) // 2
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
console.log(calculateHypotenuse(3, 4)) // 5
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

### round

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
round(4.3)) // 4
round(4.3), { round: 'nearest' } // 4 (default)
round(4.3), { round: 'up' } // 5
round(4.3), { round: 'down' } // 4
```

## **round**

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
round(4.3)) // 4
round(4.3), { round: 'nearest' } // 4 (default)
round(4.3), { round: 'up' } // 5
round(4.3), { round: 'down' } // 4
```

---
