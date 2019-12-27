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
        makeComponent: (hintsData, gameData, updateData) => <Fibonacci hintsData={hintsData} gameData={gameData} updateData={updateData} />
    },
    {
        ref: "fib-help",
        type: "complex",
        msg:  ["This is how fibonacci works:"],
        hint:  ["Calculator:"],
        makeComponent: (hintsData, gameData, updateData) => <FibonacciExplain hintsData={hintsData} gameData={gameData} updateData={updateData} />
    },
    {
        ref: "password",
        type: "complex",
        msg:  ["Here is a PIN input riddle maybe you could make a letter or symbol mean a number and use it as a code to the answer"],
        hint:  ["The correct anser is 9 4 1 btw"],
        makeComponent: (hintsData, gameData, updateData) => <Password hintsData={hintsData} gameData={gameData} updateData={updateData} />
    },
    {
        ref: "reset",
        type: "complex",
        makeComponent: (hintsData, gameData, updateData) => <Reset hintsData={hintsData} gameData={gameData} updateData={updateData} />

    }
];

export default data;