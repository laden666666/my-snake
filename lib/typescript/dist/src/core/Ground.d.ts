/**
 * @file
 * 贪食蛇的坐标系
 */
import { ICell } from './Cell';
export declare class Ground {
    protected width: number;
    protected height: number;
    constructor(width?: number, height?: number);
    /**
     * 判断一个cell是否属于当前坐标系
     * @param cell
     */
    inGround(cell: ICell): boolean;
    /**
     * 返回所有未标记的cell的列表
     * @param cells             不可用的坐标
     * @returns {Array}
     */
    getUsableCells(...cells: Array<ICell | Array<ICell>>): Array<ICell>;
    /**
     * 随机从返回未标记的cell列表中选取几个cell
     * @param count             随机取得的数量
     */
    getRandomUsableCells(count: number, ...cells: Array<ICell | Array<ICell>>): Array<ICell>;
}
