Hacker's Terminal
=================

Setting up the data (Front-end):
--------------------------------

To set up the command you'll have to add a javascript object to [hintsData.js file](Front/src/components/hints/hintsData.js), the format for this "hint" can be:
```javascript
    // This is a simple type hint object
    {
        ref: "name",
        type: "simple", 
        msg:  ["This is a sample message"],
        hint:  ["This should be the hint to progress...", 
        "strings inside hint and msg vector will be joined"]
    },
    // This is a complex type hint object
    {
        ref: "name",
        type: "complex",
        msg:  "can be whatever you want",
        props: "You can also set any property you want since you're going to use it manually",
        makeComponent: (hintData, gameData, updateData) => <Password hintsData={hintsData} gameData={gameData} updateData={updateData} />
    },
```
* ref: The name of command, that is the link that will be used to show this command (i. e. if ref is "name" the link to it would be  localhost:3000/name)
* type: hint's can be of two types "simple" or "complex", the simple will simply print msg and hint properties, the complex will run the makeComponent function.
* msg and hint: are arrays of strings that will be joined together and printed to the user as the hint to progress.
* makeComponent: a function that takes 3 arguments that being hintData (the data of the command that is "ref", "type", etc), gameData (the back end gameData.json as a javascript object), and updateData* (a function that updates he gameData.json file to the object you pass as argument to it).

<sub><sup> *this function should be used to, at very least, update the command property "used" in gameData.json </sup></sup>

Setting up the data (Back-end):
--------------------------------

To set up the command you'll have to add a json object to [gameData.json file](Back/gameData.json)'s array, the format for the json is:
```json
[
    {
        "cmd":"Som3th1ng _ Fancy^",
        "used":false,
        "link":"something-basic",
    },
    {
        "cmd":"Anoth3r th1ng",
        "used":false,
        "link":"some-orther", 
        "require": -1
    }
]
```
- cmd: command that will be entered by the user on the home screen in order to access the hint linked to it.
- used: a boolean saying wether the command was already used or not.
- link: the uri that will be given to the command allower the user to access it (i.e. if link is "name" the url to access it would be "localhost:3000/name").
- require: a number that references relatively the command required to have used as true for the current one to be accessable (i.e. in the exemple given, the command "Anoth3er th1ng" would only be acessable if "Som3th1ng _ Fancy^" has the property used set to true).

Alright Take Me Back
--------------------
Click [here](english.md) to go back to the english documentation file, and [here](https://github.com/EdPirro/REACT-hacker-terminal) to go back to the repository page.
