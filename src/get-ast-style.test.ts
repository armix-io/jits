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
} from "./maps";
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

test("top,bottom,left,right,start,end props", () => {
  expect(getAstStyle(defaultTheme, getAst("top-0"))).toMatchObject({
    top: SpacingMap[0],
  });
  expect(getAstStyle(defaultTheme, getAst("bottom-12"))).toMatchObject({
    bottom: SpacingMap[12],
  });
  expect(getAstStyle(defaultTheme, getAst("left-0"))).toMatchObject({
    left: SpacingMap[0],
  });
  expect(getAstStyle(defaultTheme, getAst("right-4"))).toMatchObject({
    right: SpacingMap[4],
  });
  expect(getAstStyle(defaultTheme, getAst("-start-8"))).toMatchObject({
    start: -SpacingMap[8],
  });
  expect(getAstStyle(defaultTheme, getAst("-end-24"))).toMatchObject({
    end: -SpacingMap[24],
  });
});

test("height and width props", () => {
  expect(getAstStyle(defaultTheme, getAst("h-0"))).toMatchObject({
    height: SpacingMap[0],
  });
  expect(getAstStyle(defaultTheme, getAst("w-0"))).toMatchObject({
    width: SpacingMap[0],
  });
  expect(getAstStyle(defaultTheme, getAst("h-32"))).toMatchObject({
    height: SpacingMap[32],
  });
  expect(getAstStyle(defaultTheme, getAst("w-96"))).toMatchObject({
    width: SpacingMap[96],
  });
});

test("overflow props", () => {
  expect(getAstStyle(defaultTheme, getAst("overflow-visible"))).toMatchObject({
    overflow: "visible",
  });
  expect(getAstStyle(defaultTheme, getAst("overflow-hidden"))).toMatchObject({
    overflow: "hidden",
  });
  expect(getAstStyle(defaultTheme, getAst("overflow-scroll"))).toMatchObject({
    overflow: "scroll",
  });
});

test("display props", () => {
  expect(getAstStyle(defaultTheme, getAst("flex"))).toMatchObject({
    display: "flex",
  });
  expect(getAstStyle(defaultTheme, getAst("hidden"))).toMatchObject({
    display: "none",
  });
});

test("flex props", () => {
  expect(getAstStyle(defaultTheme, getAst("flex"))).toMatchObject({
    display: "flex",
  });
  expect(getAstStyle(defaultTheme, getAst("flex-0"))).toMatchObject({
    flex: 0,
  });
  expect(getAstStyle(defaultTheme, getAst("flex-1"))).toMatchObject({
    flex: 1,
  });
  expect(getAstStyle(defaultTheme, getAst("flex-2"))).toMatchObject({
    flex: 2,
  });
  expect(getAstStyle(defaultTheme, getAst("flex-auto"))).toMatchObject({
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
  });
  expect(getAstStyle(defaultTheme, getAst("flex-initial"))).toMatchObject({
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: "auto",
  });
  expect(getAstStyle(defaultTheme, getAst("flex-none"))).toMatchObject({
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
  });
  expect(getAstStyle(defaultTheme, getAst("flex-row"))).toMatchObject({
    flexDirection: "row",
  });
  expect(getAstStyle(defaultTheme, getAst("flex-row-reverse"))).toMatchObject({
    flexDirection: "row-reverse",
  });
  expect(getAstStyle(defaultTheme, getAst("flex-col-reverse"))).toMatchObject({
    flexDirection: "column-reverse",
  });
  expect(getAstStyle(defaultTheme, getAst("flex-grow"))).toMatchObject({
    flexGrow: 1,
  });
  expect(getAstStyle(defaultTheme, getAst("flex-grow-0"))).toMatchObject({
    flexGrow: 0,
  });
  expect(getAstStyle(defaultTheme, getAst("flex-shrink"))).toMatchObject({
    flexShrink: 1,
  });
  expect(getAstStyle(defaultTheme, getAst("flex-shrink-0"))).toMatchObject({
    flexShrink: 0,
  });
  expect(getAstStyle(defaultTheme, getAst("flex-wrap"))).toMatchObject({
    flexWrap: "wrap",
  });
  expect(getAstStyle(defaultTheme, getAst("flex-wrap-reverse"))).toMatchObject({
    flexWrap: "wrap-reverse",
  });
  expect(getAstStyle(defaultTheme, getAst("flex-nowrap"))).toMatchObject({
    flexWrap: "nowrap",
  });
});

