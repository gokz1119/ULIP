import React from "react";
import ButtonPrimary from "../atoms/ButtonPrimary";
import ButtonSecondary from "../atoms/ButtonSecondary";


export default function Landing() {
  return (
    <>
      <div className="bg-landing bg-cover w-screen" style={{ height: "800px" }}>
        <h1 className="pt-48 ml-10 text-4xl text-start tracking-wide leading-10 md:ml-20 md:text-6xl text-white">
          <span className="text-orange-primary">U</span>nified{" "}
          <span className="text-orange-primary">L</span>ogistics
          <br></br>
          <span className="text-orange-primary">I</span>nterface{" "}
          <span className="text-orange-primary">P</span>latform
        </h1>
        <h2 className="mt-4 text-xl text-start ml-10 md:ml-20 md:text-3xl text-orange-primary italic">
          Goods. Faster
        </h2>
        <div className="float-left mt-6 ml-10 hidden md:block md:ml-20">
          <ButtonPrimary text="Log In" size="xl" />
        </div>
        <div className="float-left mt-6 ml-4 hidden md:block">
          <ButtonSecondary text="Sign Up" size="xl" />
        </div>
        <div className="float-left mt-6 ml-10 md:ml-20 md:hidden">
          <ButtonPrimary text="Log In" size="base" />
        </div>
        <div className="float-left mt-6 ml-4 md:hidden">
          <ButtonSecondary text="Sign Up" size="base" />
        </div>
      </div>
    </>
  );
}
