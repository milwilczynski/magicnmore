import React from "react";
import SVGLogo from "@/public/assets/logo.svg";
import { fontBase } from "@/lib/font-loader";

export type LogoProps = {
  withCompany?: boolean;
};
export const Logo = ({ withCompany }: LogoProps = { withCompany: false }) => {
  return (
    <div className={"flex flex-row justify-center items-center"}>
      <SVGLogo
        style={{
          height: "48px",
        }}
      />
      {withCompany && (
        <span
          className={`text-sm ml-0.5 mt-0.5 font-bold ${fontBase.variable}`}
        >
          <span className={"text-primary"}>MAGIC </span>
          <br />
          <span>&</span>
          <span className={"ml-0.5"}>MORE</span>
        </span>
      )}
    </div>
  );
};
