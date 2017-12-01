import { RepeatedDigitSummer, One } from '../src/one';
import { expect } from 'chai';
import 'mocha';

describe("RepeatedDigitSummer", () =>  {
    describe("FindRepeatedDigitSum", () => {
        describe("1122 equals 3", () => { 
            const input = [1, 1, 2, 2];
            const expected = 3;
            const result = RepeatedDigitSummer.FindRepeatedDigitSum(input);
            expect(result).to.eq(expected);
        });
        describe("1111 equals 4", () => { 
            const input = [1, 1, 1, 1];
            const expected = 4;
            const result = RepeatedDigitSummer.FindRepeatedDigitSum(input);
            expect(result).to.eq(expected);
        });
        describe("1234 equals 0", () => { 
            const input = [1, 2, 3, 4];
            const expected = 0;
            const result = RepeatedDigitSummer.FindRepeatedDigitSum(input);
            expect(result).to.eq(expected);
        });
        describe("91212129 equals 9", () => { 
            const input = [9, 1, 2, 1, 2, 1, 2, 9];
            const expected = 9;
            const result = RepeatedDigitSummer.FindRepeatedDigitSum(input);
            expect(result).to.eq(expected);
        });
    });

    describe("FindRepeatedDigitHalfwayRoundSum", () => {
        describe("1212 equals 6", () => { 
            const input = [1, 2, 1, 2];
            const expected = 6;
            const result = RepeatedDigitSummer.FindRepeatedDigitHalfwayRoundSum(input);
            expect(result).to.eq(expected);
        });
        describe("1221 equals 0", () => { 
            const input = [1, 2, 2, 1];
            const expected = 0;
            const result = RepeatedDigitSummer.FindRepeatedDigitHalfwayRoundSum(input);
            expect(result).to.eq(expected);
        });
        describe("123425 equals 4", () => { 
            const input = [1, 2, 3, 4, 2, 5];
            const expected = 4;
            const result = RepeatedDigitSummer.FindRepeatedDigitHalfwayRoundSum(input);
            expect(result).to.eq(expected);
        });
        describe("123123 equals 12", () => { 
            const input = [1, 2, 3, 1, 2, 3];
            const expected = 12;
            const result = RepeatedDigitSummer.FindRepeatedDigitHalfwayRoundSum(input);
            expect(result).to.eq(expected);
        });
        describe("12131415 equals 4", () => { 
            const input = [1, 2, 1, 3, 1, 4, 1, 5];
            const expected = 4;
            const result = RepeatedDigitSummer.FindRepeatedDigitHalfwayRoundSum(input);
            expect(result).to.eq(expected);
        });
    });
});
