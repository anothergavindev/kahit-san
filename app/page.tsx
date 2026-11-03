"use client";

import Nav from "@/components/ui/Nav/Nav";
import HeaderText from "@/components/ui/HeaderText/HeaderText";
import MealPicker from "@/features/meal-picker/components/MealPicker";
import { Typography } from "antd";
import Image from "next/image";

export default function Home() {
  const { Text } = Typography;

  return (
    <>
      <Nav />
      <div className="flex flex-1 flex-col bg-[#f8f6f1] p-6 pt-0 font-sans">
        <HeaderText
          header="What are we eating today?"
          subHeader="Let the wheel decide."
        />
        <MealPicker showSpinButton={false} />

        <Text className="flex items-center justify-center gap-2 pt-4 font-inter text-xs text-[#82766E]">
          <Image src="/icons/sparkles.svg" alt="" width={16} height={16} />
          Less debating. More eating.
        </Text>
      </div>
    </>
  );
}
