import { defaultConfig } from "../jits";
import { getAst } from "./get-ast";
import { getAstStyle } from "./get-ast-style";
import {
  defaultAlignContentMap,
  defaultAlignItemsMap,
  defaultAlignSelfMap,
  defaultBorderRadiusMap,
  defaultBorderStyleMap,
  defaultBorderWidthMap,
  defaultFontSizeMap,
  defaultFontWeightMap,
  defaultJustifyContentMap,
  defaultLeadingMap,
  defaultOpacityMap,
  defaultSpacingMap,
  defaultTrackingMap,
  defaultTextDecorationStyleMap,
} from "../utilities";

test("margin styles", () => {
  expect(getAstStyle(defaultConfig)(getAst("m-0"))).toMatchObject({
    margin: defaultSpacingMap[0],
  });

  expect(getAstStyle(defaultConfig)(getAst("m-2"))).toMatchObject({
    margin: defaultSpacingMap[2],
  });

  expect(getAstStyle(defaultConfig)(getAst("my-2"))).toMatchObject({
    marginVertical: defaultSpacingMap[2],
  });

  expect(getAstStyle(defaultConfig)(getAst("ml-0.5"))).toMatchObject({
    marginLeft: defaultSpacingMap["0.5"],
  });

  expect(getAstStyle(defaultConfig)(getAst("-m-1"))).toMatchObject({
    margin: -defaultSpacingMap[1],
  });

  expect(getAstStyle(defaultConfig)(getAst("-mx-4"))).toMatchObject({
    marginHorizontal: -defaultSpacingMap[4],
  });

  expect(getAstStyle(defaultConfig)(getAst("-mr-8"))).toMatchObject({
    marginRight: -defaultSpacingMap[8],
  });
});

test("padding styles", () => {
  expect(getAstStyle(defaultConfig)(getAst("p-0"))).toMatchObject({
    padding: defaultSpacingMap[0],
  });

  expect(getAstStyle(defaultConfig)(getAst("p-2"))).toMatchObject({
    padding: defaultSpacingMap[2],
  });

  expect(getAstStyle(defaultConfig)(getAst("py-2"))).toMatchObject({
    paddingVertical: defaultSpacingMap[2],
  });

  expect(getAstStyle(defaultConfig)(getAst("pl-0.5"))).toMatchObject({
    paddingLeft: defaultSpacingMap["0.5"],
  });

  expect(getAstStyle(defaultConfig)(getAst("-p-1"))).toMatchObject({
    padding: -defaultSpacingMap[1],
  });

  expect(getAstStyle(defaultConfig)(getAst("-px-4"))).toMatchObject({
    paddingHorizontal: -defaultSpacingMap[4],
  });

  expect(getAstStyle(defaultConfig)(getAst("-pr-8"))).toMatchObject({
    paddingRight: -defaultSpacingMap[8],
  });
});

test("top,bottom,left,right,start,end props", () => {
  // expect(getAstStyle(defaultConfig)(getAst("top-0"))).toMatchObject({
  //   top: defaultSpacingMap[0],
  // });
  expect(getAstStyle(defaultConfig)(getAst("bottom-12"))).toMatchObject({
    bottom: defaultSpacingMap[12],
  });
  expect(getAstStyle(defaultConfig)(getAst("left-0"))).toMatchObject({
    left: defaultSpacingMap[0],
  });
  expect(getAstStyle(defaultConfig)(getAst("right-4"))).toMatchObject({
    right: defaultSpacingMap[4],
  });
  expect(getAstStyle(defaultConfig)(getAst("-start-8"))).toMatchObject({
    start: -defaultSpacingMap[8],
  });
  expect(getAstStyle(defaultConfig)(getAst("-end-24"))).toMatchObject({
    end: -defaultSpacingMap[24],
  });
});

