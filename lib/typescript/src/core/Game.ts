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
     * 食物数组
     * @private
     * @type {Array<IFood>}
     * @memberof Game
     */
    private foods: Array<IFood>;

    constructor({
        width= 10, 
        height= 10, 
        headerPostion,
        direction,
        bodyLength= 3,
    }:{
        width?: number,
        height?: number,
        headerPostion?: ICell, 
        direction?: Direction, 
        bodyLength?: number, 
    }) {
        //初始化方向
        if(direction){
            direction = Direction.Up
        }

        //设置头部的默认值，方向默认值
        if(headerPostion){
            headerPostion = {
                x: Math.floor( width / 2 ),
                y: Math.floor( height / 2 ),
            }
        }

        //创建蛇
        this.snake = new Snake({
            headerPostion: headerPostion, 
            direction: direction, 
            bodyLength: bodyLength, 
        })

        //创建棋盘
        this.ground = new Ground(width, height)
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
    frame(): void{
        this.ground.rest();
        this.ground.print(this.foods, this.snake.header, this.snake.body);

        var eatFood = this.snake.move(this.foods)

        if(eatFood){
            this.foods = this.foods.filter(item => item != eatFood)
            const cell = this.ground.getRoadomUnmarkCell(1)[0];
            this.foods.push(new Food(cell.x, cell.y, 1));
        }
    }
}