# Javascript Functions

This is a series of Javascript helper functions you can use in any project.

## Basic usage

Simply import any function you want to use

Example:

```js
import { isPalindrome } from './functions/string.js'

const text = 'racecar'

isPalindrome(text) // false
```

## Order of parameters

All the functions follow a needle-haystack order of paramers. This means that the first argument is the one you want to find in the second argument.

Example:

```js
import { hasItemInArray } from './functions/array.js'

const veggies = ['potato', 'corn', 'carrot']

hasItemInArray('corn', veggies) // true
```

## Math

### round

The `round` function is a merged version of the three built in Math methods: `round`, `ceil`, and `floor`.

| name  | argument |
| ----- | -------- |
| round | number   |

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
