# turkish-string

isomorphic turkish string utilities javascript

[![GitHub version](https://badge.fury.io/gh/scokmen%2Fturkish-string.svg)](https://badge.fury.io/gh/scokmen%2Fturkish-string)
[![npm version](https://badge.fury.io/js/turkish-string.svg)](https://badge.fury.io/js/turkish-string)
[![Build Status](https://travis-ci.org/scokmen/turkish-string.svg?branch=master)](https://travis-ci.org/scokmen/turkish-string)
[![codecov](https://codecov.io/gh/scokmen/turkish-string/branch/master/graph/badge.svg)](https://codecov.io/gh/scokmen/turkish-string)

[![NPM](https://nodei.co/npm/turkish-string.png)](https://nodei.co/npm/turkish-string/)

## Installation  
```bash
$ yarn add turkish-string  
```

## Documentation

**create()**
```javascript
const TurkishString = require("turkish-string");
const turkishString1 = new TurkishString('string');
const turkishString2 = TurkishString.create('string');
```

**toLowerCase()**
```javascript
const TurkishString = require("turkish-string");
const turkishString = new TurkishString('Ç-Ğ-I-İ-Ö-Ş-Ü');
const result1 = turkishString.toLowerCase();                //"ç-ğ-ı-i-ö-ş-ü"
const result2 = TurkishString.toLowerCase('Ç-Ğ-I-İ-Ö-Ş-Ü'); //"ç-ğ-ı-i-ö-ş-ü"
const result3 = TurkishString.toLowerCase(turkishString);   //"ç-ğ-ı-i-ö-ş-ü"
```
**toUpperCase()**
```javascript
const TurkishString = require("turkish-string");
const turkishString = new TurkishString('ç-ğ-ı-i-ö-ş-ü');
const result1 = turkishString.toUpperCase();                //"Ç-Ğ-I-İ-Ö-Ş-Ü"
const result2 = TurkishString.toUpperCase('ç-ğ-ı-i-ö-ş-ü'); //"Ç-Ğ-I-İ-Ö-Ş-Ü"
const result3 = TurkishString.toUpperCase(turkishString);   //"Ç-Ğ-I-İ-Ö-Ş-Ü"
```
**clear()**
```javascript
const TurkishString = require("turkish-string");
const turkishString = new TurkishString('Ç-Ğ-I-İ-Ö-Ş-Ü');
const result1 = turkishString.clear();                //"C-G-I-I-O-S-U"
const result2 = TurkishString.clear('Ç-Ğ-I-İ-Ö-Ş-Ü'); //"C-G-I-I-O-S-U"
const result3 = TurkishString.clear(turkishString);   //"C-G-I-I-O-S-U"
```

**sorting**
```javascript
const letters = ['ğ', 'g', 'f', 'e', 'd', 'ç', 'c', 'b', 'a'];

const englishSorted = letters1.sort();
//["a", "b", "c", "d", "e", "f", "g", "ç", "ğ"]
const turkishSorted = letters2.sort(TurkishString.compare);
//["a", "b", "c", "ç", "d", "e", "f", "g", "ğ"]
```
