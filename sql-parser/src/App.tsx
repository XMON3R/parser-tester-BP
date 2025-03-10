import Parser from "tree-sitter";
import SQL from "@derekstride/tree-sitter-sql";

const parser = new Parser();
parser.setLanguage(SQL as unknown as Parser.Language);

const sqlQuery = "SELECT name FROM users WHERE age > 18;";
const tree = parser.parse(sqlQuery);

console.log(tree.rootNode.toString());