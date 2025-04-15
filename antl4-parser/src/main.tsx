import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { parseCode } from './parser/parser';

//import { analyzeWithListener } from './parser/MyGrammarListener';
import analyzeWithVisitor from './parser/MyGrammarVisitor.tsx';

/*
import { CSharpLexer } from './parser/generated/CSharpLexer';
import { CSharpParser } from './parser/generated/CSharpParser';
import { CSharpParserVisitor } from './parser/generated/CSharpParserVisitor';
import { CharStreams, CommonTokenStream } from 'antlr4ts';*/


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


console.log("hi");



const input = "function myFunc() { return 42 ; }"; // Example code

const tree = parseCode(input);
//analyzeWithListener(tree);
console.log("Number of functions:", analyzeWithVisitor(tree));
console.log("hi2");


import * as lexerModule from './parser/generated/CSharpLexer.ts';
import * as parserModule from './parser/generated/CSharpParserParser.ts';

const autosuggest = require('antlr4-autosuggest');
const autosuggester = autosuggest.autosuggester(lexerModule.CSharpLexer, parserModule.CSharpParserParser);


// Suggest completions for the string "ABC"
let suggestions = autosuggester.autosuggest("ABC");

console.log(suggestions);

/*
const input2 = `
public class MyClass {
    public void MyMethod() {
        int x = 10;
        Console.WriteLine(x);
    }
}`;

const inputStream = CharStreams.fromString(input2);
const lexer = new CSharpLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new CSharpParser(tokenStream);

// Parse the code and build the parse tree
const tree2 = parser.compilation_unit(); // Starting rule for parsing C#

// Create a visitor instance to walk the parse tree
const visitor = new CSharpParserVisitor();
const ast = visitor.visit(tree2);

console.log(ast);*/