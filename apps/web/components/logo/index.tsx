import React from "react";
import SVGLogo from "@/public/assets/logo.svg";
import { fontBase } from "@/lib/font-loader";
import { cn } from "@workspace/ui/lib/utils";

export type LogoCompanyProps = {
  withCompany?: boolean;
  companyClassNames?: React.ComponentProps<"div">["className"];
};
export type LogoProps = {
  size?: number;
  logoClassName?: React.ComponentProps<"div">["className"];
  companyProps?: LogoCompanyProps;
};

const baseCompanyClassName =
  "text-sm ml-0.5 mt-0.5 font-bold flex flex-col justify-start items-start !leading-none";

const Company = ({
  withCompany = true,
  companyClassNames,
}: LogoCompanyProps) => {
  if (!withCompany) return null;

  return (
    <div
      className={cn(fontBase.variable, baseCompanyClassName, companyClassNames)}
    >
      <span className={"text-primary"}>MAGIC</span>
      <div>
        <span>&</span>
        <span className={"ml-0.5"}>MORE</span>
      </div>
    </div>
  );
};

const baseLogoClassName = "flex flex-row justify-center items-center";

export const Logo = ({ companyProps, logoClassName, size = 48 }: LogoProps) => {
  return (
    <div className={cn(baseLogoClassName, logoClassName)}>
      <SVGLogo
        className={`h-[var(--size)]`}
        style={{
          "--size": `${size}px`,
        }}
      />
      <Company {...companyProps} />
    </div>
  );
};
