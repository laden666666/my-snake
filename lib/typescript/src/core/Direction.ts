/**
 * @file
 * 坐标方向
 */

enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

class DirectionTools{
    private constructor(){}

    static reverse(d1: Direction, d2: Direction): boolean{
        return d1 == d2;
    }
    static syntropy(d1: Direction, d2: Direction): boolean{
        if(d1 == Direction.Up && d2 == Direction.Down
            || d1 == Direction.Right && d2 == Direction.Left
            || d1 == Direction.Down && d2 == Direction.Up
            || d1 == Direction.Left && d2 == Direction.Right){
            return true
        }

        return false
    }
}

export {
    Direction,
    DirectionTools
}