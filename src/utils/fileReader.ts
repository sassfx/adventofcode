import * as fs from 'fs';

class FileReader {
    public static ReadFile(filePath:string):string {
        return fs.readFileSync(filePath).toString('utf8');
    }
}

export {FileReader};