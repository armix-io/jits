# image

???
XXX backfaceVisibility ? backface-{value:visible|hidden}

re backgroundColor bg-{color}

re borderBottomLeftRadius rounded-{target}-{value}
re borderBottomRightRadius rounded-{target}-{value}

re borderColor border-{color}

re borderRadius rounded-{value}

re borderTopLeftRadius rounded-{target}-{value}
re borderTopRightRadius rounded-{target}-{value}

re borderWidth border-{value}

re opacity opacity-{value}

re overflow overflow-{value:visible|hidden}

??? (Android)
re overlayColor ? overlay-{color}

???
XXX resizeMode ? resize-{value:cover|contain|stretch|repeat|center}

re tintColor tint-{color}

# layout

re alignContent content-{value}
re alignItems items-{value}
re alignSelf self-{value}

re aspectRatio aspect-{value}

re borderBottomWidth border-{target}-{value}
re borderEndWidth border-{target}-{value}
re borderLeftWidth border-{target}-{value}
re borderRightWidth border-{target}-{value}
re borderStartWidth border-{target}-{value}
re borderTopWidth border-{target}-{value}
re borderWidth border-{target}-{value}

re bottom

re direction ltr|rtl

re display flex|hidden

re end

re flex flex-{value:(number)|auto|initial|none}
re flexBasis flex-{op:basis}-{value?}
re flexDirection flex-{op:row|col}-{value:?reverse}
re flexGrow flex-{op:grow}-{value?}
re flexShrink flex-{op:shrink}-{value?}
re flexWrap flex-{op:wrap|nowrap}-{value:?reverse}

re height h-{value}

re justifyContent justify-{value:start|end|center|between|around|evenly}

re left

re margin m
re marginBottom mb
re marginEnd me
re marginHorizontal mx
re marginLeft ml
re marginRight mr
re marginStart ms
re marginTop mt
re marginVertical my

???
XXX maxHeight
XXX maxWidth

???
XXX minHeight
XXX minWidth

re overflow overflow-{value:visible|hidden|scroll}

re padding p
re paddingBottom pb
re paddingEnd pe
re paddingHorizontal px
re paddingLeft pl
re paddingRight pr
re paddingStart ps
re paddingTop pt
re paddingVertical py

re position absolute|relative

re right

re start

re top

re width w-{value}

re zIndex z-{value}

# shadow

re shadowColor shadow-{value:sm|md|lg|xl|2xl|none}?
re shadowOffset ...
re shadowOpacity ...
re shadowRadius ...

# text

re color text-{color}

(iOS)
re fontFamily font-{value:sans|serif|mono}
re fontSize text-{value:xs|sm|base|lg|xl|2xl|...}
re fontStyle italic|non-italic
re fontWeight font-{thin|extralight|light|normal|bold|...}

??? (Android)
includeFontPaddingAndroid

???
array of enum('small-caps', 'oldstyle-nums', 'lining-nums', 'tabular-nums', 'proportional-nums')
fontVariant

re letterSpacing tracking-{value:tighter|tight|normal|wide|wider|widest}
re lineHeight leading-{value:3|4|5|6...10|none|tight|snug|normal}

re textAlign text-{value:left|center|right|justify}

??? (Android)
re textAlignVertical text-{value:top|bottom|middle|auto}

??? (iOS)
re textDecorationColor ? underline-{color}

-- WILL REQUIRE MERGER (if both underline|linethrough given)
re textDecorationLine underline|line-through|no-underline

(iOS)
re textDecorationStyle underline-{value:solid|double|dotted|dashed}?

???
XXX textShadowColor
???
XXX textShadowOffset
???
XXX textShadowRadius

re textTransform uppercase|lowercase|capitalize|normal-case

re writingDirection text-{value:ltr|rtl}

# view

???
XXX backfaceVisibility

re backgroundColor bg-{color}

re borderBottomColor border-{target}-{color}

re borderBottomEndRadius rounded-{target}-{value}
re borderBottomLeftRadius rounded-{target}-{value}
re borderBottomRightRadius rounded-{target}-{value}
re borderBottomStartRadius rounded-{target}-{value}

re borderBottomWidth border-{target}-{value}

re borderColor border-{target}-{color}

-- WILL REQUIRE MERGER
???

XXX border{Target}Opacity

re borderEndColor border-{target}-{color}
re borderLeftColor border-{target}-{color}
re borderLeftWidth border-{target}-{value}
re borderRadius rounded-{target}-{value}
re borderRightColor border-{target}-{color}
re borderRightWidth border-{target}-{value}
re borderStartColor border-{target}-{color}
re borderStyle border-{value:styles...}
re borderTopColor border-{target}-{color}

re borderTopEndRadius rounded-{target}-{value}
re borderTopLeftRadius rounded-{target}-{value}
re borderTopRightRadius rounded-{target}-{value}
re borderTopStartRadius rounded-{target}-{value}

re borderTopWidth border-{target}-{value}
re borderWidth border-{target}-{value}

??? (Android)
XXX elevation ? shadow-{value}

re opacity opacity-{value}
