// @flow

/**
 * @file
 * 坐标方向
 */

export type Direction = number

export const Up: Direction = 1
export const Down: Direction = 1
export const Left: Direction = 1
export const Right: Direction = 1


/**
 * 获取一个方向的反方向
 * @param d1
 * @returns {Direction}
 */
export function getReverse(d1: Direction): Direction{
    if(d1 == Up){
        return Down
    } else if(d1 == Down){
        return Up
    } else if(d1 == Left){
        return Right
    } else if(d1 == Right){
        return Left
    }
}

/**
 * 判断两个方向是否是反向
 * @param d1
 * @param d2
 * @returns {boolean}
 */
export function isReverse(d1: Direction, d2: Direction): boolean{
    return getReverse(d1) == d2;
}

/**
 * 判断两个方向是否是同向
 * @param d1
 * @param d2
 * @returns {boolean}
 */
export function isSyntropy(d1: Direction, d2: Direction): boolean{
    if(d1 == Up && d2 == Down
        || d1 == Right && d2 == Left
        || d1 == Down && d2 == Up
        || d1 == Left && d2 == Right){
        return true
    }

    return false
}
