# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ridabatool/lotide`

**Require it:**

`const _ = require('@ridabatool/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the value at the first index position in an array
* `tail(array)`: returns the array excluding the first value of the array
* `middle(array)`: returns the middle value in an array
* `countLetters(string)`: returns an object with letters as key properties and their count in the sentence as value
* `countOnly(array, object)`: returns the object of counts of only the elements existing in array 
* `eqArrays(array, array)`: returns true if arrays are equal
* `eqObjects(object, object)`: returns true if objects are equal
* `findKey(object, callback)`: returns the key if the value of the key matches value of callback function
* `findKeyByValue(object, value)`: returns returns the matching key of the value provided
* `letterPositions(string)`: returns an array of the index positions of the string
* `map(array, callback)`: returns a new array after implementing the callback function on each element of the array provided
* `takeUntil(array, callback)` : returns all the elements from start of the array till it matches the callback function condition
* `without(array, itemsToRemove)` : returns the array by removing the elememts provided in itemsToRemove 
