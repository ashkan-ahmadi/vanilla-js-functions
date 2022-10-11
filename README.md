# Javascript Functions

This is a series of Javascript helper functions you can use in any project.

## Basic usage

Simply import any function you want to use

Example:

```js
import { isPalindrome } from 'vanilla-js-functions'

const text = 'racecar'

isPalindrome(text) // true
```

## Order of parameters

All the functions follow a needle-haystack order of paramers. This means that the first argument is the one you want to find in the second argument.

Example:

```js
import { hasItemInArray } from './functions/array.js'

const veggies = ['potato', 'corn', 'carrot']

hasItemInArray('corn', veggies) // true
```

## Function names

I have done my best to name the functions in a descriptive and clear manner.

- All functions starting with `is` and `has` return `true` or `false`
- All functions follow the camelCase naming convention

## Math

### round

The `round` function is a merged version of the three built in Math methods: `round`, `ceil`, and `floor`.

| argument | type   | required | default |
| -------- | ------ | -------- | ------- |
| number   | number | yes      |         |
| {round}  | string | no       | nearest |

```js
import { round } from './functions/math.js'

round(4.3)) // 4
round(4.3), { round: 'nearest' } // 4 (default)
round(4.3), { round: 'up' } // 5
round(4.3), { round: 'down' } // 4
```

### factorial

The `factorial` function calculates the factorial value of a number.

Example:

```js
import { factorial } from './functions/math.js'

factorial(4) // 24
```

### calculateAreaOfRectangle

Calculates the area of a rectangle based on its width and height.

```js
import { calculateAreaOfRectangle } from './functions/math.js'

calculateAreaOfRectangle(3, 5) // 15
```

| argument | type   | required | default |
| -------- | ------ | -------- | ------- |
| width    | number | yes      | 10      |
| height   | number | yes      | 1       |

## Array

These are functions that are primarily working with arrays.

### isArray

Checks if an argument is an array or not.

```js
import { isArray } from './functions/array.js'

isArray('This is a text') // false
isArray(['This is a text']) // true
```

| argument | type   | required | default |
| -------- | ------ | -------- | ------- |
| number   | number | yes      |         |

### hasItemInArray

Checks if a specific item exists in an array or not.

```js
import { hasItemInArray } from './functions/array.js'

const veggies = ['potato', 'corn', 'carrot']

hasItemInArray('corn', veggies) // true
```

| argument | type           | required | default |
| -------- | -------------- | -------- | ------- |
| item     | string, number | yes      |         |
| array    | array          | yes      |         |

### removeItemFromArray

Removes a specific item from array.

**This function mutates the original array and returns the array without the specific item.**

```js
import { removeItemFromArray } from './functions/array.js'

const veggies = ['potato', 'corn', 'carrot']

removeItemFromArray('corn', veggies) // ['potato', 'carrot']
```

| argument | type           | required | default |
| -------- | -------------- | -------- | ------- |
| item     | string, number | yes      |         |
| array    | array          | yes      |         |
