export type TrackingMap = Record<
  "tighter" | "tight" | "normal" | "wide" | "wider" | "widest",
  number
>;

// rem()
export const defaultTrackingMap: TrackingMap = {
  tighter: -0.05,
  tight: -0.025,
  normal: 0,
  wide: 0.025,
  wider: 0.05,
  widest: 0.1,
};
