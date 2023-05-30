import * as React from "react";
import { RouteValidation } from "./routes/RouteValidation";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div>
      <RouteValidation />
    </div>
  );
}