test("flex align self items content and justify content", () => {
  expect(getAstStyle(defaultTheme, getAst("items-start"))).toMatchObject({
    alignItems: AlignItemsMap.start,
  });
  expect(getAstStyle(defaultTheme, getAst("items-center"))).toMatchObject({
    alignItems: AlignItemsMap.center,
  });
  expect(getAstStyle(defaultTheme, getAst("self-stretch"))).toMatchObject({
    alignSelf: AlignSelfMap.stretch,
  });
  expect(getAstStyle(defaultTheme, getAst("content-center"))).toMatchObject({
    alignContent: AlignContentMap.center,
  });
  expect(getAstStyle(defaultTheme, getAst("content-between"))).toMatchObject({
    alignContent: AlignContentMap.between,
  });
  expect(getAstStyle(defaultTheme, getAst("justify-end"))).toMatchObject({
    justifyContent: JustifyContentMap.end,
  });
  expect(getAstStyle(defaultTheme, getAst("justify-center"))).toMatchObject({
    justifyContent: JustifyContentMap.center,
  });
});

test("bg color props", () => {
  expect(getAstStyle(defaultTheme, getAst("bg-white"))).toMatchObject({
    backgroundColor: defaultTheme.colors.white,
  });
  expect(getAstStyle(defaultTheme, getAst("bg-transparent"))).toMatchObject({
    backgroundColor: defaultTheme.colors.transparent,
  });
  expect(getAstStyle(defaultTheme, getAst("bg-green-100"))).toMatchObject({
    backgroundColor: defaultTheme.colors.green[100],
  });
  expect(getAstStyle(defaultTheme, getAst("bg-blue-800"))).toMatchObject({
    backgroundColor: defaultTheme.colors.blue[800],
  });
});

