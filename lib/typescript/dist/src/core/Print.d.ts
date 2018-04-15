/**
 * @file
 * 贪食蛇的坐标系
 */
import { ICell } from './Cell';
import { Direction } from './Direction';
import { IFood } from './Food';
import { Ground } from './Ground';
/**
 * 贪食蛇游戏中，用于绘制的常量
 */
export declare enum CellShowType {
    BLANK = "00",
    HEAD_UP = "01",
    HEAD_DOWN = "02",
    HEAD_LEFT = "03",
    HEAD_RIGHT = "04",
    BODY_UP = "11",
    BODY_DOWN = "12",
    BODY_LEFT = "13",
    BODY_RIGHT = "14",
    BODY_LEFT_TURNING_UP = "21",
    BODY_LEFT_TURNING_DOWN = "22",
    BODY_RIGHT_TURNING_UP = "23",
    BODY_RIGHT_TURNING_DOWN = "24",
    BODY_UP_TURNING_LEFT = "25",
    BODY_UP_TURNING_RIGHT = "26",
    BODY_DOWN_TURNING_LEFT = "27",
    BODY_DOWN_TURNING_RIGHT = "28",
    TAIL_UP = "31",
    TAIL_DOWN = "32",
    TAIL_LEFT = "33",
    TAIL_RIGHT = "34",
    FOOD_1 = "51",
    FOOD_2 = "52",
    FOOD_3 = "53",
}
export declare class Print extends Ground {
    private $cells;
    readonly cells: Array<Array<string>>;
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
