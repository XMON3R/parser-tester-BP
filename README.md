# parser-tester-BP
Parser testing for my bachelor project.

## 0tý test
- jak řešit Node.js only libraries oproti běhu ve Vite prostředí?

## První test:

tree-sitter 
-- prvně základní pro javascript
-- sql od https://github.com/DerekStride/tree-sitter-sql (neoficiání slovník ke knihovně)
-- php 

Bohužel jsem po selhání implementace všech 3 zjistil, že Vite neumí pracovat s .node soubory bez složitějších nastavování configu a nastavování přidávných knihoven. Což je pro implementaci v naší React Vite aplikaci nevyhovující.

seznam, ve kterém jsem hledal: https://github.com/tree-sitter/tree-sitter/wiki/List-of-parsers


Zde je problém popsán: 
https://github.com/vitejs/vite/issues/14289

BACHA NA .NODE FILES VE VITE !!!! 
The error "No loader is configured for .node files" happens because Tree-Sitter parsers include native .node bindings, which Node.js does not automatically know how to load when using ES modules or bundlers like Vite, Webpack, or ESBuild.

dependencies + verze:
https://stackoverflow.com/questions/10972176/find-the-version-of-an-installed-npm-package


npm i --save-dev @types/node 

UMOŽNÍ "require..."         viz https://www.npmjs.com/package/web-tree-sitter 

Jak to tedy vyřešit?
-> web-tree-sitter, umožní práci ve Vite, ne jen v Node.js
(ten však zas složitěji nechce správně načíst .wasm soubory reprezentující jednotlivé jazyky)
-- prozatím však <b> NEFUNKČNÍ </b>

## Druhý test

Babel Parser
-> podobný problém jako u základního treesitteru (Node.js vs Vite)
--- potřeba odděleně exportovat module a dávat babel standalone


## Třetí test

Cspell 
https://github.com/streetsidesoftware/cspell


## Čvrtý test

ANTL4 

- dobrý na vytváření vlastních gramatik a braní již existujících

https://github.com/antlr/grammars-v4/tree/master


## cesta k univezálními formátu

For a universal format, you'd want something that is:

    Expressive – Can represent all necessary constructs of supported languages.
    Extensible – Can be expanded for future language features.
    Standardized – Preferably an existing format that integrates well with tooling.

Potential Candidates:

    UAST (Universal Abstract Syntax Tree) – Used by Babel and Source{d}, supports multiple languages.
    JSON Schema AST – A structured JSON-based AST, easier to work with in web environments.
    ANTLR AST – If you’re using ANTLR, you can work with its generic tree representation.
    S-Expressions – Used in Lisp-based ASTs, compact but less common for modern languages.
    E-Graph (Equality Graphs) – Used in tools like egg, great for transformations.

If you want JSON-based, UAST is a strong contender. If you prefer a structured and normalized AST, something like ANTLR's generic format could work well. Would you prefer a tree format, or something more relational?



Best Approach?

    For JavaScript/TypeScript: Babel or Esprima.
    For Python, Java, C#: Tree-Sitter.
    For SQL: ANTLR4TS-SQL.
    For XML/RDF: xml2js.

Would you like a common interface to handle different languages?







DŮLEŽITÉ! asi i tak nutné udělat pro polyfills, což není zcela ideální...

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'


/*
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
*/

export default defineConfig({
  plugins: [react(), nodePolyfills()],
  optimizeDeps: {
    include: ['fs']
  }
});




----- ASTs v Json formátu?


