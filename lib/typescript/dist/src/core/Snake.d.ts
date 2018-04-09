import { Direction } from './Direction';
import { ICell, ReadOnlyCell } from './Cell';
import { IFood } from "./Food";
export declare class Snake {
    /**
     * 头
     */
    protected $header: ICell;
    readonly header: ReadOnlyCell;
    /**
     * 身体
     */
    protected $body: Array<ICell>;
    readonly body: Array<ReadOnlyCell>;
    /**
     * 移动方向
     */
    protected $direction: Direction;
    readonly direction: Direction;
    /**
     * 预计的移动方向
     */
    protected $willTurnDirection: Direction;
    /**
    * 将要生长数量
    */
    protected $growAmount: number;
    readonly growAmount: number;
    /**
     * 默认配置
     * @param options 默认配置
     * @param options.direction         方向
     * @param options.bodyLength        身体初始长度
     * @param options.headerPosition     初始头部坐标
     */
    protected defaultOption: {
        direction: Direction;
        bodyLength: number;
    };
    /**
     * 蛇的构造函数
     * @param options
     * @param options.direction         方向
     * @param options.bodyLength        身体初始长度
     * @param options.headerPosition     初始头部坐标
     */
    constructor(options: {
        headerPosition: ICell;
        direction?: Direction;
        bodyLength?: number;
    });
    /**
     * 移动
     * @param food
     */
    move(food: Array<IFood> | IFood): IFood;
    /**
     * 移动
     * @param food
     */
    private $move();
    /**
     * 转向
     */
    turn(willTurnDirection: Direction): void;
    /**
     * 判断蛇是否可以吃食物
     * @param {(Array<ICell>|ICell)} food
     * @returns
     * @memberof Snake
     */
    canEat(food: Array<IFood> | IFood): IFood;
    /**
     * 吃食物
     * @param {IFood)} food
     * @returns
     * @memberof Snake
     */
    eat(food: IFood): void;
    /**
     * 判断蛇是否已经死亡：头部包含在身体里面就认为蛇死亡了
     * @returns
     * @memberof Snake
     */
    isDead(): boolean;
}