test("height and width props", () => {
  expect(getAstStyle(defaultConfig)(getAst("h-0"))).toMatchObject({
    height: defaultSpacingMap[0],
  });
  expect(getAstStyle(defaultConfig)(getAst("w-0"))).toMatchObject({
    width: defaultSpacingMap[0],
  });
  expect(getAstStyle(defaultConfig)(getAst("h-32"))).toMatchObject({
    height: defaultSpacingMap[32],
  });
  expect(getAstStyle(defaultConfig)(getAst("w-96"))).toMatchObject({
    width: defaultSpacingMap[96],
  });
});

test("overflow props", () => {
  expect(getAstStyle(defaultConfig)(getAst("overflow-visible"))).toMatchObject({
    overflow: "visible",
  });
  expect(getAstStyle(defaultConfig)(getAst("overflow-hidden"))).toMatchObject({
    overflow: "hidden",
  });
  expect(getAstStyle(defaultConfig)(getAst("overflow-scroll"))).toMatchObject({
    overflow: "scroll",
  });
});

test("display props", () => {
  expect(getAstStyle(defaultConfig)(getAst("flex"))).toMatchObject({
    display: "flex",
  });
  expect(getAstStyle(defaultConfig)(getAst("hidden"))).toMatchObject({
    display: "none",
  });
});

test("flex props", () => {
  expect(getAstStyle(defaultConfig)(getAst("flex"))).toMatchObject({
    display: "flex",
  });
  expect(getAstStyle(defaultConfig)(getAst("flex-0"))).toMatchObject({
    flex: 0,
  });
  expect(getAstStyle(defaultConfig)(getAst("flex-1"))).toMatchObject({
    flex: 1,
  });
  expect(getAstStyle(defaultConfig)(getAst("flex-2"))).toMatchObject({
    flex: 2,
  });
  expect(getAstStyle(defaultConfig)(getAst("flex-auto"))).toMatchObject({
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
  });
  expect(getAstStyle(defaultConfig)(getAst("flex-initial"))).toMatchObject({
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: "auto",
  });
  expect(getAstStyle(defaultConfig)(getAst("flex-none"))).toMatchObject({
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
  });
  expect(getAstStyle(defaultConfig)(getAst("flex-row"))).toMatchObject({
    flexDirection: "row",
  });
  expect(getAstStyle(defaultConfig)(getAst("flex-row-reverse"))).toMatchObject({
    flexDirection: "row-reverse",
  });
  expect(getAstStyle(defaultConfig)(getAst("flex-col-reverse"))).toMatchObject({
    flexDirection: "column-reverse",
  });
  expect(getAstStyle(defaultConfig)(getAst("flex-grow"))).toMatchObject({
    flexGrow: 1,
  });
  expect(getAstStyle(defaultConfig)(getAst("flex-grow-0"))).toMatchObject({
    flexGrow: 0,
  });
  expect(getAstStyle(defaultConfig)(getAst("flex-shrink"))).toMatchObject({
    flexShrink: 1,
  });
  expect(getAstStyle(defaultConfig)(getAst("flex-shrink-0"))).toMatchObject({
    flexShrink: 0,
  });
  expect(getAstStyle(defaultConfig)(getAst("flex-wrap"))).toMatchObject({
    flexWrap: "wrap",
  });
  expect(getAstStyle(defaultConfig)(getAst("flex-wrap-reverse"))).toMatchObject(
    {
      flexWrap: "wrap-reverse",
    }
  );
  expect(getAstStyle(defaultConfig)(getAst("flex-nowrap"))).toMatchObject({
    flexWrap: "nowrap",
  });
});

test("flex align self items content and justify content", () => {
  expect(getAstStyle(defaultConfig)(getAst("items-start"))).toMatchObject({
    alignItems: defaultAlignItemsMap.start,
  });
  expect(getAstStyle(defaultConfig)(getAst("items-center"))).toMatchObject({
    alignItems: defaultAlignItemsMap.center,
  });
  expect(getAstStyle(defaultConfig)(getAst("self-stretch"))).toMatchObject({
    alignSelf: defaultAlignSelfMap.stretch,
  });
  expect(getAstStyle(defaultConfig)(getAst("content-center"))).toMatchObject({
    alignContent: defaultAlignContentMap.center,
  });
  expect(getAstStyle(defaultConfig)(getAst("content-between"))).toMatchObject({
    alignContent: defaultAlignContentMap.between,
  });
  expect(getAstStyle(defaultConfig)(getAst("justify-end"))).toMatchObject({
    justifyContent: defaultJustifyContentMap.end,
  });
  expect(getAstStyle(defaultConfig)(getAst("justify-center"))).toMatchObject({
    justifyContent: defaultJustifyContentMap.center,
  });
});

