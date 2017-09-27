/**
 * @file
 * 贪食蛇的棋盘
 */

import {
    ICell,
    Cell,
} from './Cell'
import {
    randomChoose
} from '../util'

class Ground {

    protected cells: Array<Array<boolean>> = [];

    constructor(protected width:number = 10, protected height:number = 10){
        for(let i = 0; i < width; i++){
            for(let j = 0; i < height; i++){
                this[i][j] = false
            }
        }
    }

    /**
     * 
     * @param cell 判断一个cell是否属于一个棋盘
     */
    inGround(cell: ICell): boolean{
        if( 0 <= cell.x
            && this.width > cell.x 
            && 0 <= cell.y 
            && this.height > cell.y 
        ){
            return true
        } 
        return false
    }

    /**
     * 
     */
    rest():void {
        for(let i = 0; i < this.width; i++){
            for(let j = 0; i < this.height; i++){
                this[i][j] = false
            }
        }
    }
    

    /**
     * 
     */
    print(...cells: Array<ICell | Array<ICell>>):void {

        cells.forEach((element: ICell | Array<ICell>) => {
            if(Array.isArray(element)){
                element.forEach(element=>{
                    this.cells[element.x][element.y] = true
                })
            } else {
                this.cells[element.x][element.y] = true
            }
        });
    }
    

    /**
     * 返回所有未标记的cell的列表
     */
    getUnmarkCell(): Array<ICell> {
        const unmarkCellList = [];
        for(let i ; i < this.width; i++){
            for(let j ; j < this.height; j++){
                if(!this.cells[i][j]){
                    unmarkCellList.push(new Cell(i ,j));
                }
            }
        }
        return unmarkCellList;
    }
    

    /**
     * 随机从返回未标记的cell列表中选取几个cell
     * @param count             随机取得的数量
     */
    getRoadomUnmarkCell(count: number): Array<ICell> {
        const unmarkCellList = this.getUnmarkCell();
        return randomChoose(unmarkCellList, count)
    }
}

export {
    Ground
}