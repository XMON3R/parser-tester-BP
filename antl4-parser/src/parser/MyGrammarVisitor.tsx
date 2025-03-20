import { MyGrammarVisitor } from './generated/MyGrammarVisitor';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { FunctionDeclarationContext } from './generated/MyGrammarParser';

class CountFunctionsVisitor extends AbstractParseTreeVisitor<number> implements MyGrammarVisitor<number> {
    defaultResult() {
        return 0;
    }

    aggregateResult(aggregate: number, nextResult: number) {
        return aggregate + nextResult;
    }

    visitFunctionDeclaration(ctx: FunctionDeclarationContext): number {
        return 1 + super.visitChildren(ctx);
    }
}

export default function analyzeWithVisitor(tree: any) {
    const visitor = new CountFunctionsVisitor();
    return visitor.visit(tree);
}
