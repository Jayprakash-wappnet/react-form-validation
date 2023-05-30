import * as React from "react";
import SignUp from "./components/SignUp";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div>
      <SignUp />
    </div>
  );
}
