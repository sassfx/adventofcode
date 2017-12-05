import { SpiralMemoryMapper } from './spiralMemoryMapper'

class Three {
    public static partOne():number {
        const map = SpiralMemoryMapper.createMap(289326);
        return map.getItem(289326).distance;
    }
}

export {Three}