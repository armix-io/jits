import { getAst } from "./get-ast";
import { getAstStyle } from "./get-ast-style";
import {
  AlignContentMap,
  AlignItemsMap,
  AlignSelfMap,
  BorderRadiusMap,
  BorderStyleMap,
  BorderWidthMap,
  FontSizeMap,
  FontWeightMap,
  JustifyContentMap,
  LeadingMap,
  OpacityMap,
  SpacingMap,
  TrackingMap,
  TextDecorationStyleMap,
} from "../config/maps";
import { defaultOptions } from "../config";

test("margin styles", () => {
  expect(getAstStyle(defaultOptions, getAst("m-0"))).toMatchObject({
    margin: SpacingMap[0],
  });

  expect(getAstStyle(defaultOptions, getAst("m-2"))).toMatchObject({
    margin: SpacingMap[2],
  });

  expect(getAstStyle(defaultOptions, getAst("my-2"))).toMatchObject({
    marginVertical: SpacingMap[2],
  });

  expect(getAstStyle(defaultOptions, getAst("ml-0.5"))).toMatchObject({
    marginLeft: SpacingMap["0.5"],
  });

  expect(getAstStyle(defaultOptions, getAst("-m-1"))).toMatchObject({
    margin: -SpacingMap[1],
  });

  expect(getAstStyle(defaultOptions, getAst("-mx-4"))).toMatchObject({
    marginHorizontal: -SpacingMap[4],
  });

  expect(getAstStyle(defaultOptions, getAst("-mr-8"))).toMatchObject({
    marginRight: -SpacingMap[8],
  });
});

test("padding styles", () => {
  expect(getAstStyle(defaultOptions, getAst("p-0"))).toMatchObject({
    padding: SpacingMap[0],
  });

  expect(getAstStyle(defaultOptions, getAst("p-2"))).toMatchObject({
    padding: SpacingMap[2],
  });

  expect(getAstStyle(defaultOptions, getAst("py-2"))).toMatchObject({
    paddingVertical: SpacingMap[2],
  });

  expect(getAstStyle(defaultOptions, getAst("pl-0.5"))).toMatchObject({
    paddingLeft: SpacingMap["0.5"],
  });

  expect(getAstStyle(defaultOptions, getAst("-p-1"))).toMatchObject({
    padding: -SpacingMap[1],
  });

  expect(getAstStyle(defaultOptions, getAst("-px-4"))).toMatchObject({
    paddingHorizontal: -SpacingMap[4],
  });

  expect(getAstStyle(defaultOptions, getAst("-pr-8"))).toMatchObject({
    paddingRight: -SpacingMap[8],
  });
});

test("top,bottom,left,right,start,end props", () => {
  expect(getAstStyle(defaultOptions, getAst("top-0"))).toMatchObject({
    top: SpacingMap[0],
  });
  expect(getAstStyle(defaultOptions, getAst("bottom-12"))).toMatchObject({
    bottom: SpacingMap[12],
  });
  expect(getAstStyle(defaultOptions, getAst("left-0"))).toMatchObject({
    left: SpacingMap[0],
  });
  expect(getAstStyle(defaultOptions, getAst("right-4"))).toMatchObject({
    right: SpacingMap[4],
  });
  expect(getAstStyle(defaultOptions, getAst("-start-8"))).toMatchObject({
    start: -SpacingMap[8],
  });
  expect(getAstStyle(defaultOptions, getAst("-end-24"))).toMatchObject({
    end: -SpacingMap[24],
  });
});

test("height and width props", () => {
  expect(getAstStyle(defaultOptions, getAst("h-0"))).toMatchObject({
    height: SpacingMap[0],
  });
  expect(getAstStyle(defaultOptions, getAst("w-0"))).toMatchObject({
    width: SpacingMap[0],
  });
  expect(getAstStyle(defaultOptions, getAst("h-32"))).toMatchObject({
    height: SpacingMap[32],
  });
  expect(getAstStyle(defaultOptions, getAst("w-96"))).toMatchObject({
    width: SpacingMap[96],
  });
});

