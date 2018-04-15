// @flow
export interface IGame{
    /**
     * 计算下一帧
     */
    frame(): Array<Array<string>>;

    /**
     * 转向
     * @param willTurnDirection     方向
     */
    turn(willTurnDirection: 1 | 2 | 3 | 4): void;

    /**
     * 计算游戏是否结束
     */
    check(): {
        result: boolean
    };
}
