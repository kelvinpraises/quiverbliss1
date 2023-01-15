import React from "react";
import styled from "styled-components";

import { kRadiusS } from "@data/borderRadius";

export const Button = ({
  children,
  onClick,
  disabled,
  warn,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  warn?: boolean;
}) => {
  return (
    <SButton warn={warn!} disabled={disabled} onClick={onClick}>
      {children}
    </SButton>
  );
};

const SButton = styled.button<{ warn: boolean }>`
  all: unset;
  cursor: pointer;
  display: grid;
  place-items: center;
  border-radius: ${kRadiusS};
  color: ${({ theme }) => theme.text2};
  height: 2rem;
  background-color: ${({ warn, theme }) => (warn ? theme.warn : theme.accent1)};
  font-weight: 600;
  font-family: "inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 20px;
  font-size: 0.9rem;
  text-align: center;
  transition: all 200ms ease;
  padding: 10px 22px;
  user-select: none;

  &:hover {
    background-color: ${({ warn, theme }) => (warn ? theme.warn : theme.accent2)};
  }

  &:active {
    background-color: ${({ warn, theme }) => (warn ? theme.warn : theme.accent3)};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.accent3};
    opacity: 0.7;
    cursor: default;
  }
`;
