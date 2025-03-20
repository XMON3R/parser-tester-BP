import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { MyGrammarLexer } from './generated/MyGrammarLexer';
import { MyGrammarParser } from './generated/MyGrammarParser';

export function parseCode(input: string) {
    const chars = CharStreams.fromString(input);
    const lexer = new MyGrammarLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new MyGrammarParser(tokens);

    return parser.compilationUnit(); // Adjust this to match your entry rule
}