test("overflow props", () => {
  expect(getAstStyle(defaultOptions, getAst("overflow-visible"))).toMatchObject(
    {
      overflow: "visible",
    }
  );
  expect(getAstStyle(defaultOptions, getAst("overflow-hidden"))).toMatchObject({
    overflow: "hidden",
  });
  expect(getAstStyle(defaultOptions, getAst("overflow-scroll"))).toMatchObject({
    overflow: "scroll",
  });
});

test("display props", () => {
  expect(getAstStyle(defaultOptions, getAst("flex"))).toMatchObject({
    display: "flex",
  });
  expect(getAstStyle(defaultOptions, getAst("hidden"))).toMatchObject({
    display: "none",
  });
});

test("flex props", () => {
  expect(getAstStyle(defaultOptions, getAst("flex"))).toMatchObject({
    display: "flex",
  });
  expect(getAstStyle(defaultOptions, getAst("flex-0"))).toMatchObject({
    flex: 0,
  });
  expect(getAstStyle(defaultOptions, getAst("flex-1"))).toMatchObject({
    flex: 1,
  });
  expect(getAstStyle(defaultOptions, getAst("flex-2"))).toMatchObject({
    flex: 2,
  });
  expect(getAstStyle(defaultOptions, getAst("flex-auto"))).toMatchObject({
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
  });
  expect(getAstStyle(defaultOptions, getAst("flex-initial"))).toMatchObject({
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: "auto",
  });
  expect(getAstStyle(defaultOptions, getAst("flex-none"))).toMatchObject({
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
  });
  expect(getAstStyle(defaultOptions, getAst("flex-row"))).toMatchObject({
    flexDirection: "row",
  });
  expect(getAstStyle(defaultOptions, getAst("flex-row-reverse"))).toMatchObject(
    {
      flexDirection: "row-reverse",
    }
  );
  expect(getAstStyle(defaultOptions, getAst("flex-col-reverse"))).toMatchObject(
    {
      flexDirection: "column-reverse",
    }
  );
  expect(getAstStyle(defaultOptions, getAst("flex-grow"))).toMatchObject({
    flexGrow: 1,
  });
  expect(getAstStyle(defaultOptions, getAst("flex-grow-0"))).toMatchObject({
    flexGrow: 0,
  });
  expect(getAstStyle(defaultOptions, getAst("flex-shrink"))).toMatchObject({
    flexShrink: 1,
  });
  expect(getAstStyle(defaultOptions, getAst("flex-shrink-0"))).toMatchObject({
    flexShrink: 0,
  });
  expect(getAstStyle(defaultOptions, getAst("flex-wrap"))).toMatchObject({
    flexWrap: "wrap",
  });
  expect(
    getAstStyle(defaultOptions, getAst("flex-wrap-reverse"))
  ).toMatchObject({
    flexWrap: "wrap-reverse",
  });
  expect(getAstStyle(defaultOptions, getAst("flex-nowrap"))).toMatchObject({
    flexWrap: "nowrap",
  });
});

test("flex align self items content and justify content", () => {
  expect(getAstStyle(defaultOptions, getAst("items-start"))).toMatchObject({
    alignItems: AlignItemsMap.start,
  });
  expect(getAstStyle(defaultOptions, getAst("items-center"))).toMatchObject({
    alignItems: AlignItemsMap.center,
  });
  expect(getAstStyle(defaultOptions, getAst("self-stretch"))).toMatchObject({
    alignSelf: AlignSelfMap.stretch,
  });
  expect(getAstStyle(defaultOptions, getAst("content-center"))).toMatchObject({
    alignContent: AlignContentMap.center,
  });
  expect(getAstStyle(defaultOptions, getAst("content-between"))).toMatchObject({
    alignContent: AlignContentMap.between,
  });
  expect(getAstStyle(defaultOptions, getAst("justify-end"))).toMatchObject({
    justifyContent: JustifyContentMap.end,
  });
  expect(getAstStyle(defaultOptions, getAst("justify-center"))).toMatchObject({
    justifyContent: JustifyContentMap.center,
  });
});

