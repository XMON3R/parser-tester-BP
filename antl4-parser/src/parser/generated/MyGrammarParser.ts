// Generated from src/parser/grammars/MyGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { MyGrammarListener } from "./MyGrammarListener";
import { MyGrammarVisitor } from "./MyGrammarVisitor";


export class MyGrammarParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly IDENTIFIER = 9;
	public static readonly NUMBER = 10;
	public static readonly STRING = 11;
	public static readonly WS = 12;
	public static readonly COMMENT = 13;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_program = 1;
	public static readonly RULE_statement = 2;
	public static readonly RULE_functionDeclaration = 3;
	public static readonly RULE_parameterList = 4;
	public static readonly RULE_block = 5;
	public static readonly RULE_expressionStatement = 6;
	public static readonly RULE_expression = 7;
	public static readonly RULE_argumentList = 8;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "program", "statement", "functionDeclaration", "parameterList", 
		"block", "expressionStatement", "expression", "argumentList",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'function'", "'('", "')'", "','", "'{'", "'}'", "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "IDENTIFIER", "NUMBER", "STRING", "WS", "COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MyGrammarParser._LITERAL_NAMES, MyGrammarParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MyGrammarParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "MyGrammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return MyGrammarParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return MyGrammarParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(MyGrammarParser._ATN, this);
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, MyGrammarParser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 19;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 18;
				this.statement();
				}
				}
				this.state = 21;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MyGrammarParser.T__0) | (1 << MyGrammarParser.T__1) | (1 << MyGrammarParser.IDENTIFIER) | (1 << MyGrammarParser.NUMBER) | (1 << MyGrammarParser.STRING))) !== 0));
			this.state = 23;
			this.match(MyGrammarParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, MyGrammarParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MyGrammarParser.T__0) | (1 << MyGrammarParser.T__1) | (1 << MyGrammarParser.IDENTIFIER) | (1 << MyGrammarParser.NUMBER) | (1 << MyGrammarParser.STRING))) !== 0)) {
				{
				{
				this.state = 25;
				this.statement();
				}
				}
				this.state = 30;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 31;
			this.match(MyGrammarParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, MyGrammarParser.RULE_statement);
		try {
			this.state = 36;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MyGrammarParser.T__1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 33;
				this.functionDeclaration();
				}
				break;
			case MyGrammarParser.IDENTIFIER:
			case MyGrammarParser.NUMBER:
			case MyGrammarParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 34;
				this.expressionStatement();
				}
				break;
			case MyGrammarParser.T__0:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 35;
				this.match(MyGrammarParser.T__0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, MyGrammarParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			this.match(MyGrammarParser.T__1);
			this.state = 39;
			this.match(MyGrammarParser.IDENTIFIER);
			this.state = 40;
			this.match(MyGrammarParser.T__2);
			this.state = 42;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MyGrammarParser.IDENTIFIER) {
				{
				this.state = 41;
				this.parameterList();
				}
			}

			this.state = 44;
			this.match(MyGrammarParser.T__3);
			this.state = 45;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, MyGrammarParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
			this.match(MyGrammarParser.IDENTIFIER);
			this.state = 52;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MyGrammarParser.T__4) {
				{
				{
				this.state = 48;
				this.match(MyGrammarParser.T__4);
				this.state = 49;
				this.match(MyGrammarParser.IDENTIFIER);
				}
				}
				this.state = 54;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, MyGrammarParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 55;
			this.match(MyGrammarParser.T__5);
			this.state = 59;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MyGrammarParser.T__0) | (1 << MyGrammarParser.T__1) | (1 << MyGrammarParser.IDENTIFIER) | (1 << MyGrammarParser.NUMBER) | (1 << MyGrammarParser.STRING))) !== 0)) {
				{
				{
				this.state = 56;
				this.statement();
				}
				}
				this.state = 61;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 62;
			this.match(MyGrammarParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, MyGrammarParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 64;
			this.expression();
			this.state = 65;
			this.match(MyGrammarParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, MyGrammarParser.RULE_expression);
		let _la: number;
		try {
			this.state = 79;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 67;
				this.match(MyGrammarParser.IDENTIFIER);
				this.state = 68;
				this.match(MyGrammarParser.T__7);
				this.state = 69;
				this.expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 70;
				this.match(MyGrammarParser.IDENTIFIER);
				this.state = 71;
				this.match(MyGrammarParser.T__2);
				this.state = 73;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MyGrammarParser.IDENTIFIER) | (1 << MyGrammarParser.NUMBER) | (1 << MyGrammarParser.STRING))) !== 0)) {
					{
					this.state = 72;
					this.argumentList();
					}
				}

				this.state = 75;
				this.match(MyGrammarParser.T__3);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 76;
				this.match(MyGrammarParser.NUMBER);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 77;
				this.match(MyGrammarParser.STRING);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 78;
				this.match(MyGrammarParser.IDENTIFIER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumentList(): ArgumentListContext {
		let _localctx: ArgumentListContext = new ArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, MyGrammarParser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 81;
			this.expression();
			this.state = 86;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MyGrammarParser.T__4) {
				{
				{
				this.state = 82;
				this.match(MyGrammarParser.T__4);
				this.state = 83;
				this.expression();
				}
				}
				this.state = 88;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x0F\\\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x06\x02\x16\n\x02\r\x02\x0E" +
		"\x02\x17\x03\x02\x03\x02\x03\x03\x07\x03\x1D\n\x03\f\x03\x0E\x03 \v\x03" +
		"\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x05\x04\'\n\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x05\x05-\n\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06" +
		"\x03\x06\x07\x065\n\x06\f\x06\x0E\x068\v\x06\x03\x07\x03\x07\x07\x07<" +
		"\n\x07\f\x07\x0E\x07?\v\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x05\tL\n\t\x03\t\x03\t\x03\t\x03\t\x05\tR\n" +
		"\t\x03\n\x03\n\x03\n\x07\nW\n\n\f\n\x0E\nZ\v\n\x03\n\x02\x02\x02\v\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x02\x02" +
		"\x02_\x02\x15\x03\x02\x02\x02\x04\x1E\x03\x02\x02\x02\x06&\x03\x02\x02" +
		"\x02\b(\x03\x02\x02\x02\n1\x03\x02\x02\x02\f9\x03\x02\x02\x02\x0EB\x03" +
		"\x02\x02\x02\x10Q\x03\x02\x02\x02\x12S\x03\x02\x02\x02\x14\x16\x05\x06" +
		"\x04\x02\x15\x14\x03\x02\x02\x02\x16\x17\x03\x02\x02\x02\x17\x15\x03\x02" +
		"\x02\x02\x17\x18\x03\x02\x02\x02\x18\x19\x03\x02\x02\x02\x19\x1A\x07\x02" +
		"\x02\x03\x1A\x03\x03\x02\x02\x02\x1B\x1D\x05\x06\x04\x02\x1C\x1B\x03\x02" +
		"\x02\x02\x1D \x03\x02\x02\x02\x1E\x1C\x03\x02\x02\x02\x1E\x1F\x03\x02" +
		"\x02\x02\x1F!\x03\x02\x02\x02 \x1E\x03\x02\x02\x02!\"\x07\x02\x02\x03" +
		"\"\x05\x03\x02\x02\x02#\'\x05\b\x05\x02$\'\x05\x0E\b\x02%\'\x07\x03\x02" +
		"\x02&#\x03\x02\x02\x02&$\x03\x02\x02\x02&%\x03\x02\x02\x02\'\x07\x03\x02" +
		"\x02\x02()\x07\x04\x02\x02)*\x07\v\x02\x02*,\x07\x05\x02\x02+-\x05\n\x06" +
		"\x02,+\x03\x02\x02\x02,-\x03\x02\x02\x02-.\x03\x02\x02\x02./\x07\x06\x02" +
		"\x02/0\x05\f\x07\x020\t\x03\x02\x02\x0216\x07\v\x02\x0223\x07\x07\x02" +
		"\x0235\x07\v\x02\x0242\x03\x02\x02\x0258\x03\x02\x02\x0264\x03\x02\x02" +
		"\x0267\x03\x02\x02\x027\v\x03\x02\x02\x0286\x03\x02\x02\x029=\x07\b\x02" +
		"\x02:<\x05\x06\x04\x02;:\x03\x02\x02\x02<?\x03\x02\x02\x02=;\x03\x02\x02" +
		"\x02=>\x03\x02\x02\x02>@\x03\x02\x02\x02?=\x03\x02\x02\x02@A\x07\t\x02" +
		"\x02A\r\x03\x02\x02\x02BC\x05\x10\t\x02CD\x07\x03\x02\x02D\x0F\x03\x02" +
		"\x02\x02EF\x07\v\x02\x02FG\x07\n\x02\x02GR\x05\x10\t\x02HI\x07\v\x02\x02" +
		"IK\x07\x05\x02\x02JL\x05\x12\n\x02KJ\x03\x02\x02\x02KL\x03\x02\x02\x02" +
		"LM\x03\x02\x02\x02MR\x07\x06\x02\x02NR\x07\f\x02\x02OR\x07\r\x02\x02P" +
		"R\x07\v\x02\x02QE\x03\x02\x02\x02QH\x03\x02\x02\x02QN\x03\x02\x02\x02" +
		"QO\x03\x02\x02\x02QP\x03\x02\x02\x02R\x11\x03\x02\x02\x02SX\x05\x10\t" +
		"\x02TU\x07\x07\x02\x02UW\x05\x10\t\x02VT\x03\x02\x02\x02WZ\x03\x02\x02" +
		"\x02XV\x03\x02\x02\x02XY\x03\x02\x02\x02Y\x13\x03\x02\x02\x02ZX\x03\x02" +
		"\x02\x02\v\x17\x1E&,6=KQX";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MyGrammarParser.__ATN) {
			MyGrammarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MyGrammarParser._serializedATN));
		}

		return MyGrammarParser.__ATN;
	}

}

export class CompilationUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(MyGrammarParser.EOF, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_compilationUnit; }
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterCompilationUnit) {
			listener.enterCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitCompilationUnit) {
			listener.exitCompilationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(MyGrammarParser.EOF, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_program; }
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_statement; }
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(MyGrammarParser.IDENTIFIER, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_functionDeclaration; }
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterFunctionDeclaration) {
			listener.enterFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitFunctionDeclaration) {
			listener.exitFunctionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitFunctionDeclaration) {
			return visitor.visitFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MyGrammarParser.IDENTIFIER);
		} else {
			return this.getToken(MyGrammarParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_parameterList; }
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_block; }
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(MyGrammarParser.IDENTIFIER, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(MyGrammarParser.NUMBER, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(MyGrammarParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_expression; }
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_argumentList; }
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterArgumentList) {
			listener.enterArgumentList(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitArgumentList) {
			listener.exitArgumentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitArgumentList) {
			return visitor.visitArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


