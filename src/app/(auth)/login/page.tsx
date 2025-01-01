"use client";
import FormLogin from "./components/FormLogin";
import "../../globals.css";

export default function LoginPage() {
  return (
    <>
      <div className="login-page min-h-screen flex flex-col items-center justify-center ">
        <div className="w-full md:w-1/2 xl:w-1/3 px-10">
          <FormLogin />
        </div>
      </div>
    </>
  );
}
