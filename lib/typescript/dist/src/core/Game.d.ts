import { Direction } from "./Direction";
import { ICell } from "./Cell";
import { IGame } from '../interface/IGame';
export declare class Game implements IGame {
    /**
     * 贪食蛇
     * @private
     * @type {Snake}
     * @memberof Game
     */
    private $snake;
    /**
     * 贪食蛇的坐标系
     * @private
     * @type {Ground}
     * @memberof Game
     */
    private $ground;
    /**
     * 用于绘制游戏
     * @private
     * @type {Print}
     * @memberof Game
     */
    private $print;
    /**
     * 食物数组
     * @private
     * @type {Array<IFood>}
     * @memberof Game
     */
    private $food;
    constructor({width, height, headerPosition, direction, bodyLength}: {
        width?: number;
        height?: number;
        headerPosition?: ICell;
        direction?: Direction;
        bodyLength?: number;
    });
    /**
     * 一帧
     */
    frame(): Array<Array<string>>;
    /**
     * 转向
     * @param willTurnDirection     方向
     */
    turn(willTurnDirection: Direction): void;
    /**
     * 检验游戏是否可以继续
     */
    check(): {
        result: boolean;
    };
    /**
     * 创建食物
     */
    private $createFood(count?);
}
