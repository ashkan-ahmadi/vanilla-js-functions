# Math Functions

Here you will find a list of all the math functions available in this package. I have done my best to provide as much information as possible.

All the functions are sorted alphabetically.

Functions:

- [calculateAreaOfCircle](#calculateareaofcircle)
- [calculateAreaOfRectangle](#calculateareaofrectangle)
- [calculateAverage](#calculateaverage)
- [calculateCorrelation](#calculatecorrelation)
- [calculateDeviationFromMean](#calculatedeviationfrommean)
- [calculateSum](#calculatesum)

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
