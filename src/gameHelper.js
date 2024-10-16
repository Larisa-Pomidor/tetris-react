export const GAME_WIDTH = 12
export const GAME_HEIGHT = 20

export const createStage = () => {
    return Array.from(Array(GAME_HEIGHT), () =>
        new Array(GAME_WIDTH).fill([0, 'clear']))
}

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
    for (let y = 0; y < player.tetromino.length; y += 1) {
        for (let x = 0; x < player.tetromino[0].length; x += 1) {

            if (player.tetromino[y][x] !== 0) {
                if (
                    !stage[y + player.pos.y + moveY] ||
                    !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
                    stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
                )
                return true;
            }
        }
    }
    return false;
}