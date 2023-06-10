"use client";
import { ComponentPropsWithRef, useState } from "react";

type Props = ComponentPropsWithRef<"input">;
const PasswordInput = (props: Props) => {
  // create a boolean state `shown` using useState hook
  const [shown, setShown] = useState(false);
  // create a derived state for the input type
  const type = shown ? "text" : "password";
  // create a derived/computed state for the button text
  const buttonText = shown ? "Hide password" : "Show Password";
  return (
    <div>
      <input {...props} type={type} className="" />
      {/* toggle the state on click */}
      <button onClick={() => setShown(!shown)}>{buttonText}</button>
    </div>
  );
};
export default PasswordInput;
