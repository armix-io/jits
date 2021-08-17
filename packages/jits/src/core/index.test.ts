import { createParser } from "./index";
import utilities from "./utilities";

const parser = createParser({ utilities, onUnknown: "ignore" });

test("core", () => {
  expect(parser.parse("unknown")).toBeUndefined();
  expect(parser.parse("hidden")).toMatchObject({ display: "none" });
  expect(parser.parse("w-10")).toMatchObject({ width: 40 });
  expect(parser.parse("w-[100px]")).toMatchObject({ width: 100 });
  expect(parser.parse("absolute")).toMatchObject({ position: "absolute" });
  expect(parser.parse("relative")).toMatchObject({ position: "relative" });
  expect(parser.parse("text-unknown")).toBeUndefined();
  expect(parser.parse("text-transparent")).toMatchObject({
    color: "transparent",
  });
  expect(parser.parse("text-white")).toMatchObject({ color: "#fff" });
  expect(parser.parse("text-red-500")).toMatchObject({ color: "#ef4444" });
  expect(parser.parse("text-[#fff]")).toMatchObject({ color: "#fff" });
  expect(parser.parse("bg-unknown")).toBeUndefined();
  expect(parser.parse("bg-transparent")).toMatchObject({
    backgroundColor: "transparent",
  });
  expect(parser.parse("bg-white")).toMatchObject({ backgroundColor: "#fff" });
  expect(parser.parse("bg-red-500")).toMatchObject({
    backgroundColor: "#ef4444",
  });
  expect(parser.parse("bg-[#fff]")).toMatchObject({ backgroundColor: "#fff" });

  expect(parser.cache.size).not.toBeFalsy();
});
