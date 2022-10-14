# Array Functions

All the functions are sorted alphabetically.

Functions:

- [removeItemFromArray](#removeitemfromarray)

---

## **removeItemFromArray**

Removes a specific item from an array

By default, the function does not mutate the original array. If set to `true`, it will mutate the original array.

### Parameters

| params   | type    | required | default |
| -------- | ------- | -------- | ------- |
| `item`   | any     | yes      |         |
| `array`  | array   | yes      |         |
| `mutate` | boolean | no       | `false` |

### Return

- Returns `false` if the item doesn't exist in the array
- Returns an array with the item removed from the array

### Example

```js
const data = [1, 2, 3, 4, 5]

console.log(removeItemFromArray(10, data)) // false
console.log(removeItemFromArray(3, data)) // [1,2,4,5] (data is still the same)
console.log(removeItemFromArray(3, data, true)) // [1,2,4,5] (data is different)
```

---
