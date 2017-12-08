import { FileReader } from './utils/fileReader';
import { PassphraseTester } from './passphraseTester'
import { resolve } from 'path';

class Four {
    public static partOne():number {
        const dataString = FileReader.ReadFile(`c:/dev/adventofcode/src/data/passphrases.txt`);
        const data = dataString.split('\r\n').filter(PassphraseTester.isValid);
        return data.length;
    }

    public static partTwo():number {
        const dataString = FileReader.ReadFile(`c:/dev/adventofcode/src/data/passphrases.txt`);
        const data = dataString.split('\r\n').filter(PassphraseTester.isValidAnagram);
        return data.length;
    }
}

export {Four}