test("bg color props", () => {
  expect(getAstStyle(defaultConfig)(getAst("bg-white"))).toMatchObject({
    backgroundColor: defaultConfig.colorMap.white,
  });
  expect(getAstStyle(defaultConfig)(getAst("bg-transparent"))).toMatchObject({
    backgroundColor: defaultConfig.colorMap.transparent,
  });
  expect(getAstStyle(defaultConfig)(getAst("bg-green-100"))).toMatchObject({
    backgroundColor: defaultConfig.colorMap.green[100],
  });
  expect(getAstStyle(defaultConfig)(getAst("bg-blue-800"))).toMatchObject({
    backgroundColor: defaultConfig.colorMap.blue[800],
  });
});

test("opacity props", () => {
  expect(getAstStyle(defaultConfig)(getAst("opacity-0"))).toMatchObject({
    opacity: defaultOpacityMap[0],
  });
  expect(getAstStyle(defaultConfig)(getAst("opacity-30"))).toMatchObject({
    opacity: defaultOpacityMap[30],
  });
  expect(getAstStyle(defaultConfig)(getAst("opacity-95"))).toMatchObject({
    opacity: defaultOpacityMap[95],
  });
  expect(getAstStyle(defaultConfig)(getAst("opacity-100"))).toMatchObject({
    opacity: defaultOpacityMap[100],
  });
});

test("border ast styles correct", () => {
  expect(getAstStyle(defaultConfig)(getAst("border"))).toMatchObject({
    borderWidth: defaultBorderWidthMap.DEFAULT,
  });

  expect(getAstStyle(defaultConfig)(getAst("border-0"))).toMatchObject({
    borderWidth: defaultBorderWidthMap[0],
  });

  expect(getAstStyle(defaultConfig)(getAst("border-2"))).toMatchObject({
    borderWidth: defaultBorderWidthMap[2],
  });

  expect(getAstStyle(defaultConfig)(getAst("border-r"))).toMatchObject({
    borderRightWidth: defaultBorderWidthMap.DEFAULT,
  });

  expect(getAstStyle(defaultConfig)(getAst("border-t-4"))).toMatchObject({
    borderTopWidth: defaultBorderWidthMap[4],
  });

  expect(getAstStyle(defaultConfig)(getAst("border-dotted"))).toMatchObject({
    borderStyle: defaultBorderStyleMap.dotted,
  });

  expect(getAstStyle(defaultConfig)(getAst("border-red-500"))).toMatchObject({
    borderColor: defaultConfig.colorMap.red[500],
  });

  expect(
    getAstStyle(defaultConfig)(getAst("border-t-green-100"))
  ).toMatchObject({
    borderTopColor: defaultConfig.colorMap.green[100],
  });
});

test("rounded props", () => {
  expect(getAstStyle(defaultConfig)(getAst("rounded"))).toMatchObject({
    borderRadius: defaultBorderRadiusMap.DEFAULT,
  });
  expect(getAstStyle(defaultConfig)(getAst("rounded-none"))).toMatchObject({
    borderRadius: defaultBorderRadiusMap.none,
  });
  expect(getAstStyle(defaultConfig)(getAst("rounded-xl"))).toMatchObject({
    borderRadius: defaultBorderRadiusMap.xl,
  });
  expect(getAstStyle(defaultConfig)(getAst("rounded-tr-xl"))).toMatchObject({
    borderTopRightRadius: defaultBorderRadiusMap.xl,
  });
  expect(getAstStyle(defaultConfig)(getAst("rounded-l-md"))).toMatchObject({
    borderTopLeftRadius: defaultBorderRadiusMap.md,
    borderBottomLeftRadius: defaultBorderRadiusMap.md,
  });
});

