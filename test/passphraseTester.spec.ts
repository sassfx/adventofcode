import { PassphraseTester } from '../src/passphraseTester';
import { expect } from 'chai';
import 'mocha';
import {Two} from '../src/two'
import { fail } from 'assert';

describe("PassphraseTester", () =>  {
    describe("isValid", () => {
        it("aa bb cc dd ee is valid", () => { 
            const input = "aa bb cc dd ee";
            const result = PassphraseTester.isValid(input);
            expect(result).to.eq(true);
        });

        it("aa bb cc dd aa is not valid", () => { 
          const input = "aa bb cc dd aa";
          const result = PassphraseTester.isValid(input);
          expect(result).to.eq(false);
        });

        it("aa bb cc dd aaa is valid", () => { 
          const input = "aa bb cc dd aaa";
          const result = PassphraseTester.isValid(input);
          expect(result).to.eq(true);
      });
    });

    describe("isValidAnagram", () => {
        it("abcde fghij is valid", () => { 
            const input = "abcde fghij";
            const result = PassphraseTester.isValidAnagram(input);
            expect(result).to.eq(true);
        });

        it("abcde xyz ecdab is not valid", () => { 
            const input = "abcde xyz ecdab";
            const result = PassphraseTester.isValidAnagram(input);
            expect(result).to.eq(false);
        });

        it("a ab abc abd abf abj is valid", () => { 
            const input = "a ab abc abd abf abj";
            const result = PassphraseTester.isValidAnagram(input);
            expect(result).to.eq(true);
        });

        it("iiii oiii ooii oooi oooo is valid", () => { 
            const input = "iiii oiii ooii oooi oooo";
            const result = PassphraseTester.isValidAnagram(input);
            expect(result).to.eq(true);
        });

        it("oiii ioii iioi iiio is not valid", () => { 
            const input = "oiii ioii iioi iiio";
            const result = PassphraseTester.isValidAnagram(input);
            expect(result).to.eq(false);
        });
    });
});
