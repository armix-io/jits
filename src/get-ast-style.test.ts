import { getAst } from "./get-ast";
import { getAstStyle } from "./get-ast-style";
import { BorderStyleMap, BorderWidthMap, SpacingMap } from "./maps";
import { defaultTheme } from "./theme";

test("margin styles", () => {
  expect(getAstStyle(defaultTheme, getAst("m-0"))).toMatchObject({
    margin: SpacingMap[0],
  });

  expect(getAstStyle(defaultTheme, getAst("m-2"))).toMatchObject({
    margin: SpacingMap[2],
  });

  expect(getAstStyle(defaultTheme, getAst("my-2"))).toMatchObject({
    marginVertical: SpacingMap[2],
  });

  expect(getAstStyle(defaultTheme, getAst("ml-0.5"))).toMatchObject({
    marginLeft: SpacingMap["0.5"],
  });

  expect(getAstStyle(defaultTheme, getAst("-m-1"))).toMatchObject({
    margin: -SpacingMap[1],
  });

  expect(getAstStyle(defaultTheme, getAst("-mx-4"))).toMatchObject({
    marginHorizontal: -SpacingMap[4],
  });

  expect(getAstStyle(defaultTheme, getAst("-mr-8"))).toMatchObject({
    marginRight: -SpacingMap[8],
  });
});

test("padding styles", () => {
  expect(getAstStyle(defaultTheme, getAst("p-0"))).toMatchObject({
    padding: SpacingMap[0],
  });

  expect(getAstStyle(defaultTheme, getAst("p-2"))).toMatchObject({
    padding: SpacingMap[2],
  });

  expect(getAstStyle(defaultTheme, getAst("py-2"))).toMatchObject({
    paddingVertical: SpacingMap[2],
  });

  expect(getAstStyle(defaultTheme, getAst("pl-0.5"))).toMatchObject({
    paddingLeft: SpacingMap["0.5"],
  });

  expect(getAstStyle(defaultTheme, getAst("-p-1"))).toMatchObject({
    padding: -SpacingMap[1],
  });

  expect(getAstStyle(defaultTheme, getAst("-px-4"))).toMatchObject({
    paddingHorizontal: -SpacingMap[4],
  });

  expect(getAstStyle(defaultTheme, getAst("-pr-8"))).toMatchObject({
    paddingRight: -SpacingMap[8],
  });
});

test("border ast styles correct", () => {
  expect(getAstStyle(defaultTheme, getAst("border"))).toMatchObject({
    borderWidth: BorderWidthMap.DEFAULT,
  });

  expect(getAstStyle(defaultTheme, getAst("border-0"))).toMatchObject({
    borderWidth: BorderWidthMap[0],
  });

  expect(getAstStyle(defaultTheme, getAst("border-2"))).toMatchObject({
    borderWidth: BorderWidthMap[2],
  });

  expect(getAstStyle(defaultTheme, getAst("border-r"))).toMatchObject({
    borderRightWidth: BorderWidthMap.DEFAULT,
  });

  expect(getAstStyle(defaultTheme, getAst("border-t-4"))).toMatchObject({
    borderTopWidth: BorderWidthMap[4],
  });

  expect(getAstStyle(defaultTheme, getAst("border-dotted"))).toMatchObject({
    borderStyle: BorderStyleMap.dotted,
  });

  expect(getAstStyle(defaultTheme, getAst("border-red-500"))).toMatchObject({
    borderColor: defaultTheme.colors.red[500],
  });

  expect(getAstStyle(defaultTheme, getAst("border-t-green-100"))).toMatchObject(
    {
      borderTopColor: defaultTheme.colors.green[100],
    }
  );
});
