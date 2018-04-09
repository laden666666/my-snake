/**
 * @file
 * 坐标方向
 */
export declare enum Direction {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4,
}
export declare class DirectionTools {
    private constructor();
    /**
     * 获取一个方向的反方向
     * @param d1
     * @returns {Direction}
     */
    static getReverse(d1: Direction): Direction;
    /**
     * 判断两个方向是否是反向
     * @param d1
     * @param d2
     * @returns {boolean}
     */
    static isReverse(d1: Direction, d2: Direction): boolean;
    /**
     * 判断两个方向是否是同向
     * @param d1
     * @param d2
     * @returns {boolean}
     */
    static isSyntropy(d1: Direction, d2: Direction): boolean;
}
