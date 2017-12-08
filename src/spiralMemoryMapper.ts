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

    public static createAdditiveMap(upperValue:number):SpiralMemoryMap{
        const itemByPositionStore:{[value:number]:{[value:number]:MemoryItem}} = {};

        const addItemToStore = (item:MemoryItem) => {
            if (!itemByPositionStore[item.x]) {
                itemByPositionStore[item.x] = {};
            }

            itemByPositionStore[item.x][item.y] = item;
        }

        const getValueFromStore = (x:number, y:number) => {
            if (itemByPositionStore[x] && itemByPositionStore[x][y]) {
                return itemByPositionStore[x][y].value;
            }

            return 0;
        }

        const getItemValue = (x:number, y:number) => getValueFromStore(x-1, y-1) + getValueFromStore(x, y-1) +
            getValueFromStore(x+1, y-1) + getValueFromStore(x-1, y) + getValueFromStore(x+1, y) + 
            getValueFromStore(x-1, y+1) + getValueFromStore(x, y+1) + getValueFromStore(x+1, y+1);

            const items = [new MemoryItem(1, 0, 0)];
            addItemToStore(new MemoryItem(1, 0, 0));

            let currentLimit = 1;
            let currentX = 0;
            let currentY = 0;
            let currentValue = 1;
    
            while (currentValue < upperValue) {
                while(currentX < currentLimit && currentValue < upperValue) {
                    currentX += 1;
                    currentValue = getItemValue(currentX, currentY);
                    var item = new MemoryItem(currentValue, currentX, currentY)
                    addItemToStore(item);
                    items.push(item);
                }
    
                while(currentY < currentLimit && currentValue < upperValue) {
                    currentY += 1;
                    currentValue = getItemValue(currentX, currentY);
                    var item = new MemoryItem(currentValue, currentX, currentY)
                    addItemToStore(item);
                    items.push(item);
                }
    
                while(currentX > -1 * currentLimit && currentValue < upperValue) {
                    currentX -= 1;
                    currentValue = getItemValue(currentX, currentY);
                    var item = new MemoryItem(currentValue, currentX, currentY)
                    addItemToStore(item);
                    items.push(item);
                }
    
                while(currentY > -1 * currentLimit && currentValue < upperValue) {
                    currentY -= 1;
                    currentValue = getItemValue(currentX, currentY);
                    var item = new MemoryItem(currentValue, currentX, currentY)
                    addItemToStore(item);
                    items.push(item);
                }
                currentLimit += 1;
            }
            return new SpiralMemoryMap(items);
    }
}

class SpiralMemoryMap {
    private store:{[value:number]:MemoryItem} = {};
    private items:MemoryItem[] = [];

    constructor(items:MemoryItem[]) {
        items.forEach(x => this.store[x.value] = x);
        this.items = items.slice();
    }

    public getItem(value:number):MemoryItem{
        return this.store[value];
    }

    public get values() {
        return this.items;
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

    public get x():number {
        return this._x;
    }

    public get y():number {
        return this._y;
    }

    public get value():number{
        return this._value;
    }

    public get distance():number {
        return Math.abs(this._x) + Math.abs(this._y);
    }

}

export {SpiralMemoryMapper}