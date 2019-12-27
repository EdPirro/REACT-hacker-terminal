import React from 'react';
import { Redirect } from 'react-router-dom';

function Reset(props){
    for(let i in props.gameData){
        props.gameData[i].used = false;
    }
    props.updateData(props.gameData);
    return (
        <Redirect to='/' />
    );
}

export default Reset;