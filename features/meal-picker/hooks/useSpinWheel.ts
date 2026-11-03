import { useRef, useState } from "react";

const FULL_TURNS = 5; // This is the number of full turns the wheel will make before stopping.

export function useSpinWheel(options: string[]) {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const pendingWinner = useRef<string | null>(null);

  const canSpin = options.length >= 2 && !isSpinning;

  function spin() {
    if (!canSpin) return;

    const count = options.length;
    const sliceAngle = 360 / count;
    const winnerIndex = Math.floor(Math.random() * count);
    // Land somewhere inside the slice, not always dead center.
    const offset = (Math.random() - 0.5) * sliceAngle * 0.6;
    const target =
      (((360 - (winnerIndex + 0.5) * sliceAngle + offset) % 360) + 360) % 360;

    pendingWinner.current = options[winnerIndex];
    setSelected(null);
    setIsSpinning(true);
    setRotation(
      (current) =>
        current + FULL_TURNS * 360 + ((target - (current % 360) + 360) % 360),
    );
  }

  function handleSpinEnd() {
    if (pendingWinner.current === null) return;
    setSelected(pendingWinner.current);
    pendingWinner.current = null;
    setIsSpinning(false);
  }

  function clearSelected() {
    setSelected(null);
  }

  return {
    rotation,
    isSpinning,
    selected,
    canSpin,
    spin,
    handleSpinEnd,
    clearSelected,
  };
}
