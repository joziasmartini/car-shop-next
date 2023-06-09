"use client";

import React, { MouseEventHandler } from "react";

interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function CustomButton({
  title,
  containerStyles,
  handleClick,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
}
