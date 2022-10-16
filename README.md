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

All the functions follow a needle--in-haystack order of paramers. This means that the first argument is the one you want to find in the second argument.

Example:

```js
import { hasItemInArray } from 'vanilla-js-functions'

const veggies = ['potato', 'corn', 'carrot']

hasItemInArray('corn', veggies) // true
```

## Function names

I have done my best to name the functions in a descriptive and clear manner.

- All functions starting with `is` and `has` (e.g. `isString`) return `true` or `false`
- All functions follow the camelCase naming convention
- All functions have type checks to make sure the right type is passed in
- All plural function names (e.g. `getPositiveNumbers`) return an array or an object or a combination of both. All singular functional names (e.g. `getSmallestNumber`) return one value

## FAQ

**Can I use this package in my React/Angular/Vue/... project?**

Absolutely yes.

**Does it have any dependencies?**

Zero dependencies. It relies on built-in JS methods.

**How can I contribute to this package?**

Create a pull request and I will review it. Make sure you follow the same formatting and structure. Everything has to be documented in a clear and concise manner.

**How can I report an issue?**

Go to the Issues tab on the GitHub page of this package and post an issue. Check if the similar or a similar issue has already been posted before posting.

**Is there going to be changed or updates in the future?**

Absolutely. New functions and modifications will be added from time to time.

## Credits

- [Ashkan Ahmadi](https://twitter.com/ashkan_ahmadi)
