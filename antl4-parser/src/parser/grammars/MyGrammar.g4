grammar MyGrammar;

compilationUnit: statement+ EOF;

program: statement* EOF;

statement: functionDeclaration | expressionStatement | ';';

functionDeclaration: 'function' IDENTIFIER '(' parameterList? ')' block;

parameterList: IDENTIFIER (',' IDENTIFIER)*;

block: '{' statement* '}';

expressionStatement: expression ';';

expression: IDENTIFIER '=' expression
          | IDENTIFIER '(' argumentList? ')'
          | NUMBER
          | STRING
          | IDENTIFIER;

argumentList: expression (',' expression)*;

IDENTIFIER: [a-zA-Z_][a-zA-Z_0-9]*;
NUMBER: [0-9]+;
STRING: '"' ~["]* '"';

WS: [ \t\r\n]+ -> skip;
COMMENT: '//' ~[\r\n]* -> skip;
