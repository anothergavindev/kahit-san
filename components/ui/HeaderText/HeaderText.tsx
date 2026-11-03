"use client";

import { Typography } from "antd";

interface HeaderTextProps {
  header: string;
  subHeader: string;
}
function HeaderText({ header, subHeader }: HeaderTextProps) {
  const { Title, Text } = Typography;
  return (
    <div className="flex flex-col">
      <Title level={1} className="text-[37px] font-bold">
        {header}
      </Title>
      <Text className="text-lg text-[#82766E]">{subHeader}</Text>
    </div>
  );
}

export default HeaderText;
