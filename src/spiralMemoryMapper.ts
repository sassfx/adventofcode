class SpiralMemoryMapper {
    public static createMap(upperValue:number):SpiralMemoryMap {
        const items = [new MemoryItem(1, 0, 0)];

        let currentLimit = 1;
        let currentX = 0;
        let currentY = 0;
        let currentValue = 1;

        while (currentValue < upperValue) {
            while(currentX < currentLimit && currentValue < upperValue) {
                currentX += 1;
                currentValue += 1;
                items.push(new MemoryItem(currentValue, currentX, currentY));
            }

            while(currentY < currentLimit && currentValue < upperValue) {
                currentY += 1;
                currentValue += 1;
                items.push(new MemoryItem(currentValue, currentX, currentY));
            }

            while(currentX > -1 * currentLimit && currentValue < upperValue) {
                currentX -= 1;
                currentValue += 1;
                items.push(new MemoryItem(currentValue, currentX, currentY));
            }

            while(currentY > -1 * currentLimit && currentValue < upperValue) {
                currentY -= 1;
                currentValue += 1;
                items.push(new MemoryItem(currentValue, currentX, currentY));
            }
            currentLimit += 1;
        }
        return new SpiralMemoryMap(items);
    }
}

class SpiralMemoryMap {
    private store:{[value:number]:MemoryItem} = {};

    constructor(items:MemoryItem[]) {
        items.forEach(x => this.store[x.value] = x)
    }

    public getItem(value:number):MemoryItem{
        return this.store[value];
    }
}

class MemoryItem {
    private _value:number;
    private _x:number;
    private _y:number;

    constructor(value:number, x:number, y:number) {
        this._value = value;
        this._x = x;
        this._y = y;
    }

    public get value():number{
        return this._value;
    }

    public get distance():number {
        return Math.abs(this._x) + Math.abs(this._y);
    }

}

export {SpiralMemoryMapper}