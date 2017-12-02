import { FileReader } from './utils/fileReader';
import { ChecksumCalculator } from './checksumCalculator'
import { resolve } from 'path';

class Two {
    public static partOne():number {
        const dataString = FileReader.ReadFile(`c:/dev/adventofcode/src/data/checksum.txt`);
        const data = dataString.split('\r\n').map(x => x.split('\t').map(d => +d));
        return ChecksumCalculator.calculateChecksum(data);
    }

    public static partTwo():number {
        const dataString = FileReader.ReadFile(`c:/dev/adventofcode/src/data/checksum.txt`);
        const data = dataString.split('\r\n').map(x => x.split('\t').map(d => +d));
        return ChecksumCalculator.calculateChecksumDivision(data);
    }
}

export {Two}