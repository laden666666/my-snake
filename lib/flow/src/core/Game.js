/**
 * @file
 * 贪食蛇游戏
 */
// @flow

import { Snake } from "./Snake";
import { Ground } from "./Ground";
import type { IGame } from "../interface/IGame";
import type {
    Direction
} from "./Direction";
import {
    Up,
    Down,
    Left,
    Right,
} from "./Direction";
import type { Cell } from "./Cell";
import type { Food } from "./Food";
import { Print } from "./Print";

export class Game implements IGame {
    /**
     * 贪食蛇
     * @private
     * @type {Snake}
     * @memberof Game
     */
    $snake: Snake;

    /**
     * 贪食蛇的坐标系
     * @private
     * @type {Ground}
     * @memberof Game
     */
    $ground: Ground;

    /**
     * 用于绘制游戏
     * @private
     * @type {Print}
     * @memberof Game
     */
    $print: Print;

    /**
     * 食物数组
     * @private
     * @type {Array<Food>}
     * @memberof Game
     */
    $food: Food[];

    constructor(options:{
        width?: number,
        height?: number,
        headerPosition?: Cell,
        direction?: Direction,
        bodyLength?: number,
    }) {

        var width = options.width

        var {width, height, headerPosition, direction, bodyLength} = {...{
            width: 10,
            height: 10,
            bodyLength: 3,
        }, ...options}

        //初始化方向
        if(direction){
            direction = Up
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
        this.$food = []
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
        let snakeCell: Cell[] = [...this.$snake.$body, this.$snake.header]
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
    $createFood(count: number = 1){
        const cells = this.$ground.getRandomUsableCells(count, this.$food.map(foot=>foot), this.$snake.header, this.$snake.body);
        cells.forEach(cell => {
            this.$food.push({...cell, grow: Math.floor(Math.random() * 3) + 1});
        })
    }
}
