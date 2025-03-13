## ANTL4 

- dobrý na vytváření vlastních gramatik a braní již existujících

https://github.com/antlr/grammars-v4/tree/master


import { antlr4tsSQL, SQLDialect } from 'antlr4ts-sql';

const antlr4tssql = new antlr4tsSQL(SQLDialect.MYSQL);
const query = 'SELECT * FROM table1';
const parseTree = antlr4tssql.getParseTreeFromSQL(query);
console.log(parseTree);

npm install antlr4ts-sql



npm i antlr4ts


https://www.npmjs.com/package/antlr4ts