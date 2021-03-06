//@ts-nocheck
import { Lexer } from "@candlefw/wind";

export function LLParser(input, table, grammer): number {

	let stack = ["$", grammer[0].name];
	let lex = new Lexer(input);

	let ip = 1;
	while (stack[ip] != "$") {
		let r = stack[ip];

		let { bool, terminal } = compare(lex, r);

		if (bool) {
			lex.next();
			stack.pop();
			ip--;
		} else if (terminal) {
			lex.throw("expecting terminal");
		} else if (!table.get(r).get(getVal(lex))) {
			lex.throw("expecting non-terminal");
		} else {
			let body = table.get(r).get(getVal(lex));

			stack.pop();
			ip--;

			if (body[0] !== "ɛ") {


				for (let i = body.length; i > 0; i--) {
					stack.push(body[i - 1]);
				}

				ip += body.length;
			}
		}
	}
}