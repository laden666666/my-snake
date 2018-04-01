import { Direction } from './Direction';
/**
 * @file
 * 坐标
 */
interface ICell {
    x: number;
    y: number;
}
declare class Cell implements ICell {
    x: number;
    y: number;
    constructor(x: number, y: number);
    /**
     * 判断两个cell是否相等
     * @static
     * @param {ICell} cell1
     * @param {ICell} cell2
     * @returns {boolean}
     * @memberof Cell
     */
    static equal(cell1: ICell, cell2: ICell): boolean;
    /**
     * 克隆坐标
     * @param cell          需要克隆的坐标
     */
    static clone(cell: ICell): Cell;
    /**
     * 根据一个坐标和方向，计算新坐标
     * @param cell          需要计算的坐标
     * @param direction     目标方向
     */
    static getCellByDirection(cell: ICell, direction: Direction): ICell;
    /**
     * 获得一个坐标到另一个坐标的方向
     * @param cell          需要计算的坐标
     * @param direction     目标方向
     */
    static getDirectionByCell(cell1: ICell, cell2: ICell): Direction;
}
declare class ReadOnlyCell extends Cell {
    readonly x: number;
    readonly y: number;
    constructor(x: number, y: number);
    static clone(cell: ICell): ReadOnlyCell;
    static getCellByDirection(cell: ICell, direction: Direction): ReadOnlyCell;
}
export { ICell, ReadOnlyCell, Cell };
