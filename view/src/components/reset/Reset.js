import React from 'react';
import { Redirect } from 'react-router-dom';

export default function Reset({ gameData, updateData }) {

    React.useLayoutEffect(() => {
        for(let i in gameData){
            gameData[i].used = false;
        }
        updateData(gameData);
    }, [gameData, updateData]);
    
    return (
        <Redirect to='/' />
    );
}