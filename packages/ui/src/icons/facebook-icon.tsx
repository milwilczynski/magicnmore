import React from "react";
import { cn } from "@workspace/ui/lib/utils";

interface FacebookIconProps {
  className?: string;
  size?: number;
}

export const FacebookIcon: React.FC<FacebookIconProps> = ({
  className,
  size = 24,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={cn("inline-block", className)}
    >
      <path
        fill="#1877F2"
        d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24"
      />
      <path
        fill="#FFFFFF"
        d="M33.342 30.938L34.406 24H27.75v-4.5c0-1.9.93-3.75 3.911-3.75h3.026V9.844s-2.747-.469-5.372-.469c-5.482 0-9.065 3.323-9.065 9.337V24h-6.094v6.938h6.094v16.77c1.225.181 2.479.292 3.75.292s2.525-.111 3.75-.292v-16.77h5.592z"
      />
    </svg>
  );
};
