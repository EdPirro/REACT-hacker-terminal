import React from 'react';

function Fibonacci(props) {
    const [complete, setComplete] = React.useState(props.gameData.filter((elem) => elem.link === props.hintsData.ref)[0].used);
    const [oneWrong, setOneWrong] = React.useState(false);
    const [twoWrong, setTwoWrong] = React.useState(false);

    const oneRef = React.useRef();
    const twoRef = React.useRef();
    

    const showQuestion = () => {
        setComplete(false);
    }

    const submit = () => {
        let correct = true
        if(oneRef.current.value !== '34') {
            correct = false;
            setOneWrong(true);
        } else setOneWrong(false);
        if(twoRef.current.value !== '55') {
            correct = false;
            setTwoWrong(true);
        } else setTwoWrong(false);
        if(correct) {
            if(!props.hintsData.used) {
                props.hintsData.used = true;
                props.gameData.filter((elem) => elem.link === props.hintsData.ref)[0].used = true;
                props.updateData(props.gameData);
            }
            setComplete(true);
        }
    }
    return (
        <>
            <p className="md:text-3xl text-center text-green-400 px-4 py-2 italic">{'"' + props.hintsData.msg.join("") + '"'}</p>
            {!complete ? 
                <>
                    <p className="md:text-2xl text-gray-900 px-4 py-2 mt-3 mb-10">{props.hintsData.hint[0]}</p>
                    {oneWrong && <span className="text-center text-red-700 bg-gray-800 rounded px-2 py-1 m-3">Something seems off here... you should take a look</span>}
                    <p className="md:text-xl text-green-400 mb-2">What is the next number in sequence?:</p>
                    <span className="flex justify-center md:text-xl mb-2 text-gray-900">
                        <p>1, 1, 2, 3, 5, 8, 13, 21, </p>
                        <input ref={oneRef} type="text" className="w-8 bg-transparent border-b-2 border-green-400 px-1 text-gray-900 text-center focus:placeholder-transparent" placeholder="n" />
                    </span>
                    {twoWrong && <span className="text-center text-red-700 bg-gray-800 rounded px-2 py-1 m-3">Something seems off here... you should take a look</span>}
                    <p className="md:text-xl text-green-400 mb-2">What is the 10th number of the above sequence?:</p>
                    <span className="flex justify-center md:text-xl mb-5 text-gray-900">
                        <input ref={twoRef} type="text" className="w-24 bg-transparent text-grey-900 border-b-2 border-green-400 px-1 text-center focus:placeholder-transparent" placeholder="Resposta" />
                    </span>
                    <button onClick={submit} className="focus:outline-none border-solid border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 border-2 py-2 px-4 flex-wrap rounded mb-10" >Confirm</button>
                    <p className="self-end max-w-xl text-right text-xl text-gray-900 px-4 py-2 mb-10">{props.hintsData.hint[1]}</p>
                </> :
                <>
                    <p className="md:text-2xl text-gray-900 px-4 py-2 mt-3 mb-10">Alright now use the command "password"</p>
                    <span className="self-end" >
                        <p className="self-end max-w-xl text-right text-xl text-gray-900 px-4 py-2">You've already completed his riddle, do you want to do it again?</p>
                        <button onClick={showQuestion} className="focus:outline-none border-solid border-gray-900 text-gray-900 hover:bg-green-700 border-2 py-1 px-2 flex-wrap rounded mb-10" >Redo</button>
                    </span>
                </>}
        </>
    );
}

export default Fibonacci;