import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInSide from "../pages/SignInSide";
import StudentRegistration from "../pages/StudentRegistration";
import SignUp from "../pages/SignUp";
export interface IRoutesProps {}

export function RouteValidation(props: IRoutesProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInSide />} />
        <Route path="/registration" element={<StudentRegistration />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
