/**
 * @file
 * 坐标
 */
import { Cell, ICell } from './Cell';
interface IFood extends ICell {
    readonly grow: number;
}
declare class Food extends Cell implements IFood {
    protected $grow: number;
    readonly grow: number;
    constructor(x: number, y: number, grow: number);
    clone(): Cell;
}
export { Food, IFood };
