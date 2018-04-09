// @flow

import {
    Up,
    Down,
    Left,
    Right,
    Direction
} from './Direction'

export class Cell {

    x: number
    y: number

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    /**
     * 判断两个cell是否相等
     * @static
     * @param {Cell} cell1
     * @param {Cell} cell2
     * @returns {boolean}
     * @memberof Cell
     */
    static equal(cell1: Cell, cell2: Cell): boolean {
        return cell1.x === cell2.x && cell1.y === cell2.y
    }

    /**
     * 克隆坐标
     * @param cell          需要克隆的坐标
     */
    static clone(cell: Cell) {
        return new Cell(cell.x, cell.y)
    }

    /**
     * 根据一个坐标和方向，计算新坐标
     * @param cell          需要计算的坐标
     * @param direction     目标方向
     */
    static getCellByDirection(cell: Cell, direction: Direction): Cell{
        if(Down == direction){
            return new Cell(cell.x, cell.y - 1)
        } else if(Up == direction){
            return new Cell(cell.x, cell.y + 1)
        } else if(Left == direction){
            return new Cell(cell.x - 1, cell.y)
        } else if(Right == direction){
            return new Cell(cell.x + 1, cell.y)
        }
    }


    /**
     * 获得一个坐标到另一个坐标的方向
     * @param cell          需要计算的坐标
     * @param direction     目标方向
     */
    static getDirectionByCell(cell1: Cell, cell2: Cell): Direction{
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
}