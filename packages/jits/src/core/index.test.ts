import { createParser } from "./index";
import utilities from "./utilities";

const parser = createParser({ utilities, onUnknown: "ignore" });

test("core", () => {
  const check = (input: string) =>
    expect(() => parser.parse(input)).not.toThrow();

  check("unknown");
  check("hidden");
  check("w-10");
  check("w-[100px]");
  check("absolute");
  check("relative");
  check("text-unknown");
  check("text-transparent");
  check("text-white");
  check("text-red-500");
  check("text-[#fff]");
  check("bg-unknown");
  check("bg-transparent");
  check("bg-white");
  check("bg-red-500");
  check("bg-[#fff]");

  expect(parser.cache.size).not.toBeFalsy();
});
