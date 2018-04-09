/**
 * @file
 * 坐标
 */
import {
    Cell,
    ICell
} from './Cell'

export interface IFood extends ICell{
    readonly grow: number;
}

export class Food extends Cell implements IFood {

    protected $grow : number
    get grow(): number{
        return this.$grow
    }
   
    constructor(x : number, y : number, grow: number){
        super(x, y)
        this.$grow = grow
    }
    
    clone(): Cell{
        return new Food(this.x, this.y, this.grow)
    }
}