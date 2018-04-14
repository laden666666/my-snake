// @flow

import {
    Up,
    Down,
    Left,
    Right,
} from './Direction'

export type Cell = {
    x: number;
    y: number;
}

/**
 * 判断两个cell是否相等
 * @param {Cell} cell1
 * @param {Cell} cell2
 * @returns {boolean}
 */
export function equalCell(cell1: Cell, cell2: Cell): boolean {
    return cell1.x === cell2.x && cell1.y === cell2.y
}

/**
 * 根据一个坐标和方向，计算新坐标
 * @param cell          需要计算的坐标
 * @param direction     目标方向
 * @returns {Cell}
 */
export function getCellByDirection(cell: Cell, direction: Direction): Cell{
    if(Down == direction){
        return {x: cell.x, y: cell.y - 1}
    } else if(Up == direction){
        return {x: cell.x, y: cell.y + 1}
    } else if(Left == direction){
        return {x: cell.x - 1, y: cell.y}
    } else if(Right == direction){
        return {x: cell.x + 1, y: cell.y}
    }
}

/**
 * 判断一个坐标在另一个坐标的哪一步
 * @param cell1             坐标1
 * @param cell2             坐标2
 * @returns {Direction}     坐标2在坐标1的方向
 */
export function getDirectionByCell(cell1: Cell, cell2: Cell): Direction{
    const dx = cell1.x - cell2.x
    const dy = cell1.y - cell2.y

    if(Math.abs(dx) > Math.abs(dy)){
        if(dx > 0){
            return Left
        } else {
            return Right
        }
    } else if(Math.abs(dx) < Math.abs(dy)){
        if(dy > 0){
            return Down
        } else {
            return Up
        }
    } else {
        debugger
        throw new Error('dx == dy')
    }
}
