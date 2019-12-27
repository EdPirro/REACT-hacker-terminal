import React from 'react';


function Password(props){
    const [complete, setComplete] = React.useState(props.gameData.filter((elem) => elem.link === props.hintsData.ref)[0].used);
    const [wrong, setWrong] = React.useState(false);

    const sOneRef = React.useRef();
    const sTwoRef = React.useRef();
    const sThreeRef = React.useRef();

    const showContent = () => {
        setComplete(false);
    }

    const submit = () => {
        if(sOneRef.current.value === '9' && sTwoRef.current.value === '4' && sThreeRef.current.value === '1'){
            if(!props.hintsData.used){
                props.hintsData.used = true;
                props.gameData.filter((elem) => elem.link === props.hintsData.ref)[0].used = true;
                props.updateData(props.gameData);
            }
            setComplete(true);
        } else {
            setWrong(true);
        }
    }


    return(
        <>
            {!complete ?
                <>
                    <p className="md:text-2xl text-center text-green-400 px-4 py-2 italic">{props.hintsData.msg.join("")}</p>
                    <p className="self-end max-w-xl text-right text-xl text-gray-900 px-4 py-2 mb-5">{props.hintsData.hint.join("")}</p>
                    {wrong && <span className="text-center text-red-700 bg-gray-800 rounded px-2 py-1 m-3">Algo está errado por aqui... Hummm o que será?</span>}
                    <span className="container mt-10 mb-10 flex felx-col justify-around">
                        <span className="felx justify-center" >
                            <p>I</p>
                            <input ref={sOneRef} type="text" className="w-20 focus:outline-none bg-transparent border-b-2 border-green-400 px-1 text-center focus:placeholder-transparent text-grey-900" placeholder="Code" />
                        </span>
                        <span className="felx justify-center" >
                            <p>E</p>
                            <input ref={sTwoRef} type="text" className="w-20 focus:outline-none bg-transparent border-b-2 border-green-400 px-1 text-center focus:placeholder-transparent text-grey-900" placeholder="Code" />
                        </span>
                        <span className="felx justify-center" >
                            <p>A</p>
                            <input ref={sThreeRef} type="text" className="w-20 focus:outline-none bg-transparent border-b-2 border-green-400 px-1 text-center focus:placeholder-transparent text-grey-900" placeholder="Code" />
                        </span>
                    </span>
                    <button onClick={submit} className="focus:outline-none border-solid border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 border-2 py-2 px-4 flex-wrap rounded mb-20" >Confirmar</button>
                </>:
                <>
                    <p className="md:text-2xl text-center text-green-400 px-4 py-2 italic">"That's pretty much what I have... It ain't much, but it's honest work (use "_reset" to start over)"</p>
                    <p className=" max-w-xl text-xl text-gray-900 px-4 py-2 m-10">I know this app could use a lot of tweaks (even though I made it only for learning purposes), please send me all suggestions (github: @EdPirro)</p>
                    <span className="self-end" >
                        <p className="self-end max-w-xl text-right text-xl text-gray-900 px-4 py-2">You've already completed his riddle, do you want to do it again?</p>
                        <button onClick={showContent} className="focus:outline-none border-solid border-gray-900 text-gray-900 hover:bg-green-700 border-2 py-1 px-2 flex-wrap rounded mb-10" >Redo</button>
                    </span>
                </>}
        </>
    )

}

export default Password;