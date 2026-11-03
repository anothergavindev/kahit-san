import {
  WHEEL_CENTER,
  WHEEL_RADIUS,
  WHEEL_SIZE,
  getLabelFontSize,
  getLabelPosition,
  getSliceColor,
  getSlicePath,
  truncateLabel,
} from "./wheelGeometry";

interface WheelProps {
  options: string[];
  rotation: number;
  onSpinEnd: () => void;
}

function Wheel({ options, rotation, onSpinEnd }: WheelProps) {
  const count = options.length;
  const fontSize = getLabelFontSize(count);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[320px]">
      <div className="absolute -top-1 left-1/2 z-10 h-0 w-0 -translate-x-1/2 border-x-14 border-t-24 border-x-transparent border-t-[#2f2622]" />

      <div
        className="h-full w-full rounded-full bg-white shadow-lg transition-transform duration-4000 ease-[cubic-bezier(0.17,0.67,0.12,0.99)]"
        style={{ transform: `rotate(${rotation}deg)` }}
        onTransitionEnd={onSpinEnd}
      >
        <svg
          viewBox={`0 0 ${WHEEL_SIZE} ${WHEEL_SIZE}`}
          className="h-full w-full"
        >
          {count === 0 ? (
            <circle
              cx={WHEEL_CENTER}
              cy={WHEEL_CENTER}
              r={WHEEL_RADIUS}
              fill="#E5E1D8"
            />
          ) : null}

          {count === 1 ? (
            <circle
              cx={WHEEL_CENTER}
              cy={WHEEL_CENTER}
              r={WHEEL_RADIUS}
              fill={getSliceColor(0, 1)}
            />
          ) : null}

          {count > 1
            ? options.map((option, index) => (
                <path
                  key={option}
                  d={getSlicePath(index, count)}
                  fill={getSliceColor(index, count)}
                />
              ))
            : null}

          {options.map((option, index) => {
            const {
              x,
              y,
              rotation: labelRotation,
            } = count === 1
              ? {
                  x: WHEEL_CENTER,
                  y: WHEEL_CENTER - WHEEL_RADIUS * 0.55,
                  rotation: 0,
                }
              : getLabelPosition(index, count);

            return (
              <text
                key={option}
                x={x}
                y={y}
                transform={`rotate(${labelRotation} ${x} ${y})`}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={fontSize}
                fontWeight={700}
                fill="#2f2622"
              >
                <title>{option}</title>
                {truncateLabel(option)}
              </text>
            );
          })}

          <circle cx={WHEEL_CENTER} cy={WHEEL_CENTER} r={18} fill="white" />
        </svg>
      </div>
    </div>
  );
}

export default Wheel;
