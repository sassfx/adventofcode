class ChecksumCalculator {
    public static calculateChecksum(data:number[][]):number {
        let sum = 0;
        data.forEach((row) =>{
            const min = Math.min(...row);
            const max = Math.max(...row);
            sum += (max - min);
        });

        return sum;
    }

    public static calculateChecksumDivision(data:number[][]):number {
        let sum = 0;
        data.forEach((row) => {
            let found = false;
            row.forEach((x, i) => {
                if (!found) {
                    for(let index = 0; index < row.length; index ++) {
                        if (index !== i) {
                            const currentNumber = row[index];
                            if (x % currentNumber === 0) {
                                sum += x / currentNumber;
                                found = true;
                                break;
                            }
                            else if (currentNumber % x === 0) {
                                sum += currentNumber / x;
                                found = true;
                                break;
                            }
                        }
                    }
                }
            })
        });

        return sum;
    }
}

export {ChecksumCalculator}