test("bg color props", () => {
  expect(getAstStyle(defaultOptions, getAst("bg-white"))).toMatchObject({
    backgroundColor: defaultOptions.colors.white,
  });
  expect(getAstStyle(defaultOptions, getAst("bg-transparent"))).toMatchObject({
    backgroundColor: defaultOptions.colors.transparent,
  });
  expect(getAstStyle(defaultOptions, getAst("bg-green-100"))).toMatchObject({
    backgroundColor: defaultOptions.colors.green[100],
  });
  expect(getAstStyle(defaultOptions, getAst("bg-blue-800"))).toMatchObject({
    backgroundColor: defaultOptions.colors.blue[800],
  });
});

test("opacity props", () => {
  expect(getAstStyle(defaultOptions, getAst("opacity-0"))).toMatchObject({
    opacity: OpacityMap[0],
  });
  expect(getAstStyle(defaultOptions, getAst("opacity-30"))).toMatchObject({
    opacity: OpacityMap[30],
  });
  expect(getAstStyle(defaultOptions, getAst("opacity-95"))).toMatchObject({
    opacity: OpacityMap[95],
  });
  expect(getAstStyle(defaultOptions, getAst("opacity-100"))).toMatchObject({
    opacity: OpacityMap[100],
  });
});

test("border ast styles correct", () => {
  expect(getAstStyle(defaultOptions, getAst("border"))).toMatchObject({
    borderWidth: BorderWidthMap.DEFAULT,
  });

  expect(getAstStyle(defaultOptions, getAst("border-0"))).toMatchObject({
    borderWidth: BorderWidthMap[0],
  });

  expect(getAstStyle(defaultOptions, getAst("border-2"))).toMatchObject({
    borderWidth: BorderWidthMap[2],
  });

  expect(getAstStyle(defaultOptions, getAst("border-r"))).toMatchObject({
    borderRightWidth: BorderWidthMap.DEFAULT,
  });

  expect(getAstStyle(defaultOptions, getAst("border-t-4"))).toMatchObject({
    borderTopWidth: BorderWidthMap[4],
  });

  expect(getAstStyle(defaultOptions, getAst("border-dotted"))).toMatchObject({
    borderStyle: BorderStyleMap.dotted,
  });

  expect(getAstStyle(defaultOptions, getAst("border-red-500"))).toMatchObject({
    borderColor: defaultOptions.colors.red[500],
  });

  expect(
    getAstStyle(defaultOptions, getAst("border-t-green-100"))
  ).toMatchObject({
    borderTopColor: defaultOptions.colors.green[100],
  });
});

test("rounded props", () => {
  expect(getAstStyle(defaultOptions, getAst("rounded"))).toMatchObject({
    borderRadius: BorderRadiusMap.DEFAULT,
  });
  expect(getAstStyle(defaultOptions, getAst("rounded-none"))).toMatchObject({
    borderRadius: BorderRadiusMap.none,
  });
  expect(getAstStyle(defaultOptions, getAst("rounded-xl"))).toMatchObject({
    borderRadius: BorderRadiusMap.xl,
  });
  expect(getAstStyle(defaultOptions, getAst("rounded-tr-xl"))).toMatchObject({
    borderTopRightRadius: BorderRadiusMap.xl,
  });
  expect(getAstStyle(defaultOptions, getAst("rounded-l-md"))).toMatchObject({
    borderTopLeftRadius: BorderRadiusMap.md,
    borderBottomLeftRadius: BorderRadiusMap.md,
  });
});

