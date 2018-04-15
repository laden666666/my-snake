/**
 * @file
 * 贪食蛇游戏
 */

import { Snake } from "./Snake";
import { Ground } from "./Ground";
import { Direction } from "./Direction";
import { ICell } from "./Cell";
import { IFood, Food } from "./Food";
import { Print } from "./Print";
import {
    IGame
} from '../interface/IGame'

export class Game implements IGame{
    /**
     * 贪食蛇
     * @private
     * @type {Snake}
     * @memberof Game
     */
    private $snake: Snake;

    /**
     * 贪食蛇的坐标系
     * @private
     * @type {Ground}
     * @memberof Game
     */
    private $ground: Ground;

    /**
     * 用于绘制游戏
     * @private
     * @type {Print}
     * @memberof Game
     */
    private $print: Print;

    /**
     * 食物数组
     * @private
     * @type {Array<IFood>}
     * @memberof Game
     */
    private $food: Array<IFood> = [];

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
        this.$snake = new Snake({
            headerPosition: headerPosition,
            direction: direction,
            bodyLength: bodyLength,
        })

        //创建贪食蛇的坐标系
        this.$ground = new Ground(width, height)

        //创建绘制对象
        this.$print = new Print(width, height)

        //创建食物
        this.$createFood(3)
    }

    /**
     * 一帧
     */
    frame(): Array<Array<string>>{

        var eatFood = this.$snake.move(this.$food)

        if(eatFood){
            //去除已经吃掉的食物
            this.$food = this.$food.filter(item => item != eatFood)
            this.$createFood();
        }

        this.$print.rest();
        this.$print.printHead(this.$snake.header, this.$snake.direction)
        this.$print.printBody(this.$snake.header, this.$snake.body)
        this.$print.printFoot(this.$food)

        return this.$print.cells
    }

    /**
     * 转向
     * @param willTurnDirection     方向
     */
    turn(willTurnDirection: Direction){
        this.$snake.turn(willTurnDirection)
    }

    /**
     * 检验游戏是否可以继续
     */
    check(): {
        result: boolean
    } {
        let snakeCell: ICell[] = [...this.$snake.body, this.$snake.header]
        let snakeCellMap = {}

        return{
            result: [...this.$snake.body, this.$snake.header].every(cell=>{
                if(snakeCellMap[cell.x + ':' + cell.y] || !this.$ground.inGround(cell)){
                    return false
                } else {
                    snakeCellMap[cell.x + ':' + cell.y] = true
                    return true
                }
            })
        }
    }

    /**
     * 创建食物
     */
    private $createFood(count = 1){
        const cells = this.$ground.getRandomUsableCells(count, this.$food, this.$snake.header, this.$snake.body);
        cells.forEach(cell => {
            this.$food.push(new Food(cell.x, cell.y, Math.floor(Math.random() * 3) + 1));
        })
    }
}
