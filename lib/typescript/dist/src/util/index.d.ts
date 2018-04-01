export declare const random: (seed: number) => () => number;
/**
*
* 从列表中随机查找若干数据
* @param {Array<any>} list                 可选择范围
* @param {number} chooseNum                需要查找的数量
* @param {number} [seed=Date.now()]        随机数种子
* @param {(any)=>boolean} fn               filter条件
* @returns
*/
export declare const randomChoose: <T>(list: T[], chooseNum: number, seed?: number, fn?: (T: any) => boolean) => T[];