test("position props", () => {
  expect(getAstStyle(defaultOptions, getAst("absolute"))).toMatchObject({
    position: "absolute",
  });
  expect(getAstStyle(defaultOptions, getAst("relative"))).toMatchObject({
    position: "relative",
  });
});

test("z-index props", () => {
  expect(getAstStyle(defaultOptions, getAst("z-0"))).toMatchObject({
    zIndex: 0,
  });
  expect(getAstStyle(defaultOptions, getAst("z-30"))).toMatchObject({
    zIndex: 30,
  });
});

test("shadow props", () => {
  // expect(getAstStyle(defaultOptions, getAst("border"))).toMatchObject({
  //   borderWidth: BorderWidthMap.DEFAULT,
  // });
});

test("aspect props", () => {
  // expect(getAstStyle(defaultOptions, getAst("border"))).toMatchObject({
  //   borderWidth: BorderWidthMap.DEFAULT,
  // });
});

test("ltr and rtl props", () => {
  expect(getAstStyle(defaultOptions, getAst("ltr"))).toMatchObject({
    direction: "ltr",
  });
  expect(getAstStyle(defaultOptions, getAst("rtl"))).toMatchObject({
    direction: "rtl",
  });
});

test("text props", () => {
  expect(getAstStyle(defaultOptions, getAst("text-xl"))).toMatchObject({
    fontSize: FontSizeMap.xl,
  });
  expect(getAstStyle(defaultOptions, getAst("text-base"))).toMatchObject({
    fontSize: FontSizeMap.base,
  });
  expect(getAstStyle(defaultOptions, getAst("text-white"))).toMatchObject({
    color: defaultOptions.colors.white,
  });
  expect(getAstStyle(defaultOptions, getAst("text-red-400"))).toMatchObject({
    color: defaultOptions.colors.red[400],
  });
  expect(getAstStyle(defaultOptions, getAst("text-ltr"))).toMatchObject({
    writingDirection: "ltr",
  });
  expect(getAstStyle(defaultOptions, getAst("text-rtl"))).toMatchObject({
    writingDirection: "rtl",
  });
  expect(getAstStyle(defaultOptions, getAst("text-left"))).toMatchObject({
    textAlign: "left",
  });
  expect(getAstStyle(defaultOptions, getAst("text-center"))).toMatchObject({
    textAlign: "center",
  });
  expect(getAstStyle(defaultOptions, getAst("text-justify"))).toMatchObject({
    textAlign: "justify",
  });
  expect(getAstStyle(defaultOptions, getAst("text-top"))).toMatchObject({
    textAlignVertical: "top",
  });
  expect(getAstStyle(defaultOptions, getAst("text-middle"))).toMatchObject({
    textAlignVertical: "center",
  });
  expect(getAstStyle(defaultOptions, getAst("text-auto"))).toMatchObject({
    textAlignVertical: "auto",
  });
});

test("font props", () => {
  const _defaultTheme = { ...defaultOptions, os: "ios" as const };
  expect(getAstStyle(_defaultTheme, getAst("font-sans"))).toMatchObject({
    fontFamily: _defaultTheme.fonts.sans.ios,
  });
  expect(getAstStyle(_defaultTheme, getAst("font-mono"))).toMatchObject({
    fontFamily: _defaultTheme.fonts.mono.ios,
  });
  expect(getAstStyle(_defaultTheme, getAst("font-thin"))).toMatchObject({
    fontWeight: FontWeightMap.thin,
  });
  expect(getAstStyle(_defaultTheme, getAst("font-black"))).toMatchObject({
    fontWeight: FontWeightMap.black,
  });
  expect(getAstStyle(_defaultTheme, getAst("font-normal"))).toMatchObject({
    fontWeight: FontWeightMap.normal,
  });
});

test("italic|non-italic props", () => {
  expect(getAstStyle(defaultOptions, getAst("italic"))).toMatchObject({
    fontStyle: "italic",
  });
  expect(getAstStyle(defaultOptions, getAst("non-italic"))).toMatchObject({
    fontStyle: "normal",
  });
});

