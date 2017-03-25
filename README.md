# turkish-string
turkish alphabet implementations of simple string utilities.

[![Build Status](https://travis-ci.org/scokmen/turkish-string.svg?branch=master)](https://travis-ci.org/scokmen/turkish-string)
[![codecov](https://codecov.io/gh/scokmen/turkish-string/branch/master/graph/badge.svg)](https://codecov.io/gh/scokmen/turkish-string)

# Documentation

```javascript
/*
 * toLowerCase & toUpperCase
 */
var turkishString = new TurkishString('Ç-Ğ-I-İ-Ö-Ş-Ü');
var result1    = turkishString.toLowerCase();                //"ç-ğ-ı-i-ö-ş-ü"
var result2    = TurkishString.toLowerCase('Ç-Ğ-I-İ-Ö-Ş-Ü'); //"ç-ğ-ı-i-ö-ş-ü"
var result3    = TurkishString.toLowerCase(turkishString);   //"ç-ğ-ı-i-ö-ş-ü"

var turkishString = new TurkishString('ç-ğ-ı-i-ö-ş-ü');
var result1    = turkishString.toUpperCase();                //"Ç-Ğ-I-İ-Ö-Ş-Ü"
var result2    = TurkishString.toUpperCase('ç-ğ-ı-i-ö-ş-ü'); //"Ç-Ğ-I-İ-Ö-Ş-Ü"
var result3    = TurkishString.toUpperCase(turkishString);   //"Ç-Ğ-I-İ-Ö-Ş-Ü"
```

```javascript
/*
 * clear function : transform turkish special letters to english versions.
 */
var turkishString = new TurkishString('Ç-Ğ-I-İ-Ö-Ş-Ü');
var result1    = turkishString.clear();                //"C-G-I-I-O-S-U"
var result2    = TurkishString.clear('Ç-Ğ-I-İ-Ö-Ş-Ü'); //"C-G-I-I-O-S-U"
var result3    = TurkishString.clear(turkishString);   //"C-G-I-I-O-S-U"
```

```javascript
/*
 * isLessThan & isLessThanOrEqual & isGreaterThan & isGreaterThanOrEqual 
 */
var turkishString1 = TurkishString.create('C');
var turkishString2 = TurkishString.create('Ç');
var result1        = turkishString1.isLessThan(turkishString2);            //true
var result2        = turkishString1.isLessThan(turkishString2.toString()); //true 
```

# Sorting
```javascript
var letters1 = ['ğ', 'g', 'f', 'e', 'd', 'ç', 'c', 'b', 'a'];
var result1  = letters1.sort(); 
var letters2 = ['ğ', 'g', 'f', 'e', 'd', 'ç', 'c', 'b', 'a'];
var result2  = letters2.sort(TurkishString.compare); 

//result1 = ["a", "b", "c", "d", "e", "f", "g", "ç", "ğ"]
//result2 = ["a", "b", "c", "ç", "d", "e", "f", "g", "ğ"]
```

# License

Copyright (c) 2016 Soner Çökmen, Licensed under the MIT license.