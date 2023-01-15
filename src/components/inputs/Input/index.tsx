import React, { ChangeEvent } from "react";
import { hexToRgba } from "../../../utils";
import { color, backgroundColor } from "../../../styles/color";
import { spacerSizeEm, borderRadius } from "../../../styles/layout";
import { fontSize } from "../../../styles/typography";
import styled from "styled-components";

// TODO: rename to be specific to Email
type InputProps = {
  inputType?: "text" | "email" | "password";
  onChange(event: ChangeEvent<HTMLInputElement>): void;
  placeholder?: string;
};

const InputStyled = styled.input`
  width: 100%;
  box-sizing: border-box;
  font-size: ${fontSize.body};
  border-radius: ${borderRadius};
  border: solid 2px ${color.gray55};
  background-color: ${hexToRgba(backgroundColor.white, 10)};
  padding: ${spacerSizeEm.xs} ${spacerSizeEm.md};
  &::placeholder {
    color: ${hexToRgba(color.white, 80)};
  }
`;

const Input = ({ inputType = "text", onChange, placeholder }: InputProps) => {
  return (
    <InputStyled type={inputType} onChange={onChange} placeholder={placeholder} />
  );
};

export default Input;
