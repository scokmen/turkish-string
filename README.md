# turkish-string

isomorphic turkish string utilities for javascript

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

**initialize via constructor, create or clone methods**

```javascript
const TurkishString = require("turkish-string");

const str1 = new TurkishString("string");
const str2 = TurkishString.create("string");
const str3 = new TurkishString(str1);
const str4 = TurkishString.create(str2);
const str5 = str4.clone();
```

**Lowercase transform**

```javascript
const TurkishString = require("turkish-string");

const instance = new TurkishString("Ç-Ğ-I-İ-Ö-Ş-Ü");
const str1 = instance.toLowerCase();                     //ç-ğ-ı-i-ö-ş-ü
const str2 = TurkishString.toLowerCase("Ç-Ğ-I-İ-Ö-Ş-Ü"); //ç-ğ-ı-i-ö-ş-ü
const str3 = TurkishString.toLowerCase(instance);        //ç-ğ-ı-i-ö-ş-ü
```

**Uppercase transform**

```javascript
const TurkishString = require("turkish-string");

const instance = new TurkishString("ç-ğ-ı-i-ö-ş-ü");
const str1 = instance.toUpperCase();                     //Ç-Ğ-I-İ-Ö-Ş-Ü
const str2 = TurkishString.toUpperCase("Ç-Ğ-I-İ-Ö-Ş-Ü"); //Ç-Ğ-I-İ-Ö-Ş-Ü
const str3 = TurkishString.toUpperCase(instance);        //Ç-Ğ-I-İ-Ö-Ş-Ü
```
**Clear turkish characters** 
```javascript
const TurkishString = require("turkish-string");

const instance = new TurkishString("Ç-Ğ-I-İ-Ö-Ş-Ü");
const str1 = instance.clear();                     //C-G-I-I-O-S-U
const str2 = TurkishString.clear("Ç-Ğ-I-İ-Ö-Ş-Ü"); //C-G-I-I-O-S-U
const str3 = TurkishString.clear(instance);        //C-G-I-I-O-S-U
```

**Sorting support**

For sorting ```TurkishString.compare``` method can be use as compare function

```javascript
const letters = ["ğ", "g'", "f", "e", "d", "ç", "c", "b", "a"];

const englishSorted = letters.sort();
//["a", "b", "c", "d", "e", "f", "g", "ç", "ğ"]

const turkishSorted = letters.sort(TurkishString.compare);
//["a", "b", "c", "ç", "d", "e", "f", "g", "ğ"]
```

**Other instance and static methods**
- isLessThan
- isLessThanOrEqual
- isGreaterThan
- isGreaterThanOrEqual
