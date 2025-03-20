// Generated from src/parser/grammars/MyGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class MyGrammarLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "IDENTIFIER", 
		"NUMBER", "STRING", "WS", "COMMENT",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'function'", "'('", "')'", "','", "'{'", "'}'", "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "IDENTIFIER", "NUMBER", "STRING", "WS", "COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MyGrammarLexer._LITERAL_NAMES, MyGrammarLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MyGrammarLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(MyGrammarLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "MyGrammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return MyGrammarLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return MyGrammarLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return MyGrammarLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return MyGrammarLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x0F[\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06" +
		"\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x07\n7\n" +
		"\n\f\n\x0E\n:\v\n\x03\v\x06\v=\n\v\r\v\x0E\v>\x03\f\x03\f\x07\fC\n\f\f" +
		"\f\x0E\fF\v\f\x03\f\x03\f\x03\r\x06\rK\n\r\r\r\x0E\rL\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0EU\n\x0E\f\x0E\x0E\x0EX\v\x0E\x03\x0E" +
		"\x03\x0E\x02\x02\x02\x0F\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06" +
		"\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19" +
		"\x02\x0E\x1B\x02\x0F\x03\x02\b\x05\x02C\\aac|\x06\x022;C\\aac|\x03\x02" +
		"2;\x03\x02$$\x05\x02\v\f\x0F\x0F\"\"\x04\x02\f\f\x0F\x0F\x02_\x02\x03" +
		"\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t" +
		"\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03" +
		"\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03" +
		"\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03" +
		"\x02\x02\x02\x03\x1D\x03\x02\x02\x02\x05\x1F\x03\x02\x02\x02\x07(\x03" +
		"\x02\x02\x02\t*\x03\x02\x02\x02\v,\x03\x02\x02\x02\r.\x03\x02\x02\x02" +
		"\x0F0\x03\x02\x02\x02\x112\x03\x02\x02\x02\x134\x03\x02\x02\x02\x15<\x03" +
		"\x02\x02\x02\x17@\x03\x02\x02\x02\x19J\x03\x02\x02\x02\x1BP\x03\x02\x02" +
		"\x02\x1D\x1E\x07=\x02\x02\x1E\x04\x03\x02\x02\x02\x1F \x07h\x02\x02 !" +
		"\x07w\x02\x02!\"\x07p\x02\x02\"#\x07e\x02\x02#$\x07v\x02\x02$%\x07k\x02" +
		"\x02%&\x07q\x02\x02&\'\x07p\x02\x02\'\x06\x03\x02\x02\x02()\x07*\x02\x02" +
		")\b\x03\x02\x02\x02*+\x07+\x02\x02+\n\x03\x02\x02\x02,-\x07.\x02\x02-" +
		"\f\x03\x02\x02\x02./\x07}\x02\x02/\x0E\x03\x02\x02\x0201\x07\x7F\x02\x02" +
		"1\x10\x03\x02\x02\x0223\x07?\x02\x023\x12\x03\x02\x02\x0248\t\x02\x02" +
		"\x0257\t\x03\x02\x0265\x03\x02\x02\x027:\x03\x02\x02\x0286\x03\x02\x02" +
		"\x0289\x03\x02\x02\x029\x14\x03\x02\x02\x02:8\x03\x02\x02\x02;=\t\x04" +
		"\x02\x02<;\x03\x02\x02\x02=>\x03\x02\x02\x02><\x03\x02\x02\x02>?\x03\x02" +
		"\x02\x02?\x16\x03\x02\x02\x02@D\x07$\x02\x02AC\n\x05\x02\x02BA\x03\x02" +
		"\x02\x02CF\x03\x02\x02\x02DB\x03\x02\x02\x02DE\x03\x02\x02\x02EG\x03\x02" +
		"\x02\x02FD\x03\x02\x02\x02GH\x07$\x02\x02H\x18\x03\x02\x02\x02IK\t\x06" +
		"\x02\x02JI\x03\x02\x02\x02KL\x03\x02\x02\x02LJ\x03\x02\x02\x02LM\x03\x02" +
		"\x02\x02MN\x03\x02\x02\x02NO\b\r\x02\x02O\x1A\x03\x02\x02\x02PQ\x071\x02" +
		"\x02QR\x071\x02\x02RV\x03\x02\x02\x02SU\n\x07\x02\x02TS\x03\x02\x02\x02" +
		"UX\x03\x02\x02\x02VT\x03\x02\x02\x02VW\x03\x02\x02\x02WY\x03\x02\x02\x02" +
		"XV\x03\x02\x02\x02YZ\b\x0E\x02\x02Z\x1C\x03\x02\x02\x02\b\x028>DLV\x03" +
		"\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MyGrammarLexer.__ATN) {
			MyGrammarLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MyGrammarLexer._serializedATN));
		}

		return MyGrammarLexer.__ATN;
	}

}

