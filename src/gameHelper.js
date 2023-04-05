export const GAME_WIDTH = 12
export const GAME_HEIGHT = 20

export const createStage = () => {
    return Array.from(Array(GAME_HEIGHT), () =>
        new Array(GAME_WIDTH).fill([0, 'clear']))
}