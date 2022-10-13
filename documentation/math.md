# Math Functions

Here you will find a list of all the math functions available in this package. I have done my best to provide as much information as possible.

All the functions are sorted alphabetically.

---

## **calculateAreaOfCircle**

Calculates the area of a circle based on its radius.

### Parameters

| params   | type   | required | default |
| -------- | ------ | -------- | ------- |
| `radius` | number | yes      | 1       |

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

### Example

```js
const numbersOnly = [1, 2, 3, 4]
console.log(calculateSum(numbersOnly)) // 2.5

const mixed = [1, 2, 3, '4']
console.log(calculateSum(mixed)) // 2
```

---

## **calculateSum**

Calculates the sum of all the numbers in an array. It ignores any item that is not a number.

### Parameters

| params  | type  | required | default |
| ------- | ----- | -------- | ------- |
| `array` | array | yes      |         |

### Example

```js
const numbersOnly = [1, 2, 3]
console.log(calculateSum(numbersOnly)) // 6

const mixed = [1, '2', true, 'potato']
console.log(calculateSum(mixed)) // 1
```

---
