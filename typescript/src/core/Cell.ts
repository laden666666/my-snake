import {
    Direction
} from './Direction'

/**
 * @file
 * 坐标
 */
interface ICell {
    x: number,
    y: number
}

class Cell implements ICell {

    x: number
    y: number

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    
    /**
     * 判断两个cell是否相等
     * @static
     * @param {ICell} cell1 
     * @param {ICell} cell2 
     * @returns {boolean} 
     * @memberof Cell
     */
    static equal(cell1: ICell, cell2: ICell): boolean {
        return cell1.x === cell2.x && cell2.y === cell2.y
    }

    /**
     * 克隆坐标
     * @param cell          需要克隆的坐标
     */
    static clone(cell: ICell) {
        return new Cell(cell.x, cell.y)
    }

    /**
     * 根据一个坐标和方向，计算新坐标
     * @param cell          需要计算的坐标
     * @param direction     目标方向
     */
    static getCellByDirection(cell: ICell, direction: Direction): ICell{
        if(Direction.Down == direction){
            return new Cell(cell.x, cell.y - 1)
        } else if(Direction.Up == direction){
            return new Cell(cell.x, cell.y + 1)
        } else if(Direction.Left == direction){
            return new Cell(cell.x - 1, cell.y)
        } else if(Direction.Right == direction){
            return new Cell(cell.x + 1, cell.y)
        }  
    }
}

class ReadOnlyCell extends Cell {

    readonly x: number
    readonly y: number

    constructor(x: number, y: number) {
        super(x, y)
    }

    static clone(cell: ICell): ReadOnlyCell {
        return new ReadOnlyCell(cell.x, cell.y)
    }

    static getCellByDirection(cell: ICell, direction: Direction): ReadOnlyCell{
        return this.clone(super.getCellByDirection(cell, direction)) 
    }
}

export {
    ICell,
    ReadOnlyCell,
    Cell
}