## ANTL4 

- dobrý na vytváření vlastních gramatik a braní již existujících
- standardně se jedná o Maven javu parser, ale existuje npm knihovna upravující možnost
runtimu v Node.js atd. v javascript prostředí

https://www.npmjs.com/package/antlr4 ---- zde

https://github.com/antlr/grammars-v4/tree/master


import { antlr4tsSQL, SQLDialect } from 'antlr4ts-sql';

const antlr4tssql = new antlr4tsSQL(SQLDialect.MYSQL);
const query = 'SELECT * FROM table1';
const parseTree = antlr4tssql.getParseTreeFromSQL(query);
console.log(parseTree);

npm install antlr4ts-sql



npm i antlr4ts


https://www.npmjs.com/package/antlr4ts



!!! npm install antlr4ts --save

+ npm install antlr4ts-cli --save-dev


GENERATE script v package json důležitý!



npm install util !!!!! 


npm install vite-plugin-node-polyfills --save-dev



C# Parser ---- místo parser grammer CSharpParser nechat JEN parser !!!
---- problém: jaké složky a soubory chci a nechci mít u sebe? co z toho gitignore a co ne?


tohle možná? https://www.npmjs.com/package/antlr4-autosuggest
https://www.npmjs.com/package/antlr4-autosuggest-ts




pro require: npm i --save-dev @types/node