test("position props", () => {
  expect(getAstStyle(defaultConfig)(getAst("absolute"))).toMatchObject({
    position: "absolute",
  });
  expect(getAstStyle(defaultConfig)(getAst("relative"))).toMatchObject({
    position: "relative",
  });
});

test("z-index props", () => {
  expect(getAstStyle(defaultConfig)(getAst("z-0"))).toMatchObject({
    zIndex: 0,
  });
  expect(getAstStyle(defaultConfig)(getAst("z-30"))).toMatchObject({
    zIndex: 30,
  });
});

test("shadow props", () => {
  // expect(getAstStyle(defaultConfig)(getAst("border"))).toMatchObject({
  //   borderWidth: defaultBorderWidthMap.DEFAULT,
  // });
});

test("aspect props", () => {
  // expect(getAstStyle(defaultConfig)(getAst("border"))).toMatchObject({
  //   borderWidth: defaultBorderWidthMap.DEFAULT,
  // });
});

test("ltr and rtl props", () => {
  expect(getAstStyle(defaultConfig)(getAst("ltr"))).toMatchObject({
    direction: "ltr",
  });
  expect(getAstStyle(defaultConfig)(getAst("rtl"))).toMatchObject({
    direction: "rtl",
  });
});

test("text props", () => {
  expect(getAstStyle(defaultConfig)(getAst("text-xl"))).toMatchObject({
    fontSize: defaultFontSizeMap.xl,
  });
  expect(getAstStyle(defaultConfig)(getAst("text-base"))).toMatchObject({
    fontSize: defaultFontSizeMap.base,
  });
  expect(getAstStyle(defaultConfig)(getAst("text-white"))).toMatchObject({
    color: defaultConfig.colorMap.white,
  });
  expect(getAstStyle(defaultConfig)(getAst("text-red-400"))).toMatchObject({
    color: defaultConfig.colorMap.red[400],
  });
  expect(getAstStyle(defaultConfig)(getAst("text-ltr"))).toMatchObject({
    writingDirection: "ltr",
  });
  expect(getAstStyle(defaultConfig)(getAst("text-rtl"))).toMatchObject({
    writingDirection: "rtl",
  });
  expect(getAstStyle(defaultConfig)(getAst("text-left"))).toMatchObject({
    textAlign: "left",
  });
  expect(getAstStyle(defaultConfig)(getAst("text-center"))).toMatchObject({
    textAlign: "center",
  });
  expect(getAstStyle(defaultConfig)(getAst("text-justify"))).toMatchObject({
    textAlign: "justify",
  });
  expect(getAstStyle(defaultConfig)(getAst("text-top"))).toMatchObject({
    textAlignVertical: "top",
  });
  expect(getAstStyle(defaultConfig)(getAst("text-middle"))).toMatchObject({
    textAlignVertical: "center",
  });
  expect(getAstStyle(defaultConfig)(getAst("text-auto"))).toMatchObject({
    textAlignVertical: "auto",
  });
});

test("font props", () => {
  const _defaultTheme = { ...defaultConfig, os: "ios" as const };
  expect(getAstStyle(_defaultTheme)(getAst("font-sans"))).toMatchObject({
    fontFamily: _defaultTheme.fontMap.sans,
  });
  expect(getAstStyle(_defaultTheme)(getAst("font-mono"))).toMatchObject({
    fontFamily: _defaultTheme.fontMap.mono,
  });
  expect(getAstStyle(_defaultTheme)(getAst("font-thin"))).toMatchObject({
    fontWeight: defaultFontWeightMap.thin,
  });
  expect(getAstStyle(_defaultTheme)(getAst("font-black"))).toMatchObject({
    fontWeight: defaultFontWeightMap.black,
  });
  expect(getAstStyle(_defaultTheme)(getAst("font-normal"))).toMatchObject({
    fontWeight: defaultFontWeightMap.normal,
  });
});

