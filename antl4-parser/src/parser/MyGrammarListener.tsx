/*import { MyGrammarListener } from './generated/MyGrammarListener';
import { FunctionDeclarationContext } from './generated/MyGrammarParser';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';

class EnterFunctionListener implements MyGrammarListener {
    enterFunctionDeclaration(ctx: FunctionDeclarationContext) {
        console.log(`Function starts at line ${ctx._start.line}`);
    }
}

export function analyzeWithListener(tree: any) {
    const listener = new EnterFunctionListener();
    ParseTreeWalker.DEFAULT.walk(listener, tree);
}
*/