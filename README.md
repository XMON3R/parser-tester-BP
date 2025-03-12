# parser-tester-BP
Parser testing for my bachelor project.

## 0tý test

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