"use client";

import React, { MouseEventHandler } from "react";

interface CustomButtonProps {
  title: string;
  type?: "button" | "submit";
  styles?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function CustomButton({
  title,
  type,
  styles,
  onClick,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={type || "button"}
      className={`custom-btn ${styles}`}
      onClick={onClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
}
