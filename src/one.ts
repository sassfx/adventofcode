import { FileReader } from './utils/fileReader';
import { resolve } from 'path';

class One {
    public static partOne():number {
        const dataString = FileReader.ReadFile(`c:/dev/adventofcode/src/data/captcha.txt`);
        const data = dataString.split('').map(x => +x);
        return RepeatedDigitSummer.FindRepeatedDigitSum(data);
    }

    public static partTwo():number {
        const dataString = FileReader.ReadFile(`c:/dev/adventofcode/src/data/captcha.txt`);
        const data = dataString.split('').map(x => +x);
        return RepeatedDigitSummer.FindRepeatedDigitHalfwayRoundSum(data);
    }
}

class RepeatedDigitSummer {
    public static FindRepeatedDigitSum(digits:number[]):number {
        let sum = 0;
        digits.forEach((digit, index) => {
            const nextIndex = (index + 1) % digits.length;
            if (digit === digits[nextIndex]) {
                sum += digit;
            }
        });

        return sum;
    }

    public static FindRepeatedDigitHalfwayRoundSum(digits:number[]):number {
        let sum = 0;
        digits.forEach((digit, index) => {
            const nextIndex = (index + digits.length / 2) % digits.length;
            if (digit === digits[nextIndex]) {
                sum += digit;
            }
        });

        return sum;
    }
}

export { RepeatedDigitSummer, One }