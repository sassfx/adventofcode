import { ChecksumCalculator } from '../src/checksumCalculator';
import { expect } from 'chai';
import 'mocha';
import {Two} from '../src/two'

describe("ChecksumCalculator", () =>  {
    describe("calculateChecksum", () => {
        describe("expected equals actual", () => { 
            const input = [[5, 1, 9, 5], [7, 5, 3], [2, 4, 6, 8]];
            const expected = 18;
            const result = ChecksumCalculator.calculateChecksum(input);
            expect(result).to.eq(expected);
        });
    });
    describe("calculateChecksumDivision", () => {
        describe("expected equals actual", () => { 
            const input = [[5, 9, 2, 8], [9, 4, 7, 3], [3, 8, 6, 5]];
            const expected = 9;
            const result = ChecksumCalculator.calculateChecksumDivision(input);
            expect(result).to.eq(expected);
        });
    });
});