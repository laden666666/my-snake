// @flow

/**
 * @file
 * 坐标
 */
import {
    Cell,
} from './Cell'


class Food extends Cell {

    $grow : number
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

export {
    Food,
}