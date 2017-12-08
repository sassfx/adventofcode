import { SpiralMemoryMapper } from './spiralMemoryMapper'

class Three {
    public static partOne():number {
        const map = SpiralMemoryMapper.createMap(289326);
        return map.getItem(289326).distance;
    }

    public static partTwo():number {
        const map = SpiralMemoryMapper.createAdditiveMap(289326);
        return map.values[map.values.length-1].value;
    }
 }

export {Three}