import React, { ReactNode } from "react";

interface Props {
  children: ReactNode
  singleMode?: boolean
  id?: string
  width?: number
  height?: number
  center?: boolean
}

const Page: React.FC<Props> = ({ children, singleMode, id, width, height }) => {
  const w = width || 2100
  const h = height || 2970

  return (
    <div
      id={id}
      className="bg-white shadow-1 center p-8"
      style={{ width: `${w}px`, height: singleMode ? `${h}px` : "" }}
    >
      {children}
    </div>
  );
};

export default Page;
