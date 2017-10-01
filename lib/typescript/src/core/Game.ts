/**
 * @file
 * 贪食蛇游戏
 */

import { Snake } from "./Snake";
import { Ground } from "./Ground";
import { Direction } from "./Direction";
import { ICell } from "./Cell";
import { IFood, Food } from "./Food";

export class Game {
    /**
     * 贪食蛇
     * @private
     * @type {Snake}
     * @memberof Game
     */
    private snake: Snake;

    /**
     * 棋盘
     * @private
     * @type {Ground}
     * @memberof Game
     */
    private ground: Ground;

    /**
     * 用于生成食物的棋盘
     * @private
     * @type {Ground}
     * @memberof Game
     */
    private foodGround: Ground;

    /**
     * 食物数组
     * @private
     * @type {Array<IFood>}
     * @memberof Game
     */
    private foods: Array<IFood> = [];

    constructor({
        width= 10,
        height= 10,
        headerPosition,
        direction,
        bodyLength= 3,
    }:{
        width?: number,
        height?: number,
        headerPosition?: ICell,
        direction?: Direction,
        bodyLength?: number,
    }) {
        //初始化方向
        if(direction){
            direction = Direction.Up
        }

        //设置头部的默认值，方向默认值
        if(!headerPosition){
            headerPosition = {
                x: Math.floor( width / 2 ),
                y: Math.floor( height / 2 ),
            }
        }

        //创建蛇
        this.snake = new Snake({
            headerPosition: headerPosition,
            direction: direction,
            bodyLength: bodyLength,
        })

        //创建棋盘
        this.ground = new Ground(width, height)
        this.foodGround = new Ground(width, height)

        //创建食物
        this.createFood()
    }

    /**
     * 生成事物
     */
    makeFoot(): void{
        const cell = this.ground.getRoadomUnmarkCell(1)[0];
        this.foods.push(new Food(cell.x, cell.y, 1));
    }


    /**
     * 一帧
     */
    frame(): Array<Array<boolean>>{

        var eatFood = this.snake.move(this.foods)

        if(eatFood){
            //去除已经吃掉的食物
            this.foods = this.foods.filter(item => item != eatFood)
            this.createFood();
        }

        this.ground.rest();
        return this.ground.print(this.foods, this.snake.header, this.snake.body);
    }

    /**
     * 转向
     * @param willTurnDirection     方向
     */
    turn(willTurnDirection: Direction){
        this.snake.turn(willTurnDirection)
    }

    /**
     * 创建食物
     */
    private createFood(){
        this.foodGround.rest();
        this.foodGround.print(this.foods, this.snake.header, this.snake.body);
        const cell = this.foodGround.getRoadomUnmarkCell(1)[0];
        this.foods.push(new Food(cell.x, cell.y, 1));
    }
}
