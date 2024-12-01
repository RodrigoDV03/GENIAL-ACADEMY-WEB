// src/ScoreContext.js
import  { createContext, useContext, useReducer } from 'react';

// Crear un contexto
const ScoreContext = createContext();

// Estado inicial
const initialState = {
    score: 0,
    coins: 0
};

// Reducer para manejar las acciones
const scoreReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_POINTS':
            return {
                ...state,
                score: state.score + action.payload.points,
                coins: state.coins + action.payload.coins
            };
        default:
            return state;
    }
};

// Proveedor del contexto
export const ScoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(scoreReducer, initialState);

    return (
        <ScoreContext.Provider value={{ state, dispatch }}>
            {children}
        </ScoreContext.Provider>
    );
};

// Hook personalizado para usar el contexto
export const useScore = () => {
    return useContext(ScoreContext);
};
