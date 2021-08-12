import utilities from "./utilities";
import { createParser } from "./create-parser";

export const defaultParser = createParser({
  utilities,
});

export default defaultParser;

const test = (input: string) => console.log(input, defaultParser.parse(input));

test("unknown");

test("hidden");

test("w-10");

test("w-[100px]");

console.log(defaultParser.cache);
