import { useEffect, useCallback, useState, useMemo } from 'react';

export const useGameStatus = rowsCleared => {
    const [level, setLevel] = useState(0)
    const [rows, setRows] = useState(0)
    const [score, setScore] = useState(0)

    const linePoints = useMemo(() => [40, 100, 300, 1200], []); 

    const calcScore = useCallback(() => {
        if (rowsCleared > 0) {
            setScore(prev => prev + linePoints[rowsCleared - 1] * (level + 1))
            setRows(prev => prev + rowsCleared)
        }
    }, [level, linePoints, rowsCleared]);

    useEffect(() => {
        calcScore()
    }, [calcScore, rowsCleared, score]);

    return [score, setScore, rows, setRows, level, setLevel]
}