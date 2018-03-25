/**
 * @file
 * 贪食蛇的坐标系
 */

import {
    ICell,
    Cell,
} from './Cell'
import {
    Direction,
    DirectionTools,
} from './Direction'
import {
    IFood,
} from './Food'
import {
    Ground
} from './Ground'

/**
 * 贪食蛇游戏中，用于绘制的常量
 */
enum CellShowType{
    //空白
    BLANK = '00',

    //头
    HEAD_UP = '01',
    HEAD_DOWN = '02',
    HEAD_LEFT = '03',
    HEAD_RIGHT = '04',

    //直行的身子
    BODY_UP = '11',
    BODY_DOWN = '12',
    BODY_LEFT = '13',
    BODY_RIGHT = '14',

    //正在转弯的身子
    BODY_LEFT_TURNING_UP = '21',
    BODY_LEFT_TURNING_DOWN = '22',
    BODY_RIGHT_TURNING_UP = '23',
    BODY_RIGHT_TURNING_DOWN = '24',
    BODY_UP_TURNING_LEFT = '25',
    BODY_UP_TURNING_RIGHT = '26',
    BODY_DOWN_TURNING_LEFT = '27',
    BODY_DOWN_TURNING_RIGHT = '28',

    //尾巴
    TAIL_UP = '31',
    TAIL_DOWN = '32',
    TAIL_LEFT = '33',
    TAIL_RIGHT = '34',

    //食物
    FOOD_1 = '51',
    FOOD_2 = '52',
    FOOD_3 = '53',
}

export class Print extends Ground{

    private $cells : Array<Array<CellShowType>> = []
    get cells() :Array<Array<String>>{
        return this.$cells.map(row=>{
            return row.map(col=> col ? col.toString() : '')
        })
    }

    constructor(width:number = 10, height:number = 10){
        super(width, height)

        for(let y = 0; y < this.height; y++){
            this.$cells[y] = [];
            for(let x = 0; x < this.width; x++){
                this.$cells[y][x] = CellShowType.BLANK
            }
        }
    }

    /**
     * 绘制坐标
     * @param cell
     * @param cellShowType
     */
    private $printCell(cell: ICell, cellShowType: CellShowType){
        if(!this.inGround(cell) || this.$cells[cell.y][cell.x] != CellShowType.BLANK){
            return;
        }

        this.$cells[cell.y][cell.x] = cellShowType
    }

    /**
     * 清除之前的绘制
     */
    rest(){
        for(let y = 0; y < this.height; y++){
            for(let x = 0; x < this.width; x++){
                this.$cells[y][x] = CellShowType.BLANK
            }
        }
    }

    /**
     * 绘制头部
     * @param head              头的坐标
     * @param direction         头的方向
     */
    printHead(head: ICell, direction: Direction){
        if(direction == Direction.Up){
            this.$printCell(head, CellShowType.HEAD_UP)
        } else if(direction == Direction.Down){
            this.$printCell(head, CellShowType.HEAD_DOWN)
        } else if(direction == Direction.Right){
            this.$printCell(head, CellShowType.HEAD_RIGHT)
        } else if(direction == Direction.Left){
            this.$printCell(head, CellShowType.HEAD_LEFT)
        }
    }

    private $getDirectionString(direction: Direction){
        if(direction == Direction.Up){
            return 'UP'
        } else if(direction == Direction.Down){
            return 'DOWN'
        } else if(direction == Direction.Left){
            return 'LEFT'
        } else if(direction == Direction.Right){
            return 'RIGHT'
        }
    }

    /**
     * 绘制身子
     * @param head
     * @param body
     */
    printBody(head: ICell, body: Array<ICell>){
        if(!body.length){
            return
        } else if(body.length == 1){
            return
        }

        for(let i = 0, lastCell = head; i < body.length; i++){
            let cellShowType
            if(i == body.length - 1){
                cellShowType = CellShowType['TAIL_' + this.$getDirectionString(Cell.getDirectionByCell(body[i], lastCell))]
                this.$printCell(body[i], cellShowType)
                break
            } else {
                const nextCell = body[i + 1]
                const turningDirection = Cell.getDirectionByCell(body[i], lastCell);
                const nextTurningDirection = Cell.getDirectionByCell(body[i], nextCell)
                if(turningDirection == nextTurningDirection || DirectionTools.isReverse(turningDirection, nextTurningDirection)){
                    cellShowType = CellShowType['BODY_' + this.$getDirectionString(turningDirection)]
                } else {
                    cellShowType = CellShowType['BODY_' + this.$getDirectionString(turningDirection) + '_TURNING_'
                    + this.$getDirectionString(nextTurningDirection)]
                }
                this.$printCell(body[i], cellShowType)
                lastCell = body[i];
            }

        }
    }

    /**
     * 绘制食物
     * @param food
     */
    printFoot(food: Array<IFood>){
        food.forEach(f=>{
            if(f.grow == 1){
                this.$printCell(f, CellShowType.FOOD_1)
            } else if(f.grow == 2){
                this.$printCell(f, CellShowType.FOOD_2)
            } else if(f.grow == 3){
                this.$printCell(f, CellShowType.FOOD_3)
            }
        })
    }
}

export {
    Ground
}
