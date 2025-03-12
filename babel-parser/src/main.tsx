import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import * as Babel from '@babel/standalone';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
  </StrictMode>,
)

// Sample JavaScript code
const sourceCode = `let x = 1; console.log(x);`;

// Parse code into AST
const ast = Babel.transform(sourceCode, {
  presets: ['env'],
  ast: true, // Get AST
}).ast;

console.log("Parsed AST:", ast);




