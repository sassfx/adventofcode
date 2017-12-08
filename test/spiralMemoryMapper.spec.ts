import { SpiralMemoryMapper } from '../src/spiralMemoryMapper';
import { expect } from 'chai';
import 'mocha';
import {Three} from '../src/three'

describe("ChecksumCalculator", () =>  {
    describe("calculateChecksum", () => {
        const input = 1024;
        const map = SpiralMemoryMapper.createMap(input);

        describe("expected equals actual", () => { 
            
            expect(map.getItem(1).distance).to.eq(0);
            expect(map.getItem(12).distance).to.eq(3);
            expect(map.getItem(23).distance).to.eq(2);
            expect(map.getItem(1024).distance).to.eq(31);
            Three.partTwo();
        });
    });
});