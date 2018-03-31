import {
    Direction,
    DirectionTools
} from './Direction'
import {
    Cell,
    ICell,
    ReadOnlyCell
} from './Cell'
import {
    Food,
    IFood
} from "./Food";

class Snake{
    /**
     * 头
     */
    protected $header: ICell
    get header() :ReadOnlyCell{
        return ReadOnlyCell.clone(this.$header)
    }

    /**
     * 身体
     */
    protected $body: Array<ICell>
    get body() : Array<ReadOnlyCell>{
        return this.$body.map(item => ReadOnlyCell.clone(item))
    }

    /**
     * 移动方向
     */
    protected $direction: Direction
    get direction() :Direction{
        return this.$direction
    }

    /**
     * 预计的移动方向
     */
    protected $willTurnDirection: Direction

    /**
    * 将要生长数量
    */
    protected $growAmount: number = 0
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
    protected defaultOption = {
        direction: Direction.Up,
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
        headerPosition: ICell,
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
        this.$header = new Cell(options.headerPosition.x, options.headerPosition.y)

        //生成身体
        this.$body = [];
        let lastBody = this.$header;
        for(let i = 0; i < options.bodyLength; i++){
            lastBody = Cell.getCellByDirection(lastBody, DirectionTools.getReverse(this.$direction));
            this.$body.push(lastBody)
        }
    }

    /**
     * 移动
     * @param food
     */
    move(food:Array<IFood>|IFood): IFood{
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
    private $move(){
        //如果增长度大于0，说明需要增长，
        if(this.$growAmount > 0){
            this.$body.unshift(this.$header);
            this.$header = Cell.getCellByDirection(this.$header, this.$direction);
            this.$growAmount--
        } else {
            this.$body.unshift(this.$header);
            this.$body.pop();
            this.$header = Cell.getCellByDirection(this.$header, this.$direction);
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
     * @param {(Array<ICell>|ICell)} food
     * @returns
     * @memberof Snake
     */
    canEat(food:Array<IFood>|IFood): IFood{
        let _food: Array<IFood>;
        if(!Array.isArray(food)){
            _food = [food]
        } else {
            _food = food
        }

        const nextHeader = Cell.getCellByDirection(this.$header, this.$direction);

        return _food.filter(item => Cell.equal(item, nextHeader))[0] || null;
    }

    /**
     * 吃食物
     * @param {IFood)} food
     * @returns
     * @memberof Snake
     */
    eat(food:IFood){
        this.$growAmount += food.grow;
        this.$move()
    }

    /**
     * 判断蛇是否已经死亡：头部包含在身体里面就认为蛇死亡了
     * @returns
     * @memberof Snake
     */
    isDead(){
        return this.$body.every(item=> !Cell.equal(this.$header, item));
    }
}

export {
    Snake
}
