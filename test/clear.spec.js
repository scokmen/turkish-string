const { describe, it } = require("mocha");
const { expect } = require("chai");
const TurkishString = require("./../index");

describe("clear utility specs", function () {


   it("demo", function(){


     const instance = new TurkishString('ç-ğ-ı-i-ö-ş-ü');
     const str1 = instance.toUpperCase();                     //Ç-Ğ-I-İ-Ö-Ş-Ü
     const str2 = TurkishString.toUpperCase('Ç-Ğ-I-İ-Ö-Ş-Ü'); //Ç-Ğ-I-İ-Ö-Ş-Ü
     const str3 = TurkishString.toUpperCase(instance);        //Ç-Ğ-I-İ-Ö-Ş-Ü

     console.log(str1);
     console.log(str2);
     console.log(str3);

   });

    it("should throws type error when argument of the clear method is not a string", function () {

        const invalidParameters = [[], {}, 0, Infinity, NaN, false, null, undefined];

        for (let i = 0; i < invalidParameters.length; i++) {

            expect(function() { TurkishString.clear(invalidParameters[i]); }).to.throw(TypeError);
        }
    });

    it("should clears only turkish special characters", function () {

        const input = "çğıiöşüÇĞIİÖŞÜćġïõśůĆĠÏÕŚŮ";
        const turkishString = new TurkishString(input);
        const expectedOutput = "cgiiosuCGIIOSUćġïõśůĆĠÏÕŚŮ";

        expect(turkishString.clear()).to.equal(expectedOutput);
        expect(TurkishString.clear(input)).to.equal(expectedOutput);
    });
});
