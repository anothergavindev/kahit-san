export const WHEEL_SIZE = 200;
export const WHEEL_CENTER = WHEEL_SIZE / 2;
export const WHEEL_RADIUS = 96;

const SLICE_COLORS = ["#E2A08A", "#B3CDB5", "#E9CB6B", "#C0B6E1", "#A9C7E3"];
const MAX_LABEL_LENGTH = 14;

// Angles are in degrees, 0 at the top, increasing clockwise.
function pointOnCircle(angle: number, radius: number) {
  const radians = (angle * Math.PI) / 180;
  return {
    x: WHEEL_CENTER + radius * Math.sin(radians),
    y: WHEEL_CENTER - radius * Math.cos(radians),
  };
}

export function getSlicePath(index: number, count: number) {
  const sliceAngle = 360 / count;
  const start = pointOnCircle(index * sliceAngle, WHEEL_RADIUS);
  const end = pointOnCircle((index + 1) * sliceAngle, WHEEL_RADIUS);
  const largeArc = sliceAngle > 180 ? 1 : 0;

  return `M ${WHEEL_CENTER} ${WHEEL_CENTER} L ${start.x} ${start.y} A ${WHEEL_RADIUS} ${WHEEL_RADIUS} 0 ${largeArc} 1 ${end.x} ${end.y} Z`;
}

export function getLabelPosition(index: number, count: number) {
  const middleAngle = (index + 0.5) * (360 / count);
  const { x, y } = pointOnCircle(middleAngle, WHEEL_RADIUS * 0.62);
  // Text runs along the radius; flip it on the left half so it is never upside down.
  const rotation = middleAngle > 180 ? middleAngle + 90 : middleAngle - 90;

  return { x, y, rotation };
}

export function getSliceColor(index: number, count: number) {
  const isLast = index === count - 1;
  // Avoid the last slice matching the first slice it touches.
  if (count > 1 && isLast && index % SLICE_COLORS.length === 0) {
    return SLICE_COLORS[1];
  }
  return SLICE_COLORS[index % SLICE_COLORS.length];
}

export function getLabelFontSize(count: number) {
  if (count > 16) return 6;
  if (count > 8) return 7.5;
  return 9;
}

export function truncateLabel(label: string) {
  return label.length > MAX_LABEL_LENGTH
    ? `${label.slice(0, MAX_LABEL_LENGTH - 1)}…`
    : label;
}
