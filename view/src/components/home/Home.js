import React from 'react';
import { useHistory } from 'react-router-dom';

function Home(props) {

    const [wrongCmd, setWrongCmd] = React.useState(false);
    const inputRef = React.useRef();

    const history = useHistory();

    const submit = React.useMemo(() => e => {

        if (e.type === 'keypress' && e.key !== 'Enter') return;

        let cmd = inputRef.current.value;
        let link = undefined;

        for(let i of props.gameData) 
            if(i.cmd === cmd) {
                link = i.link
                break;
            };

        if(link) history.push(link);
        else setWrongCmd(true);

    }, []);

    return (
        <>
            {props.gameData[0].used ? <h1 className="text-green-400 text-2xl md:text-6xl py-10 text-center italic w-full m-10" >"Hacker's Terminal"</h1> : <h1 className="text-green-400 text-2xl md:text-6xl py-10 text-center w-full m-10" >Type "name" to continue</h1>}
            {wrongCmd && <p className="text-center text-red-700 bg-gray-800 rounded px-2 py-1 m-3">Invalid Command...</p>}
            <input ref={inputRef} onKeyPress={submit} className="focus:outline-none text-center text-gray-900 placeholder-gray-900 md:text-xl bg-transparent placeholder-black focus:placeholder-transparent border-b-2 border-green-400 m-5" type="text" placeholder="Insert command here"/>
            <button onClick={submit} onKeyPress={submit} className="focus:outline-none border-solid border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 border-2 py-2 px-4 flex-wrap rounded m-3" > Confirm </button>
            
        </>
    );
}

export default Home;

