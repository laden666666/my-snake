/**
 * @file
 * 贪食蛇的坐标系
 */
import { ICell } from './Cell';
import { Direction } from './Direction';
import { IFood } from './Food';
import { Ground } from './Ground';
export declare class Print extends Ground {
    private $cells;
    readonly cells: Array<Array<String>>;
    constructor(width?: number, height?: number);
    /**
     * 绘制坐标
     * @param cell
     * @param cellShowType
     */
    private $printCell(cell, cellShowType);
    /**
     * 清除之前的绘制
     */
    rest(): void;
    /**
     * 绘制头部
     * @param head              头的坐标
     * @param direction         头的方向
     */
    printHead(head: ICell, direction: Direction): void;
    private $getDirectionString(direction);
    /**
     * 绘制身子
     * @param head
     * @param body
     */
    printBody(head: ICell, body: Array<ICell>): void;
    /**
     * 绘制食物
     * @param food
     */
    printFoot(food: Array<IFood>): void;
}
export { Ground };
