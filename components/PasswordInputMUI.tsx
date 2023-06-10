"use client";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { TextField, TextFieldProps } from "@mui/material";
import { useState } from "react";

type Props = {} & TextFieldProps;
const PasswordInputMUI = (props: Props) => {
  const [shown, setShown] = useState(false);
  const type = shown ? "text" : "password";
  const Icon = shown ? Visibility : VisibilityOff;
  return (
    <TextField
      {...props}
      type={type}
      InputProps={{ endAdornment: <Icon onClick={() => setShown(!shown)} /> }}
    />
  );
};
export default PasswordInputMUI;
