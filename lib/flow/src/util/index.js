// @flow

/**
 * 根据随机数种子，生成随机数队列
 * @param seed
 */
function *_random(seed: number) {
    function makeRandom(_seed: number): number {
        _seed = ( _seed * 9301 + 49297 ) % 233280; //为何使用这三个数?
        return _seed / ( 233280.0 );
    }

    for (; true;) {
        yield seed = makeRandom(seed)
        //当前种子乘以1000，做下一次运算种子
        seed = seed * 1000
    }
}

export const random = function (seed: number) {
    var i = _random(seed);
    return function () {
        return i.next().value
    }
}

 /**
 *
 * 从列表中随机查找若干数据
 * @param {Array<any>} list                 可选择范围
 * @param {number} chooseNum                需要查找的数量
 * @param {number} [seed=Date.now()]        随机数种子
 * @param {(any)=>boolean} fn               filter条件
 * @returns
 */
export const randomChoose = function<T> (list: Array<T>, chooseNum: number, seed: number = Date.now(), fn: (T)=>boolean = () => {
return true}): Array<T>{
    chooseNum = Math.min(chooseNum, list.length)

    var indexArr = [];
    var randomArr = [];
    list.map((item, i) => indexArr.push(i));

    var randomListFn = random(seed);

    var listLength = list.length;
    for (let i = 0; i < listLength && chooseNum > randomArr.length; i++) {
        var index = Math.floor(indexArr.length * randomListFn());
        var resultIndex = indexArr.splice(index, 1)[0];
        if (fn(list[resultIndex]) !== false) {
            randomArr.push(resultIndex)
        }
    }

    return randomArr.map(i => list[i])
}
