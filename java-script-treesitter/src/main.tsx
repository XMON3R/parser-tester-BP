import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

//import Parser from 'tree-sitter';
//import JavaScript from 'tree-sitter-javascript';

import { Parser }  from 'web-tree-sitter';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


async function initParser() {
  await Parser.init(); // Initializes WebAssembly
  const parser = new Parser();

  //Parser.init().then(() => { /* the library is ready */ });

  const { Language } = require('web-tree-sitter');
  const JavaScript = await Language.load('/tree-sitter-javascript.wasm');


  parser.setLanguage(JavaScript);

  const sourceCode = 'let x = 1; console.log(x);';
  const tree = parser.parse(sourceCode);

  console.log(tree?.rootNode.toString());
    

  /*
  const Lang = await Parser.Language.load('/tree-sitter-javascript.wasm'); 
  parser.setLanguage(Lang);
  
  const sourceCode = 'let x = 1; console.log(x);';
  const tree = parser.parse(sourceCode);
  
  console.log(tree.rootNode.toString());
  */
}

initParser();

//const jsParser = new Parser();
//jsParser.setLanguage(JavaScript);

/*
const sourceCode = 'let x = 1; console.log(x);';
const tree = jsParser.parse(sourceCode)

console.log(tree.rootNode.toString());*/


console.log("ENDING")