test("italic|non-italic props", () => {
  expect(getAstStyle(defaultConfig)(getAst("italic"))).toMatchObject({
    fontStyle: "italic",
  });
  expect(getAstStyle(defaultConfig)(getAst("non-italic"))).toMatchObject({
    fontStyle: "normal",
  });
});

test("tracking", () => {
  expect(getAstStyle(defaultConfig)(getAst("tracking-normal"))).toMatchObject({
    letterSpacing: defaultTrackingMap.normal,
  });
  expect(getAstStyle(defaultConfig)(getAst("tracking-widest"))).toMatchObject({
    letterSpacing: defaultTrackingMap.widest,
  });
});

test("leading", () => {
  expect(getAstStyle(defaultConfig)(getAst("leading-4"))).toMatchObject({
    lineHeight: defaultLeadingMap[4],
  });
  expect(getAstStyle(defaultConfig)(getAst("leading-9"))).toMatchObject({
    lineHeight: defaultLeadingMap[9],
  });
  expect(getAstStyle(defaultConfig)(getAst("leading-none"))).toMatchObject({
    lineHeight: defaultLeadingMap.none,
  });
  expect(getAstStyle(defaultConfig)(getAst("leading-loose"))).toMatchObject({
    lineHeight: defaultLeadingMap.loose,
  });
});

test("text upper/lower/caps/normal props", () => {
  expect(getAstStyle(defaultConfig)(getAst("uppercase"))).toMatchObject({
    textTransform: "uppercase",
  });
  expect(getAstStyle(defaultConfig)(getAst("normal-case"))).toMatchObject({
    textTransform: "none",
  });
  expect(getAstStyle(defaultConfig)(getAst("lowercase"))).toMatchObject({
    textTransform: "lowercase",
  });
  expect(getAstStyle(defaultConfig)(getAst("capitalize"))).toMatchObject({
    textTransform: "capitalize",
  });
});

test("underline props", () => {
  expect(getAstStyle(defaultConfig)(getAst("underline"))).toMatchObject({
    textDecorationLine: "underline",
  });
  expect(getAstStyle(defaultConfig)(getAst("underline-red-400"))).toMatchObject(
    {
      textDecorationColor: defaultConfig.colorMap.red[400],
    }
  );
  expect(getAstStyle(defaultConfig)(getAst("underline-white"))).toMatchObject({
    textDecorationColor: defaultConfig.colorMap.white,
  });
  expect(getAstStyle(defaultConfig)(getAst("underline-solid"))).toMatchObject({
    textDecorationStyle: defaultTextDecorationStyleMap.solid,
  });
  expect(getAstStyle(defaultConfig)(getAst("underline-dotted"))).toMatchObject({
    textDecorationStyle: defaultTextDecorationStyleMap.dotted,
  });
});

test("other text decorations props", () => {
  expect(getAstStyle(defaultConfig)(getAst("line-through"))).toMatchObject({
    textDecorationLine: "line-through",
  });
  expect(getAstStyle(defaultConfig)(getAst("no-underline"))).toMatchObject({
    textDecorationLine: "none",
  });
});

test("tint props", () => {
  expect(getAstStyle(defaultConfig)(getAst("tint-white"))).toMatchObject({
    tintColor: defaultConfig.colorMap.white,
  });
  expect(getAstStyle(defaultConfig)(getAst("tint-transparent"))).toMatchObject({
    tintColor: defaultConfig.colorMap.transparent,
  });
  expect(getAstStyle(defaultConfig)(getAst("tint-blue-200"))).toMatchObject({
    tintColor: defaultConfig.colorMap.blue[200],
  });
});

test("overlay props", () => {
  expect(getAstStyle(defaultConfig)(getAst("overlay-white"))).toMatchObject({
    overlayColor: defaultConfig.colorMap.white,
  });
  expect(
    getAstStyle(defaultConfig)(getAst("overlay-transparent"))
  ).toMatchObject({
    overlayColor: defaultConfig.colorMap.transparent,
  });
  expect(getAstStyle(defaultConfig)(getAst("overlay-blue-200"))).toMatchObject({
    overlayColor: defaultConfig.colorMap.blue[200],
  });
});
