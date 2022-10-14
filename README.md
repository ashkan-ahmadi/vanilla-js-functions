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

## Credit

- [Ashkan Ahmadi](https://twitter.com/ashkan_ahmadi)
