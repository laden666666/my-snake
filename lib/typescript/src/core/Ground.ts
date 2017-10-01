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
        for(let y = 0; y < height; y++){
            for(let x = 0; x < width; x++){
                if(!this.cells[y]){
                    this.cells[y] = []
                }
                this.cells[y][x] = false
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
        for(let y = 0; y < this.height; y++){
            for(let x = 0; x < this.width; x++){
                this.cells[y][x] = false
            }
        }
    }


    /**
     *
     */
    print(...cells: Array<ICell | Array<ICell>>): Array<Array<boolean>> {

        cells.forEach((element: ICell | Array<ICell>) => {
            if(Array.isArray(element)){
                element.forEach(element=>{
                    if(this.inGround(element)){
                        this.cells[element.y][element.x] = true
                    }
                })
            } else {
                if(this.inGround(element)){
                    this.cells[element.y][element.x] = true
                }
            }
        });

        const _cells = [];
        for(let y = 0; y < this.height; y++){
            _cells[y] = [...this.cells[y]]
        }

        return _cells;
    }


    /**
     * 返回所有未标记的cell的列表
     */
    getUnmarkCell(): Array<ICell> {
        const unmarkCellList = [];
        for(let y = 0; y < this.height; y++){
            for(let x = 0; x < this.width; x++){
                if(!this.cells[y][x]){
                    unmarkCellList.push(new Cell(x ,y));
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
