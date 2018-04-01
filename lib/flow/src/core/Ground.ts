/**
 * @file
 * 贪食蛇的坐标系
 */

import {
    ICell,
    Cell,
} from './Cell'
import {
    randomChoose
} from '../util'

class Ground {

    constructor(protected width:number = 10, protected height:number = 10){
    }

    /**
     * 判断一个cell是否属于当前坐标系
     * @param cell
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
     * 返回所有未标记的cell的列表
     * @param cells             不可用的坐标
     * @returns {Array}
     */
    getUsableCells(...cells: Array<ICell | Array<ICell>>): Array<ICell> {

        //创建坐标系，用于标记各个坐标是否可用
        const _cells = [];
        for(let y = 0; y < this.height; y++){
            _cells[y] = []
            for(let x = 0; x < this.width; x++){
                _cells[y][x] = false
            }
        }

        //将不可用的坐标标记
        cells.forEach((element: ICell | Array<ICell>) => {
            if(Array.isArray(element)){
                element.forEach(element=>{
                    if(this.inGround(element)){
                        _cells[element.y][element.x] = true
                    }
                })
            } else {
                if(this.inGround(element)){
                    _cells[element.y][element.x] = true
                }
            }
        });

        //将所用可用坐标返回
        const usableCellList = [];
        for(let y = 0; y < this.height; y++){
            for(let x = 0; x < this.width; x++){
                if(!_cells[y][x]){
                    usableCellList.push(new Cell(x ,y));
                }
            }
        }
        return usableCellList;
    }

    /**
     * 随机从返回未标记的cell列表中选取几个cell
     * @param count             随机取得的数量
     */
    getRandomUsableCells(count: number, ...cells: Array<ICell | Array<ICell>>): Array<ICell> {
        const usableCellList = this.getUsableCells(...cells);
        return randomChoose(usableCellList, count)
    }
}

export {
    Ground
}
