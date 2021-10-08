Hacker's Terminal
=================

Configurando o Front-end:
-------------------------

Para configirar o comando você precisa adicionar um objeto javascript para o [arquivo hintsData.js](Front/src/components/hints/hintsData.js), o formato de uma dica deve ser:
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
        makeComponent: (hintData, gameData, updateData) => <Component hintsData={hintsData} gameData={gameData} updateData={updateData} />
    },
```

- ref: O nome do comando, esse é o link que será usado para mostrar esse comando (ex: se ref for "name" o link seria  localhost:3000/name).
- type: dicas podem ser de dois tipos: "simple" ou "complex", o tipo simples vai simplesmente mostar as propriedades "msg" e "hint", o tipo complexo irá rodar a função makeComponent e renderizar o componente retornado por ele.
- msg e hint: são arrays de strins que serão juntados e exibidos para o usuário como a dica para progredir no jogo.
- msg and hint: are arrays of strings that will be joined together and printed to the user as the hint to progress.
- makeComponent: é uma funçã que recebe 3 argumentos, estes sendo:
  -  hintData: os dados do commando, ou seja, "ref", "type", etc.
  -  setUsed: Como todo comando tem um a propriedade "used" no arquivo gameData.json, essa função foi criada para permitir que componentes customizados consigam facilmente notificar seu uso, ou seja, settar sua propriedade "used" como true.
  -  gameData*: um obejeto javascript das informações contidas em gameData.json.
  -  updateData*: uma função que atualiza o arquivo gameData.json para o objeto que assar como argumento para essa função e deve retornar um React Component que será renderizado.

<sub><sup> *esse parametro é passado para aumentar a liberdade na manipulação dos dados em gameData.json, permintindo-o manuseá-lo como desejar.</sup></sup>

Configurando o Back-end:
------------------------

Para configuar o comando você deve adicionar um objeto json para o array do [arquivo gameData.json](Back/gameData.json), o formato do json é:
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
- cmd: comando que será entrado pelo usuário na tela inicial a fim de acessar a dica ligada a ele.
- used: um booleando dizendo se o comando ja foi usado ou não.
- link: o uri que será atribuido ao comando, permitindo que o usuário o acesse (ex. se o link for "name" o url o url para acessá-lo será "localhost:3000/name").
- require: um numero que referencia relativamente o comando cujo acesso é requerido a fim de acessar o atual (ex. no exemplo dado, o camando "Anoth3er th1ng" so seria acessível caso "Som3th1ng _ Fancy^" tivesse a propriedade used setado como true).

Certo agora me leve de volta
----------------------------
Clique [aqui](portugues.md) para voltar para o arquivo de documentação em português, e [aqui](https://github.com/EdPirro/REACT-hacker-terminal) para voltar à pagina do repositório.