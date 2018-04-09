/**
 * @file
 * 坐标
 */
import { Cell, ICell } from './Cell';
export interface IFood extends ICell {
    readonly grow: number;
}
export declare class Food extends Cell implements IFood {
    protected $grow: number;
    readonly grow: number;
    constructor(x: number, y: number, grow: number);
    clone(): Cell;
}
