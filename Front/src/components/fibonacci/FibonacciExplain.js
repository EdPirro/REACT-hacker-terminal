import React from 'react';

function FibonacciExplain(props) {

    const explainUsed = () => {
        if(!props.hintsData.used){
            props.hintsData.used = true;
            props.gameData.filter((elem) => elem.link === props.hintsData.ref)[0].used = true;
            props.updateData(props.gameData);
        }
    }

    explainUsed();

    const answerRef = React.useRef();
    const inputRef = React.useRef();

    const handleChange = () => {
        let res = Number(inputRef.current.value);
        let a = 1;
        let b = 1;
        if(!isNaN(res) && inputRef.current.value !== ""){
            for(let i = 2; i < res; i++){
                [a, b] = [b, a + b];
            }
        } else  {
            b = "Answer";
        }
        answerRef.current.innerHTML = b;
    }

    return (
        <>
            <span className="text-green-400 max-w-5xl md:text-2xl m-20 italic">
                "In mathematics, the Fibonacci numbers, commonly denoted Fn form a sequence, called the Fibonacci sequence, 
                such that each number is the sum of the two preceding ones<br/>
                The recursive formula for that sequence would be: Fn(n) = Fn(n-1) + Fn(n-2)."<br/>
            </span>
            <p className="md:text-2xl text-gray-900 mb-10">But enough nerdiness, here you have a fibonacci term calculator:</p>
            <span className="container mx-auto text-xl text-gray-900 flex justify-center mb-10">
                <p>The </p>
                <input ref={inputRef} onChange={handleChange} type="text" className="focus:placeholder-transparent border-b-2 text-center flex-wrap w-10 bg-transparent border-green-400" placeholder="n"></input>
                <p>-th term of fibonacci sequence is: </p>
                <p ref={answerRef} className="border-b-2 border-green-400 px-5" >Answer</p>
            </span>


        </>
    );
}

export default FibonacciExplain;