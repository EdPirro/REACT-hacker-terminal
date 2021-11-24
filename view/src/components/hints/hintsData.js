import React from "react";
import Fibonacci from "../fibonacci/Fibonacci";
import FibonacciExplain from "../fibonacci/FibonacciExplain";
import Password from "../password/Password";
import Reset from "../reset/Reset";


const data = [
    {
        ref: "name",
        type: "simple",
        msg:  ["This is a sample message"],
        hint:  ["This should be the hint to progress...",
              " next cmd: \"hint_1\", try using \"another cmd\" and you'll",
              " see you can't"]
    },
    {
        ref: "hint-1",
        type: "simple",
        msg:  ["This should probably be a hint"],
        hint:  ["You can now use the command \"another cmd\""]
    },
    {
        ref: "another-cmd",
        type: "simple",
        msg:  ["This is yet another message,pretty boring isn't it?"],
        hint:  ["let's try something different, use the cmd \"fib_\""]
    },
    {
        ref: "fibonacci",
        type: "complex",
        msg:  ["You could actually use this command right after the first one, ",
               "if you like you could use the cmd \"_reset\" and see it for yourself"],
        hint:  ["Now let's see if you can solve this riddle, ",
                "if you're having a hard time use the cmd \"fibHelp\""],
        makeComponent: (hintData, setUsed, gameData, updateData) => <Fibonacci hintData={hintData} gameData={gameData} updateData={updateData} setUsed={setUsed} />
    },
    {
        ref: "fib-help",
        type: "complex",
        msg:  ["This is how fibonacci works:"],
        hint:  ["Calculator:"],
        makeComponent: (hintData, setUsed, gameData, updateData) => <FibonacciExplain hintData={hintData} gameData={gameData} updateData={updateData} setUsed={setUsed} />
    },
    {
        ref: "password",
        type: "complex",
        msg:  ["Here is a PIN input riddle maybe you could make a letter or symbol mean a number and use it as a code to the answer"],
        hint:  ["Try thinking alphabetically"],
        makeComponent: (hintData, setUsed, gameData, updateData) => <Password hintData={hintData} gameData={gameData} updateData={updateData} setUsed={setUsed} />
    },
    {
        ref: "reset",
        type: "complex",
        makeComponent: (hintData, setUsed, gameData, updateData) => <Reset hintData={hintData} gameData={gameData} updateData={updateData} setUsed={setUsed} />

    }
];

export default data;