import { createStage, checkCollision } from '../gameHelper';
import { TETROMINOS } from '../tetrominos'

describe('createStage', () => {
    test('creates a stage with the correct dimensions filled with [0, "clear"]', () => {
        const GAME_HEIGHT = 20; 
        const GAME_WIDTH = 12;  
        const expectedStage = Array.from(Array(GAME_HEIGHT), () =>
            new Array(GAME_WIDTH).fill([0, 'clear'])
        );

        const stage = createStage();

        expect(stage).toEqual(expectedStage);
        expect(stage.length).toBe(GAME_HEIGHT);
        expect(stage[0].length).toBe(GAME_WIDTH);
    });
});

describe('checkCollision', () => {
    let stage;
    const player = {
        pos: { x: 0, y: 0 },
        tetromino: TETROMINOS.I.shape,
    };

    beforeEach(() => {
        stage = createStage(); 
    });

    test('returns false when no collision occurs', () => {
        const move = { x: 0, y: 0 }; 
        const collision = checkCollision(player, stage, move);
        expect(collision).toBe(false);
    });

    test('returns true when a collision occurs with the stage', () => {
        stage[0][1] = [1, 'merged']; 

        const move = { x: 0, y: 0 }; 
        const collision = checkCollision(player, stage, move);
        expect(collision).toBe(true);
    });
});