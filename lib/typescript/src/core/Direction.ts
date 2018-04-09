/**
 * @file
 * 坐标方向
 */

export enum Direction {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4,
}

export class DirectionTools{
    private constructor(){}

    /**
     * 获取一个方向的反方向
     * @param d1
     * @returns {Direction}
     */
    static getReverse(d1: Direction): Direction{
        if(d1 == Direction.Up){
            return Direction.Down
        } else if(d1 == Direction.Down){
            return Direction.Up
        } else if(d1 == Direction.Left){
            return Direction.Right
        } else if(d1 == Direction.Right){
            return Direction.Left
        }
    }

    /**
     * 判断两个方向是否是反向
     * @param d1
     * @param d2
     * @returns {boolean}
     */
    static isReverse(d1: Direction, d2: Direction): boolean{
        return DirectionTools.getReverse(d1) == d2;
    }

    /**
     * 判断两个方向是否是同向
     * @param d1
     * @param d2
     * @returns {boolean}
     */
    static isSyntropy(d1: Direction, d2: Direction): boolean{
        if(d1 == Direction.Up && d2 == Direction.Down
            || d1 == Direction.Right && d2 == Direction.Left
            || d1 == Direction.Down && d2 == Direction.Up
            || d1 == Direction.Left && d2 == Direction.Right){
            return true
        }

        return false
    }
}