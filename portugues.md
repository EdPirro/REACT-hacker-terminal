Hacker's Terminal
=================

Hacker's Terminal é um simples App React usado durante um jogo de "escape room" que fiz. Ele simplemente recebe frases como comandos e faz differentes coisas dependendo qual comando foi entrado.

Esse projeto é dividido em Front e Back end. O front-end é onde quase tudo acontece enquanto o back-end é usado principalmente para impedir um comando de ser usado antes do que deveria e para "salvar" o progresso [nesse](Back/gameData.json) arquivo .json

Configurando
------------

Esse projeto é apenas uma base, para usá-lo por completo, será necessário configurar os comandos e seus comportamentos.

Para configurar você precisa mudar os ddos [aqui](Front/src/components/hints/hintsData.js) e adicioná-lo [aqui](Back/gameData.json) para conseguir usá-lo.

Para um melhor e mais compreensivo guia para configuraçãp clique [aqui](configuracao.md)

Dependências
------------

Para rodar esse projeto voce precisa ter node.js instalado, clique [aqui](https://nodejs.org/en/download/package-manager/) para o guia official de instalação do node.js.

Rodando
-------

Como a maioria dos aplicativos web, Hacker's Terminal é composto de Front e Back end, para rodá-lo corretamente você precisará de ambos.

Para rodá-los voce simplesmente precisa:
1. Abrir a pasta do [Back-end](Back) ou a do [Front-end](Front).
2. Num terminal* use:
	```shell
	> npm install
	```
3. E então:
	```shell
	> npm start
	```

Apos rodar ambos o Back e o Front end você pode accessar:

> http://localhost:3000/

Em qualquer navegador na mesma maqina onde o projeto esta rodando (ou mudar localhost para seu IP para acessá-lo por qualquer dispositivo na mesma rede).

<sub><sup> *Voce precisara de ambos o Front e Back end rodando ao mesmo tempo.</sup></sub>

Suporte
-------

Se estiver tendo qualquer problema, por favor avise-me.
<br/>
Contate-me em edpirro.ep@gmail.com.

Licença
-------

Esse projeto é licenciado pela [licença MIT](LICENSE).

Repositório
----------

[Voltar para a página do repositório.](https://github.com/EdPirro/REACT-hacker-terminal)