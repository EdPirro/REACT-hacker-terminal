import React from 'react';
import { Link } from 'react-router-dom';
import hintsData from './hintsData';

function Hint(props) {

    let valid = false;
    let data = undefined;
    let require = props.gameData[props.cmdId].require;
    if(!require || props.gameData[props.cmdId + require].used){
        valid = true;
        data = hintsData.filter((elem) => elem.ref === props.cmdRef)[0];
        if(!data) throw new Error(`Invalid Hint ${props.cmdRef}`);
        if(!props.gameData[props.cmdId].used && data.type === "simple") {
            props.gameData[props.cmdId].used = true;
            props.updateData(props.gameData);
        } 
    }
    return (
        <>  
            { (() => {
                if(valid){
                    switch(data.type){
                        case 'simple':
                                return (
                                    <>
                                        <p className="md:text-2xl text-center text-green-400 px-4 py-2 m-20 italic">{'"' + data.msg.join("") + '"'}</p>
                                        <p className="self-end max-w-xl text-right text-xl text-gray-900 px-4 py-2 m-10">{data.hint.join("") }</p>
                                    </>
                                );
                        case 'complex':
                            return data.makeComponent(data, props.gameData, props.updateData);
                        default:
                            throw new Error(`Invalid data(hint) type ${data.type}`);
                    }
                } else return(
                    <>
                        <p className="text-center text-2xl max-w-2xl text-red-700 bg-gray-800 rounded px-2 py-1 mt-20">Humm, you should not be here yet... But remember this place, you'll need to be back here later</p>
                        <p className="max-w-xl text-xl text-gray-900 px-4 py-2 m-10">But for now keep on playing</p>
                    </>
                );
                })()
            }
            <Link to='/' className="focus:outline-none flex-wrap m-3 border-solid border-2 px-4 py-2 rounded border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900" >Back Home</Link>
        </>
    );
}

export default Hint;