test("opacity props", () => {
  expect(getAstStyle(defaultTheme, getAst("opacity-0"))).toMatchObject({
    opacity: OpacityMap[0],
  });
  expect(getAstStyle(defaultTheme, getAst("opacity-30"))).toMatchObject({
    opacity: OpacityMap[30],
  });
  expect(getAstStyle(defaultTheme, getAst("opacity-95"))).toMatchObject({
    opacity: OpacityMap[95],
  });
  expect(getAstStyle(defaultTheme, getAst("opacity-100"))).toMatchObject({
    opacity: OpacityMap[100],
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

test("rounded props", () => {
  expect(getAstStyle(defaultTheme, getAst("rounded"))).toMatchObject({
    borderRadius: BorderRadiusMap.DEFAULT,
  });
  expect(getAstStyle(defaultTheme, getAst("rounded-none"))).toMatchObject({
    borderRadius: BorderRadiusMap.none,
  });
  expect(getAstStyle(defaultTheme, getAst("rounded-xl"))).toMatchObject({
    borderRadius: BorderRadiusMap.xl,
  });
  expect(getAstStyle(defaultTheme, getAst("rounded-tr-xl"))).toMatchObject({
    borderTopRightRadius: BorderRadiusMap.xl,
  });
  expect(getAstStyle(defaultTheme, getAst("rounded-l-md"))).toMatchObject({
    borderTopLeftRadius: BorderRadiusMap.md,
    borderBottomLeftRadius: BorderRadiusMap.md,
  });
});

test("position props", () => {
  expect(getAstStyle(defaultTheme, getAst("absolute"))).toMatchObject({
    position: "absolute",
  });
  expect(getAstStyle(defaultTheme, getAst("relative"))).toMatchObject({
    position: "relative",
  });
});

test("z-index props", () => {
  expect(getAstStyle(defaultTheme, getAst("z-0"))).toMatchObject({
    zIndex: 0,
  });
  expect(getAstStyle(defaultTheme, getAst("z-30"))).toMatchObject({
    zIndex: 30,
  });
});

test("shadow props", () => {
  // expect(getAstStyle(defaultTheme, getAst("border"))).toMatchObject({
  //   borderWidth: BorderWidthMap.DEFAULT,
  // });
});

test("aspect props", () => {
  // expect(getAstStyle(defaultTheme, getAst("border"))).toMatchObject({
  //   borderWidth: BorderWidthMap.DEFAULT,
  // });
});

test("ltr and rtl props", () => {
  expect(getAstStyle(defaultTheme, getAst("ltr"))).toMatchObject({
    direction: "ltr",
  });
  expect(getAstStyle(defaultTheme, getAst("rtl"))).toMatchObject({
    direction: "rtl",
  });
});

test("text props", () => {
  expect(getAstStyle(defaultTheme, getAst("text-xl"))).toMatchObject({
    fontSize: FontSizeMap.xl,
  });
  expect(getAstStyle(defaultTheme, getAst("text-base"))).toMatchObject({
    fontSize: FontSizeMap.base,
  });
  expect(getAstStyle(defaultTheme, getAst("text-white"))).toMatchObject({
    color: defaultTheme.colors.white,
  });
  expect(getAstStyle(defaultTheme, getAst("text-red-400"))).toMatchObject({
    color: defaultTheme.colors.red[400],
  });
  expect(getAstStyle(defaultTheme, getAst("text-ltr"))).toMatchObject({
    writingDirection: "ltr",
  });
  expect(getAstStyle(defaultTheme, getAst("text-rtl"))).toMatchObject({
    writingDirection: "rtl",
  });
  expect(getAstStyle(defaultTheme, getAst("text-left"))).toMatchObject({
    textAlign: "left",
  });
  expect(getAstStyle(defaultTheme, getAst("text-center"))).toMatchObject({
    textAlign: "center",
  });
  expect(getAstStyle(defaultTheme, getAst("text-justify"))).toMatchObject({
    textAlign: "justify",
  });
  expect(getAstStyle(defaultTheme, getAst("text-top"))).toMatchObject({
    textAlignVertical: "top",
  });
  expect(getAstStyle(defaultTheme, getAst("text-middle"))).toMatchObject({
    textAlignVertical: "center",
  });
  expect(getAstStyle(defaultTheme, getAst("text-auto"))).toMatchObject({
    textAlignVertical: "auto",
  });
});

test("font props", () => {
  const _defaultTheme = { ...defaultTheme, os: "ios" as const };
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
  expect(getAstStyle(defaultTheme, getAst("italic"))).toMatchObject({
    fontStyle: "italic",
  });
  expect(getAstStyle(defaultTheme, getAst("non-italic"))).toMatchObject({
    fontStyle: "normal",
  });
});

test("tracking", () => {
  expect(getAstStyle(defaultTheme, getAst("tracking-normal"))).toMatchObject({
    letterSpacing: TrackingMap.normal,
  });
  expect(getAstStyle(defaultTheme, getAst("tracking-widest"))).toMatchObject({
    letterSpacing: TrackingMap.widest,
  });
});

test("leading", () => {
  expect(getAstStyle(defaultTheme, getAst("leading-4"))).toMatchObject({
    lineHeight: LeadingMap[4],
  });
  expect(getAstStyle(defaultTheme, getAst("leading-9"))).toMatchObject({
    lineHeight: LeadingMap[9],
  });
  expect(getAstStyle(defaultTheme, getAst("leading-none"))).toMatchObject({
    lineHeight: LeadingMap.none,
  });
  expect(getAstStyle(defaultTheme, getAst("leading-loose"))).toMatchObject({
    lineHeight: LeadingMap.loose,
  });
});

test("text upper/lower/caps/normal props", () => {
  expect(getAstStyle(defaultTheme, getAst("uppercase"))).toMatchObject({
    textTransform: "uppercase",
  });
  expect(getAstStyle(defaultTheme, getAst("normal-case"))).toMatchObject({
    textTransform: "none",
  });
  expect(getAstStyle(defaultTheme, getAst("lowercase"))).toMatchObject({
    textTransform: "lowercase",
  });
  expect(getAstStyle(defaultTheme, getAst("capitalize"))).toMatchObject({
    textTransform: "capitalize",
  });
});

test("underline props", () => {
  expect(getAstStyle(defaultTheme, getAst("underline"))).toMatchObject({
    textDecorationLine: "underline",
  });
  expect(getAstStyle(defaultTheme, getAst("underline-red-400"))).toMatchObject({
    textDecorationColor: defaultTheme.colors.red[400],
  });
  expect(getAstStyle(defaultTheme, getAst("underline-white"))).toMatchObject({
    textDecorationColor: defaultTheme.colors.white,
  });
  expect(getAstStyle(defaultTheme, getAst("underline-solid"))).toMatchObject({
    textDecorationStyle: TextDecorationStyleMap.solid,
  });
  expect(getAstStyle(defaultTheme, getAst("underline-dotted"))).toMatchObject({
    textDecorationStyle: TextDecorationStyleMap.dotted,
  });
});

test("other text decorations props", () => {
  expect(getAstStyle(defaultTheme, getAst("line-through"))).toMatchObject({
    textDecorationLine: "line-through",
  });
  expect(getAstStyle(defaultTheme, getAst("no-underline"))).toMatchObject({
    textDecorationLine: "none",
  });
});

test("tint props", () => {
  expect(getAstStyle(defaultTheme, getAst("tint-white"))).toMatchObject({
    tintColor: defaultTheme.colors.white,
  });
  expect(getAstStyle(defaultTheme, getAst("tint-transparent"))).toMatchObject({
    tintColor: defaultTheme.colors.transparent,
  });
  expect(getAstStyle(defaultTheme, getAst("tint-blue-200"))).toMatchObject({
    tintColor: defaultTheme.colors.blue[200],
  });
});

test("overlay props", () => {
  expect(getAstStyle(defaultTheme, getAst("overlay-white"))).toMatchObject({
    overlayColor: defaultTheme.colors.white,
  });
  expect(
    getAstStyle(defaultTheme, getAst("overlay-transparent"))
  ).toMatchObject({
    overlayColor: defaultTheme.colors.transparent,
  });
  expect(getAstStyle(defaultTheme, getAst("overlay-blue-200"))).toMatchObject({
    overlayColor: defaultTheme.colors.blue[200],
  });
});