test("tracking", () => {
  expect(getAstStyle(defaultOptions, getAst("tracking-normal"))).toMatchObject({
    letterSpacing: TrackingMap.normal,
  });
  expect(getAstStyle(defaultOptions, getAst("tracking-widest"))).toMatchObject({
    letterSpacing: TrackingMap.widest,
  });
});

test("leading", () => {
  expect(getAstStyle(defaultOptions, getAst("leading-4"))).toMatchObject({
    lineHeight: LeadingMap[4],
  });
  expect(getAstStyle(defaultOptions, getAst("leading-9"))).toMatchObject({
    lineHeight: LeadingMap[9],
  });
  expect(getAstStyle(defaultOptions, getAst("leading-none"))).toMatchObject({
    lineHeight: LeadingMap.none,
  });
  expect(getAstStyle(defaultOptions, getAst("leading-loose"))).toMatchObject({
    lineHeight: LeadingMap.loose,
  });
});

test("text upper/lower/caps/normal props", () => {
  expect(getAstStyle(defaultOptions, getAst("uppercase"))).toMatchObject({
    textTransform: "uppercase",
  });
  expect(getAstStyle(defaultOptions, getAst("normal-case"))).toMatchObject({
    textTransform: "none",
  });
  expect(getAstStyle(defaultOptions, getAst("lowercase"))).toMatchObject({
    textTransform: "lowercase",
  });
  expect(getAstStyle(defaultOptions, getAst("capitalize"))).toMatchObject({
    textTransform: "capitalize",
  });
});

test("underline props", () => {
  expect(getAstStyle(defaultOptions, getAst("underline"))).toMatchObject({
    textDecorationLine: "underline",
  });
  expect(
    getAstStyle(defaultOptions, getAst("underline-red-400"))
  ).toMatchObject({
    textDecorationColor: defaultOptions.colors.red[400],
  });
  expect(getAstStyle(defaultOptions, getAst("underline-white"))).toMatchObject({
    textDecorationColor: defaultOptions.colors.white,
  });
  expect(getAstStyle(defaultOptions, getAst("underline-solid"))).toMatchObject({
    textDecorationStyle: TextDecorationStyleMap.solid,
  });
  expect(getAstStyle(defaultOptions, getAst("underline-dotted"))).toMatchObject(
    {
      textDecorationStyle: TextDecorationStyleMap.dotted,
    }
  );
});

test("other text decorations props", () => {
  expect(getAstStyle(defaultOptions, getAst("line-through"))).toMatchObject({
    textDecorationLine: "line-through",
  });
  expect(getAstStyle(defaultOptions, getAst("no-underline"))).toMatchObject({
    textDecorationLine: "none",
  });
});

test("tint props", () => {
  expect(getAstStyle(defaultOptions, getAst("tint-white"))).toMatchObject({
    tintColor: defaultOptions.colors.white,
  });
  expect(getAstStyle(defaultOptions, getAst("tint-transparent"))).toMatchObject(
    {
      tintColor: defaultOptions.colors.transparent,
    }
  );
  expect(getAstStyle(defaultOptions, getAst("tint-blue-200"))).toMatchObject({
    tintColor: defaultOptions.colors.blue[200],
  });
});

test("overlay props", () => {
  expect(getAstStyle(defaultOptions, getAst("overlay-white"))).toMatchObject({
    overlayColor: defaultOptions.colors.white,
  });
  expect(
    getAstStyle(defaultOptions, getAst("overlay-transparent"))
  ).toMatchObject({
    overlayColor: defaultOptions.colors.transparent,
  });
  expect(getAstStyle(defaultOptions, getAst("overlay-blue-200"))).toMatchObject(
    {
      overlayColor: defaultOptions.colors.blue[200],
    }
  );
});
