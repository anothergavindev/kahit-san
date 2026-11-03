"use client";

import { useState } from "react";
import { Button, Typography } from "antd";
import Wheel from "../Wheel";
import { useSpinWheel } from "../../hooks/useSpinWheel";

const DEFAULT_OPTIONS = ["Sushi", "Pizza", "Tacos", "Brunch"];

interface MealPickerProps {
  showSpinButton?: boolean;
}

function MealPicker({ showSpinButton = true }: MealPickerProps) {
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const {
    rotation,
    isSpinning,
    canSpin,
    spin,
    handleSpinEnd,
    // clearSelected,
  } = useSpinWheel(options);

  //NOTE: Commenting this for now until we have a way to add options.

  // function handleAdd(option: string) {
  //   const isDuplicate = options.some(
  //     (existing) => existing.toLowerCase() === option.toLowerCase(),
  //   );
  //   if (isDuplicate) return;
  //   setOptions((current) => [...current, option]);
  //   clearSelected();
  // }

  //NOTE: Commenting this for now until we have a way to remove options.

  // function handleRemove(option: string) {
  //   setOptions((current) => current.filter((existing) => existing !== option));
  //   clearSelected();
  // }

  return (
    <div className="mt-6 flex flex-col gap-6">
      <Wheel options={options} rotation={rotation} onSpinEnd={handleSpinEnd} />

      {showSpinButton ? (
        <Button
          type="primary"
          size="large"
          disabled={!canSpin}
          loading={isSpinning}
          onClick={spin}
        >
          {isSpinning ? "Spinning..." : "Spin"}
        </Button>
      ) : null}

      {options.length < 2 ? (
        <Typography.Text type="secondary" className="text-center">
          Add at least 2 options to spin.
        </Typography.Text>
      ) : null}
    </div>
  );
}

export default MealPicker;
