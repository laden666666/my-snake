// @flow
import {
    Up,
    Left,
    Down,
    Right,
    Direction,
} from './Direction'
import {
    Cell,
    getCellByDirection,
    equalCell
} from './Cell'
import {
    Food,
} from "./Food";

export class Snake{
    /**
     * 头
     */
    $header: Cell
    get header() :Cell{
        return {...this.$header}
    }

    /**
     * 身体
     */
    $body: Cell[]
    get body() : Cell[]{
        return this.$body.map(item => ({...item}))
    }

    /**
     * 移动方向
     */
    $direction: Direction
    get direction() :Direction{
        return this.$direction
    }

    /**
     * 预计的移动方向
     */
    $willTurnDirection: Direction

    /**
    * 将要生长数量
    */
    $growAmount: number = 0
    get growAmount() :number{
        return this.$growAmount
    }

    /**
     * 默认配置
     * @param options 默认配置
     * @param options.direction         方向
     * @param options.bodyLength        身体初始长度
     * @param options.headerPosition     初始头部坐标
     */
    defaultOption = {
        direction: Up,
        bodyLength: 3,
    }

    /**
     * 蛇的构造函数
     * @param options
     * @param options.direction         方向
     * @param options.bodyLength        身体初始长度
     * @param options.headerPosition     初始头部坐标
     */
    constructor(options: {
        headerPosition: Cell,
        direction?: Direction,
        bodyLength?: number,
    }){
        //去除options中为定义的部分，这样可以让默认值覆盖为给定值
        for(let key in this.defaultOption){
            if(options[key] === undefined){
                options[key] = this.defaultOption[key]
            }
        }

        this.$direction = this.$willTurnDirection = options.direction
        this.$header = {x: options.headerPosition.x, y: options.headerPosition.y}

        //生成身体
        this.$body = [];
        let lastBody = this.$header;
        for(let i = 0; i < options.bodyLength; i++){
            lastBody = getCellByDirection(lastBody, DirectionTools.getReverse(this.$direction));
            this.$body.push(lastBody)
        }
    }

    /**
     * 移动
     * @param food
     */
    move(food:Food[]|Food): Food{
        //同步方向改变
        if(this.$willTurnDirection != this.$direction){
            this.$direction = this.$willTurnDirection
        }

        var canEatFood = this.canEat(food);
        if(canEatFood){
            this.eat(canEatFood);
        } else {
            this.$move();
        }

        return canEatFood;
    }

    /**
     * 移动
     * @param food
     */
    $move(){
        //如果增长度大于0，说明需要增长，
        if(this.$growAmount > 0){
            this.$body.unshift(this.$header);
            this.$header = getCellByDirection(this.$header, this.$direction);
            this.$growAmount--
        } else {
            this.$body.unshift(this.$header);
            this.$body.pop();
            this.$header = getCellByDirection(this.$header, this.$direction);
        }
    }

    /**
     * 转向
     */
    turn(willTurnDirection: Direction){
        //如果要转向的方向，不和当前方向相反，则可以转向
        if(!DirectionTools.isReverse(willTurnDirection, this.$direction) ){
            this.$willTurnDirection = willTurnDirection
        }
    }

    /**
     * 判断蛇是否可以吃食物
     * @param {(Array<Cell>|Cell)} food
     * @returns
     * @memberof Snake
     */
    canEat(food: Food[]|Food): Food{
        let _food: Food[] = [];
        if(!Array.isArray(food)){
            _food.push(food)
        } else {
            _food = food
        }

        const nextHeader = getCellByDirection(this.$header, this.$direction);

        return _food.filter(item => equalCell(item, nextHeader))[0] || null;
    }

    /**
     * 吃食物
     * @param {Food)} food
     * @returns
     * @memberof Snake
     */
    eat(food:Food){
        this.$growAmount += food.grow;
        this.$move()
    }

    /**
     * 判断蛇是否已经死亡：头部包含在身体里面就认为蛇死亡了
     * @returns
     * @memberof Snake
     */
    isDead(){
        return this.$body.every(item=> !equalCell(this.$header, item));
    }
}
