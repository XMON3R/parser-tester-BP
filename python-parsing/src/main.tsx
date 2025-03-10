/*import React from 'react';
import ReactDOM from 'react-dom/client';
import { PhpParser } from './translation';

//root render
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <h1>Ahoj</h1>
    <PhpParser></PhpParser>
  </React.StrictMode>
);
*/

var parse = require('sql-parse').parse;
var result = parse('SELECT * FROM table');



